function getSnippets({ content, query, maxSnippets = 3, snippetLength = 100 }) {
    const lower = content.toLowerCase();
    const index = lower.indexOf(query.toLowerCase());

    const snippets = [];
    let searchFrom = 0;

    while (snippets.length < maxSnippets) {
        const index = lower.indexOf(queryLower, searchFrom);
        if (index === -1) break;

        const start = Math.max(0, index - 40);
        const end = Math.min(content.length, index + query.length + 60);
        const snippet = content.slice(start, end);

        const highlighted = snippet.replace(
            new RegExp(query, "gi"),
            (match) => `<mark>${match}</mark>`
        );
        snippets.push(
            (start > 0 ? "..." : "") +
                highlighted +
                (end < content.length ? "..." : "")
        );
        searchFrom = index + query.length;
    }

    return snippets.length > 0
        ? snippets.join("<br>")
        : content.slice(0, snippetLength) + "...";
}

// Event delegation
document.addEventListener("input", function (e) {
    if (e.target.id !== "nav-search-input") return;
    if (!window._searchIdx) return;

    const query = e.target.value.trim();
    const resultsEl = document.getElementById("nav-search-results");

    if (!resultsEl) return;

    const results = query.length > 2 ? window._searchIdx.search(query) : [];
    resultsEl.innerHTML = results
        .slice(0, 5)
        .map((r) => {
            const doc = window._searchDocs[r.ref];
            const snippet = getSnippets({
                content: doc.content,
                query: query,
            });
            return `
      <li>
        <a href="${r.ref}">${doc.title}</a>
        <p class="search-snippet">${snippet}</p>
      </li>
    `;
        })
        .join("");
});

document.addEventListener("DOMContentLoaded", function () {
    // Inject search button in nav bar
    const navSpan = document.querySelector(".nav-span");
    if (navSpan && !document.getElementById("nav-search-btn")) {
        navSpan.insertAdjacentHTML(
            "afterend",
            `
      <button id="nav-search-btn" class="nav-btn no-hover" aria-label="Search">
        <span class="icon-search"></span>
      </button>
      <div id="nav-search-box" style="display:none;">
        <input type="text" id="nav-search-input" placeholder="Search...">
        <ul id="nav-search-results"></ul>
      </div>
    `
        );

        document
            .getElementById("nav-search-btn")
            .addEventListener("click", function () {
                const box = document.getElementById("nav-search-box");
                const input = document.getElementById("nav-search-input");
                const isVisible = box.style.display !== "none";
                box.style.display = isVisible ? "none" : "block";
                if (!isVisible) input.focus();
            });

        document.addEventListener("click", function (e) {
            const box = document.getElementById("nav-search-box");
            const btn = document.getElementById("nav-search-btn");
            if (!box || !btn) return;
            if (!box.contains(e.target) && !btn.contains(e.target)) {
                box.style.display = "none";
            }
        });
    }

    // Only fetch once
    if (window._searchIdx) return;

    fetch("/publications/search.json")
        .then((r) => r.json())
        .then((data) => {
            window._searchIdx = lunr(function () {
                this.field("title", { boost: 10 });
                this.field("content");
                this.field("tags", { boost: 5 });
                this.ref("url");
                data.forEach((doc) => this.add(doc));
            });

            window._searchDocs = {};
            data.forEach((doc) => (window._searchDocs[doc.url] = doc));
        });
});
