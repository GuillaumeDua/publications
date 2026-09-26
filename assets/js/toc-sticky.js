// Pins the table of contents while the article scrolls, and marks the entry whose
// section the reader is in. Hydejack's stylesheet carries the right-gutter rail and
// the `#markdown-toc.affix` rule, but its `pro/toc` module, which drives them, is
// not part of the free theme.

(function () {
    // Matches `#markdown-toc.affix { top: 1rem }`.
    const PIN_OFFSET = 1;
    // The rail is pinned only when this much article, in viewports, remains below
    // it: a shorter tail scrolls past before the entries leave the screen.
    const MIN_REMAINING = 1.5;
    // Viewport fraction at which a heading becomes the one being read.
    const READING_LINE = 0.3;

    const railWidth =
        getComputedStyle(document.documentElement)
            .getPropertyValue("--break-point-dynamic")
            .trim() || "104rem";
    // Narrower than that, the theme keeps the table of contents inline, where
    // pinning it would cover the text.
    const rail = window.matchMedia(`(min-width: ${railWidth})`);

    let release = null;

    function ancestorsOf(link, toc) {
        const chain = [];
        let node = link.parentElement;
        while (node && node !== toc) {
            const anchor = node.tagName === "LI" ? node.firstElementChild : null;
            if (anchor && anchor.tagName === "A" && anchor !== link) {
                chain.push(anchor);
            }
            node = node.parentElement;
        }
        return chain;
    }

    function drive(toc, article, entries) {
        let tocTop = 0;
        let oneRem = 0;
        let pinOffset = 0;
        let pinnable = false;
        let stale = true;
        let current = null;
        let frame = 0;

        // Unpins first: the rail is out of flow, so its resting offset is unreadable
        // while `affix` and the inline `top` are set. Its caller pins it back before
        // the browser paints.
        function measure() {
            toc.classList.remove("affix");
            toc.style.top = "";
            tocTop = toc.getBoundingClientRect().top + window.scrollY;

            oneRem = parseFloat(
                getComputedStyle(document.documentElement).fontSize
            );
            pinOffset = PIN_OFFSET * oneRem;

            const articleBottom =
                article.getBoundingClientRect().bottom + window.scrollY;
            pinnable =
                articleBottom - tocTop > window.innerHeight * MIN_REMAINING;

            entries.forEach((entry) => {
                // A heading inside a collapsed <details> has no box, so it cannot
                // be the one being read.
                entry.top = entry.heading.getClientRects().length
                    ? entry.heading.getBoundingClientRect().top + window.scrollY
                    : Infinity;
            });
        }

        function pin() {
            if (!pinnable || window.scrollY + pinOffset < tocTop) {
                toc.classList.remove("affix");
                toc.style.top = "";
                return;
            }
            toc.classList.add("affix");
            // Ride the end of the article out of view instead of hovering over
            // the comments that follow it.
            const room =
                article.getBoundingClientRect().bottom - toc.offsetHeight;
            toc.style.top = `${Math.min(pinOffset, room)}px`;
        }

        function reveal(link) {
            if (toc.scrollHeight <= toc.clientHeight) return;
            const top = link.offsetTop - oneRem;
            const bottom = link.offsetTop + link.offsetHeight + oneRem;
            if (top < toc.scrollTop) toc.scrollTop = top;
            else if (bottom > toc.scrollTop + toc.clientHeight) {
                toc.scrollTop = bottom - toc.clientHeight;
            }
        }

        function mark(entry) {
            if (entry === current) return;
            if (current) {
                current.link.classList.remove("toc-active");
                current.ancestors.forEach((link) =>
                    link.classList.remove("toc-active-branch")
                );
            }
            current = entry;
            if (!current) return;
            current.link.classList.add("toc-active");
            current.ancestors.forEach((link) =>
                link.classList.add("toc-active-branch")
            );
            reveal(current.link);
        }

        function spy() {
            const line = window.scrollY + window.innerHeight * READING_LINE;
            let reading = null;
            // No early exit: offsets are not monotonic, since a heading with no box
            // sits at Infinity.
            entries.forEach((entry) => {
                if (entry.top <= line) reading = entry;
            });
            mark(reading);
        }

        function update() {
            frame = 0;
            if (!rail.matches) {
                toc.classList.remove("affix");
                toc.style.top = "";
                mark(null);
                return;
            }
            if (stale) {
                stale = false;
                measure();
            }
            pin();
            spy();
        }

        function schedule() {
            if (!frame) frame = window.requestAnimationFrame(update);
        }

        function invalidate() {
            stale = true;
            schedule();
        }

        update();

        window.addEventListener("scroll", schedule, { passive: true });
        // Width changes cover the media query too: it can only flip through a resize.
        window.addEventListener("resize", invalidate);
        window.addEventListener("load", invalidate);

        // Images, embedded frames and web fonts settle after the first measurement.
        const watcher =
            "ResizeObserver" in window ? new ResizeObserver(invalidate) : null;
        if (watcher) watcher.observe(article);

        return () => {
            if (frame) window.cancelAnimationFrame(frame);
            window.removeEventListener("scroll", schedule);
            window.removeEventListener("resize", invalidate);
            window.removeEventListener("load", invalidate);
            if (watcher) watcher.disconnect();
        };
    }

    function start() {
        if (release) {
            release();
            release = null;
        }

        const main = document.getElementById("_main");
        const toc = main && main.querySelector("#markdown-toc");
        const article = toc && toc.closest("article");
        if (!article) return;

        const entries = [];
        toc.querySelectorAll("a[href^='#']").forEach((link) => {
            const heading = document.getElementById(
                link.getAttribute("href").slice(1)
            );
            if (heading) {
                entries.push({
                    link,
                    heading,
                    ancestors: ancestorsOf(link, toc),
                    top: 0,
                });
            }
        });
        if (!entries.length) return;

        release = drive(toc, article, entries);
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", start);
    } else start();

    // hy-push-state swaps `#_main` without reloading the page.
    const pushState = document.getElementById("_pushState");
    if (pushState) pushState.addEventListener("hy-push-state-load", start);
})();
