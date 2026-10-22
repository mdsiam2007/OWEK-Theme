<?php
/**
 * Template part: FAQ Section
 *
 * @package HelloElementorChild
 */
$faqs = [];
for ( $i = 1; $i <= 6; $i++ ) {
	$default_q = [
		1 => 'What is OweK?',
		2 => 'Is OweK a lender?',
		3 => 'How much will I be able to finance?',
		4 => 'Will checking my options affect my credit?',
		5 => 'When will OweK launch?',
		6 => 'Can my school or camp offer OweK?',
	];
	$default_a = [
		1 => 'OweK is a financing platform for private school and camp tuition. Instead of paying the full bill at once, families can split tuition into manageable monthly payments — while the school or camp gets paid in full, upfront.',
		2 => 'OweK isn’t a lender. We partner with a licensed financial institution that provides the financing, while OweK handles the application, plan options, and payments.',
		3 => 'The amount you’re eligible to finance depends on your application and is generally based on your tuition or camp fee. You’ll see your specific options after applying — there’s no cost or commitment to check.',
		4 => 'No. Checking your eligibility uses a soft check that does not affect your credit score.',
		5 => 'We’re building now and onboarding our first school and camp partners. Join the waitlist to be the first to know when OweK is available in your area.',
		6 => 'Yes. Schools and camps can partner with OweK to offer flexible payment options to families at no cost to enroll as a partner. Reach out through “Become a launch partner” to learn more.',
	];

	$q = owek_get_option( "owek_faq_q{$i}", $default_q[$i] );
	$a = owek_get_option( "owek_faq_a{$i}", $default_a[$i] );

	if ( ! empty( $q ) ) {
		$faqs[] = [ 'q' => $q, 'a' => $a ];
	}
}
?>
<section class="faq-section" id="faq">
  <div class="container faq-container">
    <!-- Left Column: Heading & Intro -->
    <div class="faq-intro-col">
      <div class="faq-badge-pill">
        <span><?php echo esc_html( owek_get_option( 'owek_faq_badge', 'Frequently Asked Questions' ) ); ?></span>
      </div>
      <h2 class="faq-title" style="white-space: pre-line;">
        <?php echo esc_html( owek_get_option( 'owek_faq_title', "You have questions.\nWe’ve got answers." ) ); ?>
      </h2>
      <p class="faq-description">
        <?php echo esc_html( owek_get_option( 'owek_faq_desc', 'We’re building OweK with transparency, so you can make the best decision for your family or your school.' ) ); ?>
      </p>
    </div>

    <!-- Right Column: Accordion List with Smooth CSS Grid Animation -->
    <div class="faq-list-col">
      <?php foreach ( $faqs as $idx => $faq ) : ?>
        <div class="faq-card <?php echo 0 === $idx ? 'open' : ''; ?>">
          <div class="faq-card-header">
            <div class="faq-question-row">
              <h3 class="faq-question-text"><?php echo esc_html( $faq['q'] ); ?></h3>
              <div class="faq-icon-action">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111318" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" class="icon-line-horiz"></line>
                  <line x1="12" y1="5" x2="12" y2="19" class="icon-line-vert"></line>
                </svg>
              </div>
            </div>
          </div>

          <div class="faq-answer-collapse">
            <div class="faq-answer-inner">
              <p class="faq-answer-text">
                <?php echo esc_html( $faq['a'] ); ?>
              </p>
            </div>
          </div>
        </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>
