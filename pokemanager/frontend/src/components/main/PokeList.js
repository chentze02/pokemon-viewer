import React, { useState, useEffect } from 'react';
import Header from '../layout/Header';
import { CardList } from './CardList';
import Paper from '@mui/material/Paper';
import InfiniteScroll from "react-infinite-scroll-component";
import Favourite from './Favourite';

function PokeList() {
    const [query, setQuery] = useState('');
    const [offset, setOffset] = useState(20);

  const [search, setSearch] = useState('');
  const [pokemons, setPokemons] = useState([]);
   const [hasMore, sethasMore] = useState(true);



  useEffect(() => {
   fetch('https://pokeapi.co/api/v2/pokemon?limit=500')
    .then(response => response.json())
    .then(name => { setPokemons(name.results);})
  }, []);

  const fetchPokemon = async () => {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`
    )
    const data = await res.json();
    return data;
  }

  const fetchPokeData = async () => {
    const pokeFromServer = await fetchPokemon();
    // console.log(pokeFromServer)
    const pokeFromServerName = pokeFromServer.results
    // console.log(pokeFromServerName);
    setPokemons([...pokemons, pokeFromServerName]);
    // console.log(pokeFromServer);
    // console.log(pokeFromServerName)
    // console.log(pokemons);
    if (pokeFromServerName.length === 0 || pokeFromServerName.length < 50 ){
      sethasMore(false);
    }
    setOffset(offset+20)
  }

  const EndMsg = () => {
    return (
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
    )
}

const Loader = () => {
    return (
        <div className="container">
          <div className="row ">
            <div className="col d-flex justify-content-center my-5">
              
              <div className="spinner-grow text-primary m-1" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <div className="spinner-grow text-primary m-1" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <div className="spinner-grow text-primary m-1" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
        </div>
    )
}

  
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
    const fileteredPokemons = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(search.toLowerCase()));

    return(
      <div>
        {/* <InfiniteScroll
        dataLength={pokemons.length}
        next={fetchPokeData}
        hasMore={hasMore}
        loader={<Loader />}
        endMessage={<EndMsg />}> */}
          <div style={{paddingBottom: 15}}>
          <Header placeholder='Search Pokemon' 
            handleChange= {handleChange}/>
          </div>
          <Paper sx={{ backgroundImage: `url(https://external-preview.redd.it/z7_wYb9-YSvt0pDJlDIu8iuK_aWdqZPg0wvrGdwNvBw.png?width=640&crop=smart&auto=webp&s=e21f4d315bf85615ee6b0aa46461a28659fbd009)` }}>
              <CardList pokemons={fileteredPokemons}></CardList>
          </Paper>
        {/* </InfiniteScroll> */}
      </div>
    );
}

export default PokeList;
