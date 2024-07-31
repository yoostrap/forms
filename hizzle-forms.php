<?php
/**
 * Plugin Name: Hizzle Forms
 * Plugin URI: https://yoostrap.com
 * Description: A lightweight forms plugin.
 * Version: 1.0.6
 * Author: Hizzle
 * Author URI: https://yoostrap.com
 * Text Domain: hizzle-forms
 * Domain Path: /languages/
 * Requires at least: 5.5
 * Requires PHP: 7.0
 *
 * @fs_premium_only /pro/
 */

defined( 'ABSPATH' ) || exit;

// Define constants.
if ( ! defined( 'HIZZLE_FORMS_PLUGIN_FILE' ) ) {
	define( 'HIZZLE_FORMS_PLUGIN_FILE', __FILE__ );
}

if ( ! defined( 'HIZZLE_FORMS_VERSION' ) ) {
	define( 'HIZZLE_FORMS_VERSION', '1.0.6' );
}

if ( ! defined( 'HIZZLE_FORMS_DB_VERSION' ) ) {
	define( 'HIZZLE_FORMS_DB_VERSION', 1 );
}

define( 'HF_PATH', plugin_dir_path( __FILE__ ) );
define( 'HF_ASSETS_URL', plugin_dir_url( __FILE__ ) . 'assets/' );
// Include the auto loader.
require 'vendor/autoload.php';

// Include necessary files.
require_once HF_PATH . 'src/functions.php';
require_once HF_PATH . 'src/constants.php';

if ( ! function_exists( 'hf_fs' ) ) {
    // Create a helper function for easy SDK access.
    function hf_fs() {
        global $hf_fs;

        if ( ! isset( $hf_fs ) ) {
            // Activate multisite network integration.
            if ( ! defined( 'WP_FS__PRODUCT_15381_MULTISITE' ) ) {
                define( 'WP_FS__PRODUCT_15381_MULTISITE', true );
            }

            // Include Freemius SDK.
            require_once dirname(__FILE__) . '/freemius/start.php';

            $hf_fs = fs_dynamic_init( array(
                'id'                  => '15381',
                'slug'                => 'hizzle-forms',
                'premium_slug'        => 'hizzle-forms-pro',
                'type'                => 'plugin',
                'public_key'          => 'pk_f965caeb7b47a4d6607381e3b3704',
                'is_premium'          => true,
                'premium_suffix'      => 'Starter',
                // If your plugin is a serviceware, set this option to false.
                'has_premium_version' => true,
                'has_addons'          => false,
                'has_paid_plans'      => true,
                'trial'               => array(
                    'days'               => 7,
                    'is_require_payment' => false,
                ),
                'menu'                => array(
                    'slug'           => 'hizzle-forms',
                    'first-path'     => 'admin.php?page=hizzle-forms-help',
                    'network'        => true,
                ),
            ) );
        }

        return $hf_fs;
    }

    // Init Freemius.
    hf_fs();
    // Signal that SDK was initiated.
    do_action( 'hf_fs_loaded' );
}

register_activation_hook(__FILE__, 'hizzle_forms_create_table');

function hizzle_forms_create_table() {
    global $wpdb;
    $table_name = $wpdb->prefix . 'hizzle_forms_responses';
    $charset_collate = $wpdb->get_charset_collate();

    $sql = "CREATE TABLE $table_name (
        id mediumint(9) NOT NULL AUTO_INCREMENT,
        form_id mediumint(9) NOT NULL,
        submission_time datetime DEFAULT '0000-00-00 00:00:00' NOT NULL,
        form_data text NOT NULL,
        PRIMARY KEY  (id)
    ) $charset_collate;";

    require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
    dbDelta($sql);
}


// Add a check to ensure the table exists on every admin page load
add_action('admin_init', 'hizzle_forms_check_and_create_table');

function hizzle_forms_check_and_create_table() {
    global $wpdb;
    $table_name = $wpdb->prefix . 'hizzle_forms_responses';

    if ($wpdb->get_var("SHOW TABLES LIKE '$table_name'") != $table_name) {
        $charset_collate = $wpdb->get_charset_collate();

        $sql = "CREATE TABLE $table_name (
            id mediumint(9) NOT NULL AUTO_INCREMENT,
            form_id mediumint(9) NOT NULL,
            submission_time datetime DEFAULT '0000-00-00 00:00:00' NOT NULL,
            form_data text NOT NULL,
            PRIMARY KEY  (id)
        ) $charset_collate;";

        require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
        dbDelta($sql);
    }
}

/**
 * Returns the main plugin instance.
 *
 * @since  1.0.0
 * @return Hizzle\Forms\Plugin
 */
function hizzle_forms() {
	return Hizzle\Forms\Plugin::instance();
}

// Kickstart the plugin.
hizzle_forms();
