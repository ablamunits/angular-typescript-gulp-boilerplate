var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var concat = require('gulp-concat');
var ts = require('gulp-typescript');
var clean = require('gulp-clean');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync').create();

var browserify = require("browserify");
var source = require('vinyl-source-stream');
var tsify = require("tsify");

var tsProject = ts.createProject('tsconfig.json');

gulp.task('default', ['build-fresh']);

gulp.task('sass', function(){
  gulp.src('src/**/*.scss')
		.pipe(plumber())
		.pipe(sass().on('error', sass.logError))
    .pipe(sass()) // Using gulp-sass
		.pipe(concat('styles-concat.css'))
    .pipe(gulp.dest('dist'))
		.pipe(browserSync.reload({
			stream: true
		}))
		.pipe(plumber.stop());
});

gulp.task('html-copy', function() {
	return gulp.src('src/**/*.html')
		.pipe(gulp.dest('dist'))
		.pipe(browserSync.reload({
			stream: true
		}))
});

gulp.task('assets-copy', function() {
	return gulp.src('src/assets/**/*.*')
		.pipe(gulp.dest('dist/assets'))
		.pipe(browserSync.reload({
			stream: true
		}))
});

gulp.task('ts-copy', function() {
	return browserify({
		basedir: '.',
		debug: true,
		entries: ['src/app.ts'],
		cache: {},
		packageCache: {}
	})
	.plugin(tsify)
	.bundle()
	.pipe(source('bundle.js'))
	.pipe(gulp.dest('dist'));
});

gulp.task('browserSync', function() {
	browserSync.init({
		notify: false,
		server: {
			baseDir: 'dist'
		}
	});
});

gulp.task('clean', function (){
	return gulp.src('dist/*')
		.pipe(clean());
});

gulp.task('build-fresh', function () {
	runSequence('clean', 'sass', 'html-copy', 'assets-copy', 'ts-copy', 'watch');
});

gulp.task('watch', ['browserSync', 'sass', 'html-copy', 'assets-copy', 'ts-copy'], function() {
	gulp.watch('src/**/*.scss', ['sass']);
	gulp.watch('src/assets/**/*.*', ['assets-copy']);
	gulp.watch('src/**/*.html', ['html-copy', 'ts-copy']);
	gulp.watch('src/**/*.ts', ['html-copy', 'ts-copy']);
});
