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

// Windows下会报 Error: EISDIR: illegal operation on a directory, read 的错误，暂时找不到解决的办法
// gulp.task('copy', function() {
//   gulp.src([
//       'node_modules/bootstrap/dist/**/*',
//       '!**/npm.js',
//       '!**/bootstrap-theme.*',
//       '!**/*.map'
//     ])
//     .pipe(gulp.dest('vendor/bootstrap'))

//   gulp.src(['node_modules/jquery/dist/jquery.js', 'node_modules/jquery/dist/jquery.min.js'])
//     .pipe(gulp.dest('vendor/jquery'))

//   gulp.src(['node_modules/jquery.easing/*.js'])
//     .pipe(gulp.dest('vendor/jquery-easing'))

//   gulp.src([
//       'node_modules/font-awesome/**',
//       '!node_modules/font-awesome/**/*.map',
//       '!node_modules/font-awesome/.npmignore',
//       '!node_modules/font-awesome/*.txt',
//       '!node_modules/font-awesome/*.md',
//       '!node_modules/font-awesome/*.json'
//     ])
//     .pipe(gulp.dest('vendor/font-awesome'))

//   gulp.src(['node_modules/normalize.css/normalize.css'])
//     .pipe(gulp.dest('vendor/normalize'))
// });

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
