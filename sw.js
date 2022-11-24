importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.0.0/workbox-sw.js");

if (workbox){
    console.log("Workbox is Loaded");
    workbox.precaching.precaheAndRoute([]);
    
    //Cache de imagenes en la carpeta public.
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
    //Hacemos   ue el contenido en JS y CSS sean rápidos y devuelvan los assets de la caché mientras se easegura de que se actualicen en segundo plano para el proximo uso.
    workbox.routing.register.Route(
        /.*\.(?:css|js|scss)/,
        //Usamos el cache y lo actualizamos en 2do plano.
        new workbox.strategies.StaleWhileRevalidate({ //Permite controlar los eventos
            cacheName:"assets",
        })
    );
    //Cache de fuentes de google.
    workbox.routing.registerRoute(
        new RegExp("https://fonts.(?:googleapis|gstatic).com/(.*)"),
        new workbox.strategies.CacheFirst({
            cacheName:"google-fonts",
            plugins:[
                new workbox.cacheableResponse.Plugin({
                    statuses:[0,200],
                }),
            ],
        })
    );
    //Agregamos un analisis offline.
    workbox.googleAnalytics.initialize(); //Hace chequeo dle sitio web para ver si esta justado para una AWP.

    //Instalamos un nuevo service worker y hacemos que se actualice para controlar el sitio web como una PWA.
    workbox.core.skipWaiting(); 
    workbox.core.clientsClaim(); //Manipula la web para que sea un AWP aunque aun no se instale.

}else{
    console.log("Error, Workbox is not Loaded.");
}