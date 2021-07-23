const urlString = new URL(location.href);
const id = (new URL(urlString)).searchParams.get('id');
const url = `https://reservas-ifpe-web.herokuapp.com/api/restaurants/${id}`;

const restaurantDetails = document.querySelector('#restaurant-details');

const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    
})

const renderRestaurant = (data) => {
    const content = `
        <img src="./img/pizza.jpg" alt="">
        <h4>${data.name}</h4>
        <p>Contato: ${data.phoneNumber}</p>
        <p>Cardápio: 
            ${data.menu.product}
            ${formatter.format(data.menu.price / 100)}
        </p>
    `;

    restaurantDetails.innerHTML = content;
}

async function getRestaurant(url) {
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
         },
    });

    return response.json();
}

getRestaurant(url)
    .then(renderRestaurant);