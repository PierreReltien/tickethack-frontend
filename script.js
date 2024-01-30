

document.querySelector('#search').addEventListener('click', function () {

	const departure = document.querySelector('#departure').value;
	const arrival = document.querySelector('#arrival').value;
	let dateStr = document.querySelector('#date').value;
	let date = new Date(dateStr).getTime();

	fetch(`http://localhost:3000/trip/${departure}/${arrival}/${date}`)

		.then(response => response.json())
		.then(data => {
			if (data.result) {

				for (let i = 0; i < data.trip.length; i++) {

					document.querySelector('#found').innerHTML += `
				<div class='choices"><div>${data.trip[i].departure}></div>
				><div>${data.trip[i].arrival}></div>
				<div>${data.trip[i].date}></div>
				<div>${data.trip[i].price}></div>
				<button class="button">Book</button>
				</div>
				`
				}

				document.querySelector('#departure').value = '';
				document.querySelector('#arrival').value = '';
				document.querySelector('#data').value = '';
			}

		});
});



// fetch('http://localhost:3000/trip')
// 	.then(response => response.json())
// 	.then(data => {
// 		if (data) {

// 			// Current position
// 			document.querySelector('').innerHTML = `
// 			<div id="leftSide">
// 				<p id="currentPosName">${data.currentPosWeather.cityName}</p>
// 				<p id="currentPosDescription">${data.currentPosWeather.description}</p>
// 				<div class="temperature">
// 					<p id="currentPosTempMin">${data.currentPosWeather.tempMin}°C</p>
// 					<span>-</span>
// 					<p id="currentPosTempMax">${data.currentPosWeather.tempMax}°C</p>
// 				</div>
// 			</div>
// 			<img id="currentPosIcon" src="images/${data.currentPosWeather.main}.png"/>
// 			`;

// 			for (let i = 0; i < data.weather.length; i++) {
// 				document.querySelector('#cityList').innerHTML += `
// 				<div class="cityContainer">
// 				<p class="name">${data.weather[i].cityName}</p>
// 				<p class="description">${data.weather[i].description}</p>
// 				<img class="weatherIcon" src="images/${data.weather[i].main}.png"/>
// 				<div class="temperature">
// 					<p class="tempMin">${data.weather[i].tempMin}°C</p>
// 					<span>-</span>
// 					<p class="tempMax">${data.weather[i].tempMax}°C</p>
// 				</div>
// 				<button class="deleteCity" id="${data.weather[i].cityName}">Delete</button>
// 			</div>
// 			`;
// 			}
// 			updateDeleteCityEventListener();
// 		}
// 	});

// function updateDeleteCityEventListener() {
// 	for (let i = 0; i < document.querySelectorAll('.deleteCity').length; i++) {
// 		document.querySelectorAll('.deleteCity')[i].addEventListener('click', function () {
// 			fetch(`http://localhost:3000/weather/${this.id}`, { method: 'DELETE' })
// 				.then(response => response.json())
// 				.then(data => {
// 					if (data.result) {
// 						this.parentNode.remove();
// 					}
// 				});
// 		});
// 	}
// }

// document.querySelector('#addCity').addEventListener('click', function () {
// 	const cityName = document.querySelector('#cityNameInput').value;

// 	fetch('http://localhost:3000/weather', {
// 		method: 'POST',
// 		headers: { 'Content-Type': 'application/json' },
// 		body: JSON.stringify({ cityName }),
// 	}).then(response => response.json())
// 		.then(data => {
// 			if (data.result) {
// 				document.querySelector('#cityList').innerHTML += `
// 			<div class="cityContainer">
// 				<p class="name">${data.weather.cityName}</p>
// 				<p class="description">${data.weather.description}</p>
// 				<img class="weatherIcon" src="images/${data.weather.main}.png"/>
// 				<div class="temperature">
// 					<p class="tempMin">${data.weather.tempMin}°C</p>
// 					<span>-</span>
// 					<p class="tempMax">${data.weather.tempMax}°C</p>
// 				</div>
// 				<button class="deleteCity" id="${data.weather.cityName}">Delete</button>
// 			</div>
// 					`;
// 				updateDeleteCityEventListener();
// 				document.querySelector('#cityNameInput').value = '';
// 			}

// 		});
// });