<div align="center">

# ⚡ OWEK Theme Ecosystem
### *One Unified Design — Three Production Platforms*

<p align="center">
  <a href="https://github.com/mdsiam2007/OWEK-Theme">
    <img src="https://readme-typing-svg.demolab.com?font=Plus+Jakarta+Sans&weight=700&size=24&duration=3000&pause=1000&color=38BDF8&center=true&vCenter=true&width=650&lines=Modern+React+19+%2B+Vite+Application;WordPress+Hello-Elementor+Child+Theme;Shopify+Online+Store+2.0+Liquid+Theme;100%25+Feature+Parity+Across+All+Platforms" alt="Typing SVG" />
  </a>
</p>

[![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![WordPress](https://img.shields.io/badge/WordPress-6.x-21759B?style=for-the-badge&logo=wordpress&logoColor=white)](https://wordpress.org/)
[![Elementor](https://img.shields.io/badge/Elementor-Child_Theme-92003B?style=for-the-badge&logo=elementor&logoColor=white)](https://elementor.com/)
[![Shopify](https://img.shields.io/badge/Shopify-OS_2.0-7AB55C?style=for-the-badge&logo=shopify&logoColor=white)](https://shopify.dev/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)

<br/>

[🌟 React Theme](./react-theme/) • [🌐 WordPress Theme](./wordpress-theme/) • [🛍️ Shopify Theme](./shopify-theme/) • [📘 React ➔ WP Guide](./react%20to%20wordpress%20theme/) • [🛍️ React ➔ Shopify Guide](./react%20to%20shopify%20theme/)

</div>

---

## 📖 About OWEK Theme

**OWEK Theme** is an enterprise-grade, multi-platform landing page and eCommerce theme suite designed to bridge modern frontend component architecture with the world's two largest content and commerce platforms: **WordPress** and **Shopify**.

Developed originally in **React 19 + Vite**, this project proves that modern component-driven user interfaces can be seamlessly translated into:
1. A blazing-fast, lightweight **WordPress Child Theme** (compatible with Hello Elementor).
2. A flexible, merchant-customizable **Shopify Online Store 2.0 Theme** with dynamic Liquid sections.

---

## 🗂️ Repository Architecture

```
OWEK-Theme/
├── 📁 react-theme/                 # Modern React 19 + Vite Application
│   ├── src/components/             # 12+ Modular UI Components
│   └── README.md                   # React dev & build instructions
│
├── 📁 wordpress-theme/             # Production WordPress Child Theme
│   ├── template-parts/             # Component-mapped PHP templates
│   ├── inc/customizer.php          # Dynamic WP Customizer options
│   └── README.md                   # WP installation & setup guide
│
├── 📁 shopify-theme/               # Shopify Online Store 2.0 Liquid Theme
│   ├── sections/                   # Dynamic merchant-editable sections
│   ├── templates/index.json        # OS 2.0 JSON layout hierarchy
│   ├── validate-schemas.py         # Automated schema validation tool
│   ├── package-shopify-theme.py    # Zero-dependency packaging utility
│   └── README.md                   # Shopify upload & dev guide
│
├── 📁 react to wordpress theme/    # 🚀 Future Project Blueprint
│   ├── SKILL.md                    # Actionable AI Agent / Developer Skill
│   └── README.md                   # In-depth conversion masterclass
│
└── 📁 react to shopify theme/      # 🚀 Future Project Blueprint
    ├── SKILL.md                    # Actionable AI Agent / Developer Skill
    └── README.md                   # In-depth conversion masterclass
```

---

## ⚖️ Feature Parity Comparison

| Feature / Section | React 19 (`react-theme`) | WordPress Theme (`wordpress-theme`) | Shopify OS 2.0 (`shopify-theme`) |
| :--- | :---: | :---: | :---: |
| **Responsive Navbar & Logo** | `Navbar.jsx` | `navbar.php` | `sections/header.liquid` |
| **Hero Section & Metric Pills** | `Hero.jsx` | `hero.php` | `sections/hero.liquid` |
| **Ecosystem & Feature Grid** | `Ecosystem.jsx` | `ecosystem.php` | `sections/ecosystem.liquid` |
| **Feature Comparison Matrix** | `FeatureComparison.jsx` | `feature-comparison.php` | `sections/feature-comparison.liquid` |
| **Workflow / How It Works** | `HowItWorks.jsx` | `how-it-works.php` | `sections/how-it-works.liquid` |
| **Interactive Accordion FAQ** | `Faq.jsx` (`useState`) | `faq.php` (Vanilla JS) | `sections/faq.liquid` (Liquid Blocks) |
| **Lead / Contact Inquiry Form**| `ContactUs.jsx` | `contact-us.php` (AJAX Nonces) | `sections/contact.liquid` (Shopify Form) |
| **CTA Conversion Banner** | `CtaSection.jsx` | `cta-section.php` | `sections/cta-banner.liquid` |
| **Multi-Column Footer** | `Footer.jsx` | `footer-section.php` | `sections/footer.liquid` |
| **Mobile Drawer Navigation** | `MobileMenu.jsx` | `mobile-menu.php` | `snippets/mobile-menu.liquid` |
| **Success Feedback Modal** | `SuccessModal.jsx` | `success-modal.php` | Native submission event |
| **Visual Customizer** | Vite HMR / Props | WordPress Customizer (`inc/`) | Shopify Live Theme Editor |

---

## 🚀 Quick Start Guide

### 1. Running the React Application
```bash
cd react-theme
npm install
npm run dev
```
Visit `http://localhost:5173/` in your browser.

---

### 2. Installing the WordPress Theme
1. Ensure the parent theme **Hello Elementor** is installed in your WordPress site.
2. Copy the `wordpress-theme/` folder into `wp-content/themes/hello-elementor-child/`.
3. Activate the theme via **Appearance ➔ Themes** in your WordPress Admin panel.
4. Set your static front page under **Settings ➔ Reading**.

---

### 3. Deploying the Shopify Theme
1. Run the included packaging script:
   ```bash
   cd shopify-theme
   python package-shopify-theme.py
   ```
2. Go to **Shopify Admin ➔ Online Store ➔ Themes**.
3. Click **Add Theme ➔ Upload zip file** and upload `owek-shopify-theme.zip`.
4. Click **Customize** to edit sections in real time!

---

## 📚 Future Project Conversion Blueprints

Need to convert another React project into WordPress or Shopify? We've prepared complete developer guides and AI skill templates:

- 📘 **[React to WordPress Theme Guide](./react%20to%20wordpress%20theme/README.md)**: Includes architecture mapping, PHP conversions, WordPress customizer code, and script enqueuing.
- 🛍️ **[React to Shopify Theme Guide](./react%20to%20shopify%20theme/README.md)**: Includes Liquid tag translation, schema settings, dynamic blocks, JSON templates, and validation scripts.

---

## 🌐 Live Preview & Netlify Deployment

- A standalone, Netlify-optimized version of the React application is hosted on the [`react`](https://github.com/mdsiam2007/OWEK-Theme/tree/react) branch.
- It features an **interactive visitor popup modal** displaying project insights, multi-platform documentation, and direct links to this repository!

---

## 👨‍💻 Author & Credits

- **Developer**: [Md Siam](https://github.com/mdsiam2007)
- **Repository**: [mdsiam2007/OWEK-Theme](https://github.com/mdsiam2007/OWEK-Theme)
- **License**: MIT License

---

<div align="center">
  <sub>Built with ❤️ for high-performance web engineering. Star ⭐ this repository if you find it helpful!</sub>
</div>