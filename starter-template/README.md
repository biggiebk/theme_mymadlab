# MyMadLab Theme Starter Template

This directory contains a starter template for using the MyMadLab Jekyll theme with GitHub Pages.

## Quick Setup

1. **Copy these files to your repository:**
   - `_config.yml` - Main site configuration
   - `Gemfile` - Dependencies for local development
   - `index.md` - Sample homepage

2. **Customize `_config.yml`:**
   ```yaml
   title: Your Site Name
   author: Your Name
   github_username: yourusername
   repository: yourusername/your-repo
   ```

3. **Enable GitHub Pages:**
   - Go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: main

4. **Your site will be live at:**
   `https://yourusername.github.io/your-repo`

## Local Development

To run locally:

```bash
bundle install
bundle exec jekyll serve
```

Visit `http://localhost:4000` to preview your site.

## Adding Content

### Blog Posts
Create files in `_posts/` with format: `YYYY-MM-DD-title.md`

```markdown
---
layout: post
title: "My First Post"
date: 2025-01-01 12:00:00 -0000
categories: blog
tags: [jekyll, github-pages]
---

Your post content here...
```

### Pages
Create `.md` files in the root directory:

```markdown
---
layout: page
title: About
permalink: /about/
---

About page content...
```

## Theme Features

- Dark theme with optimized colors
- Syntax highlighting for 100+ languages
- Responsive design
- Table of contents generation
- Code copy functionality
- SEO optimization
- GitHub integration

## Support

- [Theme Documentation](https://github.com/biggiebk/theme_mymadlab)
- [GitHub Issues](https://github.com/biggiebk/theme_mymadlab/issues)
- [Jekyll Documentation](https://jekyllrb.com/docs/)