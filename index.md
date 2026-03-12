---
layout: home
title: Home
---

## My publications

Welcome !

This blog just launched 🚀 (Mars 13 2026), and is still under construction 🚧.

## Recent posts

{% for post in site.posts %}
- [{{ post.title }}]({{ post.url | relative_url }}) — {{ post.date | date: "%B %d, %Y" }}
{% endfor %}

## Old blog

- 📫 [older publications](https://gist.github.com/GuillaumeDua). Expect most papers to be transfered to this blog soon.

## ⚖️ Licenses

- Textual content is licensed under [Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)](https://github.com/GuillaumeDua/publications/blob/main/LICENSE)
- ⚠️ Personal data, personal photographs, and any content depicting identifiable individuals are **NOT covered by this license**. See [PRIVACY.md](https://github.com/GuillaumeDua/publications/blob/main/PRIVACY.md) for details.
