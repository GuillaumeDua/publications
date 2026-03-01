# Notes about building this blog

## Overall

- Don't forget to `ctrl + shift + r` (twice!) to reset your browser cache

## HydeJack

### Adding images to a blog post

All the 5 options here works:

```md
---
layout: post
title: "Some title"
image: /assets/img/some/directory/top_level_image.jpg
image_path: /assets/img/some/directory
---

DEBUGGING images pathes:

{% assign img = "/assets/img/some/directory" %}

![Swiss Cheese model]({{ img | append: "/pic.jpg" | relative_url }})

![My image]({{ "/assets/img/some/directory/pic.jpg" | relative_url }})

![My image](/publications/assets/img/some/directory/pic.jpg)

![My image]({{ page.image_path | relative_url }}/pic.jpg)

![My image](
  {{ "/assets/img/some/directory/pic.jpg" | relative_url }}
)
```
