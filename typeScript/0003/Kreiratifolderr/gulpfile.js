var gulp = require('gulp');
var tsc = require('gulp-typescript');
var sourcemap = require('gulp-sourcemaps');
var tslint = require ('gulp-tslint');

gulp.task('ts-lint',function(){
    return  gulp
    .src("./src/**/*.ts")//svi fajlovi iz src foldera i pod foldera src foldera
    .pipe(tslint())//izvrsiti nad svim fajlovima koji su nadjeni u predhodnom koraku tslint
    .pipe(tslint.report("prose"));//napraviti raport greske u terminalu u kratkom citljivom obliku
    
});

gulp.task('compile-ts',function(){
    var toResult = gulp
    .src(["./src/**/*.ts", "./typings/**/*.d.ts"])//prevodi sve ts fajlove u js
    
    .pipe(sourcemap.init())//napraviti mapu izvornog koda za svaki ts fajl
    .pipe(tsc(tsc.createProject('tsconfig.json')));//ucitati ts konfiguracioni fajl

    return toResult.js
    .pipe(sourcemap.write('.'))//zapisati izvorne mape
    .pipe(gulp.dest('./app'))//kreirati js fajlove od ts fajlova u app folderu
});

gulp.task('default',['ts-lint','compile-ts']);