<?php
/**
 * Template part: Final CTA Banner Section
 *
 * @package HelloElementorChild
 */
$theme_uri = get_stylesheet_directory_uri();
?>
<section class="cta-banner-section" id="waitlist">
  <!-- Content Container -->
  <div class="cta-banner-container">
    <div class="cta-content-col">
      <div class="cta-headings">
        <span class="cta-due-now-text"><?php echo esc_html( owek_get_option( 'owek_cta_badge', 'Due now?' ) ); ?></span>
        <h2 class="cta-heading-main">
          <?php echo esc_html( owek_get_option( 'owek_cta_title', 'More opportunities ahead.' ) ); ?>
        </h2>
      </div>

      <div class="cta-action-group">
        <form class="cta-email-form">
          <input 
            type="email" 
            name="email"
            placeholder="<?php echo esc_attr( owek_get_option( 'owek_cta_placeholder', 'Enter your email' ) ); ?>" 
            required 
            class="cta-input"
          />
          <button type="submit" class="cta-submit-btn">
            <span><?php echo esc_html( owek_get_option( 'owek_cta_btn_label', 'Join the waitlist' ) ); ?></span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" class="cta-btn-arrow">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </form>

        <p class="cta-helper-text">
          <?php echo esc_html( owek_get_option( 'owek_cta_subtitle', 'Join the waitlist. Be the first to know when OweK launches.' ) ); ?>
        </p>
      </div>
    </div>
  </div>

  <!-- Right Image: Covers the entire rest of the right side with a smooth convex curve -->
  <div class="cta-image-wrapper">
    <img 
      src="<?php echo esc_url( $theme_uri . '/assets/010820_oranje-marketing-66.png_a52411e7.png' ); ?>" 
      alt="Students with backpacks on university campus" 
      class="cta-banner-image"
    />
  </div>
</section>
