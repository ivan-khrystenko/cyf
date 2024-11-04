<?php
/*
Template Name: Choose Your Format (CYF)
*/

use Timber\Timber;

$context = Timber::context();

// Отримуємо всі поля ACF, які будуть передані в Twig шаблон
$context['acf'] = get_fields();

// Рендеримо шаблон `cyf.twig`
Timber::render('views/cyf.twig', $context);
