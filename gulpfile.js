'use strict';

var gulp = require('gulp');
var rimraf = require('rimraf');
var concat = require('gulp-concat');
var run = require('gulp-run');
var addsrc = require('gulp-add-src');
var uglify = require('gulp-uglify');

var paths = {
  filesrc: 'source/**/*',
  jssrc: 'source/**/*.js',
  htmlsrc: 'source/**/*.html',
  filedest: 'public'
};

gulp.task('default', ['build', 'watch']);

gulp.task('watch', function() {
  gulp.watch(paths.filesrc, ['build']);
});

gulp.task('build', ['clean', 'bower'], function() {
  gulp.src(paths.jssrc)
  .pipe(concat('bundle.min.js'))
  .pipe(uglify())
  .pipe(addsrc(paths.htmlsrc))
  .pipe(gulp.dest(paths.filedest));
});

gulp.task('clean', function(cb) {
  rimraf(paths.filedest, cb);
});

gulp.task('bower', function(cb) {
  run('bower i').exec(cb);
});
