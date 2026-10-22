---
name: react-to-shopify-theme
description: Actionable skill and architectural blueprint for converting any React application (Vite, Next.js, or CRA) into an Online Store 2.0 Shopify Liquid theme with customizable sections, dynamic schema blocks, presets, and Ajax Cart API.
---

# 🛍️ Skill: React to Shopify Theme Conversion (Online Store 2.0)

This skill provides a structured blueprint for transforming React web components into modular, merchant-customizable Shopify sections using Liquid, JSON templates, and Shopify Theme Architecture OS 2.0.

---

## 🗺️ 1. Core Architecture Mapping

| React Architecture | Shopify Architecture (OS 2.0) | Implementation Method |
| :--- | :--- | :--- |
| **`App.jsx` Page Structure** | `templates/index.json` | Defines section order and default settings |
| **Component (`<Hero />`)** | `sections/hero.liquid` | Liquid HTML markup + `{% schema %}` JSON block |
| **Component Props** | Section Settings | `{{ section.settings.heading }}` |
| **Component Lists (`.map()`)**| Section Blocks | `{% for block in section.blocks %} ... {% endfor %}` |
| **Component State (`useState`)**| Vanilla JS / Alpine.js / Web Components | Interactive tabs, accordions, mobile drawer |
| **Global Layout** | `layout/theme.liquid` | Includes `{{ content_for_header }}` and `{{ content_for_layout }}` |
| **Icons (`lucide-react`)** | `snippets/icon-{name}.liquid` | Embedded using `{% render 'icon-check' %}` |
| **Styles (`index.css`)** | `assets/owek-main.css` | `{{ 'owek-main.css' | asset_url | stylesheet_tag }}` |
| **Shopping Cart Logic** | Shopify Ajax API | `fetch('/cart/add.js', { method: 'POST', ... })` |

---

## 📐 2. The Liquid Section Anatomy

Every converted React component becomes a Shopify section with two primary parts:
1. **Liquid Template Markup** (Rendering HTML with Liquid tags)
2. **Schema JSON** (Configuring Shopify Theme Customizer controls)

```liquid
<section class="section-{{ section.id }} bg-slate-950 py-20">
  <div class="max-w-7xl mx-auto px-6">
    <h2 class="text-3xl font-bold text-white">{{ section.settings.heading | escape }}</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
      {% for block in section.blocks %}
        <div class="feature-card" {{ block.shopify_attributes }}>
          <h3>{{ block.settings.title }}</h3>
          <p>{{ block.settings.text }}</p>
        </div>
      {% endfor %}
    </div>
  </div>
</section>

{% schema %}
{
  "name": "Feature Grid",
  "tag": "section",
  "class": "feature-grid-section",
  "settings": [
    {
      "type": "text",
      "id": "heading",
      "label": "Section Heading",
      "default": "Powerful Features"
    }
  ],
  "blocks": [
    {
      "type": "feature_item",
      "name": "Feature Card",
      "settings": [
        {
          "type": "text",
          "id": "title",
          "label": "Feature Title",
          "default": "Instant Settlement"
        },
        {
          "type": "textarea",
          "id": "text",
          "label": "Feature Description",
          "default": "Settle payments globally in seconds."
        }
      ]
    }
  ],
  "presets": [
    {
      "name": "Feature Grid",
      "blocks": [
        { "type": "feature_item" },
        { "type": "feature_item" }
      ]
    }
  ]
}
{% endschema %}
```

---

## ⚡ 3. Handling Interactivity & State

In React, state lives in memory (`const [open, setOpen] = useState(false)`). In Shopify, pages are rendered server-side on edge servers. Replicate interactivity with:

### Data Attribute Pattern
```html
<div class="faq-container" data-faq-accordion>
  {% for block in section.blocks %}
    <div class="faq-row" data-faq-item>
      <button type="button" data-faq-toggle class="faq-question">
        {{ block.settings.question }}
      </button>
      <div class="faq-answer" data-faq-panel style="display: none;">
        {{ block.settings.answer }}
      </div>
    </div>
  {% endfor %}
</div>
```

### Accompanying Section JavaScript
Load the script in the section or in `assets/owek-main.js`:
```javascript
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-faq-toggle]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const item = btn.closest('[data-faq-item]');
      const panel = item.querySelector('[data-faq-panel]');
      const isVisible = panel.style.display === 'block';
      
      panel.style.display = isVisible ? 'none' : 'block';
      item.classList.toggle('is-open', !isVisible);
    });
  });
});
```

---

## 📦 4. Step-by-Step Conversion Recipe

1. **Section Breakdown**: Map each React component in `src/components/` to a corresponding file in `shopify_theme/sections/{name}.liquid`.
2. **Settings Schema Design**:
   - String/Text inputs ➔ `"type": "text"` or `"type": "richtext"`
   - Images ➔ `"type": "image_picker"`
   - Buttons ➔ `"type": "text"` for label + `"type": "url"` for link
   - Colors ➔ `"type": "color"`
3. **Add Presets**: Always include `"presets": [{"name": "..."}]` in the schema so merchants can insert and reorder the section in the Theme Editor.
4. **Build JSON Templates**: Configure `templates/index.json` to load sections in the default visual order matching the React prototype.
5. **Asset Migration**: Copy CSS to `assets/` and update references using the Liquid filter `{{ 'filename.css' | asset_url | stylesheet_tag }}`.
6. **Schema Validation**: Run `python validate-schemas.py` to ensure zero syntax or property errors.
7. **Package & Test**: Run `python package-shopify-theme.py` to produce a valid UNIX-formatted `.zip` file ready for Shopify Admin upload.
