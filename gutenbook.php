<?php

/*
 * Plugin Name: Gutenbook
 * Plugin URI:
 * Description: A custom Gutenberg block for displaying book details (author, description and title) in a card-style format.
 * Version: 0.1.0
 * Author: Micah Wood
 * Author URI:  https://wpscholar.com
 * License:     GPL2
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: gutenbook
 */

load_plugin_textdomain(
	'gutenbook',
	false,
	plugin_basename( __DIR__ ) . '/languages/'
);

add_action( 'init', function () {

	wp_register_script(
		'wpscholar-gutenbook',
		plugins_url( 'block.js', __FILE__ ),
		array( 'underscore', 'wp-blocks', 'wp-data', 'wp-element', 'wp-i18n' )
	);

	wp_register_style(
		'wpscholar-gutenbook',
		plugins_url( 'block.css', __FILE__ ),
		array(),
		filemtime( __DIR__ . '/block.css' )
	);

	if ( function_exists( 'gutenberg_get_jed_locale_data' ) ) {
		wp_add_inline_script(
			'wpscholar-gutenbook',
			'wp.i18n.setLocaleData( ' . json_encode( gutenberg_get_jed_locale_data( 'gutenbook' ) ) . ' );',
			'before'
		);
	}

	if ( function_exists( 'register_block_type' ) ) {
		register_block_type( 'wpscholar/gutenbook', [
			'style'         => 'wpscholar-gutenbook',
			'editor_script' => 'wpscholar-gutenbook',
		] );
	}

} );