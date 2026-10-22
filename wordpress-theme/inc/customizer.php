<?php
/**
 * OweK Full Theme Customizer
 * Comprehensive controls for every section (text, colors, images, backgrounds, and webhooks)
 *
 * @package HelloElementorChild
 * @author Siam
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Helper function to retrieve Customizer values with default fallback
 */
function owek_get_option( $key, $default = '' ) {
	$value = get_theme_mod( $key, $default );
	return ( null !== $value && '' !== $value ) ? $value : $default;
}

/**
 * Register Master Panel, Sections, and Controls in Theme Customizer
 */
function owek_customize_register( $wp_customize ) {

	// Master Panel: OweK Theme Settings
	$wp_customize->add_panel( 'owek_theme_panel', [
		'title'       => __( 'OweK Theme Settings', 'hello-elementor-child' ),
		'description' => __( 'Customize every section text, colors, images, backgrounds, and form integrations.', 'hello-elementor-child' ),
		'priority'    => 20,
	] );

	// =========================================================================
	// 1. GLOBAL BRAND & COLORS
	// =========================================================================
	$wp_customize->add_section( 'owek_section_colors', [
		'title'    => __( '1. Global Brand & Colors', 'hello-elementor-child' ),
		'panel'    => 'owek_theme_panel',
		'priority' => 10,
	] );

	$colors = [
		'owek_color_primary'        => [ 'label' => __( 'Primary Accent (Purple)', 'hello-elementor-child' ), 'default' => '#8B72F5' ],
		'owek_color_dark'           => [ 'label' => __( 'Dark Accent / Navy', 'hello-elementor-child' ), 'default' => '#000C2A' ],
		'owek_color_text_primary'   => [ 'label' => __( 'Primary Text Color', 'hello-elementor-child' ), 'default' => '#111318' ],
		'owek_color_text_secondary' => [ 'label' => __( 'Secondary Text Color', 'hello-elementor-child' ), 'default' => '#6F6B65' ],
		'owek_color_bg_warm'        => [ 'label' => __( 'Warm Background (Beige)', 'hello-elementor-child' ), 'default' => '#F8F5EE' ],
		'owek_color_bg_cream'       => [ 'label' => __( 'Cream Background (Cards)', 'hello-elementor-child' ), 'default' => '#FFF9F2' ],
	];

	foreach ( $colors as $id => $data ) {
		$wp_customize->add_setting( $id, [
			'default'           => $data['default'],
			'sanitize_callback' => 'sanitize_hex_color',
			'transport'         => 'refresh',
		] );
		$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, $id, [
			'label'    => $data['label'],
			'section'  => 'owek_section_colors',
			'settings' => $id,
		] ) );
	}

	// =========================================================================
	// 2. NAVIGATION BAR
	// =========================================================================
	$wp_customize->add_section( 'owek_section_nav', [
		'title'    => __( '2. Navigation Bar', 'hello-elementor-child' ),
		'panel'    => 'owek_theme_panel',
		'priority' => 20,
	] );

	// Custom Logo Image
	$wp_customize->add_setting( 'owek_nav_logo_img', [
		'default'           => '',
		'sanitize_callback' => 'esc_url_raw',
	] );
	$wp_customize->add_control( new WP_Customize_Image_Control( $wp_customize, 'owek_nav_logo_img', [
		'label'       => __( 'Custom Logo Image (Optional)', 'hello-elementor-child' ),
		'description' => __( 'Upload an image logo. If empty, the stylized "oweK" brand logo is displayed.', 'hello-elementor-child' ),
		'section'     => 'owek_section_nav',
	] ) );

	// Waitlist Button Text
	$wp_customize->add_setting( 'owek_nav_waitlist_btn', [
		'default'           => 'Join the waitlist',
		'sanitize_callback' => 'sanitize_text_field',
	] );
	$wp_customize->add_control( 'owek_nav_waitlist_btn', [
		'label'    => __( 'Waitlist Button Text', 'hello-elementor-child' ),
		'section'  => 'owek_section_nav',
		'type'     => 'text',
	] );

	// =========================================================================
	// 3. HERO SECTION
	// =========================================================================
	$wp_customize->add_section( 'owek_section_hero', [
		'title'    => __( '3. Hero Section', 'hello-elementor-child' ),
		'panel'    => 'owek_theme_panel',
		'priority' => 30,
	] );

	$hero_fields = [
		'owek_hero_badge'       => [ 'label' => __( 'Badge Pill Text', 'hello-elementor-child' ), 'default' => "Opportunity Shouldn't Wait.", 'type' => 'text' ],
		'owek_hero_title'       => [ 'label' => __( 'Main Headline', 'hello-elementor-child' ), 'default' => 'Private school & camp tuition, now in monthly payments.', 'type' => 'textarea' ],
		'owek_hero_subtitle'    => [ 'label' => __( 'Subhead Description', 'hello-elementor-child' ), 'default' => "Say yes to the education and experiences that shape your child's future — with flexible payment options that work for your family's budget.", 'type' => 'textarea' ],
		'owek_hero_placeholder' => [ 'label' => __( 'Input Placeholder', 'hello-elementor-child' ), 'default' => 'Enter your email', 'type' => 'text' ],
		'owek_hero_btn_label'   => [ 'label' => __( 'Button Label', 'hello-elementor-child' ), 'default' => 'Join the waitlist', 'type' => 'text' ],
		'owek_hero_subtext'     => [ 'label' => __( 'Disclaimer Subtext', 'hello-elementor-child' ), 'default' => '*Soft credit check only. Does not affect your credit score.', 'type' => 'text' ],
	];

	foreach ( $hero_fields as $id => $field ) {
		$wp_customize->add_setting( $id, [
			'default'           => $field['default'],
			'sanitize_callback' => ( 'textarea' === $field['type'] ) ? 'sanitize_textarea_field' : 'sanitize_text_field',
		] );
		$wp_customize->add_control( $id, [
			'label'    => $field['label'],
			'section'  => 'owek_section_hero',
			'type'     => $field['type'],
		] );
	}

	// Hero Campus Photo
	$wp_customize->add_setting( 'owek_hero_image', [
		'default'           => '',
		'sanitize_callback' => 'esc_url_raw',
	] );
	$wp_customize->add_control( new WP_Customize_Image_Control( $wp_customize, 'owek_hero_image', [
		'label'       => __( 'Hero Campus Photo', 'hello-elementor-child' ),
		'description' => __( 'Upload photo for right side of hero. If empty, default Figma photo is used.', 'hello-elementor-child' ),
		'section'     => 'owek_section_hero',
	] ) );

	// Hero Background Color
	$wp_customize->add_setting( 'owek_hero_bg_color', [
		'default'           => '#000C2A',
		'sanitize_callback' => 'sanitize_hex_color',
	] );
	$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'owek_hero_bg_color', [
		'label'    => __( 'Hero Section Background Color', 'hello-elementor-child' ),
		'section'  => 'owek_section_hero',
	] ) );

	// =========================================================================
	// 4. FEATURES & COMPARISON CARDS
	// =========================================================================
	$wp_customize->add_section( 'owek_section_features', [
		'title'    => __( '4. Features & Cards Section', 'hello-elementor-child' ),
		'panel'    => 'owek_theme_panel',
		'priority' => 40,
	] );

	// Card 1: Tuition Comparison
	$comp_fields = [
		'owek_comp_tuition_due_amount' => [ 'label' => __( 'Comparison: Due Amount', 'hello-elementor-child' ), 'default' => '$32,000' ],
		'owek_comp_tuition_due_date'   => [ 'label' => __( 'Comparison: Due Date Tag', 'hello-elementor-child' ), 'default' => 'Due Aug 1' ],
		'owek_comp_owek_monthly_amount'=> [ 'label' => __( 'Comparison: OweK Monthly', 'hello-elementor-child' ), 'default' => '$2,667/' ],
		'owek_comp_owek_monthly_unit'  => [ 'label' => __( 'Comparison: Monthly Unit', 'hello-elementor-child' ), 'default' => ' mo*' ],
		'owek_comp_c1_title'           => [ 'label' => __( 'Card 1 Title', 'hello-elementor-child' ), 'default' => 'From one big bill to a brighter future.' ],
		'owek_comp_c1_desc'            => [ 'label' => __( 'Card 1 Description', 'hello-elementor-child' ), 'default' => 'Turn today’s tuition into manageable monthly payments — so your family can say yes to what matters.' ],
		'owek_comp_c1_link'            => [ 'label' => __( 'Card 1 Link Text', 'hello-elementor-child' ), 'default' => 'See how it works' ],
		
		// Card 2: For Families
		'owek_comp_c2_badge'           => [ 'label' => __( 'Card 2 (Families) Badge', 'hello-elementor-child' ), 'default' => 'For Families' ],
		'owek_comp_c2_title'           => [ 'label' => __( 'Card 2 Title', 'hello-elementor-child' ), 'default' => 'Say yes to what matters.' ],
		'owek_comp_c2_desc'            => [ 'label' => __( 'Card 2 Description', 'hello-elementor-child' ), 'default' => 'More flexibility for private school tuition and summer camp costs.' ],
		'owek_comp_c2_btn'             => [ 'label' => __( 'Card 2 Button Text', 'hello-elementor-child' ), 'default' => 'Join the family waitlist' ],
		
		// Card 3: For Private Schools
		'owek_comp_c3_badge'           => [ 'label' => __( 'Card 3 (Schools) Badge', 'hello-elementor-child' ), 'default' => 'For Private Schools' ],
		'owek_comp_c3_title'           => [ 'label' => __( 'Card 3 Title', 'hello-elementor-child' ), 'default' => 'Give families more ways to stay.' ],
		'owek_comp_c3_desc'            => [ 'label' => __( 'Card 3 Description', 'hello-elementor-child' ), 'default' => 'Offer eligible families more flexibility around tuition while supporting enrollment and retention.' ],
		'owek_comp_c3_btn'             => [ 'label' => __( 'Card 3 Button Text', 'hello-elementor-child' ), 'default' => 'Become a launch partner' ],

		// Card 4: For Summer Camps
		'owek_comp_c4_badge'           => [ 'label' => __( 'Card 4 (Camps) Badge', 'hello-elementor-child' ), 'default' => 'For Summer Camps' ],
		'owek_comp_c4_title'           => [ 'label' => __( 'Card 4 Title', 'hello-elementor-child' ), 'default' => 'Make another summer possible.' ],
		'owek_comp_c4_desc'            => [ 'label' => __( 'Card 4 Description', 'hello-elementor-child' ), 'default' => 'Give families more flexibility to manage camp tuition while keeping enrollment within reach.' ],
		'owek_comp_c4_btn'             => [ 'label' => __( 'Card 4 Button Text', 'hello-elementor-child' ), 'default' => 'Become a launch partner' ],
	];

	foreach ( $comp_fields as $id => $field ) {
		$wp_customize->add_setting( $id, [
			'default'           => $field['default'],
			'sanitize_callback' => 'sanitize_text_field',
		] );
		$wp_customize->add_control( $id, [
			'label'    => $field['label'],
			'section'  => 'owek_section_features',
			'type'     => 'text',
		] );
	}

	// Image Controls for Feature Cards
	$feature_images = [
		'owek_comp_c2_img' => __( 'Card 2 (Families) Photo', 'hello-elementor-child' ),
		'owek_comp_c3_img' => __( 'Card 3 (Schools) Photo', 'hello-elementor-child' ),
		'owek_comp_camp_img1' => __( 'Camp Gallery Photo 1', 'hello-elementor-child' ),
		'owek_comp_camp_img2' => __( 'Camp Gallery Photo 2', 'hello-elementor-child' ),
		'owek_comp_camp_img3' => __( 'Camp Gallery Photo 3', 'hello-elementor-child' ),
		'owek_comp_camp_img4' => __( 'Camp Gallery Photo 4', 'hello-elementor-child' ),
	];

	foreach ( $feature_images as $id => $label ) {
		$wp_customize->add_setting( $id, [
			'default'           => '',
			'sanitize_callback' => 'esc_url_raw',
		] );
		$wp_customize->add_control( new WP_Customize_Image_Control( $wp_customize, $id, [
			'label'    => $label,
			'section'  => 'owek_section_features',
		] ) );
	}

	// =========================================================================
	// 5. HOW IT WORKS SECTION
	// =========================================================================
	$wp_customize->add_section( 'owek_section_how', [
		'title'    => __( '5. How It Works Section', 'hello-elementor-child' ),
		'panel'    => 'owek_theme_panel',
		'priority' => 50,
	] );

	$how_fields = [
		'owek_how_badge'      => [ 'label' => __( 'Badge Text', 'hello-elementor-child' ), 'default' => 'Simple, straightforward, predictable.' ],
		'owek_how_title'      => [ 'label' => __( 'Section Heading', 'hello-elementor-child' ), 'default' => 'How OweK works' ],
		'owek_how_s1_title'   => [ 'label' => __( 'Step 1 Title', 'hello-elementor-child' ), 'default' => 'Apply online' ],
		'owek_how_s1_desc'    => [ 'label' => __( 'Step 1 Description', 'hello-elementor-child' ), 'default' => 'A quick and secure application to see the financing options available to you.' ],
		'owek_how_s2_title'   => [ 'label' => __( 'Step 2 Title', 'hello-elementor-child' ), 'default' => 'Choose a plan' ],
		'owek_how_s2_desc'    => [ 'label' => __( 'Step 2 Description', 'hello-elementor-child' ), 'default' => 'Select from the financing options available to you.*' ],
		'owek_how_s3_title'   => [ 'label' => __( 'Step 3 Title', 'hello-elementor-child' ), 'default' => 'Get back to what matters' ],
		'owek_how_s3_desc'    => [ 'label' => __( 'Step 3 Description', 'hello-elementor-child' ), 'default' => 'Once approved, funds are sent directly to your school or camp.' ],
		'owek_how_disclaimer' => [ 'label' => __( 'Bottom Disclaimer Pill Text', 'hello-elementor-child' ), 'default' => 'Final financing terms, eligibility, rates and availability will depend on OweK’s lending program and participating financial institution.' ],
	];

	foreach ( $how_fields as $id => $field ) {
		$wp_customize->add_setting( $id, [
			'default'           => $field['default'],
			'sanitize_callback' => 'sanitize_text_field',
		] );
		$wp_customize->add_control( $id, [
			'label'    => $field['label'],
			'section'  => 'owek_section_how',
			'type'     => 'textarea',
		] );
	}

	// How it Works Wave Background Color
	$wp_customize->add_setting( 'owek_how_wave_color', [
		'default'           => '#000C2A',
		'sanitize_callback' => 'sanitize_hex_color',
	] );
	$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'owek_how_wave_color', [
		'label'    => __( 'Wave Backdrop Color', 'hello-elementor-child' ),
		'section'  => 'owek_section_how',
	] ) );

	// =========================================================================
	// 6. FOR INSTITUTIONS (ECOSYSTEM NETWORK)
	// =========================================================================
	$wp_customize->add_section( 'owek_section_ecosystem', [
		'title'    => __( '6. For Institutions (Ecosystem)', 'hello-elementor-child' ),
		'panel'    => 'owek_theme_panel',
		'priority' => 60,
	] );

	$eco_fields = [
		'owek_eco_badge'    => [ 'label' => __( 'Badge Text', 'hello-elementor-child' ), 'default' => 'For Institution' ],
		'owek_eco_title'    => [ 'label' => __( 'Main Title', 'hello-elementor-child' ), 'default' => "Financial institution or\nlending partner?" ],
		'owek_eco_btn'      => [ 'label' => __( 'Button Link Text', 'hello-elementor-child' ), 'default' => 'Partner with OweK' ],
		'owek_eco_c1_title' => [ 'label' => __( 'Card 1 Title', 'hello-elementor-child' ), 'default' => 'Lending Partners' ],
		'owek_eco_c1_desc'  => [ 'label' => __( 'Card 1 Description', 'hello-elementor-child' ), 'default' => 'Provide the capital and infrastructure' ],
		'owek_eco_c2_title' => [ 'label' => __( 'Card 2 Title', 'hello-elementor-child' ), 'default' => 'Schools & Camps' ],
		'owek_eco_c2_desc'  => [ 'label' => __( 'Card 2 Description', 'hello-elementor-child' ), 'default' => 'Offer flexible payments to your families' ],
		'owek_eco_c3_title' => [ 'label' => __( 'Card 3 Title', 'hello-elementor-child' ), 'default' => 'Families' ],
		'owek_eco_c3_desc'  => [ 'label' => __( 'Card 3 Description', 'hello-elementor-child' ), 'default' => 'More opportunities within reach' ],
		'owek_eco_c4_title' => [ 'label' => __( 'Card 4 Title', 'hello-elementor-child' ), 'default' => 'Students' ],
		'owek_eco_c4_desc'  => [ 'label' => __( 'Card 4 Description', 'hello-elementor-child' ), 'default' => 'A brighter tomorrow' ],
	];

	foreach ( $eco_fields as $id => $field ) {
		$wp_customize->add_setting( $id, [
			'default'           => $field['default'],
			'sanitize_callback' => 'sanitize_textarea_field',
		] );
		$wp_customize->add_control( $id, [
			'label'    => $field['label'],
			'section'  => 'owek_section_ecosystem',
			'type'     => 'textarea',
		] );
	}

	// =========================================================================
	// 7. FAQ SECTION
	// =========================================================================
	$wp_customize->add_section( 'owek_section_faq', [
		'title'    => __( '7. FAQ Section', 'hello-elementor-child' ),
		'panel'    => 'owek_theme_panel',
		'priority' => 70,
	] );

	$wp_customize->add_setting( 'owek_faq_badge', [ 'default' => 'Frequently Asked Questions', 'sanitize_callback' => 'sanitize_text_field' ] );
	$wp_customize->add_control( 'owek_faq_badge', [ 'label' => __( 'Badge Text', 'hello-elementor-child' ), 'section' => 'owek_section_faq' ] );

	$wp_customize->add_setting( 'owek_faq_title', [ 'default' => "You have questions.\nWe’ve got answers.", 'sanitize_callback' => 'sanitize_textarea_field' ] );
	$wp_customize->add_control( 'owek_faq_title', [ 'label' => __( 'Heading Title', 'hello-elementor-child' ), 'section' => 'owek_section_faq', 'type' => 'textarea' ] );

	$wp_customize->add_setting( 'owek_faq_desc', [ 'default' => 'We’re building OweK with transparency, so you can make the best decision for your family or your school.', 'sanitize_callback' => 'sanitize_textarea_field' ] );
	$wp_customize->add_control( 'owek_faq_desc', [ 'label' => __( 'Heading Description', 'hello-elementor-child' ), 'section' => 'owek_section_faq', 'type' => 'textarea' ] );

	// 6 FAQs
	$default_faqs = [
		1 => [ 'q' => 'What is OweK?', 'a' => 'OweK is a financing platform for private school and camp tuition. Instead of paying the full bill at once, families can split tuition into manageable monthly payments — while the school or camp gets paid in full, upfront.' ],
		2 => [ 'q' => 'Is OweK a lender?', 'a' => 'OweK isn’t a lender. We partner with a licensed financial institution that provides the financing, while OweK handles the application, plan options, and payments.' ],
		3 => [ 'q' => 'How much will I be able to finance?', 'a' => 'The amount you’re eligible to finance depends on your application and is generally based on your tuition or camp fee. You’ll see your specific options after applying — there’s no cost or commitment to check.' ],
		4 => [ 'q' => 'Will checking my options affect my credit?', 'a' => 'No. Checking your eligibility uses a soft check that does not affect your credit score.' ],
		5 => [ 'q' => 'When will OweK launch?', 'a' => 'We’re building now and onboarding our first school and camp partners. Join the waitlist to be the first to know when OweK is available in your area.' ],
		6 => [ 'q' => 'Can my school or camp offer OweK?', 'a' => 'Yes. Schools and camps can partner with OweK to offer flexible payment options to families at no cost to enroll as a partner. Reach out through “Become a launch partner” to learn more.' ],
	];

	for ( $i = 1; $i <= 6; $i++ ) {
		$q_id = "owek_faq_q{$i}";
		$a_id = "owek_faq_a{$i}";

		$wp_customize->add_setting( $q_id, [ 'default' => $default_faqs[$i]['q'], 'sanitize_callback' => 'sanitize_text_field' ] );
		$wp_customize->add_control( $q_id, [ 'label' => sprintf( __( 'Question %d', 'hello-elementor-child' ), $i ), 'section' => 'owek_section_faq' ] );

		$wp_customize->add_setting( $a_id, [ 'default' => $default_faqs[$i]['a'], 'sanitize_callback' => 'sanitize_textarea_field' ] );
		$wp_customize->add_control( $a_id, [ 'label' => sprintf( __( 'Answer %d', 'hello-elementor-child' ), $i ), 'section' => 'owek_section_faq', 'type' => 'textarea' ] );
	}

	// =========================================================================
	// 8. CONTACT US SECTION
	// =========================================================================
	$wp_customize->add_section( 'owek_section_contact', [
		'title'    => __( '8. Contact Us Section', 'hello-elementor-child' ),
		'panel'    => 'owek_theme_panel',
		'priority' => 80,
	] );

	$wp_customize->add_setting( 'owek_contact_badge', [ 'default' => 'Contact Us', 'sanitize_callback' => 'sanitize_text_field' ] );
	$wp_customize->add_control( 'owek_contact_badge', [ 'label' => __( 'Badge Text', 'hello-elementor-child' ), 'section' => 'owek_section_contact' ] );

	$wp_customize->add_setting( 'owek_contact_title', [ 'default' => 'Questions? Let’s talk.', 'sanitize_callback' => 'sanitize_text_field' ] );
	$wp_customize->add_control( 'owek_contact_title', [ 'label' => __( 'Heading Title', 'hello-elementor-child' ), 'section' => 'owek_section_contact' ] );

	$wp_customize->add_setting( 'owek_contact_desc', [ 'default' => 'Whether you’re exploring tuition financing or interested in partnering with OweK, we’d love to hear from you.', 'sanitize_callback' => 'sanitize_textarea_field' ] );
	$wp_customize->add_control( 'owek_contact_desc', [ 'label' => __( 'Description', 'hello-elementor-child' ), 'section' => 'owek_section_contact', 'type' => 'textarea' ] );

	$wp_customize->add_setting( 'owek_contact_btn_label', [ 'default' => 'Send message', 'sanitize_callback' => 'sanitize_text_field' ] );
	$wp_customize->add_control( 'owek_contact_btn_label', [ 'label' => __( 'Submit Button Text', 'hello-elementor-child' ), 'section' => 'owek_section_contact' ] );

	// External Shortcode Option (Option 1)
	$wp_customize->add_setting( 'owek_contact_shortcode', [
		'default'           => '',
		'sanitize_callback' => 'sanitize_text_field',
	] );
	$wp_customize->add_control( 'owek_contact_shortcode', [
		'label'       => __( 'External Form Shortcode (Optional)', 'hello-elementor-child' ),
		'description' => __( 'Paste a form plugin shortcode (e.g. [wpforms id="123"] or [contact-form-7 id="456"]). If empty, the default pixel-perfect OweK contact form will render.', 'hello-elementor-child' ),
		'section'     => 'owek_section_contact',
		'type'        => 'text',
	] );

	// =========================================================================
	// 9. FORM INTEGRATIONS & WEBHOOKS (Option 2: Webhook / CRM Forwarding)
	// =========================================================================
	$wp_customize->add_section( 'owek_section_integrations', [
		'title'       => __( '9. Form Integrations & Webhooks', 'hello-elementor-child' ),
		'description' => __( 'Connect forms to external services (Zapier, Make, HubSpot, Mailchimp, Google Sheets) while keeping 100% of the pixel-perfect design.', 'hello-elementor-child' ),
		'panel'       => 'owek_theme_panel',
		'priority'    => 85,
	] );

	$wp_customize->add_setting( 'owek_webhook_url', [
		'default'           => '',
		'sanitize_callback' => 'esc_url_raw',
	] );
	$wp_customize->add_control( 'owek_webhook_url', [
		'label'       => __( 'Webhook / CRM Forwarding URL (Recommended)', 'hello-elementor-child' ),
		'description' => __( 'Enter a Zapier, Make, HubSpot, or webhook URL. Every submission will be dispatched as JSON in real-time, while also being archived locally in "OweK Submissions".', 'hello-elementor-child' ),
		'section'     => 'owek_section_integrations',
		'type'        => 'url',
	] );

	$wp_customize->add_setting( 'owek_admin_notify_email', [
		'default'           => get_option( 'admin_email' ),
		'sanitize_callback' => 'sanitize_email',
	] );
	$wp_customize->add_control( 'owek_admin_notify_email', [
		'label'       => __( 'Notification Email', 'hello-elementor-child' ),
		'description' => __( 'Email address to receive lead notifications upon submission.', 'hello-elementor-child' ),
		'section'     => 'owek_section_integrations',
		'type'        => 'email',
	] );

	// =========================================================================
	// 10. FINAL CTA BANNER
	// =========================================================================
	$wp_customize->add_section( 'owek_section_cta', [
		'title'    => __( '10. Final CTA Banner', 'hello-elementor-child' ),
		'panel'    => 'owek_theme_panel',
		'priority' => 90,
	] );

	$cta_fields = [
		'owek_cta_badge'       => [ 'label' => __( 'Badge Text', 'hello-elementor-child' ), 'default' => 'Get Started' ],
		'owek_cta_title'       => [ 'label' => __( 'Main Headline', 'hello-elementor-child' ), 'default' => 'More opportunities ahead.' ],
		'owek_cta_subtitle'    => [ 'label' => __( 'Subtitle', 'hello-elementor-child' ), 'default' => 'Join the waitlist. Be the first to know when OweK launches.' ],
		'owek_cta_placeholder' => [ 'label' => __( 'Input Placeholder', 'hello-elementor-child' ), 'default' => 'Enter your email' ],
		'owek_cta_btn_label'   => [ 'label' => __( 'Button Text', 'hello-elementor-child' ), 'default' => 'Join the waitlist' ],
		'owek_cta_subtext'     => [ 'label' => __( 'Disclaimer Subtext', 'hello-elementor-child' ), 'default' => 'Launching soon. Join for early access.' ],
	];

	foreach ( $cta_fields as $id => $field ) {
		$wp_customize->add_setting( $id, [
			'default'           => $field['default'],
			'sanitize_callback' => 'sanitize_text_field',
		] );
		$wp_customize->add_control( $id, [
			'label'    => $field['label'],
			'section'  => 'owek_section_cta',
			'type'     => 'text',
		] );
	}

	$wp_customize->add_setting( 'owek_cta_bg_color', [
		'default'           => '#8B72F5',
		'sanitize_callback' => 'sanitize_hex_color',
	] );
	$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'owek_cta_bg_color', [
		'label'    => __( 'Banner Background Color', 'hello-elementor-child' ),
		'section'  => 'owek_section_cta',
	] ) );

	// =========================================================================
	// 11. FOOTER SECTION
	// =========================================================================
	$wp_customize->add_section( 'owek_section_footer', [
		'title'    => __( '11. Footer Section', 'hello-elementor-child' ),
		'panel'    => 'owek_theme_panel',
		'priority' => 100,
	] );

	$wp_customize->add_setting( 'owek_footer_copyright', [
		'default'           => '© 2026 OweK. All rights reserved.',
		'sanitize_callback' => 'sanitize_text_field',
	] );
	$wp_customize->add_control( 'owek_footer_copyright', [
		'label'    => __( 'Copyright Text', 'hello-elementor-child' ),
		'section'  => 'owek_section_footer',
	] );

	$wp_customize->add_setting( 'owek_footer_show_watermark', [
		'default'           => true,
		'sanitize_callback' => 'wp_validate_boolean',
	] );
	$wp_customize->add_control( 'owek_footer_show_watermark', [
		'label'    => __( 'Show Massive "oweK" Watermark Graphic', 'hello-elementor-child' ),
		'section'  => 'owek_section_footer',
		'type'     => 'checkbox',
	] );
}
add_action( 'customize_register', 'owek_customize_register' );
