<?php 
// правильный способ подключить стили и скрипты
add_action( 'wp_enqueue_scripts', 'theme_name_scripts' );
// add_action('wp_print_styles', 'theme_name_scripts'); // можно использовать этот хук он более поздний
function theme_name_scripts() {
	wp_enqueue_style( 'style', get_stylesheet_uri() );
	wp_enqueue_style( 'bootstrap', get_template_directory_uri() . '/css/bootstrap-grid.min.css' );
	wp_enqueue_style( 'animate', get_template_directory_uri() . '/css/animate.css' );
	wp_enqueue_style( 'slick-theme', get_template_directory_uri() . '/slick/slick-theme.css' );
	wp_enqueue_style( 'slick', get_template_directory_uri() . '/slick/slick.css' );
	wp_enqueue_style( 'main', get_template_directory_uri() . '/css/style.min.css' );
}
add_action( 'wp_enqueue_scripts', 'themeScripts' );
function themeScripts() {
	wp_deregister_script( 'jquery' );
	wp_register_script( 'jquery', 'https://code.jquery.com/jquery-2.2.4.min.js');
    wp_enqueue_script( 'jquery' );
    wp_enqueue_script( 'masked-input', get_template_directory_uri() . '/js/jquery.maskedinput.js', array('jquery'), null, true );
    wp_enqueue_script( 'slick', get_template_directory_uri() . '/slick/slick.min.js', array('jquery'), null, true );
    wp_enqueue_script( 'wowjs', get_template_directory_uri() . '/js/wow.min.js', array('jquery'), null, true );
    wp_enqueue_script( 'main', get_template_directory_uri() . '/js/main.js', array('jquery'), null, true );
}

?>