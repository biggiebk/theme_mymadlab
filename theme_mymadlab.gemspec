# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "theme_mymadlab"
  spec.version       = "0.1.0"
  spec.authors       = ["biggiebk"]
  spec.email         = ["your-email@example.com"]

  spec.summary       = "A dark Jekyll theme for mymadlab"
  spec.description   = "A simple, dark Jekyll theme with syntax highlighting support"
  spec.homepage      = "https://github.com/biggiebk/theme_mymadlab"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.3"
  spec.add_runtime_dependency "jekyll-feed", "~> 0.12"
  spec.add_runtime_dependency "jekyll-sitemap", "~> 1.3"
  spec.add_runtime_dependency "jekyll-seo-tag", "~> 2.6"

  spec.add_development_dependency "bundler", "~> 2.0"
end