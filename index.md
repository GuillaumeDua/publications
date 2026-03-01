---
layout: home
title: Home
---

# My publications

Welcome !

🚧 This blog is currently in construction, please be patient 😉.

## All posts

{% for post in site.posts %}
- [{{ post.title }}]({{ post.url | relative_url }})
{% endfor %}

## ⚖️ Licenses

- Textual content is licensed under [Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)](https://github.com/GuillaumeDua/publications/blob/main/LICENSE)
- ⚠️ Personal data, personal photographs, and any content depicting identifiable individuals are **NOT covered by this license**. See [PRIVACY.md](https://github.com/GuillaumeDua/publications/blob/main/PRIVACY.md) for details.
