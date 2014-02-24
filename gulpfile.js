var gulp = require('gulp');
var coffee = require('gulp-coffee');
var jasmine = require('gulp-jasmine');

gulp.task('default', function(){
  console.log('dasd');
});

gulp.task('coffee', function() {
  gulp.src('src/*.coffee')
      .pipe(coffee({ bare: true }))
      .on('error', function(err) { console.log(err); })
      .pipe(gulp.dest('build/'));
});

gulp.task('test', ['coffee'], function() {
  gulp.src('spec/*_spec.js').pipe(jasmine());
});

gulp.task('watch', function() {
  gulp.watch(['spec/*_spec.js', 'src/*.coffee'], ['test']);
});
