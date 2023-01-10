import React, { useState, useEffect } from 'react';
import Header from '../layout/Header';
import { CardList } from './CardList';
import Paper from '@mui/material/Paper';

function PokeList() {


  const [search, setSearch] = useState('');
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
   fetch('https://pokeapi.co/api/v2/pokemon?limit=500')
    .then(response => response.json())
    .then(name => setPokemons(name.results))
  }, []);
  
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

    const fileteredPokemons = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(search.toLowerCase()));

    return(
      <div>
        {console.log("this is" + pokemons)}
        <h1>Pokemon Database</h1>
        <div style={{paddingBottom: 15}}>
        <Header placeholder='Search Pokemon' 
          handleChange= {handleChange}/>
        </div>
        <Paper sx={{ backgroundImage: `url(https://external-preview.redd.it/z7_wYb9-YSvt0pDJlDIu8iuK_aWdqZPg0wvrGdwNvBw.png?width=640&crop=smart&auto=webp&s=e21f4d315bf85615ee6b0aa46461a28659fbd009)` }}>
            <CardList pokemons={fileteredPokemons}></CardList>
        </Paper>

      </div>
    );
}

export default PokeList;
