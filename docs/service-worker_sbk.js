(global => {
    'use strict';

    // Load the sw-toolbox library.
    importScripts('js/sw-toolbox.js');
    // Ensure that our service worker takes control of the page as soon as possible.
    global.addEventListener('install', event => event.waitUntil(global.skipWaiting()));
    global.addEventListener('activate', event => event.waitUntil(global.clients.claim()));

    //precache
    //toolbox.precache(['/cdn1101/images/loading-circle.svg']);
    //.toolbox.options.debug = true;
    // The route for any requests from the googleapis origin
    toolbox.router.get('/service-worker-demo/images(.*)', toolbox.cacheFirst, {
        cache: {
            name: 'images',
            maxEntries: 100,
            maxAgeSeconds: 300
        },
        origin: /(test123|blackie1019|123)\.github\.io$/
    });

    toolbox.router.get('/service-worker-demo/css(.*)', toolbox.cacheFirst, {
        cache: {
            name: 'css',
            maxEntries: 10,
            maxAgeSeconds: 1200
        },
        origin: /blackie1019\.github\.io$/
    });

    
    toolbox.router.get('/service-worker-demo/js(.*)', toolbox.cacheFirst, {
        cache: {
            name: 'js',
            maxEntries: 10,
            maxAgeSeconds: 1200
        },
        origin: /blackie1019\.github\.io$/
    });

})(self);