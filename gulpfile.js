/* global require */
const gulp = require('gulp');
const $ = require('gulp-load-plugins')({});
const dist = 'dist';

gulp.task('babel', ()=> {
  return gulp.src(['**/*.js', '!node_modules/**'])
    .pipe($.babel())
    .pipe($.sourcemaps.init())
    .pipe(gulp.dest(dist));
});

gulp.task('lint', ()=> {
  return gulp.src(['**/*.js', '!dist/**', 'gulpfile.js', '!node_modules/**'])
    .pipe($.eslint())
    .pipe($.eslint.format())
    .pipe($.eslint.failAfterError());
});

gulp.task('watch', ['lint', 'babel'], ()=> {
  gulp.watch('./*.js', ['lint', 'babel']);
});
