const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

sass.compiler = require('sass');

const scss = () => gulp.src('./sass/**/*.scss')
	.pipe(sourcemaps.init())
	.pipe(sass().on('error', sass.logError))
	.pipe(sourcemaps.write('./sourcemaps'))
	.pipe(gulp.dest('./css'));

const watch = () => {
	gulp.watch("sass/**/*.scss", scss);
}

gulp.task('sass', scss);
gulp.task('watch', watch);
gulp.task('default', gulp.series(scss, watch));