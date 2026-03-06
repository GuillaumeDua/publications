function getSnippet(content, query, snippetLength = 100) {
  const lower = content.toLowerCase();
  const index = lower.indexOf(query.toLowerCase());
  if (index === -1) return content.slice(0, snippetLength) + '...';
  const start = Math.max(0, index - 40);
  const end = Math.min(content.length, index + query.length + 60);
  const snippet = content.slice(start, end);
  const highlighted = snippet.replace(
    new RegExp(query, 'gi'),
    match => `<mark>${match}</mark>`
  );
  return (start > 0 ? '...' : '') + highlighted + (end < content.length ? '...' : '');
}

// Event delegation — works across push-state navigation
document.addEventListener('input', function(e) {
  if (e.target.id !== 'search-input' && e.target.id !== 'sidebar-search-input') return;
  if (!window._searchIdx) return;

  const query = e.target.value.trim();
  const resultsId = e.target.id === 'search-input' ? 'search-results' : 'sidebar-search-results';
  const resultsEl = document.getElementById(resultsId);
  if (!resultsEl) return;

  const results = query.length > 2 ? window._searchIdx.search(query) : [];
  resultsEl.innerHTML = results.slice(0, 5).map(r => {
    const doc = window._searchDocs[r.ref];
    const snippet = getSnippet(doc.content, query);
    return `
      <li>
        <a href="${r.ref}">${doc.title}</a>
        <p class="search-snippet">${snippet}</p>
      </li>
    `;
  }).join('');
});

document.addEventListener('DOMContentLoaded', function() {
  // Inject sidebar search bar
  const nav = document.querySelector('.sidebar-nav');
  if (nav && !document.getElementById('sidebar-search')) {
    const div = document.createElement('div');
    div.className = 'sidebar-search';
    div.innerHTML = `
      <input type="text" id="sidebar-search-input" placeholder="Search...">
      <ul id="sidebar-search-results"></ul>
    `;
    nav.parentNode.insertBefore(div, nav);
  }

  // Only fetch once
  if (window._searchIdx) return;

  fetch('/publications/search.json')
    .then(r => r.json())
    .then(data => {
      window._searchIdx = lunr(function() {
        this.field('title', { boost: 10 });
        this.field('content');
        this.field('tags', { boost: 5 });
        this.ref('url');
        data.forEach(doc => this.add(doc));
      });

      window._searchDocs = {};
      data.forEach(doc => window._searchDocs[doc.url] = doc);
    });
});
