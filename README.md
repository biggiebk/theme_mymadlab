# MyMadLab Jekyll Theme

A sleek, dark Jekyll theme designed for developers and technical writers. Features a carefully crafted color palette with RGB(23,32,36) background and RGB(192,239,254) foreground, plus extensive syntax highlighting support.

![Theme Preview](https://via.placeholder.com/800x400/172024/c0efff?text=MyMadLab+Theme+Preview)

## ✨ Features

- 🌙 **Dark theme** optimized for long reading sessions
- 💻 **Syntax highlighting** for 100+ programming languages via Prism.js
- 📱 **Responsive design** that works on all devices  
- ⚡ **Fast loading** with minimal CSS/JS footprint
- 🔍 **SEO optimized** with Jekyll SEO tag integration
- 🎨 **Customizable** color scheme and layout options

## 🚀 Quick Start

### Method 1: GitHub Pages Remote Theme (Recommended)

This is the easiest way to use the theme with GitHub Pages:

1. **Create a new repository** or use an existing one
2. **Copy the starter template** from [`starter-template/`](starter-template/) directory
3. **Customize `_config.yml`** with your details:

```yaml
remote_theme: biggiebk/theme_mymadlab

title: Your Site Title
description: Your site description
author: Your Name
email: your-email@example.com
github_username: yourusername
repository: yourusername/your-repo-name

plugins:
  - jekyll-remote-theme
  - jekyll-feed
  - jekyll-sitemap
  - jekyll-seo-tag

show_posts: true
show_rss_subscribe: false
```

4. **Enable GitHub Pages:**
   - Go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main`

5. **Your site will be live at:** `https://yourusername.github.io/repository-name`

### Method 2: Fork This Repository

1. **Fork this repository**
2. **Rename it** to `yourusername.github.io` (for user site) or keep any name (for project site)
3. **Edit `_config.yml`** with your details
4. **Replace content** in `index.md` and add your posts
5. **Enable GitHub Pages** in repository settings

### Method 3: Use as Gem (Local Development)

For local development and custom hosting:

For local development and custom hosting:

**Add to your `Gemfile`:**
```ruby
source "https://rubygems.org"
gem "jekyll", "~> 4.3.0" 
gem "theme_mymadlab"
gem "jekyll-feed"
gem "jekyll-sitemap" 
gem "jekyll-seo-tag"
```

**Add to your `_config.yml`:**
```yaml
theme: theme_mymadlab
plugins:
  - jekyll-feed
  - jekyll-sitemap
  - jekyll-seo-tag
```

**Install and run:**
```bash
bundle install
bundle exec jekyll serve
```

## 🎯 GitHub Pages Setup Guide

### Option A: New Repository with Remote Theme

1. **Create new repository** on GitHub
2. **Clone locally:**
   ```bash
   git clone https://github.com/yourusername/your-repo.git
   cd your-repo
   ```

3. **Copy starter files** from this repo's [`starter-template/`](starter-template/) directory:
   - `_config.yml`
   - `Gemfile` (for local development)
   - `index.md`

4. **Customize and push:**
   ```bash
   # Edit _config.yml with your details
   git add .
   git commit -m "Initial setup with MyMadLab theme"
   git push origin main
   ```

5. **Enable GitHub Pages:**
   - Repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: main
   - Save

### Option B: Fork This Repository

1. **Fork** this repository on GitHub
2. **Rename** (optional): 
   - `yourusername.github.io` for user site
   - Any name for project site
3. **Edit content:**
   - Update `_config.yml`
   - Replace `index.md` content
   - Add posts to `_posts/`
4. **GitHub Pages automatically enabled**

## 📱 Local Development

To work on your site locally:

```bash
# Clone your repository
git clone https://github.com/yourusername/your-repo.git
cd your-repo

# Install dependencies  
bundle install

# Start development server
bundle exec jekyll serve

# Visit http://localhost:4000
```

## 🎨 Theme Configuration

The theme supports several configuration options in your `_config.yml`:

### Basic Settings
```yaml
title: Your Site Title
description: Your site description
author: Your Name
email: your-email@example.com
github_username: yourusername
repository: yourusername/repository-name  # For GitHub link in header
```

### Display Options
```yaml
# Control what appears on your site
show_posts: true          # Show/hide posts list on homepage
show_rss_subscribe: true  # Show/hide RSS subscription links
```

### Header Navigation
```yaml
# Control which pages appear in header navigation
header_pages:
  - about.md
  - contact.md
# Leave empty array to show no pages, or omit to show all pages
```

## 📝 Content Creation

### Homepage (`index.md`)
```markdown
---
layout: home
title: "Welcome"
---

# Your Homepage Content

Write your homepage content here...
```

### Blog Posts (`_posts/YYYY-MM-DD-title.md`)
```markdown
---
layout: post
title: "Your Post Title"
date: 2025-01-01 12:00:00 -0000
categories: [development, tutorial]
tags: [jekyll, github-pages]
---

Your post content here...
```

### Static Pages (`about.md`, `contact.md`, etc.)
```markdown
---
layout: page
title: About
permalink: /about/
---

Your page content here...
```

## 🔧 Advanced Features

### Table of Contents
- **Automatic generation** from H1, H2, H3 headers
- **Fixed positioning** (stays visible while scrolling)
- **Smooth scrolling** to sections
- **Active section** highlighting

### Code Features
- **Syntax highlighting** with Prism.js (100+ languages)
- **Copy code button** on all code blocks
- **Dark theme** optimized colors
- **Responsive** code blocks

### Responsive Design
- **Mobile-first** approach
- **Collapsible navigation** on small screens
- **Touch-friendly** interface
- **Optimized typography** for all devices

## 🚀 Deployment Options

### GitHub Pages (Free)
- ✅ **Automatic deployment** on push
- ✅ **Custom domains** supported
- ✅ **HTTPS** enabled
- ✅ **CDN** powered

### Other Hosting
- **Netlify**: Connect GitHub repo for auto-deploy
- **Vercel**: Import repository for instant deployment  
- **GitLab Pages**: Use with GitLab CI/CD
- **AWS S3**: Static site hosting
- **Self-hosted**: Any web server with Jekyll build

## 📊 SEO & Analytics

### Built-in SEO
```yaml
# _config.yml
title: Your Site Title
description: Your site description
url: "https://yourusername.github.io"
author: Your Name

plugins:
  - jekyll-seo-tag
  - jekyll-sitemap
  - jekyll-feed
```

### Analytics (Optional)
```yaml
# Google Analytics
google_analytics: UA-XXXXXXXX-X

# Google Analytics 4
google_analytics: G-XXXXXXXXXX
```

## 🎨 Customization

## 🎨 Customization

### Color Palette
The theme uses these carefully selected colors:

| Element | Color | RGB Value |
|---------|-------|-----------|
| Background | Dark Blue-Gray | `rgb(23, 32, 36)` |
| Foreground | Light Cyan | `rgb(192, 239, 254)` |
| Accent | Bright Blue | `rgb(100, 200, 255)` |
| Code Background | Dark Overlay | `rgba(0, 0, 0, 0.4)` |

### Custom Styles
Override theme styles by creating `assets/css/style.scss`:

```scss
---
---
@import "{{ site.theme }}";

/* Your custom styles */
.custom-class {
  color: #your-color;
}

/* Override theme variables */
:root {
  --background-color: rgb(23, 32, 36);
  --foreground-color: rgb(192, 239, 254);
}
```

### Custom Layouts
Override any layout by creating files in `_layouts/`:

```
_layouts/
├── default.html     # Override default layout
├── post.html        # Override post layout  
├── page.html        # Override page layout
└── home.html        # Override home layout
```

## � Theme Files Structure

```
theme_mymadlab/
├── _layouts/
│   ├── default.html          # Base layout
│   ├── home.html             # Homepage layout
│   ├── page.html             # Static pages
│   └── post.html             # Blog posts
├── _includes/
│   ├── head.html             # HTML head section
│   ├── header.html           # Site header
│   ├── footer.html           # Site footer
│   └── social.html           # Social media links
├── _sass/
│   └── mymadlab/
│       ├── _base.scss        # Base styles
│       ├── _layout.scss      # Layout styles
│       └── _syntax-highlighting.scss
├── assets/
│   ├── main.scss             # Main stylesheet
│   ├── js/
│   │   ├── copy-code.js      # Code copy functionality
│   │   └── table-of-contents.js
│   └── mymadlab-social-icons.svg
└── starter-template/         # Quick start files
    ├── _config.yml
    ├── Gemfile
    ├── index.md
    └── README.md
```

## 🌐 Browser Support

- Chrome/Chromium 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers

## 📄 License

This theme is available as open source under the terms of the [MIT License](LICENSE).

## 🤝 Contributing

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Development Setup
```bash
git clone https://github.com/biggiebk/theme_mymadlab.git
cd theme_mymadlab
bundle install
bundle exec jekyll serve
```

## 📞 Support & Resources

- 🐛 **Bug Reports:** [GitHub Issues](https://github.com/biggiebk/theme_mymadlab/issues)
- 💡 **Feature Requests:** [GitHub Discussions](https://github.com/biggiebk/theme_mymadlab/discussions)
- 📚 **Documentation:** [GitHub Wiki](https://github.com/biggiebk/theme_mymadlab/wiki)
- 🚀 **Quick Start:** [`starter-template/`](starter-template/) directory
- 📖 **Jekyll Docs:** [Jekyll Documentation](https://jekyllrb.com/docs/)

## 📄 License

This theme is available as open source under the terms of the [MIT License](LICENSE).

---

**Ready to build something amazing? Get started with MyMadLab! 🚀**

[![Deploy to GitHub Pages](https://img.shields.io/badge/Deploy%20to-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://github.com/biggiebk/theme_mymadlab)
[![Use This Template](https://img.shields.io/badge/Use%20This-Template-green?style=for-the-badge&logo=github)](https://github.com/biggiebk/theme_mymadlab/generate)