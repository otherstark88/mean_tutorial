var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var runSequence = require('run-sequence');

gulp.task('default', function (callback) {
  runSequence(['browserSync', 'watch'],
    callback
  )
})

gulp.task('watch', ['browserSync'], function (){
  gulp.watch('app/html/*.html', browserSync.reload);
  gulp.watch('app/js/*.js', browserSync.reload);

});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
});
