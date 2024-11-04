<?php
require_once get_stylesheet_directory() . '../../../../vendor/autoload.php';


use Timber\Timber;

if (!class_exists('Timber')) {
    add_action('admin_notices', function () {
        echo '<div class="error"><p>Timber not found. Please install it via Composer.</p></div>';
    });
    return;
}

Timber::init();


Timber::$dirname = ['views'];


class MyTheme extends Timber\Site
{
    public function __construct()
    {
        parent::__construct();
        add_action('wp_enqueue_scripts', [$this, 'enqueue_assets']);
    }

    public function enqueue_assets()
    {

        wp_enqueue_style('parent-style', get_template_directory_uri() . '/style.css');


        wp_enqueue_style('child-style', get_stylesheet_directory_uri() . '/style.css', ['parent-style']);

        wp_enqueue_style('cyf-styles', get_stylesheet_directory_uri() . '/css/cyf-style.css');

        wp_enqueue_script('main-script', get_stylesheet_directory_uri() . '/js/main.js', '', null, true);
    }
}

new MyTheme();
