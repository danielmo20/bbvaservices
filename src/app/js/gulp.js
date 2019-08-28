const workboxBuild = require('workbox-build');
gulp.task('service-worker', () => {
  return workboxBuild.injectManifest({
    swSrc: 'app/js/sw.js',
    swDest: 'dist/sw.js',
    globDirectory: 'dist',
    globPatterns: [
      'index.html',
      '**\/*.{js,css,png}',
    ],
    globIgnores: ['images/products/*']
  }).then(({count, size, warnings}) => {
    // Optionally, log any warnings and details.
    warnings.forEach(console.warn);
    console.log(`${count} files will be precached, totaling ${size} bytes.`);
  });
});




  

