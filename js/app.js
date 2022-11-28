if ('serviceWorker' in navigator) 
{
	window.addEventListener('load',() =>
	{
		navigator.serviceWorker.register('../sw2.js').then(swReg =>
		{
			console.log('Im the Service Worker Registered and Working.');
		}).catch(error => 
			{
				console.log("There was an ERROR.". error);
			});
	});
}