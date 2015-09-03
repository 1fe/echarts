var gulp = require('gulp');
var del = require('del');
var plumber = require('gulp-plumber');
var replace = require('gulp-replace');

// lib
gulp.task('lib-clean', function () {
    return del('./lib/*');
});

gulp.task('lib-assets', ['lib-clean'], function () {
    return gulp.src(['./src/**/*.*', '!./src/**/*.js'])
        .pipe(gulp.dest('./lib'));
});

gulp.task('lib-compile', ['lib-clean'], function () {
    return gulp.src(['./src/**/*.js'])
        .pipe(plumber())
        .pipe(replace('require(\'zrender\')', 'require(\'zrenderjs\')'))
        .pipe(replace('require(\'zrender/', 'require(\'zrenderjs/'))
        .pipe(gulp.dest('./lib'));
});

gulp.task('lib', ['lib-clean', 'lib-assets', 'lib-compile']);

// dist
gulp.task('dist-clean', function () {
    return del('./dist/*');
});

gulp.task('dist-assets', ['dist-clean'], function () {
    return gulp.src(['./src/**/*.*', '!./src/**/*.js'])
        .pipe(gulp.dest('./dist'));
});

gulp.task('dist-compile', ['dist-clean'], function () {
    return gulp.src(['./src/**/*.js'])
        .pipe(plumber())
        .pipe(replace('require(\'zrender\')', 'require(\'zrenderjs\')'))
        .pipe(replace('require(\'zrender/', 'require(\'zrenderjs/'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('dist-x', ['dist-clean'], function () {
    return gulp.src(['./package.json', './README.md', './LICENSE'])
        .pipe(gulp.dest('./dist'));
});

gulp.task('dist', ['dist-clean', 'dist-assets', 'dist-compile', 'dist-x']);

gulp.task('default', ['dist']);
