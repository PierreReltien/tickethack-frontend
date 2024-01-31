

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
					updadeAddCartEventListener()
				}

				document.querySelector('#departure').value = '';
				document.querySelector('#arrival').value = '';
				document.querySelector('#date').value = '';


			} else {
				document.querySelector('#resultDiv').innerHTML += `<div> No trip available this day</div>`
			}

		});
});

// ajout d'un trajet dans le cart 
function updadeAddCartEventListener() {

	for (let i = 0; i < document.querySelectorAll('.bookButton').length; i++) {
		document.querySelectorAll('.bookButton')[i].addEventListener('click',
			function () {


				fetch(`http://localhost:3000/cart/${document.querySelectorAll('.bookButton')[i].parentNode.id}`).then(response => response.json())
					.then(data => {
						console.log(data);
						window.location.href = '/cart.html';
					}

					)
			}

		)
	}
}
