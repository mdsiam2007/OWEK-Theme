<?php
/**
 * Hello Elementor Child Theme functions and definitions
 *
 * @package HelloElementorChild
 * @author Siam
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Completely disable Hello Elementor's parent styles:
 * - reset.css (which injects pink #c36 button hovers & square 3px borders)
 * - theme.css (which caps content to 1140px)
 * - header-footer.css
 */
add_filter( 'hello_elementor_enqueue_style', '__return_false' );
add_filter( 'hello_elementor_enqueue_theme_style', '__return_false' );
add_filter( 'hello_elementor_header_footer', '__return_false' );

/**
 * Dequeue any other conflicting external/core styles on the landing page
 */
function owek_dequeue_conflicting_styles() {
	wp_dequeue_style( 'hello-elementor' );
	wp_deregister_style( 'hello-elementor' );
	wp_dequeue_style( 'hello-elementor-theme-style' );
	wp_deregister_style( 'hello-elementor-theme-style' );
	wp_dequeue_style( 'hello-elementor-header-footer' );
	wp_deregister_style( 'hello-elementor-header-footer' );
	wp_dequeue_style( 'wp-block-library' );
	wp_dequeue_style( 'wp-block-library-theme' );
	wp_dequeue_style( 'global-styles' );
	wp_dequeue_style( 'classic-theme-styles' );
}
add_action( 'wp_enqueue_scripts', 'owek_dequeue_conflicting_styles', 9999 );
add_action( 'wp_print_styles', 'owek_dequeue_conflicting_styles', 9999 );

// Remove WordPress core inline global block styles
remove_action( 'wp_enqueue_scripts', 'wp_enqueue_global_styles' );
remove_action( 'wp_footer', 'wp_enqueue_global_styles', 1 );

/**
 * Enqueue scripts and styles with top priority so our project CSS always takes precedence.
 */
function owek_enqueue_child_styles() {
	// 1. Google Fonts: Inter, Poppins, Plus Jakarta Sans
	wp_enqueue_style(
		'owek-google-fonts',
		'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600;1,700&family=Plus+Jakarta+Sans:ital,wght@0,400..800;1,400..800&display=swap',
		[],
		null
	);

	// 2. Child theme root style.css
	wp_enqueue_style(
		'hello-elementor-child-style',
		get_stylesheet_uri(),
		[],
		'1.0.0'
	);

	// 3. OweK Main Unified CSS (100% Pixel Perfect)
	wp_enqueue_style(
		'owek-main-style',
		get_stylesheet_directory_uri() . '/assets/css/owek-main.css',
		[ 'hello-elementor-child-style', 'owek-google-fonts' ],
		time() // Cache bust to ensure immediate browser reload
	);

	// 4. OweK Main JavaScript
	wp_enqueue_script(
		'owek-main-script',
		get_stylesheet_directory_uri() . '/assets/js/owek-main.js',
		[],
		time(),
		true
	);

	// Localize asset URI and AJAX nonce for JS
	wp_localize_script( 'owek-main-script', 'owekData', [
		'themeUrl' => get_stylesheet_directory_uri(),
		'ajaxUrl'  => admin_url( 'admin-ajax.php' ),
		'nonce'    => wp_create_nonce( 'owek_form_nonce' ),
	] );
}
add_action( 'wp_enqueue_scripts', 'owek_enqueue_child_styles', 99999 );

/**
 * Add custom body class for theme styling
 */
function owek_body_classes( $classes ) {
	$classes[] = 'owek-theme-active';
	return $classes;
}
add_filter( 'body_class', 'owek_body_classes' );

/**
 * Register theme features
 */
function owek_setup_theme() {
	add_theme_support( 'title-tag' );
	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'html5', [ 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption' ] );
}
add_action( 'after_setup_theme', 'owek_setup_theme' );

/**
 * Load Customizer and Form Submissions System
 */
require_once get_stylesheet_directory() . '/inc/form-handler.php';
require_once get_stylesheet_directory() . '/inc/customizer.php';
require_once get_stylesheet_directory() . '/inc/customizer-styles.php';

