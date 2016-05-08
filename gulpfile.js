const gulp = require('gulp');
const babel = require('gulp-babel');
const stylus = require('gulp-stylus');
const plumber = require('gulp-plumber');

const paths = {
  babel: ['./assets/js/**/*.js'],
  stylus: ['./assets/styl/**/*.styl'],
};

gulp.task('default', ['babel', 'stylus']);

gulp.task('watch', () => {
  gulp.watch(paths.babel, ['babel']);
  gulp.watch(paths.stylus, ['stylus']);
});

gulp.task('babel', () => {
  return gulp.src(paths.babel)
    .pipe(plumber())
    .pipe(babel())
    .pipe(gulp.dest('./public/js'));
});

gulp.task('stylus', () => {
  return gulp.src(paths.stylus)
    .pipe(plumber())
    .pipe(stylus())
    .pipe(gulp.dest('./public/css'));
});