

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
var csso = require('gulp-csso');

sass.compiler = require('node-sass');
const paths = {
    styles:{
        src:"assets/scss/styles.scss" ,
        dest:"src/static/styles" ,
        watch:"assets/scss/**/*.scss"
    }
};

 function styles(){
    return gulp
    .src(paths.styles.src)
    .pipe(sass())
    .pipe(autoprefixer({
        cascade: false
    }))
    .pipe(csso())
    .pipe(gulp.dest(paths.styles.dest))
}
function watchFiles(){
    gulp.watch(paths.styles.watch , styles)
}

const dev = gulp.series([styles,watchFiles]);
export default  dev;