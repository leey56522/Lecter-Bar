//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('#order').addEventListener('click', getCocktail)
document.querySelector('#random').addEventListener('click', getRandom)
document.querySelector('#rude').addEventListener('click', toggleRude)

const ordered = document.querySelector('#ordered');

function toggleRude() {
    document.querySelector('#rude-answer').classList.toggle('hidden');
}

async function getCocktail() {
    const searchedValue = document.querySelector('input').value
    const inputValue = searchedValue.split(' ').join('_')
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputValue}`
    const resp = await fetch(url)
    const data = await resp.json()

    const drinkName = data.drinks[0].strDrink;
    const drinkImg = data.drinks[0].strDrinkThumb;

    serveDrink(drinkName, drinkImg);
}

async function getRandom() {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
    const resp = await fetch(url)
    const data = await resp.json()

    console.log(data.drinks[0].idDrink);

    const drinkName = data.drinks[0].strDrink;
    const drinkImg = data.drinks[0].strDrinkThumb;

    serveDrink(drinkName, drinkImg);
}

function serveDrink(name, image) {
    ordered.classList.toggle('hidden');

    ordered.innerHTML = `
        <h2>Here is your Drink! Enjoy :)</h2>
        <img src="${image}"></img>
        <h3 class="cocktail-name">${name}</h3>
    `
}