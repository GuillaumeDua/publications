---
layout: base
---

<div class="page">
  <h1 class="page-title">{{ page.title | default: "404: Page Not Found" }}</h1>
  <p class="lead">
    🤕 Looks like there's nothing there!
    Please <a href="https://github.com/GuillaumeDua/publications/issues">open an issue</a> to report this bug!
  </p>
  <p>
    That URL was misplaced, or it's pointing to something that does not exist anymore.
  </p>
  <p>
    <a href="{{ '/' | relative_url }}">Head back home</a> to try finding it again.
  </p>
</div>
