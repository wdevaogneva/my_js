var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var concatCSS = require('gulp-concat-css');
var ftp = require('gulp-ftp');
var gutil = require('gulp-util');

//gulp.task('test', function() {
	//console.log('All OK!=)');
//});


// Запускаем сервер и отслеживаем scss/html файлы
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "src/"
    });
    // следим за именениями файлов
    gulp.watch("src/sass/**/*.sass", ['sass']);
    gulp.watch("src/**/*.html").on('change', browserSync.reload);
});

// Компилируем Sass в CSS и обновляем страницу
gulp.task('sass', function() {
    return gulp.src("src/sass/**/*.sass")
        .pipe(sass().on('error',sass.logError))
        .pipe (autoprefixer({
        	browsers: ['last 2 versions'],
            cascade: false
        	}))
        .pipe(concatCSS("style.css"))
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());
});

// Выгружаем все файлы через FTP на хостинг
gulp.task('ftp', function(){
	return gulp.src('src/**')
	.pipe(ftp({
    host: '88.99.148.81',
    user: 'aogne516',
    pass: 'fBwO152Iyr',
    remotePath:'www/ayuo.ru/rezerv/buisness-trans-group'
  }))
  .pipe(gutil.noop());
});

gulp.task('default', ['serve']);