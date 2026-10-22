<?php
/**
 * Template Name: OweK Landing Page (100% Pixel Perfect)
 *
 * @package HelloElementorChild
 * @author Siam
 */

get_header( 'owek' );
?>

<div class="app-root owek-landing-page">
  <!-- Navbar Header -->
  <?php get_template_part( 'template-parts/navbar' ); ?>

  <!-- Slide-out Mobile Menu Drawer -->
  <?php get_template_part( 'template-parts/mobile-menu' ); ?>

  <main id="main-content" class="owek-site-main" role="main">
    <!-- Section 1: Hero -->
    <?php get_template_part( 'template-parts/hero' ); ?>

    <!-- Section 2: Before/After Comparison & Feature Rows -->
    <?php get_template_part( 'template-parts/feature-comparison' ); ?>

    <!-- Section 3: How OweK Works (3 Step Cards) -->
    <?php get_template_part( 'template-parts/how-it-works' ); ?>

    <!-- Section 4: Institution & Ecosystem Satellite Network -->
    <?php get_template_part( 'template-parts/ecosystem' ); ?>

    <!-- Section 5: Frequently Asked Questions -->
    <?php get_template_part( 'template-parts/faq' ); ?>

    <!-- Section 6: Contact Us Form -->
    <?php get_template_part( 'template-parts/contact-us' ); ?>

    <!-- Section 7: Final CTA Banner -->
    <?php get_template_part( 'template-parts/cta-section' ); ?>

    <!-- Section 8: Footer -->
    <?php get_template_part( 'template-parts/footer-section' ); ?>
  </main>

  <!-- Contact Form / Waitlist Success Modal -->
  <?php get_template_part( 'template-parts/success-modal' ); ?>
</div>

<?php
get_footer( 'owek' );
