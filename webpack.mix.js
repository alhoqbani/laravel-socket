let mix = require('laravel-mix');

mix.webpackConfig({
    resolve: {
        alias: {
            jquery: "jquery/src/jquery",
        }
    },
});

mix.js('resources/assets/js/app.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css');
