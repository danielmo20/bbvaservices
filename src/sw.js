importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.1.1/workbox-sw.js');
workbox.precaching.precacheAndRoute(
  [
      {
        "url":"assets/bbva_logo.png",
        "revision":"0a3dd32848cc5474474010fdb1eb72f8"
      },
        {
          "url":"runtime.js",
        "revision":"0a3dd32848cc5474474010fdb1eb72f8"
      },
      {
        "url":"index.html",
        "revision":"0a3dd32848cc5474474010fdb1eb72f8"
      },
      {
        "url":"index.html",
        "revision":"0a3dd32848cc5474474010fdb1eb72f8"
      },
      { "url":"runtime.js" ,"revision":"0a3dd32848cc5474474010fdb1eb72f8" },
      { "url":"polyfills.js" ,"revision":"0a3dd32848cc5474474010fdb1eb72f8" },
      { "url":"styles.js" ,"revision":"0a3dd32848cc5474474010fdb1eb72f8" },
      { "url":"vendor.js" ,"revision":"0a3dd32848cc5474474010fdb1eb72f8" },
      { "url":"main.js" ,"revision":"0a3dd32848cc5474474010fdb1eb72f8"},
      { "url":"assets/mastercard.png" ,"revision":"0a3dd32848cc5474474010fdb1eb72f8"}

      ]
  );
