<?php
/**
 * Template part: Feature Comparison & Audience Cards
 *
 * @package HelloElementorChild
 */
$theme_uri = get_stylesheet_directory_uri();
?>
<section class="features-section" id="for-families">
  <div class="container features-container">
    <!-- ================= CARD 1: Before & After Tuition Comparison ================= -->
    <div class="feature-block-card card-cream">
      <div class="card-two-col card-1-grid">
        <!-- Left Column: Visual comparison -->
        <div class="comparison-visual-area">
          <div class="comparison-cards-flow">
            <!-- Tuition Due White Card -->
            <div class="tuition-due-card">
              <span class="badge-pill-tuition">Tuition Due</span>
              <div class="amount-headline dark"><?php echo esc_html( owek_get_option( 'owek_comp_tuition_due_amount', '$32,000' ) ); ?></div>
              <div class="due-subtext"><?php echo esc_html( owek_get_option( 'owek_comp_tuition_due_date', 'Due Aug 1' ) ); ?></div>
            </div>

            <!-- Arrow Pill (48x32 with stroke #111318) -->
            <div class="comparison-arrow-pill">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111318" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>

            <!-- With Owek Purple Card -->
            <div class="with-owek-card">
              <span class="badge-pill-owek">With Owek</span>
              <div class="amount-headline white">
                <span class="amount-main"><?php echo esc_html( owek_get_option( 'owek_comp_owek_monthly_amount', '$2,667/' ) ); ?></span>
                <span class="amount-unit"><?php echo esc_html( owek_get_option( 'owek_comp_owek_monthly_unit', ' mo*' ) ); ?></span>
              </div>
              <div class="owek-subtext">12 monthly paymets</div>
            </div>
          </div>

          <p class="comparison-footnote">
            *Illustrative example only. Actual payment amounts, terms, rates and eligibility will vary and are subject to the financing options available at launch.
          </p>
        </div>

        <!-- Right Column: Copy & Link -->
        <div class="card-copy-content">
          <div class="pill-row">
            <span class="badge-pill yellow">Same Education</span>
            <span class="badge-pill purple-outline">A More Flexible Way to Pay.</span>
          </div>

          <h2 class="block-title">
            <?php echo esc_html( owek_get_option( 'owek_comp_c1_title', 'From one big bill to a brighter future.' ) ); ?>
          </h2>

          <p class="block-description">
            <?php echo esc_html( owek_get_option( 'owek_comp_c1_desc', 'Turn today’s tuition into manageable monthly payments — so your family can say yes to what matters.' ) ); ?>
          </p>

          <div>
            <a href="#how-it-works" class="purple-underlined-link">
              <span class="link-text-underline"><?php echo esc_html( owek_get_option( 'owek_comp_c1_link', 'See how it works' ) ); ?></span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8B72F5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" class="link-arrow-icon">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- ================= CARD 2: For Families ================= -->
    <div class="feature-block-card card-white" id="families-detail">
      <div class="card-two-col card-2-grid">
        <!-- Left: Copy -->
        <div class="card-copy-content card-2-copy">
          <span class="badge-pill yellow badge-fit"><?php echo esc_html( owek_get_option( 'owek_comp_c2_badge', 'For Families' ) ); ?></span>
          <h2 class="block-title"><?php echo esc_html( owek_get_option( 'owek_comp_c2_title', 'Say yes to what matters.' ) ); ?></h2>
          <p class="block-description">
            <?php echo esc_html( owek_get_option( 'owek_comp_c2_desc', 'More flexibility for private school tuition and summer camp costs.' ) ); ?>
          </p>
          <div>
            <button type="button" data-scroll-to="about" class="purple-underlined-link btn-as-link">
              <span class="link-text-underline"><?php echo esc_html( owek_get_option( 'owek_comp_c2_btn', 'Join the family waitlist' ) ); ?></span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8B72F5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" class="link-arrow-icon">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>

        <!-- Right: Image -->
        <div class="card-media-wrap">
          <?php 
            $c2_img = owek_get_option( 'owek_comp_c2_img', '' );
            $c2_img_src = ! empty( $c2_img ) ? $c2_img : ( $theme_uri . '/assets/rectangle_6161_90731233.png' );
          ?>
          <img
            src="<?php echo esc_url( $c2_img_src ); ?>"
            alt="Mother helping daughter with backpack at home"
            class="card-feature-image"
          />
        </div>
      </div>
    </div>

    <!-- ================= CARD 3: For Private Schools ================= -->
    <div class="feature-block-card card-cream" id="for-schools">
      <div class="card-two-col card-3-grid">
        <!-- Left: Image -->
        <div class="card-media-wrap">
          <?php 
            $c3_img = owek_get_option( 'owek_comp_c3_img', '' );
            $c3_img_src = ! empty( $c3_img ) ? $c3_img : ( $theme_uri . '/assets/rectangle_6161_7a2b3074.png' );
          ?>
          <img
            src="<?php echo esc_url( $c3_img_src ); ?>"
            alt="Two students with backpacks walking on school campus"
            class="card-feature-image"
          />
        </div>

        <!-- Right: Copy -->
        <div class="card-copy-content card-3-copy">
          <span class="badge-pill yellow badge-fit"><?php echo esc_html( owek_get_option( 'owek_comp_c3_badge', 'For Private Schools' ) ); ?></span>
          <h2 class="block-title"><?php echo esc_html( owek_get_option( 'owek_comp_c3_title', 'Give families more ways to stay.' ) ); ?></h2>
          <p class="block-description">
            <?php echo esc_html( owek_get_option( 'owek_comp_c3_desc', 'Offer eligible families more flexibility around tuition while supporting enrollment and retention.' ) ); ?>
          </p>
          <div>
            <button type="button" data-scroll-to="contact" class="purple-underlined-link btn-as-link">
              <span class="link-text-underline"><?php echo esc_html( owek_get_option( 'owek_comp_c3_btn', 'Become a launch partner' ) ); ?></span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8B72F5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" class="link-arrow-icon">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- ================= CARD 4: For Summer Camps ================= -->
    <div class="feature-block-card card-white">
      <div class="camps-vertical-content">
        <!-- Centered Copy -->
        <div class="camps-center-header">
          <span class="badge-pill yellow badge-fit"><?php echo esc_html( owek_get_option( 'owek_comp_c4_badge', 'For Summer Camps' ) ); ?></span>
          <h2 class="block-title text-center"><?php echo esc_html( owek_get_option( 'owek_comp_c4_title', 'Make another summer possible.' ) ); ?></h2>
          <p class="block-description text-center">
            <?php echo esc_html( owek_get_option( 'owek_comp_c4_desc', 'Give families more flexibility to manage camp tuition while keeping enrollment within reach.' ) ); ?>
          </p>
          <div>
            <button type="button" data-scroll-to="contact" class="purple-underlined-link btn-as-link">
              <span class="link-text-underline"><?php echo esc_html( owek_get_option( 'owek_comp_c4_btn', 'Become a launch partner' ) ); ?></span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8B72F5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" class="link-arrow-icon">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>

        <!-- 4-Image Horizontal Row -->
        <div class="camps-four-images-row">
          <?php
            $camp1 = owek_get_option( 'owek_comp_camp_img1', '' );
            $camp1_src = ! empty( $camp1 ) ? $camp1 : ( $theme_uri . '/assets/rectangle_6162_ae4de748.png' );

            $camp2 = owek_get_option( 'owek_comp_camp_img2', '' );
            $camp2_src = ! empty( $camp2 ) ? $camp2 : ( $theme_uri . '/assets/rectangle_6163_f3532683.png' );

            $camp3 = owek_get_option( 'owek_comp_camp_img3', '' );
            $camp3_src = ! empty( $camp3 ) ? $camp3 : ( $theme_uri . '/assets/rectangle_6164_7f3c59cf.png' );

            $camp4 = owek_get_option( 'owek_comp_camp_img4', '' );
            $camp4_src = ! empty( $camp4 ) ? $camp4 : ( $theme_uri . '/assets/rectangle_6161_e093b55d.png' );
          ?>
          <div class="camp-photo-box">
            <img
              src="<?php echo esc_url( $camp1_src ); ?>"
              alt="Girl riding horse through forest trail"
              class="camp-photo-img"
            />
          </div>
          <div class="camp-photo-box">
            <img
              src="<?php echo esc_url( $camp2_src ); ?>"
              alt="Family kayaking on summer lake"
              class="camp-photo-img"
            />
          </div>
          <div class="camp-photo-box">
            <img
              src="<?php echo esc_url( $camp3_src ); ?>"
              alt="Kids playing limbo game outdoors at camp"
              class="camp-photo-img"
            />
          </div>
          <div class="camp-photo-box">
            <img
              src="<?php echo esc_url( $camp4_src ); ?>"
              alt="Boy laughing joyfully in water splash"
              class="camp-photo-img"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
