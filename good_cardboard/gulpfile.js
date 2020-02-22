const gulp = require('gulp');
const bs = require('browser-sync');
const sass = require('gulp-sass');
var gutil = require( 'gulp-util' );
var ftp = require( 'vinyl-ftp' );


// Запускаем сервер, предварительно скопилировав SASS
gulp.task('serve', ['sass'], () => {

    bs.init({
        server: "./src"
    });

    gulp.watch("src/sass/*.sass", ['sass']);
    gulp.watch("src/*.html").on('change', bs.reload);
});

// Делаем компиляцию SASS в CSS 
gulp.task('sass', () => {
    return gulp.src("src/sass/*.sass")
        .pipe(sass())
        .pipe(gulp.dest("src/css"))
        .pipe(bs.stream());
});

gulp.task('default', ['serve']);

// Выгрузка проекта на FTP-сервер
gulp.task('deploy', () => {

	var conn = ftp.create( {
		
		log:      gutil.log
	} );

	var globs = [
		'src/**'
	];

	// using base = '.' will transfer everything to /public_html correctly
	// turn off buffering in gulp.src for best performance

	return gulp.src( globs, { base: '.', buffer: false } )
		.pipe( conn.newer( '/www/evgeniisolovev.ru' ) ) // only upload newer files
		.pipe( conn.dest( '/www/evgeniisolovev.ru' ) );

} );
