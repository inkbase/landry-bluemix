var gulp = require('gulp');
var sass = require('gulp-sass');

// compile Sass
gulp.task('styles', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/css/'));
});

// watch task
gulp.task('default', function() {
  gulp.watch('sass/**/*.scss',['styles']);
});
