const gulp = require('gulp');
const babel = require('gulp-babel');
const clean = require('gulp-clean');
const runSequence = require('run-sequence');

gulp.task('clean-dist', () => {
  return gulp.src('dist/*', {
    read: false
  }).pipe(clean({
    force: true
  }));
});

gulp.task('copy-libs', () => {
  return gulp.src('src/lib/*.js').pipe(gulp.dest('dist/lib'))
});

gulp.task('copy-html', () => {
  return gulp.src('src/**/*.html').pipe(gulp.dest('dist/'))
});

gulp.task('es6', () => {
  return gulp.src('src/**/*.js').pipe(babel({
    "presets": ['es2015'],
    "ignore": [
      "src/lib/*.js"
    ]
  })).pipe(gulp.dest('dist'));
})


gulp.task('default', (callback) => {
  runSequence('clean-dist', ['copy-libs', 'copy-html', 'es6'], callback);
});

gulp.watch('src/app/**/*.js', ['es6']);
