//affichage des trajets lorsqu'on clique sur le bouton search
document.querySelector('#search').addEventListener('click', function () {

	const departure = document.querySelector('#departure').value;
	console.log('departure', departure)
	const arrival = document.querySelector('#arrival').value;
	console.log('arrival', arrival)
	let date = document.querySelector('#date').value;
	console.log('date', date)
	// let date = new Date(dateStr).getTime();

	fetch(`http://localhost:3000/trip/${departure}/${arrival}/${date}`)

		.then(response => response.json())
		.then(data => {

			// console.log(data)

			if (data.trip) {
				console.log(data.trip)
				console.log(data.trip.length)

				for (let i = 0; i < data.trip.length; i++) {

					document.querySelector('#resultDiv').innerHTML += `
				<div class="choices" id="${data.trip[i]._id}">
				<p class="departureTrip">${data.trip[i].departure}</p>><p class="arrivalTrip">${data.trip[i].arrival}</p>
				<p class="dateTrip">${moment(data.trip[i].date).format("LT")}></p>
				<p class="priceTrip">${data.trip[i].price}</p>
				<button class="bookButton">Book</button>
				</div>
				`
					updadeAddCartEventListener(data.trip[i])
				}

				document.querySelector('#departure').value = '';
				document.querySelector('#arrival').value = '';
				document.querySelector('#date').value = '';


			} else {
				document.querySelector('#resultDiv').innerHTML += `<div> No trip available this day</div>`
			}

		});
});


//ajout d'un trajet dans le cart 
function updadeAddCartEventListener(tripData) {

	for (let i = 0; i < document.querySelectorAll('.bookButton').length; i++) {
		document.querySelectorAll('.bookButton')[i].addEventListener('click',
			function () {
				

				fetch(`http://localhost:3000/cart/${document.querySelectorAll('.bookButton')[i].parentNode.id}`).then(response => response.json())
					.then(data => {
						console.log(data)
						//window.location.href = '/cart.html'

					}

					)
			}

		)
	}
}

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

// fetch('http://localhost:3000/weather', {
// 	method: 'POST',
// 	headers: { 'Content-Type': 'application/json' },
// 	body: JSON.stringify({ cityName }),
// }).then(response => response.json())
// 	.then(data => {
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