import {useState, useEffect} from 'react'

function App() {

  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=807")
        .then(response => response.json())
        .then(response => setPokemon(response.results))
        .then(response => console.log(response))
}, []);

  return (
    <div className="App">
      {
        pokemon.map((obj, index) => <p>{obj.name}</p>)
      }
    </div>
  );
}

export default App;