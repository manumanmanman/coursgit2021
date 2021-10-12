const gulp        = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

//https://medium.com/swlh/setting-up-gulp-4-0-2-for-bootstrap-sass-and-browsersync-7917f5f5d2c5

//compile scss into css
function style() {
    return gulp.src('scss/*.scss')
    .pipe(sass().on('error',sass.logError))
    .pipe(gulp.dest('css'))
    .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
           baseDir: "./",
           index: "/index.html"
        }
    });
    gulp.watch('./scss/*.scss', style)
    gulp.watch('./*.html').on('change',browserSync.reload);
    gulp.watch('./js/*.js').on('change', browserSync.reload);
}

exports.style = style;
// exports.watch = watch;
exports.default = watch;


