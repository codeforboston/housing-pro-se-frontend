var gulp = require('gulp');
var gulpNgConfig = require('gulp-ng-config');

gulp.task('test', function () {
  gulp.src('configFile.json')
  .pipe(gulpNgConfig('config'))
  .pipe(gulp.dest('.'))
});

gulp.task('default', function() {
	console.log("hi there");
})