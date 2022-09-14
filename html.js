const getPokemons = () => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=50&offset=0')
        .then(res => res.json())
        .then(res => console.log(res.data) )
}