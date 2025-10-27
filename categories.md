---
layout: page
title: Categories
permalink: /categories/
---

Browse posts by category:

{% assign categories = site.categories | sort %}
<div class="categories-grid">
  {% for category in categories %}
    {% assign category_name = category[0] %}
    {% assign posts = category[1] %}
    <div class="category-card">
      <h3><a href="{{ '/categories/' | append: category_name | slugify | relative_url }}">{{ category_name | capitalize }}</a></h3>
      <p class="category-count">{{ posts | size }} 
        {%- if posts.size == 1 -%}post{%- else -%}posts{%- endif -%}
      </p>
      <div class="category-preview">
        {% for post in posts limit:3 %}
          <div class="preview-post">
            <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
            <span class="preview-date">{{ post.date | date: "%b %d" }}</span>
          </div>
        {% endfor %}
        {% if posts.size > 3 %}
          <div class="more-posts">
            <a href="{{ '/categories/' | append: category_name | slugify | relative_url }}">
              View {{ posts.size | minus: 3 }} more...
            </a>
          </div>
        {% endif %}
      </div>
    </div>
  {% endfor %}
</div>