<?php get_header(); ?>

<main id="site-content" role="main">

    <?php
    if (have_posts()) {

        while (have_posts()) {
            the_post();

            get_template_part('template-parts/content-title');
        }
    }

    ?>

</main>
<!-- #site-content -->

<?php get_template_part('template-parts/footer-with-buttons'); ?>

<?php get_footer(); ?>
