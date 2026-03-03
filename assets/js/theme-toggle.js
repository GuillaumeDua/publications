document.addEventListener('DOMContentLoaded', function() {
  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDark = saved ? saved === 'dark' : prefersDark;

  function updateToggles(isDark) {
    const emoji = isDark ? '☀️' : '🌙';
    document.querySelectorAll('.theme-toggle').forEach(t => t.textContent = emoji);
  }

  document.body.classList.toggle('dark-mode', isDark);
  updateToggles(isDark);

  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('theme-toggle')) {
      const isDark = document.body.classList.toggle('dark-mode');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      updateToggles(isDark);
    }
  });
});
