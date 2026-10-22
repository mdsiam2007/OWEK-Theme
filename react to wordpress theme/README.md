# 📘 React to WordPress Theme Conversion Guide

> **A Complete, Practical Master Guide to Converting Any React (Vite / Next.js / CRA) Application into a Custom WordPress Theme.**

---

## 🎯 Overview

React makes prototyping and component development fast and delightful. However, many enterprise and eCommerce clients require the content management capabilities, SEO power, and plugin ecosystem of **WordPress**.

This guide reveals the exact blueprint used to convert the **OWEK React application** into the **OWEK Hello-Elementor Child Theme**. Use this guide as a reference for any future project!

---

## 🏗️ Architecture Comparison

```
REACT APPLICATION (Source)               WORDPRESS CHILD THEME (Output)
├── src/                                ├── style.css (Theme metadata)
│   ├── components/                     ├── functions.php (Enqueue scripts & styles)
│   │   ├── Navbar.jsx           ───►   ├── template-parts/navbar.php
│   │   ├── Hero.jsx             ───►   ├── template-parts/hero.php
│   │   ├── Ecosystem.jsx        ───►   ├── template-parts/ecosystem.php
│   │   ├── FeatureComparison.jsx───►   ├── template-parts/feature-comparison.php
│   │   ├── HowItWorks.jsx       ───►   ├── template-parts/how-it-works.php
│   │   ├── Faq.jsx              ───►   ├── template-parts/faq.php
│   │   ├── ContactUs.jsx        ───►   ├── template-parts/contact-us.php
│   │   └── Footer.jsx           ───►   ├── template-parts/footer-section.php
│   ├── App.jsx                  ───►   ├── front-page.php (Main orchestrator)
│   └── index.css                ───►   ├── assets/css/owek-main.css
```

---

## 📋 The 6-Step Conversion Workflow

### Step 1: Initialize Theme Identity
Create `style.css` at the root of your WordPress theme directory:

```css
/*
Theme Name: Hello Elementor Child - OWEK
Theme URI: https://github.com/mdsiam2007/OWEK-Theme
Description: High-performance OweK Landing Page converted from React 19.
Author: Md Siam
Version: 1.0.0
Template: hello-elementor
Text Domain: hello-elementor-child
*/
```

---

### Step 2: Enqueue Assets via `functions.php`
In React, styles and fonts are imported via `import './index.css'` or `index.html`. In WordPress, we register and enqueue them properly:

```php
<?php
// Prevent direct access
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

function owek_enqueue_theme_assets() {
    $version = wp_get_theme()->get( 'Version' );

    // 1. Enqueue Google Fonts
    wp_enqueue_style(
        'owek-fonts',
        'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap',
        array(),
        null
    );

    // 2. Enqueue Compiled CSS
    wp_enqueue_style(
        'owek-main-css',
        get_stylesheet_directory_uri() . '/assets/css/owek-main.css',
        array(),
        $version
    );

    // 3. Enqueue Main JavaScript
    wp_enqueue_script(
        'owek-main-js',
        get_stylesheet_directory_uri() . '/assets/js/owek-main.js',
        array(),
        $version,
        true
    );
}
add_action( 'wp_enqueue_scripts', 'owek_enqueue_theme_assets', 20 );
```

---

### Step 3: Convert React Components to Template Parts
Break down the React JSX into reusable PHP templates inside `template-parts/`.

#### Example: React Component (`Hero.jsx`)
```jsx
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <span className="text-cyan-400 font-semibold tracking-wide uppercase text-sm">
          Next Gen Payment
        </span>
        <h1 className="text-5xl font-extrabold text-white mt-4">
          Empowering borderless commerce
        </h1>
      </div>
    </section>
  );
}
```

#### Converted to WordPress (`template-parts/hero.php`)
```php
<?php
/**
 * Hero Section Template Part
 * Converted from React Hero.jsx
 */
if ( ! defined( 'ABSPATH' ) ) exit;
?>
<section class="relative overflow-hidden bg-slate-950 py-24">
  <div class="max-w-7xl mx-auto px-6 text-center">
    <span class="text-cyan-400 font-semibold tracking-wide uppercase text-sm">
      <?php echo esc_html( get_theme_mod( 'hero_badge', 'Next Gen Payment' ) ); ?>
    </span>
    <h1 class="text-5xl font-extrabold text-white mt-4">
      <?php echo esc_html( get_theme_mod( 'hero_title', 'Empowering borderless commerce' ) ); ?>
    </h1>
  </div>
</section>
```

---

### Step 4: Assemble `front-page.php`
In React, `App.jsx` renders your components sequentially. In WordPress, `front-page.php` takes this role:

```php
<?php
/**
 * The template for displaying the custom front page
 */
get_header( 'owek' );
?>

<main id="primary" class="site-main">
  <?php
    get_template_part( 'template-parts/navbar' );
    get_template_part( 'template-parts/hero' );
    get_template_part( 'template-parts/ecosystem' );
    get_template_part( 'template-parts/feature-comparison' );
    get_template_part( 'template-parts/how-it-works' );
    get_template_part( 'template-parts/faq' );
    get_template_part( 'template-parts/contact-us' );
    get_template_part( 'template-parts/cta-section' );
    get_template_part( 'template-parts/footer-section' );
    get_template_part( 'template-parts/mobile-menu' );
    get_template_part( 'template-parts/success-modal' );
  ?>
</main>

<?php
get_footer( 'owek' );
```

---

### Step 5: Replace React State with Lightweight Vanilla JS
React's `useState` manages UI states like accordions, modals, and mobile navigation. Instead of loading heavy bundles, we write clean, vanilla JavaScript in `assets/js/owek-main.js`:

```javascript
// FAQ Accordion Handler
document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach((item) => {
    const trigger = item.querySelector('.faq-trigger');
    const answer = item.querySelector('.faq-answer');

    if (!trigger || !answer) return;

    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');

      // Close all items
      faqItems.forEach((el) => {
        el.classList.remove('active');
        const ans = el.querySelector('.faq-answer');
        if (ans) ans.style.maxHeight = null;
      });

      // Toggle current item
      if (!isOpen) {
        item.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });
});
```

---

### Step 6: Dynamic Content with WordPress Customizer
Allow clients to edit texts and images without touching code by creating `inc/customizer.php`:

```php
<?php
function owek_customize_register( $wp_customize ) {
    $wp_customize->add_section( 'owek_hero_section', array(
        'title'    => __( 'Hero Section', 'hello-elementor-child' ),
        'priority' => 30,
    ) );

    $wp_customize->add_setting( 'hero_title', array(
        'default'           => 'Empowering borderless commerce',
        'sanitize_callback' => 'sanitize_text_field',
    ) );

    $wp_customize->add_control( 'hero_title', array(
        'label'    => __( 'Hero Headline', 'hello-elementor-child' ),
        'section'  => 'owek_hero_section',
        'type'     => 'text',
    ) );
}
add_action( 'customize_register', 'owek_customize_register' );
```

---

## 💡 Pro Tips for Future Projects

1. **Keep CSS Independent**: Avoid tightly coupling CSS to React-specific tools. Maintain standard classes or export Tailwind to clean CSS.
2. **Sanitize Everything**: In WordPress, always wrap outputs with escaping functions:
   - Text: `esc_html( $text )`
   - Attributes: `esc_attr( $attr )`
   - URLs: `esc_url( $url )`
3. **Handle SVGs Cleanly**: Lucide React icons render dynamic SVG markup. Export them to an `assets/svg/` directory for fast loading in PHP.
4. **Child Theme Best Practices**: Always build as a child theme (e.g. of Hello Elementor or Astra) so theme updates do not overwrite your custom code.
