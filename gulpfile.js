var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var autoprefixer = require('autoprefixer');

var postcss = require('gulp-postcss');
var cssnano = require('cssnano');

gulp.task('sass', function() {
  var plugins = [
    autoprefixer({ browsers: ['last 2 versions'], cascade: false}),
    cssnano()
  ];
  return gulp.src('sass/index.scss')
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(postcss(plugins))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: './'
    },
  })
});

gulp.task('dev', ['browserSync', 'sass'], function() {
  gulp.watch('sass/*.scss', ['sass']);
  // Reloads the browser whenever HTML or JS files change
  gulp.watch('*.html', browserSync.reload);
});

gulp.task('default', ['sass']);
