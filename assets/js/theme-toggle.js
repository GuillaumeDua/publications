// Toggle dark/bright theme in menu panel (sidebar is in _includes/my-body.html)
document.addEventListener("DOMContentLoaded", function () {
    // Inject once and only once the sidebar button (only if not already present)
    if (!document.getElementById("theme-toggle-sidebar")) {
        const sticky = document.querySelector(".sidebar-sticky");
        if (sticky) {
            const div = document.createElement("div");
            div.className = "sidebar-toggle-btn";
            div.innerHTML =
                '<button class="theme-toggle" id="theme-toggle-sidebar" aria-label="Toggle dark/light mode">🌙</button>';
            sticky.appendChild(div);
        }
    }

    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
    ).matches;
    const isDark = saved ? saved === "dark" : prefersDark;

    function updateToggles(isDark) {
        const emoji = isDark ? "☀️" : "🌙";
        document
            .querySelectorAll(".theme-toggle")
            .forEach((t) => (t.textContent = emoji));
    }
    function updateGiscus(isDark) {
        const iframe = document.querySelector("iframe.giscus-frame");
        if (iframe) {
            iframe.contentWindow.postMessage(
                { giscus: { setConfig: { theme: isDark ? "dark" : "light" } } },
                "https://giscus.app"
            );
        }
    }

    document.body.classList.toggle("dark-mode", isDark);
    updateToggles(isDark);
    updateGiscus(isDark);

    document.addEventListener("click", function (e) {
        if (e.target.classList.contains("theme-toggle")) {
            const isDark = document.body.classList.toggle("dark-mode");
            localStorage.setItem("theme", isDark ? "dark" : "light");
            updateToggles(isDark);
        }
    });
});
