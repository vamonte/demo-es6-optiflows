var gulp = require('gulp'),
    connect = require('gulp-connect'),
    order = require('gulp-order'),
    concat = require('gulp-concat'),
    traceur = require('gulp-traceur-compiler')
    paths = {
       base: ['src/base/*.js'],
       app1: ['src/app1/*.js']
    };
 
 /*
        

*/
gulp.task('base', function () {
    gulp.src(paths.base)
        .pipe(traceur({
            modules: 'register',
            prefix: "base/"
        }))
        .pipe(concat('base.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('app1', function () {
    gulp.src(paths.app1)
        .pipe(order(['app1/tibo.js', 'app1/room.js', 'app1/init.js'], {base: './src'}))
        .pipe(traceur({
            modules: 'register',
            prefix: "app1/"
        }))
        .pipe(concat('app1.js'))
        .pipe(gulp.dest('dist'));
});
 
gulp.task('watch', function() {
  gulp.watch(paths.base, ['base']);
  gulp.watch(paths.app1, ['app1']);
});

gulp.task('webserver', function(){
    connect.server({
        livereload: true
    });
});

gulp.task('default', ['webserver', 'app1', 'base', 'watch']);