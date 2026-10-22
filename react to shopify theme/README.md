# 🛍️ React to Shopify Theme Conversion Guide (Online Store 2.0)

> **A Comprehensive, Practical Master Guide to Converting Any React (Vite / Next.js / CRA) Application into a Shopify Online Store 2.0 Theme.**

---

## 🎯 Overview

React offers supreme developer experience and component modularity. By bringing that component structure into **Shopify Online Store 2.0 (OS 2.0)**, you get the best of both worlds: **modern frontend design + Shopify's world-class checkout, inventory management, and live Theme Customizer.**

This guide covers the exact workflow used to turn the **OWEK React application** into the **OWEK Shopify OS 2.0 Theme**.

---

## 🏗️ Architecture Comparison

```
REACT APPLICATION (Source)               SHOPIFY OS 2.0 THEME (Output)
├── src/                                ├── layout/
│   ├── components/                     │   └── theme.liquid (Master layout shell)
│   │   ├── Navbar.jsx           ───►   ├── sections/header.liquid
│   │   ├── Hero.jsx             ───►   ├── sections/hero.liquid
│   │   ├── Ecosystem.jsx        ───►   ├── sections/ecosystem.liquid
│   │   ├── FeatureComparison.jsx───►   ├── sections/feature-comparison.liquid
│   │   ├── HowItWorks.jsx       ───►   ├── sections/how-it-works.liquid
│   │   ├── Faq.jsx              ───►   ├── sections/faq.liquid
│   │   ├── ContactUs.jsx        ───►   ├── sections/contact.liquid
│   │   ├── CtaSection.jsx       ───►   ├── sections/cta-banner.liquid
│   │   └── Footer.jsx           ───►   ├── sections/footer.liquid
│   ├── App.jsx                  ───►   ├── templates/index.json (Sections orchestrator)
│   └── index.css                ───►   ├── assets/owek-main.css
```

---

## 📋 The 6-Step Conversion Workflow

### Step 1: Create Master Layout (`layout/theme.liquid`)
In React, `index.html` hosts your root `<div id="root"></div>`. In Shopify, `theme.liquid` is the master shell:

```liquid
<!doctype html>
<html class="no-js" lang="{{ request.locale.iso_code }}">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>{{ page_title }} - {{ shop.name }}</title>

    <!-- Essential Shopify Header Hook -->
    {{ content_for_header }}

    <!-- Fonts & Enqueued Theme Styles -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    
    {{ 'owek-main.css' | asset_url | stylesheet_tag }}
  </head>
  <body class="bg-slate-950 text-slate-100 antialiased">
    <!-- Header Section Group -->
    {% section 'header' %}

    <!-- Dynamic Page Content -->
    <main id="MainContent" role="main" tabindex="-1">
      {{ content_for_layout }}
    </main>

    <!-- Footer Section Group -->
    {% section 'footer' %}

    <!-- Interactive Scripts -->
    <script src="{{ 'owek-main.js' | asset_url }}" defer></script>
  </body>
</html>
```

---

### Step 2: Convert React Components to Liquid Sections
Translate each React component into a `.liquid` file inside `sections/`.

#### Example: React Component (`CtaSection.jsx`)
```jsx
export default function CtaSection({ title, subtitle, buttonText }) {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16 text-center">
      <h2 className="text-3xl font-bold text-white">{title}</h2>
      <p className="text-blue-100 mt-2">{subtitle}</p>
      <a href="/join" className="mt-6 inline-block px-8 py-3 bg-white text-blue-600 rounded-full font-semibold">
        {buttonText}
      </a>
    </section>
  );
}
```

#### Converted to Shopify Section (`sections/cta-banner.liquid`)
```liquid
<section class="bg-gradient-to-r from-blue-600 to-indigo-700 py-16 text-center section-{{ section.id }}">
  <div class="max-w-4xl mx-auto px-6">
    <h2 class="text-3xl font-bold text-white">{{ section.settings.title | escape }}</h2>
    {% if section.settings.subtitle != blank %}
      <p class="text-blue-100 mt-2">{{ section.settings.subtitle | escape }}</p>
    {% endif %}
    {% if section.settings.button_label != blank %}
      <a href="{{ section.settings.button_link | default: '#' }}" class="mt-6 inline-block px-8 py-3 bg-white text-blue-600 rounded-full font-semibold transition hover:bg-blue-50">
        {{ section.settings.button_label | escape }}
      </a>
    {% endif %}
  </div>
</section>

{% schema %}
{
  "name": "CTA Banner",
  "tag": "section",
  "class": "owek-cta-banner",
  "settings": [
    {
      "type": "text",
      "id": "title",
      "label": "Heading",
      "default": "Ready to transform your business?"
    },
    {
      "type": "textarea",
      "id": "subtitle",
      "label": "Subtitle",
      "default": "Join thousands of merchants scaling with OweK."
    },
    {
      "type": "text",
      "id": "button_label",
      "label": "Button Label",
      "default": "Get Started Now"
    },
    {
      "type": "url",
      "id": "button_link",
      "label": "Button Link"
    }
  ],
  "presets": [
    {
      "name": "CTA Banner"
    }
  ]
}
{% endschema %}
```

---

### Step 3: Configure JSON Templates (`templates/index.json`)
In Online Store 2.0, the homepage layout is defined in `templates/index.json`, allowing merchants to add, remove, and reorder sections in Shopify's visual customizer:

```json
{
  "sections": {
    "hero": {
      "type": "hero",
      "settings": {
        "badge_text": "Next Gen Payment",
        "title": "Empowering borderless commerce"
      }
    },
    "ecosystem": {
      "type": "ecosystem",
      "settings": {}
    },
    "comparison": {
      "type": "feature-comparison",
      "settings": {}
    },
    "how_it_works": {
      "type": "how-it-works",
      "settings": {}
    },
    "faq": {
      "type": "faq",
      "settings": {}
    },
    "contact": {
      "type": "contact",
      "settings": {}
    },
    "cta": {
      "type": "cta-banner",
      "settings": {}
    }
  },
  "order": [
    "hero",
    "ecosystem",
    "comparison",
    "how_it_works",
    "faq",
    "contact",
    "cta"
  ]
}
```

---

### Step 4: Converting Dynamic Lists with Liquid Blocks
If your React component uses an array of items (e.g. FAQ questions, team members, or feature cards):

#### React:
```jsx
{faqs.map((faq, i) => (
  <FaqCard key={i} q={faq.question} a={faq.answer} />
))}
```

#### Shopify Schema:
```json
"blocks": [
  {
    "type": "faq_item",
    "name": "FAQ Item",
    "settings": [
      {
        "type": "text",
        "id": "question",
        "label": "Question",
        "default": "How does OweK work?"
      },
      {
        "type": "textarea",
        "id": "answer",
        "label": "Answer",
        "default": "OweK is a modern platform..."
      }
    ]
  }
]
```

#### Render in Liquid:
```liquid
<div class="faq-accordion">
  {% for block in section.blocks %}
    <div class="faq-item" {{ block.shopify_attributes }}>
      <button class="faq-btn">{{ block.settings.question | escape }}</button>
      <div class="faq-content">{{ block.settings.answer }}</div>
    </div>
  {% endfor %}
</div>
```

---

### Step 5: Packaging & Validating for Shopify Admin

1. **Validate Schemas**: Ensure there are no invalid JSON defaults (e.g., URL settings must not have arbitrary default strings):
   ```bash
   python validate-schemas.py
   ```
2. **Package Theme Zip**: Package all files with proper forward-slash paths:
   ```bash
   python package-shopify-theme.py
   ```
3. **Upload to Shopify**:
   - Go to your Shopify Admin ➔ **Online Store** ➔ **Themes**.
   - Click **Add Theme** ➔ **Upload zip file**.
   - Select `owek-shopify-theme.zip`.
   - Click **Customize** to edit sections in real time!

---

## 💡 Pro Tips for Future Projects

1. **Always Add Presets**: A section won't be addable through the Shopify Theme Editor unless it contains a `"presets"` key in its schema.
2. **Use Block Attributes**: Always include `{{ block.shopify_attributes }}` on repeated items. This enables Shopify's live visual inspector in the Theme Customizer.
3. **Handle Empty States**: Use `| default: 'Fallback'` or `{% if setting != blank %}` so sections still look great before the merchant customizes them.
4. **Liquid Filter Hygiene**: Always sanitize merchant inputs with `| escape` or `| strip_html` to prevent accidental styling breaks.
