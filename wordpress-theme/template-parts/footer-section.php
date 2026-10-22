<?php
/**
 * Template part: Footer Section
 *
 * @package HelloElementorChild
 */
$theme_uri = get_stylesheet_directory_uri();
?>
<footer class="footer-section">
  <div class="container footer-container">
    <!-- Top: Centered Social Icons (Instagram & LinkedIn matching Figma) -->
    <div class="footer-social-wrapper">
      <a 
        href="https://instagram.com" 
        target="_blank" 
        rel="noopener noreferrer" 
        class="footer-social-btn" 
        aria-label="Instagram"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      </a>

      <a 
        href="https://linkedin.com" 
        target="_blank" 
        rel="noopener noreferrer" 
        class="footer-social-btn" 
        aria-label="LinkedIn"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="#FFFFFF">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.24c-.88 0-1.6.72-1.6 1.6 0 .88.72 1.6 1.6 1.6.88 0 1.6-.72 1.6-1.6 0-.88-.72-1.6-1.6-1.6Z"/>
        </svg>
      </a>
    </div>

    <!-- Center: Navigation Links -->
    <nav class="footer-nav">
      <a href="#about" class="footer-nav-link">About</a>
      <a href="#for-families" class="footer-nav-link">For Families</a>
      <a href="#for-schools" class="footer-nav-link">For Schools & Camps</a>
      <a href="#for-schools-ecosystem" class="footer-nav-link">Lending Partners</a>
      <a href="#faq" class="footer-nav-link">FAQ</a>
      <a href="#contact" class="footer-nav-link">Contact</a>
    </nav>

    <!-- Center: Massive Watermark OweK Vector Graphic (1400x384) -->
    <?php if ( owek_get_option( 'owek_footer_show_watermark', true ) ) : ?>
      <div class="footer-watermark">
        <img 
          src="<?php echo esc_url( $theme_uri . '/assets/svg/214_481.svg' ); ?>" 
          alt="oweK watermark" 
          class="footer-watermark-svg" 
        />
      </div>
    <?php endif; ?>

    <!-- Bottom: Divider Line & Legal Bar -->
    <div class="footer-bottom-wrapper">
      <div class="footer-divider-line"></div>
      <div class="footer-bottom-bar">
        <p class="copyright-text">
          <?php echo esc_html( owek_get_option( 'owek_footer_copyright', '© ' . date( 'Y' ) . ' OweK. All rights reserved.' ) ); ?>
        </p>
        <div class="legal-links">
          <a href="#terms" class="legal-link">Terms & Conditions</a>
          <span class="legal-divider">|</span>
          <a href="#privacy" class="legal-link">Privacy Policy</a>
        </div>
      </div>
    </div>
  </div>
</footer>
