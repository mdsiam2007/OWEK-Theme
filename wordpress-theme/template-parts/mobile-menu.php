<?php
/**
 * Template part: Mobile Menu
 *
 * @package HelloElementorChild
 */
?>
<div id="owek-mobile-menu" class="full-mobile-menu">
  <!-- Top Header matching Frame 1982250901 -->
  <div class="mobile-menu-header">
    <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="menu-logo-link">
      <div 
        class="logo-container" 
        style="display: inline-flex; align-items: center; font-family: 'Poppins', sans-serif; font-weight: 700; font-size: 42px; letter-spacing: -2px; line-height: 1; user-select: none; text-decoration: none;"
      >
        <span style="color: #111318;">owe</span>
        <span style="color: #8B72F5;">K</span>
      </div>
    </a>
    <button 
      type="button" 
      class="mobile-menu-close" 
      aria-label="Close menu"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111318" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>
  </div>

  <!-- Navigation Links List matching Frame 1982250903 -->
  <nav class="mobile-menu-nav">
    <div class="mobile-nav-item">
      <a href="#about" class="mobile-nav-link">About</a>
    </div>
    <div class="mobile-nav-item">
      <a href="#for-families" class="mobile-nav-link">For Families</a>
    </div>
    <div class="mobile-nav-item">
      <a href="#for-schools" class="mobile-nav-link">For Schools & Camps</a>
    </div>
    <div class="mobile-nav-item">
      <a href="#faq" class="mobile-nav-link">FAQ</a>
    </div>
    <div class="mobile-nav-item">
      <a href="#contact" class="mobile-nav-link">Contact Us</a>
    </div>
  </nav>
</div>
