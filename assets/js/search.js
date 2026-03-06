// Inject search bar into sidebar
(function() {
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
})();

// Load search index and wire up Lunr
// fetch('{{ "/search.json" | relative_url }}')
fetch('/publications/search.json')
  .then(r => r.json())
  .then(data => {
    const idx = lunr(function() {
      this.field('title', { boost: 10 });
      this.field('content');
      this.field('tags', { boost: 5 });
      this.ref('url');
      data.forEach(doc => this.add(doc));
    });

    const docs = {};
    data.forEach(doc => docs[doc.url] = doc);

    document.getElementById('sidebar-search-input').addEventListener('input', function() {
      const query = this.value;
      const results = query.length > 2 ? idx.search(query) : [];
      const list = document.getElementById('sidebar-search-results');
      list.innerHTML = results.map(r => `
        <li><a href="${r.ref}">${docs[r.ref].title}</a></li>
      `).join('');
    });
  });
