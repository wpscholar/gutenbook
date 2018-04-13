<?php

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Enqueue Gutenberg block assets for both frontend + backend.
 *
 * `wp-blocks`: includes block type registration and related functions.
 *
 * @since 1.0.0
 */
function gutenbook_block_assets() {

	wp_enqueue_style(
		'gutenbook-style-css',
		plugins_url( 'dist/blocks.style.build.css', __DIR__ ),
		[ 'wp-blocks' ],
		filemtime( __DIR__ . '/block/editor.scss' )
	);

}

add_action( 'enqueue_block_assets', 'gutenbook_block_assets' );

/**
 * Enqueue Gutenberg block assets for backend editor.
 *
 * `wp-blocks`: includes block type registration and related functions.
 * `wp-element`: includes the WordPress Element abstraction for describing the structure of your blocks.
 * `wp-i18n`: To internationalize the block's text.
 *
 * @since 1.0.0
 */
function gutenbook_editor_assets() {

	wp_enqueue_script(
		'gutenbook-block-js',
		plugins_url( '/dist/blocks.build.js', __DIR__ ),
		[ 'wp-blocks', 'wp-element', 'wp-i18n' ],
		filemtime( __DIR__ . '/block/block.js' )
	);

	wp_enqueue_style(
		'gutenbook-block-editor-css', // Handle.
		plugins_url( 'dist/blocks.editor.build.css', __DIR__ ),
		[ 'wp-edit-blocks' ],
		filemtime( __DIR__ . '/block/editor.scss' )
	);

}

add_action( 'enqueue_block_editor_assets', 'gutenbook_editor_assets' );
