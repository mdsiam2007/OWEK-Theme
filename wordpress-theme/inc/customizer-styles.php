<?php
/**
 * OweK Customizer Dynamic Styles
 * Generates inline CSS from Customizer settings
 *
 * @package HelloElementorChild
 * @author Siam
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Output Customizer CSS variables and dynamic color rules
 */
function owek_output_customizer_css() {
	$primary_color    = owek_get_option( 'owek_color_primary', '#8B72F5' );
	$dark_color       = owek_get_option( 'owek_color_dark', '#000C2A' );
	$text_primary     = owek_get_option( 'owek_color_text_primary', '#111318' );
	$text_secondary   = owek_get_option( 'owek_color_text_secondary', '#6F6B65' );
	$bg_warm          = owek_get_option( 'owek_color_bg_warm', '#F8F5EE' );
	$bg_cream         = owek_get_option( 'owek_color_bg_cream', '#FFF9F2' );

	$hero_bg_color    = owek_get_option( 'owek_hero_bg_color', '#000C2A' );
	$cta_bg_color     = owek_get_option( 'owek_cta_bg_color', '#8B72F5' );
	$wave_color       = owek_get_option( 'owek_how_wave_color', '#000C2A' );

	$custom_css = "
		:root {
			--color-primary: {$primary_color} !important;
			--color-dark: {$dark_color} !important;
			--color-text-primary: {$text_primary} !important;
			--color-text-secondary: {$text_secondary} !important;
			--color-bg-warm: {$bg_warm} !important;
			--color-bg-cream: {$bg_cream} !important;
		}

		/* Dynamic Section Background Colors */
		.hero-section,
		.hero-content-col {
			background-color: {$hero_bg_color} !important;
		}

		.cta-banner-wrapper {
			background-color: {$cta_bg_color} !important;
		}

		.how-wave-img path {
			fill: {$wave_color} !important;
		}

		.hero-submit-btn,
		button.hero-submit-btn {
			background: {$primary_color} !important;
			background-color: {$primary_color} !important;
		}

		.contact-submit-btn,
		button.contact-submit-btn {
			background: {$primary_color} !important;
			background-color: {$primary_color} !important;
		}

		.link-text-underline {
			border-bottom-color: {$primary_color} !important;
		}

		.link-arrow-icon {
			stroke: {$primary_color} !important;
		}
	";

	wp_add_inline_style( 'owek-main-style', $custom_css );
}
add_action( 'wp_enqueue_scripts', 'owek_output_customizer_css', 999999 );
