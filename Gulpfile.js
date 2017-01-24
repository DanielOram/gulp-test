var gulp = require('gulp');
var sass = require('gulp-sass');
var ts = require('gulp-typescript');
var del = require('del');


var tsConfig = ts.createProject('tsconfig.json');

//sass task
gulp.task('compile-sass', function () {
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

//typescript task
gulp.task('compile-ts', function () {
    return tsConfig.src()
    .pipe(tsConfig())
    .js.pipe(gulp.dest('dist'));
})


//watch tasks
gulp.task('watch-sass', function () {
    gulp.watch('sass/**/*.scss', ['clean','compile-sass']);
});

gulp.task('watch-ts', function () {
    gulp.watch(tsConfig.files, ['compile-ts']);
})


//clean task
gulp.task('clean', function () {
    del(['dist/*'])
    .then(paths => {
        console.log('Cleaned files and folders:\n', paths.join('\n'));
    });
})

gulp.task('default', ['clean','compile-sass','compile-ts', 'watch-sass', 'watch-ts']);