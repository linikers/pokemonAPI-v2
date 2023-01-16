import { render, createCard } from "./index.js";

async function consomePokeAPI() {
    const loading = document.querySelector('.loading')

    const pokemonsDaAPI = await fetch('https://pokeapi.co/api/v2/pokemon', {
        method:'GET',
        headers: { 
            'content-type': 'application/json' 
        }
    })
    .then((response) => {
        return response.json()
    })
    .then((response => {
        return response
    }))
    
    .catch(
        error => console.log(error)
    )
    loading.style.visibility = 'hidden'

    return pokemonsDaAPI

}

consomePokeAPI()

async function renderizaPokemons(){

    const listaPokemons = await consomePokeAPI()

   

    listaPokemons.results.forEach(pokemon => {
        
        const pokemonList = document.querySelector('.poke__list')
        
        const li = document.createElement('li')
        const img = document.createElement('img')
        const span = document.createElement('span')

        li.classList = 'poke__item'
        img.classList = 'poke__img'
        span.classList = 'pokemon__name'
        
        const numeroNaPokedex = pokemon.url.slice(34, -1)
        
        img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numeroNaPokedex}.png`
        span.innerHTML = pokemon.name
        li.append(img, span)
        pokemonList.appendChild(li)
    });
    
    
}

renderizaPokemons()

/*request*/
async function buscaPokemon(nomePokemon) {
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${nomePokemon}`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(response => {
        render(response)
        return response
    })
    
    return pokemon
}


function renderizaBusca () {

    const buscaInput = document.querySelector('.input__search')
    
    const btnBusca = document.querySelector('#busca')
    
    
    btnBusca.addEventListener('click', (e) => {
        e.preventDefault()
        
        buscaPokemon(buscaInput.value.toLowerCase().trim())
        
    })
    
}

renderizaBusca()

//criar botao todos
async function renderTotal(){
    const btnTodos = document.querySelector('#btn__todos')

    const pokemons = await renderizaPokemons()

    btnTodos.addEventListener('click', () => {
        
    })

}