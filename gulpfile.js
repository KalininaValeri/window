var gulp = require('gulp'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    notify = require("gulp-notify"),
    minifyCSS = require('gulp-minify-css'),
    autoprefixer = require('gulp-autoprefixer'),
    concatCss = require('gulp-concat-css'),
    uncss = require('gulp-uncss'),
    clean = require('gulp-clean'),
    pug = require('gulp-pug'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglifyjs'),
    server = require('gulp-server-livereload'),
    connect = require("gulp-connect");

//server connect
gulp.task('connect', function () {
    connect.server({
        root: './dist',
        livereload: true
    });
});

//html-index
gulp.task('pug-index', function () {
    return gulp.src(['app/index.pug'])
        .pipe(pug({pretty: true}))
        .pipe(gulp.dest('dist')) // указываем gulp куда положить скомпилированные HTML файлы
        .pipe(connect.reload())
});

//html-page
gulp.task('pug-page', function () {
    return gulp.src(['app/template/pages/*.pug'])
        .pipe(pug({pretty: true}))
        .pipe(gulp.dest('dist/html')) // указываем gulp куда положить скомпилированные HTML файлы
        .pipe(connect.reload())
});

//style.css
gulp.task('style-css', function () {
    return gulp.src('./app/style/style.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(minifyCSS())
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest('./dist/style'))
        .pipe(connect.reload())
});

//vendor.css
gulp.task('vendor-css', function () {
    return gulp.src(['./app/vendor/**.css'])
        .pipe(concatCss('vendor.css'))
        .pipe(minifyCSS())
        .pipe(rename('vendor.min.css'))
        .pipe(gulp.dest('./dist/style'))
        .pipe(connect.reload())
});

//main.js
gulp.task('main-js', function () {
    return gulp.src(['./app/js/kernel_main.js', './app/js/template.js', './app/js/page.js', './app/js/vendor.js'])
        .pipe(concat('vendor.js'))
        .pipe(uglify({
            outSourceMap: true
        }))
        .pipe(rename('main.min.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(connect.reload())
});

//vendor.js
gulp.task('vendor-js', function () {
    return gulp.src(['./app/vendor/*.js'])
        .pipe(concat('vendor.js'))
        .pipe(uglify())
        .pipe(rename('vendor.min.js'))
        .pipe(gulp.dest('./dist/js'))
        .pipe(connect.reload())
});

//copy img & fonds file
gulp.task('copy', function () {
    gulp.src(['./app/img/**/*.*', './app/fonts/**/*.*'], {base: './app'})
        .pipe(gulp.dest('./dist'))
        .pipe(connect.reload());
});

//watch
gulp.task('watch', function () {
    gulp.watch(['app/style/*.scss', 'app/style/**/*.css', 'app/style/**/*.scss'], ['style-css']);
    gulp.watch(['app/vendor/**/*.css'], ['vendor-css']);
    gulp.watch(['app/index.pug'], ['pug-index']);
    gulp.watch(['app/template/*.pug', 'app/template/pages/**/*.pug', 'app/template/pages/**/*.pug'], ['pug-page']);
    gulp.watch(['app/js/*.js', 'app/js/**/*.js'], ['main-js']);
    gulp.watch(['app/vendor/*.js', 'app/vendor/**/*.js'], ['vendor-js']);
    gulp.watch(['app/img//**/*.*', './app/fonts/**/*.*'], ['copy']);
});

gulp.task('clean', function () {
    return gulp.src('dist', {read: false})
        .pipe(clean());
});

gulp.task('uncss', function () {
    return gulp.src(['./dist/style/style.min.css', './dist/style/vendor.min.css'])
        .pipe(uncss({
            html: ['./dist/index.html']
        }))
        .pipe(gulp.dest('./dist/style/'));
});

// build
gulp.task('build', [
    'pug-index',
    'pug-page',
    'style-css',
    'vendor-css',
    'main-js',
    'vendor-js',
    'copy'
]);

gulp.task('default', ['connect', 'watch']);


