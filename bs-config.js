module.exports = {
  server: {
    baseDir: "./",
    middleware: {
      1: require('connect-history-api-fallback')({ index: '/index.html', verbose: true })
    }
  },
  files: [
    "./*.html",
    "./partials/**/*.html",
    "./css/**/*.css",
    "./js/**/*.js",
    "./assets/**/*.*"
  ],
  watchOptions: {
    ignored: 'node_modules'
  },
  open: true,
  notify: false
}
