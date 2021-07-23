const url = 'https://reservas-ifpe-web.herokuapp.com/api/restaurants';

const restaurantsElem = document.querySelector('#restaurant-list');

const renderRestaurant = (data) => {
    const content = data.map((restaurant) => {
        const elem = `
        <article class="restaurant-card">
            <a href="./reservation.html?id=${restaurant.id}">
                <img src="./img/pizza.jpg" alt="">
                <h4>${restaurant.name}</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, dicta.</p>
            </a>
        </article>
        `
        restaurantsElem.innerHTML += elem;
    })
}

async function getRestaurants(url) {
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
         },
    });

    return response.json();
}



getRestaurants(url)
    .then(data => {
        renderRestaurant(data);
    });