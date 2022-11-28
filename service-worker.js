var cacheName = 'v1.0';
var cacheAssets = 
[
	'index.php',
	'datos.php',
	'registro.php',
	'acerca.php',
	'contacto.php',
	'datos.php',
	'servicios.php',
	'/js/main.js',
	'/css/style.css',
	'/assets/bootstrap/css/bootstrap-grid.min.css',
	'/assets/bootstrap/css/bootstrap-reboot.min.css',
	'/assets/bootstrap/css/bootstrap.min.css',
	'/assets/bootstrap/css/style.css',
	'/assets/bootstrap/js/bootstrap.bundle.min.js',
	'/assets/dropdown/css/style.css',
	'/assets/dropdown/js/navbar-dropdown.js',
	'/assets/formoid/formoid.min.js',
	'/assets/images/4aa1f5cf74fe9ca92e08274ea4825a7b-icono-de-proyeccion-de-smartphone-de-realidad-aumentada-397x397.png',
	'/assets/images/4aa1f5cf74fe9ca92e08274ea4825a7b-icono-de-proyeccion-de-smartphone-de-realidad-aumentada.png',
	'/assets/images/appcreator-1280x720.jpg',
	'/assets/images/augmented-reality-ar-626x364.jpg',
	'/assets/images/chriss-2-596x795.jpeg',
	'/assets/images/lalo-2-596x795.jpeg',
	'/assets/images/hd-wallpaper-technology-augmented-reality-800x433.jpg',
	'/assets/images/jacki-3-596x795.jpeg',
	'/assets/images/learningvrr-1024x576.jpg',
	'/assets/images/mbr.jpg',
	'/assets/images/metaverso.webp',
	'/assets/images/metaversoslide.webp',
	'/assets/images/mision-1036x734.jpg',
	'/assets/images/nosotros-1600x900.jpg',
	'/assets/images/oscar-1-596x703.jpeg',
	'/assets/images/realidad-aumentada-626x415.jpg',
	'/assets/images/realidad-aumentada-752x499.jpg',
	'/assets/images/realidad-virtual-scaled.webp',
	'/assets/images/rvajuegos-600x400.jpg',
	'/assets/images/somos.webp',
	'/assets/images/tarjeta1-816x326.jpg',
	'/assets/images/tarjeta2-816x380.jpg',
	'/assets/images/tarjeta3-816x489.jpg',
	'/assets/images/tarjeta4-800x600.jpg',
	'/assets/images/tarjeta5-816x504.jpg',
	'/assets/images/tarjeta6-816x459.jpg',
	'/assets/images/tarjeta7-1256x778.jpg',
	'/assets/images/tarjeta9-1256x707.jpg',
	'/assets/images/valores-1256x785.jpg',
	'/assets/images/vision-760x501.jpg',
	'/assets/mbr-switch-arrow/mbr-switch-arrow.js',
	'/assets/mobirise/css/mbr-additional.css',
	'/assets/smoothscroll/smooth-scroll.js',
	'/assets/socicon/css/styles.css',
	'/assets/socicon/fonts/socicon.eot',
	'/assets/socicon/fonts/socicon.svg',
	'/assets/socicon/fonts/socicon.ttf',
	'/assets/socicon/fonts/socicon.woff',
	'/assets/socicon/fonts/socicon.woff2',
	'/assets/theme/css/style.css',
	'/assets/theme/js/script.js',
	'/assets/vimeoplayer/player.js',
	'/assets/web/assets/mobirise-icons/mobirise-icons.css',
	'/assets/web/assets/mobirise-icons/mobirise-icons.eot',
	'/assets/web/assets/mobirise-icons/mobirise-icons.svg',
	'/assets/web/assets/mobirise-icons/mobirise-icons.ttf',
	'/assets/web/assets/mobirise-icons/mobirise-icons.woff',
	'/assets/web/assets/mobirise-icons2/mobirise2.css',
	'/assets/web/assets/mobirise-icons2/mobirise2.eot',
	'/assets/web/assets/mobirise-icons2/mobirise2.svg',
	'/assets/web/assets/mobirise-icons2/mobirise2.ttf',
	'/assets/web/assets/mobirise-icons2/mobirise2.woff',
	'/assets/ytplayer/index.js'

]

//Instalacion.
self.addEventListener('install', e =>
{
	console.log('Service Worker: Instalado');
	e.waitUntil(
		caches.open(cacheName).then(cache =>
		{
			console.log('Service Worker: Cacheando archivos');
			cache.addAll(cacheAssets);
		}).then(() => self.skipWaiting())
	);
});



//Activacion
self.addEventListener('activate', e =>
{
	console.log('Service Worker: Instalado');
});



//Fetch
self.addEventListener('fetch', e =>
{
	console.log('Service Worker: Fetching');
	e.respondWith(fetch(e.request).catch(() => 
		caches.math(e.request)));
});