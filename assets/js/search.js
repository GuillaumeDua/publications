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

    document.getElementById('search-input').addEventListener('input', function() {
      const query = this.value;
      const results = query.length > 2 ? idx.search(query) : [];
      const list = document.getElementById('search-results');
      list.innerHTML = results.map(r => `
        <li><a href="${r.ref}">${docs[r.ref].title}</a></li>
      `).join('');
    });
  });
