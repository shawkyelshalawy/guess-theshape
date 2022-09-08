

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

const paths = {
    styles:{
        src:"assets/scss/styles.scss" ,
        dest:"src/static/styles"
    }
};

 function styles(){
    return gulp
    .src(paths.styles.src)
    .pipe(sass())
    .pipe(gulp.dest(paths.styles.dest))
}

exports.styles = styles;