# ⚛️ OWEK React Application

> **Pixel-perfect, high-performance web application built with React 19, Vite, and modern styling.**

---

## 🌟 Highlights

- ⚡ **Ultra Fast Development**: Powered by Vite 6 and React 19 for instantaneous hot module replacement (HMR).
- 🧩 **Modular Component Architecture**: Decoupled, reusable components ready for adaptation to any backend or CMS.
- 📱 **100% Responsive**: Built with responsive layouts optimized for mobile, tablet, and ultra-wide screens.
- 🎨 **Modern Aesthetics**: Sleek dark-mode visuals, smooth gradients, glassmorphism, and micro-interactions.
- 🎯 **Conversion Foundation**: Serves as the primary source code for the OWEK WordPress Child Theme and Shopify OS 2.0 Theme.

---

## 📂 Project Structure

```
react-theme/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx            # Responsive header with navigation & CTA
│   │   ├── Hero.jsx              # High-impact hero section with metric pills
│   │   ├── Ecosystem.jsx         # Interactive ecosystem & platform features
│   │   ├── FeatureComparison.jsx # Comprehensive comparison table
│   │   ├── HowItWorks.jsx        # Step-by-step workflow visualizer
│   │   ├── Faq.jsx               # Interactive accordion FAQs
│   │   ├── ContactUs.jsx         # Lead capture and inquiry form
│   │   ├── CtaSection.jsx        # High-conversion call-to-action banner
│   │   ├── Footer.jsx            # Multi-column footer with social links
│   │   ├── MobileMenu.jsx        # Animated slide-out mobile drawer
│   │   ├── SuccessModal.jsx      # Form submission feedback modal
│   │   └── Logo.jsx              # Vector SVG brand mark
│   ├── App.jsx                   # Application layout & state orchestration
│   ├── index.css                 # Global styling, custom utilities, and animations
│   └── main.jsx                  # Application entry point
├── public/                       # Static public assets
├── index.html                    # Root HTML document
├── package.json                  # Dependencies & scripts
└── vite.config.js                # Vite build configuration
```

---

## 🚀 Getting Started

### 1. Prerequisites
- **Node.js** (v18.0.0 or higher recommended)
- **npm** or **pnpm** / **yarn**

### 2. Installation
```bash
# Navigate to the react-theme directory
cd react-theme

# Install dependencies
npm install
```

### 3. Local Development
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173/` to view the application live.

### 4. Production Build
```bash
npm run build
```
The optimized production bundle will be generated in the `dist/` directory, ready for deployment to **Netlify**, **Vercel**, or any static hosting service.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **React 19** | Modern UI component rendering |
| **Vite 6** | Lightning-fast development & production bundling |
| **Lucide React** | Clean, accessible SVG icons |
| **CSS3** | Modern flexbox, grid, glassmorphism, and animations |
