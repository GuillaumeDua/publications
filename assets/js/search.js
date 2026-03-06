function getSnippet(content, query, snippetLength = 100) {
    const lower = content.toLowerCase();
    const index = lower.indexOf(query.toLowerCase());
    if (index === -1)
        return content.slice(0, snippetLength) + '...';
    const start = Math.max(0, index - 40);
    const end = Math.min(content.length, index + query.length + 60);
    const snippet = content.slice(start, end);
    const highlighted = snippet.replace(
        new RegExp(query, 'gi'),
        match => `<mark>${match}</mark>`
    );
    return (start > 0 ? '...' : '') + highlighted + (end < content.length ? '...' : '');
}

function wireSearch(input, resultsEl, docs, idx) {
    input.addEventListener('input', function() {
        const query = this.value.trim();
        const results = query.length > 2 ? idx.search(query) : [];
        resultsEl.innerHTML = results.slice(0, 5).map(r => {
            const doc = docs[r.ref];
            const snippet = getSnippet(doc.content, query);
            return `
              <li>
                <a href="${r.ref}">${doc.title}</a>
                <p class="search-snippet">${snippet}</p>
              </li>
            `;
        }).join('');
    });
}

// Load search index and wire up Lunr
document.addEventListener('DOMContentLoaded', function() {

    console.log('DOMContentLoaded fired');

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

          // Wire sidebar search
          const sidebarInput = document.getElementById('sidebar-search-input');
          const sidebarResults = document.getElementById('sidebar-search-results');
          console.log('sidebarInput:', sidebarInput);
          console.log('sidebarResults:', sidebarResults);
          if (sidebarInput && sidebarResults) {
              console.log('wiring search side-bar');
              wireSearch(sidebarInput, sidebarResults, docs, idx);
          }

          // Wire search page
          const pageInput = document.getElementById('search-input');
          const pageResults = document.getElementById('search-results');
          console.log('pageInput:', pageInput);
          console.log('pageResults:', pageResults);
          if (pageInput && pageResults) {
              console.log('wiring search page');
              wireSearch(pageInput, pageResults, docs, idx);
          }
      });
});
