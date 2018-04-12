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

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
