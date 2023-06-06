import './App.css';
import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import PokeInfo from './components/PokeInfo';
import PokeForm from './components/PokeForm';
import { Pokemon } from './models/Pokemon';

function App() {
  const [pokemon, setPokemon] = useState(null);

  const url = 'https://pokeapi.co/api/v2/pokemon/';

  async function fetchPosts(pokeName) {
    // fetch API
    const res = await fetch(url + pokeName, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();
    console.log(data);

    //get name
    let name = data.species.name;

    //get moves that can be learned
    let moves = [];
    for(let i=0; i<data.moves.length; i++) {
        moves.push(data.moves[i].move.name);
    }
    //console.log(data.species.name);

    //get types
    let types = [];
    types.push(data.types[0].type.name);
    if (data.types.length===2) {
      types.push(data.types[1].type.name);
    }
    //console.log(types);

    //get img
    const imageURL = data.sprites.front_default;

    //get base stats (hp, attack, defense, spatk, spdef, spd )
    let stats = [];
    for (let i=0; i<6; i++) {
    stats.push(data.stats[i].base_stat);
    }

    let pokemon = new Pokemon(name, types, moves, imageURL, stats);
    console.log(pokemon);
    setPokemon(pokemon);

    

  }

  

  return (
    <div className="text-center mt-5 mx-5 ">

    <PokeForm fetchPosts={fetchPosts} > </PokeForm>

      <div>  </div>
    <PokeInfo pokemon={pokemon}></PokeInfo>

       {/* <PostTable posts={posts}></PostTable> */}
    </div>
  );
}

export default App;
