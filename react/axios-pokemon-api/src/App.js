import {useState, useEffect} from 'react'
import axios from 'axios';

function App() {

  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=807")
        .then(response=>{setPokemon(response.data.results)})
}, []);

  return (
    <div className="App">
      {
        pokemon.map((obj, index) => <p key={obj.name}>{obj.name}</p>)
      }
    </div>
  );
}

export default App;
