/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
gulp.task('default', ['babel', 'babel:watch']);

gulp.task('babel', () => {
    return gulp.src(['src/**/*.js'])
            .pipe(sourcemaps.init())
            .pipe(babel({
                presets: ['es2015']

            }))
//            .pipe(concat('all.js'))
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest('dist'));
});

gulp.task('babel:watch', () => {
    gulp.watch('src/**/*.js', ['babel']);
});