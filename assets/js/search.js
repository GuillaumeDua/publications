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
            const query = this.value.trim();
            const results = query.length > 2 ? idx.search(query) : [];
            const list = document.getElementById('sidebar-search-results');
            list.innerHTML = results.slice(0, 5).map(r => {
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
    });
