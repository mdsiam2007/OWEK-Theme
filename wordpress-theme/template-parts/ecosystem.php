<?php
/**
 * Template part: Ecosystem / Satellite Network Section
 *
 * @package HelloElementorChild
 */
$theme_uri = get_stylesheet_directory_uri();
?>
<section class="ecosystem-section" id="for-schools-ecosystem">
  <div class="container ecosystem-container">
    <!-- Large Cream Block Card -->
    <div class="ecosystem-block-card">
      <!-- Section Header -->
      <div class="ecosystem-header">
        <span class="badge-pill yellow badge-fit"><?php echo esc_html( owek_get_option( 'owek_eco_badge', 'For Institution' ) ); ?></span>
        <h2 class="ecosystem-title" style="white-space: pre-line;">
          <?php echo esc_html( owek_get_option( 'owek_eco_title', "Financial institution or\nlending partner?" ) ); ?>
        </h2>
        <div>
          <button type="button" data-scroll-to="contact" class="purple-underlined-link btn-as-link">
            <span class="link-text-underline"><?php echo esc_html( owek_get_option( 'owek_eco_btn', 'Partner with OweK' ) ); ?></span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8B72F5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" class="link-arrow-icon">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </div>

      <!-- Ecosystem Network Diagram -->
      <div class="ecosystem-network">
        <!-- Mobile Connecting SVG Vector Curves -->
        <svg 
          viewBox="0 0 358 484" 
          fill="none" 
          class="mobile-connectors-svg"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <!-- Top Right curve into Families (Vector 6) -->
          <path 
            d="M 179 86 L 179 218 A 50 50 0 0 0 229 268 L 258 268" 
            stroke="#DDD8CF" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            vectorEffect="non-scaling-stroke" 
          />
          <!-- Top Left curve into Lending Partners (Vector 8) -->
          <path 
            d="M 179 86 L 179 218 A 50 50 0 0 1 129 268 L 100 268" 
            stroke="#DDD8CF" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            vectorEffect="non-scaling-stroke" 
          />
          <!-- Bottom Right curve into Students (Vector 7) -->
          <path 
            d="M 179 86 L 179 410 A 50 50 0 0 0 229 460 L 258 460" 
            stroke="#DDD8CF" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            vectorEffect="non-scaling-stroke" 
          />
          <!-- Bottom Left curve into Schools & Camps (Vector 9) -->
          <path 
            d="M 179 86 L 179 410 A 50 50 0 0 1 129 460 L 100 460" 
            stroke="#DDD8CF" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            vectorEffect="non-scaling-stroke" 
          />
        </svg>

        <!-- Left Column Satellite Cards -->
        <div class="satellite-col left-col">
          <!-- Card 1: Lending Partners -->
          <div class="satellite-card">
            <div class="satellite-icon-circle">
              <img src="<?php echo esc_url( $theme_uri . '/assets/svg/214_649.svg' ); ?>" alt="" class="satellite-icon-img" />
            </div>
            <div class="satellite-info">
              <h4 class="satellite-title"><?php echo esc_html( owek_get_option( 'owek_eco_c1_title', 'Lending Partners' ) ); ?></h4>
              <p class="satellite-desc"><?php echo esc_html( owek_get_option( 'owek_eco_c1_desc', 'Provide the capital and infrastructure' ) ); ?></p>
            </div>
          </div>

          <!-- Card 2: Schools & Camps -->
          <div class="satellite-card">
            <div class="satellite-icon-circle">
              <img src="<?php echo esc_url( $theme_uri . '/assets/svg/214_658.svg' ); ?>" alt="" class="satellite-icon-img" />
            </div>
            <div class="satellite-info">
              <h4 class="satellite-title"><?php echo esc_html( owek_get_option( 'owek_eco_c2_title', 'Schools & Camps' ) ); ?></h4>
              <p class="satellite-desc"><?php echo esc_html( owek_get_option( 'owek_eco_c2_desc', 'Offer flexible payments to your families' ) ); ?></p>
            </div>
          </div>
        </div>

        <!-- Connecting SVG Vector Curves Area (Desktop) & Center Hub Capsule -->
        <div class="network-connectors-area">
          <svg 
            viewBox="0 0 318 373" 
            fill="none" 
            class="connectors-svg desktop-connectors"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <!-- Top Curve -->
            <path 
              d="M0 63.5H33.0952C49.6638 63.5 63.0952 76.9315 63.0952 93.5V144.5C63.0952 161.069 76.5267 174.5 93.0952 174.5H225.41C241.978 174.5 255.41 161.069 255.41 144.5V93.5C255.41 76.9315 268.841 63.5 285.41 63.5H318" 
              stroke="#DDD8CF" 
              strokeWidth="2" 
            />
            <!-- Bottom Curve -->
            <path 
              d="M0 309.5H33.0952C49.6638 309.5 63.0952 296.069 63.0952 279.5V228.5C63.0952 211.931 76.5267 198.5 93.0952 198.5H225.41C241.978 198.5 255.41 211.931 255.41 228.5V279.5C255.41 296.069 268.841 309.5 285.41 309.5H318" 
              stroke="#DDD8CF" 
              strokeWidth="2" 
            />
          </svg>

          <!-- Center Hub: oweK -->
          <div class="hub-center-capsule">
            <span class="hub-brand-owe">owe</span>
            <span class="hub-brand-k">K</span>
          </div>
        </div>

        <!-- Right Column Satellite Cards -->
        <div class="satellite-col right-col">
          <!-- Card 3: Families -->
          <div class="satellite-card">
            <div class="satellite-icon-circle">
              <img src="<?php echo esc_url( $theme_uri . '/assets/svg/214_673.svg' ); ?>" alt="" class="satellite-icon-img" />
            </div>
            <div class="satellite-info">
              <h4 class="satellite-title"><?php echo esc_html( owek_get_option( 'owek_eco_c3_title', 'Families' ) ); ?></h4>
              <p class="satellite-desc"><?php echo esc_html( owek_get_option( 'owek_eco_c3_desc', 'More opportunities within reach' ) ); ?></p>
            </div>
          </div>

          <!-- Card 4: Students -->
          <div class="satellite-card">
            <div class="satellite-icon-circle">
              <img src="<?php echo esc_url( $theme_uri . '/assets/svg/214_683.svg' ); ?>" alt="" class="satellite-icon-img" />
            </div>
            <div class="satellite-info">
              <h4 class="satellite-title"><?php echo esc_html( owek_get_option( 'owek_eco_c4_title', 'Students' ) ); ?></h4>
              <p class="satellite-desc"><?php echo esc_html( owek_get_option( 'owek_eco_c4_desc', 'A brighter tomorrow' ) ); ?></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
