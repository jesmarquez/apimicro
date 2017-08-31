const gulp = require('gulp')
const babel = require('gulp-babel')

gulp.task('microservices', () =>
  gulp.src(['config.js', 'api.js', 'auth.js', 'users.js'])
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(gulp.dest('dist'))
)

gulp.task('utils', () =>
  gulp.src('./lib/utils.js')
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(gulp.dest('dist/lib'))
)

gulp.task('fixtures', () =>
  gulp.src('./test/fixtures/index.js')
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(gulp.dest('dist/test/fixtures'))
)

gulp.task('stub', () =>
  gulp.src('./test/stub/db.js')
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(gulp.dest('dist/test/stub'))
)

gulp.task('default', ['microservices', 'utils', 'fixtures', 'stub'])
