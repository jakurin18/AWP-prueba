//Importar CDN de WorkBox.
importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.0.0/workbox-sw.js");

//----------------------------------------------------------------------------

if (workbox)
{
    console.log("Workbox is Loaded");
    workbox.precaching.precacheAndRoute([]);
    
    //Cache de imagenes en la crpeta public.
    workbox.routing.registerRoute(
        /(.*)others(.*)\.(?:png|gif|jpg)/,
        new workbox.strategies.CacheFirst(
        {
            cacheName: "images",
            plugins: 
            [
                new workbox.expiration.Plugin(
                {
                    maxEntries: 50,
                    maxAgeSeconds: 30 * 24 * 60 * 60,
                })
            ]
        })
    );

    //Hacemos que el contenido en JS y CSS sean rapidos y devuelvan los assets de la cache mientrs se asegura de que se actualicen en segundo plano para el proximo uso.
    workbox.routing.registerRoute(
        /.*\.(?:css|js|scss)/,    //Usamos el cache y lo actualizamos en 2do plano.
        new workbox.strategies.StaleWhileRevalidate(
            {
                cacheName: "assets",
            })
    );


    //Cache de fuebtes de google.
    workbox.routing.registerRoute(
        new RegExp("https://fonts.(?:googleapis).com/(.*)"),
        new workbox.strategies.CacheFirst(
            {
                cacheName: "google-fonts",
                plugins:
                [
                    new workbox.cacheableResponse.Plugin(
                        {
                            statuses:[0, 200],
                        }),
                ],
            })
    );


    //Agregamos un analisis offline.
    workbox.googleAnalytics.initialize();

    //Instalamos un nuevo service worker y hacemos que se acutualice para controlar el sitio web como una PWA.
    workbox.core.skipWaiting();
    workbox.core.clientsClaim();
}
else
{
    console.log("FAILURE, WORKBOX ITS NOT LOADED.");
} 
