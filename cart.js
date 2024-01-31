

fetch(`http://localhost:3000/cart/`)
    .then(response => response.json())
    .then(data => {
        console.log(data.Cart)
        for (let i = 0; i < data.Cart.length; i++) {
            document.querySelector('#cont').innerHTML += `<div class='basket'>
						<p> <span class ='departureBasket'>${data.Cart[i].departure}</span> > <span class = 'arrivalBasket'> ${data.Cart[i].arrival}</span> </p>
						<p class ='timeBasket'>${moment(data.Cart[i].date).format("LT")}</p>
						<p class ='priceBasket'> <span class='priceTrip'>${data.Cart[i].price}</span>€</p> 
						<button class='cancelBasket'>X</button>      
					</div>`
        }
    }

    )