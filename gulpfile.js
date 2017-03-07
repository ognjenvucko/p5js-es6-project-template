const gulp = require('gulp');
require babel = require('gulp-babel');

gulp.task('copy-libs', () => {
  return gulp.src('src/lib/*.js').pipe(gulp.dest('dist/lib'))
});
