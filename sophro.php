<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
    
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

<header>
    <div class="logoPro">
        <img id="AGlogo" src="<?php echo get_template_directory_uri(); ?>/img/AGlogo.svg"  alt="">
        <h1><p>Armelle <span>.</span> GARDANES</p></h1>
        <div id="partners">
            <!-- <img id="syndsophro" src="<?php echo get_template_directory_uri(); ?>/img/syndsophro.jpg" alt="">
            <img id="fepslogo" src="<?php echo get_template_directory_uri(); ?>/img/fepslogo.png" alt=""> -->
        </div>
    </div>
    <nav class="nav">
        <a href="sophro.php">Sophrologie</a>
        <a href="" target="blanck">Prestations</a>
        <a href="" target="blanck">Qui suis-je ?</a>
        <a href="">BLOG</a>
        <a href="">Contact</a>
    </nav>
</header>









  <!-- <header class="header">
    <a href="<?php echo home_url( '/' ); ?>">
      <img src="<?php echo get_template_directory_uri(); ?>/img/logo.svg" alt="Logo">
    </a> 
    
    <h1 class="name">Armelle <span class="point">.</span> GARDANÈS</h1>
  </header> -->

    <?php wp_body_open(); ?>