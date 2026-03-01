# Notes about building this blog

## Overall

- Don't forget to `ctrl + shift + r` (twice!) to reset your browser cache

## Useful resources

- https://hydejack.com/docs/config/
- https://lazyren.github.io/devlog/

## HydeJack

### Adding a banner image to a blog post

```yaml
# ISSUE: this is cropped
image:
  path: /assets/img/meeting-cpp-2025/screenshots/meeting-cpp-2025-tshirt-logo.jpg
  srcset:
    1920w: /assets/img/meeting-cpp-2025/screenshots/meeting-cpp-2025-tshirt-logo.jpg
    960w:  /assets/img/meeting-cpp-2025/screenshots/meeting-cpp-2025-tshirt-logo.jpg@0,5x.jpg
    480w:  /assets/img/meeting-cpp-2025/screenshots/meeting-cpp-2025-tshirt-logo.jpg@0,25x.jpg
```

**Solution**: just add the image as any other

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

![My image]({{ img | append: "/pic.jpg" | relative_url }})

![My image]({{ "/assets/img/some/directory/pic.jpg" | relative_url }})

![My image](/publications/assets/img/some/directory/pic.jpg)

![My image]({{ page.image_path | relative_url }}/pic.jpg)

![My image](
  {{ "/assets/img/some/directory/pic.jpg" | relative_url }}
)
```
