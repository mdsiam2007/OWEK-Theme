<?php
/**
 * Template part: How It Works Section
 *
 * @package HelloElementorChild
 */
$theme_uri = get_stylesheet_directory_uri();
?>
<section class="how-it-works-section" id="how-it-works">
  <!-- Navy Wave Backdrop at bottom -->
  <div class="how-wave-bg">
    <img 
      src="<?php echo esc_url( $theme_uri . '/assets/svg/214_278.svg' ); ?>" 
      alt="" 
      class="how-wave-img"
    />
  </div>

  <div class="how-it-works-container">
    <!-- Header -->
    <div class="section-header-center">
      <div class="how-badge-pill">
        <span><?php echo esc_html( owek_get_option( 'owek_how_badge', 'Simple, straightforward, predictable.' ) ); ?></span>
      </div>
      <h2 class="section-title"><?php echo esc_html( owek_get_option( 'owek_how_title', 'How OweK works' ) ); ?></h2>
    </div>

    <!-- 3 Step Cards Grid / Mobile Carousel -->
    <div class="steps-grid">
      <!-- Step 1 -->
      <div class="step-card">
        <div class="step-graphic-box">
          <img 
            src="<?php echo esc_url( $theme_uri . '/assets/svg/214_285.svg' ); ?>" 
            alt="Apply online illustration" 
            class="step-svg-img"
          />
        </div>
        <div class="step-pill-wrapper">
          <span class="step-pill-tag">STEP-1</span>
        </div>
        <div class="step-card-content">
          <h3 class="step-card-title"><?php echo esc_html( owek_get_option( 'owek_how_s1_title', 'Apply online' ) ); ?></h3>
          <p class="step-card-desc">
            <?php echo esc_html( owek_get_option( 'owek_how_s1_desc', 'A quick and secure application to see the financing options available to you.' ) ); ?>
          </p>
        </div>
      </div>

      <!-- Step 2 -->
      <div class="step-card">
        <div class="step-graphic-box">
          <img 
            src="<?php echo esc_url( $theme_uri . '/assets/svg/214_306.svg' ); ?>" 
            alt="Choose a plan illustration" 
            class="step-svg-img"
          />
        </div>
        <div class="step-pill-wrapper">
          <span class="step-pill-tag">STEP-2</span>
        </div>
        <div class="step-card-content">
          <h3 class="step-card-title"><?php echo esc_html( owek_get_option( 'owek_how_s2_title', 'Choose a plan' ) ); ?></h3>
          <p class="step-card-desc">
            <?php echo esc_html( owek_get_option( 'owek_how_s2_desc', 'Select from the financing options available to you.*' ) ); ?>
          </p>
        </div>
      </div>

      <!-- Step 3 -->
      <div class="step-card">
        <div class="step-graphic-box">
          <img 
            src="<?php echo esc_url( $theme_uri . '/assets/svg/214_343.svg' ); ?>" 
            alt="Get back to what matters illustration" 
            class="step-svg-img"
          />
        </div>
        <div class="step-pill-wrapper">
          <span class="step-pill-tag">STEP-3</span>
        </div>
        <div class="step-card-content">
          <h3 class="step-card-title"><?php echo esc_html( owek_get_option( 'owek_how_s3_title', 'Get back to what matters' ) ); ?></h3>
          <p class="step-card-desc">
            <?php echo esc_html( owek_get_option( 'owek_how_s3_desc', 'Once approved, funds are sent directly to your school or camp.' ) ); ?>
          </p>
        </div>
      </div>
    </div>

    <!-- Mobile Scroll Progress Indicator -->
    <div class="how-progress-bar-wrap">
      <div class="how-progress-track">
        <div class="how-progress-thumb"></div>
      </div>
    </div>

    <!-- Bottom Disclaimer Pill -->
    <div class="how-disclaimer-container">
      <div class="how-disclaimer-bar">
        <p class="how-disclaimer-text">
          <span class="disclaimer-star">*</span><?php echo esc_html( owek_get_option( 'owek_how_disclaimer', 'Final financing terms, eligibility, rates and availability will depend on OweK’s lending program and participating financial institution.' ) ); ?>
        </p>
      </div>
    </div>
  </div>
</section>
