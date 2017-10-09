var gulp = require('gulp'),
	imagemin = require('gulp-imagemin'),
	htmlmin = require('gulp-htmlmin'),
	minify = require('gulp-minify-css'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	connect = require('gulp-connect');


// 压缩html
gulp.task('htmlmin', function () {
	gulp.src('./baidu/index.html')
		.pipe(htmlmin({
			removeComments: true,
			collapseWhitespace: true,			
			minifyCSS: true,
			minifyJS: true
		}))
		.pipe(gulp.dest('./newbaidu'));
})
// 压缩图片
gulp.task('imagemin', function () {
	gulp.src('baidu/img/*')
		.pipe(imagemin({
			progressive: true
		}))
		.pipe(gulp.dest('newbaidu/img'));
});
// 压缩css
gulp.task('minifycss', function () {
	gulp.src('baidu/css/*.css')
		.pipe(minify())
		.pipe(concat('main.min.css'))
		.pipe(gulp.dest('./newbaidu/css'));
});
// 压缩js
gulp.task('minifyjs', function () {
	gulp.src('baidu/js/*.js')
		.pipe(uglify())
		.pipe(concat('all.js'))
		.pipe(gulp.dest('./newbaidu/js'));
});

// 用服务器启动项目并实时监测
gulp.task('httpServer', function () {
	connect.server({
		port: 8080,
		host: 'localhost',
		livereload: true
	})
})
gulp.task('reloadPage', function () {
	gulp.src('.').pipe(connect.reload());
})
gulp.task('watch', function () {
	gulp.watch('./baidu/index.html', ['reloadPage']);		
})
gulp.task('default', ['httpServer', 'watch'])



