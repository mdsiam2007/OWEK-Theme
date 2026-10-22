# 🛍️ OWEK Shopify Theme (Online Store 2.0)

> **Complete Online Store 2.0 Shopify theme converted directly from the OWEK React prototype.**

---

## 🌟 Highlights

- 🛒 **Shopify Online Store 2.0**: Full JSON template architecture (`templates/index.json`) allowing merchants to reorder and add sections freely.
- 🎛️ **Full Visual Theme Editor Support**: Every section contains structured Liquid schema settings, presets, and dynamic blocks.
- ⚡ **Zero Bloat & Blazing Fast**: Native Liquid rendering with streamlined vanilla JS for high Google PageSpeed scores.
- 📱 **Mobile-First Experience**: Touch-friendly navigation, responsive cards, and optimized media assets.
- 🛡️ **Validated Schemas**: 100% compliant with Shopify schema standards, URL types, and block limits.

---

## 📂 Project Structure

```
shopify-theme/
├── assets/                     # Compiled CSS, JS, brand logos, and SVGs
│   ├── owek-main.css
│   └── owek-main.js
├── config/
│   ├── settings_data.json      # Store customizer presets and configuration
│   └── settings_schema.json    # Global store settings (typography, colors)
├── layout/
│   ├── theme.liquid            # Main layout wrapper
│   └── password.liquid         # Password / coming soon layout
├── locales/
│   └── en.default.json         # Internationalization strings
├── sections/
│   ├── header.liquid           # Navigation header & mobile menu
│   ├── hero.liquid             # Hero section with schema settings
│   ├── ecosystem.liquid        # Features grid
│   ├── feature-comparison.liquid # Comparison table
│   ├── how-it-works.liquid     # Step-by-step workflow
│   ├── faq.liquid              # Merchant-customizable FAQ accordion
│   ├── contact.liquid          # Contact form section
│   ├── cta-banner.liquid       # Call-to-action banner
│   ├── footer.liquid           # Footer links & copyright
│   └── main-*.liquid           # Standard OS 2.0 templates (product, collection, cart, 404)
├── snippets/                   # Reusable Liquid snippets (icons, pagination)
└── templates/                  # OS 2.0 JSON templates
    ├── index.json              # Homepage section hierarchy
    ├── product.json            # Product detail layout
    ├── collection.json         # Collection grid
    ├── cart.json               # Shopping cart layout
    └── 404.json                # Not found page
```

---

## 🚀 Installation & Upload

### Method 1: Upload via Shopify Admin
1. Generate the theme archive using the packaging script:
   ```bash
   python package-shopify-theme.py
   ```
2. Log into your **Shopify Admin** (`https://admin.shopify.com/store/your-store`).
3. Navigate to **Online Store ➔ Themes**.
4. In the *Theme library* section, click **Add theme ➔ Upload zip file**.
5. Select `owek-shopify-theme.zip` and click **Upload file**.
6. Click **Customize** to visually configure your store, or **Publish** to make it live!

### Method 2: Development with Shopify CLI
```bash
# Authenticate and start live theme development
shopify theme dev --store your-store.myshopify.com
```

---

## 🛠️ Validation & Packaging Utilities

- **Validate Section Schemas**:
  ```bash
  python validate-schemas.py
  ```
  Scans all section files in `sections/` and verifies that every Liquid schema is valid JSON and has legal property defaults.

- **Package Zip**:
  ```bash
  python package-shopify-theme.py
  ```
  Creates a clean zip archive with normalized UNIX forward slashes compatible with all Shopify upload requirements.
