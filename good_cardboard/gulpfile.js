const gulp = require('gulp');
const bs = require('browser-sync');
const sass = require('gulp-sass');
var gutil = require('gulp-util');
var ftp = require('vinyl-ftp');
const autoprefixer = require('gulp-autoprefixer');
//var fontgen = require('gulp-fontgen');
//var ttf2woff = require('gulp-ttf2woff');


// Запускаем сервер, предварительно скопилировав SASS
gulp.task('serve', ['sass'], () => {

	bs.init({
		server: "./src"
	});

	gulp.watch("src/sass/*.sass", ['sass']);
	gulp.watch("src/*.html").on('change', bs.reload);
	gulp.watch("src/js/*.js").on('change', bs.reload);
});

// Делаем компиляцию SASS в CSS 
gulp.task('sass', () => {
	return gulp.src("src/sass/*.sass")
		.pipe(sass())
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(gulp.dest("src/css"))
		.pipe(bs.stream());
});

// Конвертируем шрифты
// gulp.task('fontgen', () => {
//     return gulp.src('/src/fonts/*.{ttf,otf}')
//         .pipe(fontgen({dest: '/src/fonts/'}))
//         .pipe(gulp.dest('/src/fonts/'));
// });


gulp.task('default', ['serve']);

// Выгрузка проекта на FTP-сервер
gulp.task('deploy', () => {

	var conn = ftp.create({
		log: gutil.log
	});

	var globs = [
		'src/**'
	];

	// using base = '.' will transfer everything to /public_html correctly
	// turn off buffering in gulp.src for best performance

	return gulp.src(globs, {
			base: '.',
			buffer: false
		})
		.pipe(conn.newer('/www/evgeniisolovev.ru')) // only upload newer files
		.pipe(conn.dest('/www/evgeniisolovev.ru'));

});