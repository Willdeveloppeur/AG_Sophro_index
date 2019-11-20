<?php 

// Ajouter la prise en charge des images mises en avant
add_theme_support( 'post-thumbnails' );

// Ajouter automatiquement le titre du site dans l'en-tête du site
add_theme_support( 'title-tag' );

add_action('wp_enqueue_scripts', 'gkp_insert_css_in_head');//Load css files
function gkp_insert_css_in_head() {
    // On ajoute le css general du theme
    wp_register_style('style', get_bloginfo( 'stylesheet_url' ),'',false,'screen');
    wp_enqueue_style( 'style' );
}

wp_enqueue_script( 
    'wp_enqueue_scripts', 
    get_template_directory_uri() . '/js/script.js', 
    array( 'jquery' ), 
    '1.0', 
    true
);
