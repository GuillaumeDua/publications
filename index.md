---
layout: home
title: Home
---

Welcome ! 👋 This blog just launched 🚀 (Mars 13 2026), and is still under construction 🚧. Expect more content soon.

## Recent posts

{% for post in site.posts limit:5 %}
{% if post.hidden != true %}
### [{{ post.title }}]({{ post.url | relative_url }})

{:.post-date}
{{ post.date | date: "%B %d, %Y" }}

<!-- custom {{ post.excerpt }} equivalent, but skip blog-post header -->
{% assign _parts = post.content | split: '</h2>' %}
{% if _parts.size > 1 %}{{ _parts[1] | strip_html | truncatewords: 60 }}{% else %}{{ post.excerpt | strip_html }}{% endif %}

[Continue reading →]({{ post.url | relative_url }})

---
{% endif %}
{% endfor %}

## Old blog

- 📫 [older publications](https://gist.github.com/GuillaumeDua). Expect most papers to be transfered to this blog soon.
