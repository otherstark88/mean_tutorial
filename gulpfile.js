var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var runSequence = require('run-sequence');
var sass = require('gulp-sass');

gulp.task('default', function (callback) {
  runSequence('sass', 'watch')
})

gulp.task('watch', ['browserSync'], function (){
  gulp.watch('app/html/*.html', browserSync.reload);
  gulp.watch('app/js/*.js', browserSync.reload);
  gulp.watch('app/js/*.js', browserSync.reload);

});

gulp.task('sass', function(){
  return gulp.src('app/scss/**/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('app/css'))
})

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
});
