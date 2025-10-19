---
layout: post
title: "Welcome to MyMadLab Theme"
date: 2025-10-18 12:00:00 +0000
categories: theme introduction
---

Welcome to the MyMadLab Jekyll theme! This theme is designed with developers in mind, featuring a dark color scheme that's easy on the eyes during long coding sessions.

## Key Features

### Dark Color Palette
- **Background**: RGB(23,32,36) - A deep, comfortable dark blue-gray
- **Foreground**: RGB(192,239,254) - A bright, readable cyan
- **Accent colors** that complement the main palette

### Advanced Syntax Highlighting

The theme uses Prism.js for client-side syntax highlighting, supporting popular languages like:

#### Ruby
```ruby
class Jekyll::Theme::MyMadLab
  def initialize(config)
    @config = config
    @colors = {
      background: 'rgb(23, 32, 36)',
      foreground: 'rgb(192, 239, 254)'
    }
  end
  
  def render_page(content)
    template = load_template
    template.render(content: content, colors: @colors)
  end
end
```

#### Rust
```rust
use std::collections::HashMap;

#[derive(Debug, Clone)]
pub struct ThemeConfig {
    pub background: String,
    pub foreground: String,
    pub syntax_highlighting: bool,
}

impl ThemeConfig {
    pub fn new() -> Self {
        ThemeConfig {
            background: "rgb(23, 32, 36)".to_string(),
            foreground: "rgb(192, 239, 254)".to_string(),
            syntax_highlighting: true,
        }
    }
    
    pub fn apply_theme(&self) -> Result<(), Box<dyn std::error::Error>> {
        println!("Applying theme with colors: {} / {}", 
                self.background, self.foreground);
        Ok(())
    }
}
```

#### Go
```go
package main

import (
    "fmt"
    "log"
    "net/http"
)

type ThemeServer struct {
    config map[string]string
}

func NewThemeServer() *ThemeServer {
    return &ThemeServer{
        config: map[string]string{
            "background": "rgb(23, 32, 36)",
            "foreground": "rgb(192, 239, 254)",
        },
    }
}

func (ts *ThemeServer) ServeHTTP(w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Content-Type", "application/json")
    fmt.Fprintf(w, `{"theme": "%s"}`, ts.config["background"])
}

func main() {
    server := NewThemeServer()
    log.Println("Starting theme server on :8080")
    log.Fatal(http.ListenAndServe(":8080", server))
}
```

## Installation

Add this line to your Jekyll site's `Gemfile`:

```ruby
gem "theme_mymadlab"
```

And then update your `_config.yml`:

```yaml
theme: theme_mymadlab
```

## Customization

The theme is highly customizable. You can override any of the default styles by creating your own `assets/main.scss` file:

```scss
---
---

// Your custom variables
$custom-accent: #ff6b6b;

// Import the theme
@import "mymadlab";

// Your custom styles
.custom-element {
  color: $custom-accent;
}
```

Enjoy coding with your new dark theme! 🌙✨