if ('serviceWorker' in navigator) 
{
	window.addEventListener('load',() =>
	{
		navigator.serviceWorker.register('../sw.js').then(() =>
		{
			console.log('Im the Service Worker Registered and Working.')
		})
	})
}