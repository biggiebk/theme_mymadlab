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

### Installation

Add this line to your Jekyll site's `Gemfile`:

```ruby
gem "theme_mymadlab"
```

And then execute:
```bash
bundle install
```

Or install it yourself:
```bash
gem install theme_mymadlab
```

### Usage

Add this to your site's `_config.yml`:

```yaml
theme: theme_mymadlab

# Optional theme configuration
title: Your Site Title
description: Your site description
author: Your Name
email: your-email@example.com
github_username: yourusername

# Enable plugins
plugins:
  - jekyll-feed
  - jekyll-sitemap
  - jekyll-seo-tag
```

## 🎨 Color Palette

The theme uses a carefully selected dark color scheme:

| Element | Color | RGB Value |
|---------|-------|-----------|
| Background | Dark Blue-Gray | `rgb(23, 32, 36)` |
| Foreground | Light Cyan | `rgb(192, 239, 254)` |
| Accent | Bright Blue | `rgb(100, 200, 255)` |
| Muted Text | Translucent Cyan | `rgba(192, 239, 254, 0.7)` |

## 💻 Syntax Highlighting

The theme includes extensive syntax highlighting support via Prism.js:

```python
# Python example
def hello_world():
    print("Hello from MyMadLab theme!")
    return {"status": "success", "theme": "awesome"}
```

```javascript
// JavaScript example  
const themeConfig = {
    name: 'MyMadLab',
    colors: {
        bg: 'rgb(23, 32, 36)',
        fg: 'rgb(192, 239, 254)'
    }
};
```

```rust
// Rust example
fn main() {
    println!("MyMadLab theme rocks! 🚀");
}
```

## 🛠️ Customization

### Override Styles

Create `assets/main.scss` in your site:

```scss
---
---

// Custom variables (optional)
$custom-accent: #ff6b6b;

// Import the theme
@import "mymadlab";

// Your custom styles
.your-custom-class {
  color: $custom-accent;
}
```

### Layout Options

The theme provides several layout options:

- `default` - Basic page layout
- `home` - Homepage with post list
- `post` - Blog post layout with metadata
- `page` - Static page layout

## 📁 File Structure

```
theme_mymadlab/
├── _layouts/
│   ├── default.html
│   ├── home.html
│   ├── page.html
│   └── post.html
├── _includes/
│   ├── head.html
│   ├── header.html
│   ├── footer.html
│   └── social.html
├── _sass/
│   └── mymadlab/
│       ├── _base.scss
│       ├── _layout.scss
│       └── _syntax-highlighting.scss
├── assets/
│   ├── main.scss
│   └── mymadlab-social-icons.svg
└── _config.yml
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

Bug reports and pull requests are welcome on GitHub at https://github.com/biggiebk/theme_mymadlab.

## 🙏 Credits

Built with [Jekyll](https://jekyllrb.com/) and [Prism.js](https://prismjs.com/).

---

**Happy coding with MyMadLab! 🚀**