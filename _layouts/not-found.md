---
layout: base
---

<div class="page">
  <h1 class="page-title">{{ page.title | default: "404: Page Not Found" }}</h1>
  <p class="lead">
    🤕 Looks like there's nothing there !
    Please <a href="https://github.com/GuillaumeDua/publications/issues">open an issue</a> to report this bug !

    That URL was misplaced, or it's pointing to something that does not exist anymore. 
    <a href="{{ '/' | relative_url }}">Head back home</a> to try finding it again.
  </p>
</div>
