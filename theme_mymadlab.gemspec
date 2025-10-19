# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "theme_mymadlab"
  spec.version       = "1.0.0"
  spec.authors       = ["biggiebk"]
  spec.email         = ["your-email@example.com"]

  spec.summary       = "A sleek, dark Jekyll theme for developers and technical writers"
  spec.description   = "MyMadLab is a dark Jekyll theme with RGB(23,32,36) background and RGB(192,239,254) foreground, featuring extensive syntax highlighting, responsive design, table of contents, code copy functionality, and developer-focused features."
  spec.homepage      = "https://github.com/biggiebk/theme_mymadlab"
  spec.license       = "MIT"
  spec.metadata      = {
    "homepage_uri"      => "https://github.com/biggiebk/theme_mymadlab",
    "source_code_uri"   => "https://github.com/biggiebk/theme_mymadlab",
    "bug_tracker_uri"   => "https://github.com/biggiebk/theme_mymadlab/issues",
    "documentation_uri" => "https://github.com/biggiebk/theme_mymadlab/wiki",
    "github_repo"       => "https://github.com/biggiebk/theme_mymadlab"
  }

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.3"
  spec.add_runtime_dependency "jekyll-feed", "~> 0.12"
  spec.add_runtime_dependency "jekyll-sitemap", "~> 1.3"
  spec.add_runtime_dependency "jekyll-seo-tag", "~> 2.6"

  spec.add_development_dependency "bundler", "~> 2.0"
  spec.add_development_dependency "rake", "~> 12.0"
end