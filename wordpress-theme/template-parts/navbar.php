<?php
/**
 * Template part: Navbar
 *
 * @package HelloElementorChild
 */
$theme_uri = get_stylesheet_directory_uri();
?>
<header class="navbar-header">
  <div class="navbar-inner">
    <!-- Brand Logo -->
    <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="navbar-brand-link">
      <?php 
      $custom_logo = owek_get_option( 'owek_nav_logo_img' );
      if ( ! empty( $custom_logo ) ) : ?>
        <img src="<?php echo esc_url( $custom_logo ); ?>" alt="<?php bloginfo( 'name' ); ?>" class="navbar-brand-logo" style="object-fit: contain;" />
      <?php else : ?>
        <img 
          src="<?php echo esc_url( $theme_uri . '/assets/svg/214_8.svg' ); ?>" 
          alt="oweK" 
          class="navbar-brand-logo"
          width="140"
          height="39"
        />
      <?php endif; ?>
    </a>

    <!-- Centered Navigation Links -->
    <nav class="navbar-center-nav desktop-only">
      <a href="#about" class="nav-item-link">About</a>
      <a href="#for-families" class="nav-item-link">For Families</a>
      <a href="#for-schools" class="nav-item-link">For Schools & Camps</a>
      <a href="#faq" class="nav-item-link">FAQ</a>
      <a href="#contact" class="nav-item-link">Contact Us</a>
    </nav>

    <!-- Right CTA Button matching Frame 1413374311 -->
    <div class="navbar-action-col desktop-only">
      <button 
        type="button" 
        data-scroll-to="about"
        class="navbar-waitlist-btn"
      >
        <span><?php echo esc_html( owek_get_option( 'owek_nav_waitlist_btn', 'Join the waitlist' ) ); ?></span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="nav-btn-arrow">
          <path d="M5.25 12H18.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12.75 6L18.75 12L12.75 18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>

    <!-- Mobile Hamburger Toggle -->
    <button 
      type="button" 
      class="mobile-menu-toggle mobile-only" 
      aria-label="Open menu"
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#111318" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
      </svg>
    </button>
  </div>
</header>
