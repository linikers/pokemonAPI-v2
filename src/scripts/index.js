/* Monte a lógica das requisições aqui */

function render (pokemon) {
    const ul = document.querySelector('.poke__list')

    ul.innerHTML = ''

    const pokemonName = pokemon.name
    const pokemonImg = pokemon.sprites.front_default
    
    const card = createCard(pokemonImg, pokemonName)
        
    ul.appendChild(card)
}

function createCard(img, name) {
    const li = document.createElement('li')
    const imgPoke = document.createElement('img')
    const divName = document.createElement('div')
    const namePoke = document.createElement('h2')
    //const number = document.createElement('span')

    li.classList = 'box__pokemon'
    imgPoke.classList = 'box__img'
    divName.classList = 'box__descrition'
    namePoke.classList = 'name__pokemon'

    imgPoke.src = img
    imgPoke.alt = name

    namePoke.innerHTML = name
    divName.append(namePoke)
    li.append(imgPoke, divName)

    return li
}
//console.log(createCard('image', 'nome'))
export { render, createCard}