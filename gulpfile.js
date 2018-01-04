'use strict';
/*----------------------------------------------------------------------------------------------------------*/
//  This part works with app folder
{
    var gulp = require('gulp'),
        sass = require('gulp-sass'),
        browserSync = require('browser-sync');



    gulp.task('sass', function(){ // Создаем таск "sass"
        return gulp.src('dist/scss/**/*.scss') // Берем все sass файлы из папки sass и дочерних, если таковые будут
            .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
            .pipe(gulp.dest('app/css')) // Выгружаем результата в папку app/css
            .pipe(browserSync.reload({stream: true})); // Обновляем CSS на странице при изменении

    });



    gulp.task('browser-sync', function() { // Создаем таск browser-sync
        browserSync({ // Выполняем browser Sync
            server: { // Определяем параметры сервера
                baseDir: 'app/' // Директория для сервера - app
            },
            notify: false // Отключаем уведомления
        });
    });



    gulp.task('watch', ['sass','browser-sync'], function () {
        gulp.watch('dist/scss/**/*.scss', ['sass'], browserSync.reload);
        gulp.watch('app/*.html', browserSync.reload);
        gulp.watch('app/js/**/*.js', browserSync.reload);
    });

}