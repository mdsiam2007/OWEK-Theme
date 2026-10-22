<?php
/**
 * Template part: Hero Section
 *
 * @package HelloElementorChild
 */
$theme_uri = get_stylesheet_directory_uri();
?>
<section class="hero-section" id="about">
  <div class="hero-split-container">
    <!-- Left Column: Dark Content -->
    <div class="hero-content-col">
      <div class="hero-inner-content">
        <!-- Top Pill Badge -->
        <div class="hero-badge-container">
          <div class="hero-badge-pill">
            <span class="hero-badge-text"><?php echo esc_html( owek_get_option( 'owek_hero_badge', 'Opportunity Shouldn’t Wait.' ) ); ?></span>
          </div>
        </div>

        <!-- Headline -->
        <?php 
        $custom_hero_title = owek_get_option( 'owek_hero_title', '' );
        if ( ! empty( $custom_hero_title ) ) : ?>
          <h1 class="hero-title" style="white-space: pre-line;"><?php echo esc_html( $custom_hero_title ); ?></h1>
        <?php else : ?>
          <h1 class="hero-title">
            <span class="hero-title-line line-1">
              Your kid’s <span class="opportunity-badge">opportunity</span>
            </span>
            <span class="hero-title-line line-2">shouldn’t depend on</span>
            <span class="hero-title-line line-3">when tuition is due</span>
          </h1>
        <?php endif; ?>

        <!-- Description -->
        <p class="hero-description">
          <?php echo esc_html( owek_get_option( 'owek_hero_subtitle', 'OweK is building flexible financing for private school and camp tuition, giving families more time to pay for what matters now.' ) ); ?>
        </p>

        <!-- Waitlist Form -->
        <div class="hero-form-wrapper">
          <form class="hero-waitlist-form">
            <input 
              type="email" 
              name="email"
              placeholder="<?php echo esc_attr( owek_get_option( 'owek_hero_placeholder', 'Enter your email' ) ); ?>" 
              required 
              class="hero-email-input"
            />
            <button type="submit" class="hero-submit-btn">
              <span><?php echo esc_html( owek_get_option( 'owek_hero_btn_label', 'Join the waitlist' ) ); ?></span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="hero-btn-arrow">
                <path d="M5 12H19" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13 6L19 12L13 18" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </form>

          <div class="hero-subtext">
            <span><?php echo esc_html( owek_get_option( 'owek_hero_subtext', 'Launching soon. Join for early access.' ) ); ?></span>
          </div>
        </div>
      </div>
    </div>

    <!-- Right Column: Students on Campus Image -->
    <div class="hero-image-col">
      <?php 
      $hero_img = owek_get_option( 'owek_hero_image' );
      $hero_img_src = ! empty( $hero_img ) ? $hero_img : $theme_uri . '/assets/rectangle_23113_1e59be39.png';
      ?>
      <img 
        src="<?php echo esc_url( $hero_img_src ); ?>" 
        alt="Students with backpacks walking down university campus stairs" 
        class="hero-campus-image"
      />
    </div>
  </div>
</section>
