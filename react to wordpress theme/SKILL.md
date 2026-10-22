---
name: react-to-wordpress-theme
description: Actionable skill and architectural blueprint for converting any React application (Vite, Next.js, or CRA) into a production-ready, custom WordPress theme or Elementor child theme with clean PHP templates, enqueued assets, and interactive JS.
---

# 🚀 Skill: React to WordPress Theme Conversion

This skill provides a systematic, repeatable framework for converting modern React web applications into high-performance, maintainable WordPress themes.

---

## 🗺️ 1. Core Architecture Mapping

| React Architecture | WordPress Architecture | Implementation Method |
| :--- | :--- | :--- |
| **`App.jsx` / Page Layout** | `front-page.php` / `page.php` | Assembles header, main sections, and footer |
| **Components (`<Hero />`, `<Faq />`)** | `template-parts/{name}.php` | Rendered via `get_template_part('template-parts/name')` |
| **Component Props (Static)** | Template arguments or defaults | Passed via `get_template_part($slug, $name, $args)` |
| **Component Props (Dynamic)** | WP Customizer / Options / ACF | `get_theme_mod('setting_key', 'default')` |
| **React State (`useState`)** | Data Attributes + Vanilla JS | `data-accordion`, `data-modal`, `data-active` |
| **`index.css` / Tailwind** | `assets/css/owek-main.css` | Enqueued in `functions.php` via `wp_enqueue_style` |
| **Icons (`lucide-react`)** | Raw SVGs / `assets/svg/` | Included via `file_get_contents` or inline SVG |
| **Forms & Submissions** | `inc/form-handler.php` | AJAX action or `admin-post.php` with WP Nonce |

---

## 🛠️ 2. Theme Scaffolding Pipeline

### Step 1: Create Theme Identity (`style.css`)
Every WordPress theme requires a `style.css` at its root with metadata:
```css
/*
Theme Name: Hello Elementor Child (or Custom Theme Name)
Theme URI: https://yourportfolio.com/
Description: Custom pixel-perfect theme converted from React/Figma.
Author: Your Name
Template: hello-elementor /* (Omit if standalone theme) */
Version: 1.0.0
Text Domain: your-theme-child
*/
```

### Step 2: Configure Asset Pipeline (`functions.php`)
Never link stylesheets directly in `<head>`. Always use WordPress enqueue APIs:
```php
<?php
if (!defined('ABSPATH')) exit;

function theme_enqueue_assets() {
    $theme_version = wp_get_theme()->get('Version');

    // 1. Google Fonts / Typography
    wp_enqueue_style('theme-google-fonts', 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap', array(), null);

    // 2. Main CSS (Exported/compiled from React project)
    wp_enqueue_style('theme-main-styles', get_stylesheet_directory_uri() . '/assets/css/owek-main.css', array(), $theme_version);

    // 3. Main JS (Vanilla interactivity replacement for React state)
    wp_enqueue_script('theme-main-script', get_stylesheet_directory_uri() . '/assets/js/owek-main.js', array(), $theme_version, true);

    // 4. Localize AJAX script data
    wp_localize_script('theme-main-script', 'themeData', array(
        'ajaxUrl' => admin_url('admin-ajax.php'),
        'nonce'   => wp_create_nonce('theme_nonce')
    ));
}
add_action('wp_enqueue_scripts', 'theme_enqueue_assets', 20);
```

---

## 🔄 3. Converting React JSX to WordPress PHP

### Rule 1: Replace JSX Expressions with PHP
* **React**:
  ```jsx
  <h1 className="text-4xl font-bold">{title}</h1>
  ```
* **WordPress**:
  ```php
  <h1 class="text-4xl font-bold"><?php echo esc_html($title); ?></h1>
  ```

### Rule 2: Convert Array Mapping to PHP Loops
* **React**:
  ```jsx
  {features.map((item, index) => (
    <div key={index} className="feature-card">
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </div>
  ))}
  ```
* **WordPress**:
  ```php
  <?php foreach ($features as $index => $item) : ?>
    <div class="feature-card">
      <h3><?php echo esc_html($item['title']); ?></h3>
      <p><?php echo esc_html($item['description']); ?></p>
    </div>
  <?php endforeach; ?>
  ```

### Rule 3: Replace Lucide Icons with SVGs
In React, you import `<Check className="w-5 h-5" />`. In WordPress:
1. Export SVGs to `assets/svg/icon-check.svg`.
2. Output cleanly:
   ```php
   <img src="<?php echo esc_url(get_stylesheet_directory_uri() . '/assets/svg/icon-check.svg'); ?>" alt="Check Icon" class="w-5 h-5" />
   ```

---

## ⚡ 4. Replicating React State with Lightweight Vanilla JS

Since WordPress pages do not bundle the React runtime by default, replicate UI states using data attributes:

### Accordion / FAQ Toggle
```javascript
document.querySelectorAll('[data-accordion-btn]').forEach(button => {
    button.addEventListener('click', () => {
        const item = button.closest('[data-accordion-item]');
        const content = item.querySelector('[data-accordion-content]');
        const isOpen = item.classList.contains('active');
        
        // Close all
        document.querySelectorAll('[data-accordion-item]').forEach(el => {
            el.classList.remove('active');
            el.querySelector('[data-accordion-content]').style.maxHeight = null;
        });

        // Open clicked if was closed
        if (!isOpen) {
            item.classList.add('active');
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    });
});
```

### Mobile Menu & Modal Triggers
```javascript
const mobileMenu = document.querySelector('#mobile-menu-drawer');
document.querySelectorAll('[data-toggle-menu]').forEach(trigger => {
    trigger.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
        document.body.classList.toggle('overflow-hidden');
    });
});
```

---

## 📦 5. Step-by-Step Conversion Recipe

1. **Audit React Components**: List all components and identify which are pure static UI vs interactive.
2. **Bundle CSS**: Build the React project with `npm run build` or copy `index.css` and font assets to `assets/css/` and `assets/fonts/`.
3. **Scaffold Theme Files**:
   - `style.css`
   - `functions.php`
   - `front-page.php`
   - `template-parts/` (create one `.php` file per React component)
4. **Translate Components**:
   - Copy JSX markup into `.php` files.
   - Replace `className` with `class`.
   - Replace self-closing tags (e.g., `<img />` -> `<img>`, `<input />` -> `<input>`).
   - Replace `{variable}` with `<?php echo esc_html($var); ?>`.
5. **Write Interactivity**: Extract `useState` / `useEffect` logic into `assets/js/owek-main.js`.
6. **Integrate Dynamic Customizer**: Register customizer controls in `inc/customizer.php` so non-technical clients can edit text, colors, and logos.
7. **Test in Local Environment**: Test with Local by Flywheel or WP-CLI, verify responsiveness and form submissions.
