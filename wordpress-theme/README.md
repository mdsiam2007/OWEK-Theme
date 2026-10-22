# 🌐 OWEK WordPress Theme (Hello-Elementor Child)

> **Custom, pixel-perfect WordPress child theme converted directly from the OWEK React prototype.**

---

## 🌟 Highlights

- ⚡ **Lightweight & High-Performance**: Built without bloated page builder overhead; clean semantic PHP and enqueued assets.
- 🎨 **Elementor Compatible**: Inherits from the lightweight **Hello Elementor** parent theme for ultimate flexibility.
- 🧩 **Modular Template Parts**: Separated into dedicated files inside `template-parts/` for easy maintenance and child theming.
- 🎛️ **WordPress Customizer Ready**: Includes `inc/customizer.php` and dynamic styling controls for non-technical site owners.
- 📬 **Native Form Handling**: Form submissions handled via WordPress AJAX and nonces for rock-solid security.

---

## 📂 Project Structure

```
wordpress-theme/
├── assets/
│   ├── css/
│   │   └── owek-main.css       # Core stylesheets ported from React design
│   ├── js/
│   │   └── owek-main.js        # Vanilla JS handling modals, FAQ accordion & menu
│   ├── fonts/                  # Custom brand typography
│   └── svg/                    # Optimized SVG icons
├── inc/
│   ├── customizer.php          # WordPress Theme Customizer options
│   ├── customizer-styles.php   # Dynamic CSS generation based on customizer
│   └── form-handler.php        # Form submission validation & processing
├── page-templates/
│   └── template-owek-landing.php # Full-width custom page template
├── template-parts/
│   ├── navbar.php              # Header & main navigation
│   ├── hero.php                # Hero banner & badge
│   ├── ecosystem.php           # Feature grid & ecosystem showcase
│   ├── feature-comparison.php  # Interactive comparison table
│   ├── how-it-works.php        # Workflow step cards
│   ├── faq.php                 # Accordion FAQs
│   ├── contact-us.php          # Contact & inquiry form
│   ├── cta-section.php         # Call-to-action banner
│   ├── footer-section.php      # Site footer
│   ├── mobile-menu.php         # Off-canvas mobile navigation
│   └── success-modal.php       # Lead submission success feedback
├── footer-owek.php             # Custom theme footer hook
├── front-page.php              # Primary front page layout orchestrator
├── functions.php               # Enqueue scripts/styles & theme setup
├── header-owek.php             # Custom theme header hook
├── screenshot.png              # Theme preview screenshot for WP Admin
└── style.css                   # Theme header metadata & styles
```

---

## 🚀 Installation & Setup

### Method 1: Manual Folder Copy
1. Install and activate the parent theme **Hello Elementor** from the WordPress Theme Directory (`Appearance ➔ Themes ➔ Add New`).
2. Copy this `wordpress-theme/` folder into your WordPress installation:
   ```
   wp-content/themes/hello-elementor-child/
   ```
3. Go to **WordPress Admin ➔ Appearance ➔ Themes** and activate **Hello Elementor Child**.

### Method 2: Zip Upload
1. Compress the contents of this folder into `hello-elementor-child.zip`.
2. In WordPress Admin, navigate to **Appearance ➔ Themes ➔ Add New ➔ Upload Theme**.
3. Select `hello-elementor-child.zip` and click **Install Now**, then **Activate**.

---

## ⚙️ Configuration

1. **Set Front Page**:
   - Go to **Settings ➔ Reading**.
   - Under *Your homepage displays*, select **A static page**.
   - Choose or create a page named "Home" and set it as your **Homepage**.
2. **Customize Content**:
   - Go to **Appearance ➔ Customize**.
   - Customize headings, logos, and accent colors in real time.
