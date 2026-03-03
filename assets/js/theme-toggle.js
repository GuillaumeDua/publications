document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('theme-toggle');
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Apply saved preference, or fall back to OS preference
    const isDark = saved ? saved === 'dark' : prefersDark;
    document.body.classList.toggle('dark-mode', isDark);
    toggle.textContent = isDark ? '☀️' : '🌙';

    toggle.addEventListener('click', () => {
        const isDark = document.body.classList.toggle('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        toggle.textContent = isDark ? '☀️' : '🌙';
    });
});
