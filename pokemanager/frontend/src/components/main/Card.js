import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import axios from "axios"
import { addFavouritePoke, delFavouritePoke, getFavouritePoke } from '../../actions/pokemon';
import store from '../../store';

export const CardDisplay = props => {

  const dispatch = useDispatch();
  const allFavPoke = useSelector((store) => store.pokemon);
  const [component, setComponent] = useState(true);
  const [favourited, setFavourited] = useState(false);
  const [pokeForServer, setPokeForServer] = useState({name: '', image: ''})
  const [pokeman, setPokeman] = useState({
    type: '',
    height: '',
    weight: '',
  })

  const validationPost = () => {
    if(pokeForServer.name !== '' && pokeForServer.image !== '' ){
      dispatch(addFavouritePoke(pokeForServer));
    }
  }


  useEffect(() => {
    validationPost()
     // This is be executed when the state changes
  }, [pokeForServer]);

  useEffect(()=>{
    // console.log(allFavPoke.pokemon)
    // const allFavPoke = dispatch(getFavouritePoke())
    // console.log(allFavPoke)
    const found = allFavPoke.pokemon.some(poke => poke.name === props.pokemon.name);
    console.log(allFavPoke)
    if(found){
      console.log("swap to true")
      setFavourited(true);
    }
  }, [])


  const Favourite = () => {
    const handleClickFav = () => {    
    var currPoke = props.pokemon.name
    var currImg = `https://img.pokemondb.net/artwork/large/${props.pokemon.name}.jpg`
    setPokeForServer({name: currPoke, image: currImg});
    setFavourited(!favourited)
  }
  
    return (
      <Button onClick={handleClickFav}>
        Favourite
      </Button>
    )
  }

  const Unfavourite = () => {
    const handleClickFav = () => {    
      // console.log(props.pokemon)
      const object = allFavPoke.pokemon.find(obj => obj.name === props.pokemon.name)
      // console.log(object.id)
      dispatch(delFavouritePoke(object.id))
      setFavourited(!favourited)
    }

  
    return (
      <Button onClick={handleClickFav}>
        Unfavourite
      </Button>
    )
  }

    const handleClick = async () => {
      const url = `https://pokeapi.co/api/v2/pokemon/${props.pokemon.name}`;
        const res = await fetch(url);
        const pokemans = await res.json();
        // console.log(pokemans);
        const types = pokemans.types.map((type) => type.type.name).join(', ');
        // console.log(types)


        setPokeman({height: pokemans.height, type: types, weight: pokemans.weight})
        // console.log(pokeman);
        setComponent(!component);
  }


  if(component){

  return (
    <div>
    <Card raised
      sx={{
        maxWidth: 280,
        margin: "0 auto",
        padding: "0.1em",
      }} >
        <CardActionArea>
        <a href={`https://www.pokemon.com/us/pokedex/${props.pokemon.name}`} target="_blank" rel="noreferrer"></a>
        <CardMedia
          component="img"
          height="250"
          image={`https://img.pokemondb.net/artwork/large/${props.pokemon.name}.jpg`}
          alt="pokemon"
          sx={{ padding: "1em 1em 0 1em" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.pokemon.name[0].toUpperCase()+props.pokemon.name.slice(1)}
          </Typography>
        </CardContent>
        </CardActionArea>
        <Button onClick={() => handleClick('More')}>
          More Info
        </Button>
        {favourited ? <Unfavourite/> : <Favourite/> }
    </Card>
    </div>

    )}
    else{
       return ( 
    <div>
      <Card raised
      sx={{
        maxWidth: 280,
        margin: "0 auto",
        padding: "0.1em",
      }} >
      <a href={`https://www.pokemon.com/us/pokedex/${props.pokemon.name}`} target="_blank" rel="noreferrer"></a>
        <CardMedia
          component="img"
          height="150"
          image={`https://img.pokemondb.net/artwork/large/${props.pokemon.name}.jpg`}
          alt="pokemon"
          sx={{ padding: "1em 1em 0 1em" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
              <h3>
                <b>{props.pokemon.name[0].toUpperCase()+props.pokemon.name.slice(1)}</b>
              </h3>
              <h4>
                <b>Type:</b> {pokeman.type}
              </h4>
              <h4>
                <b>Height:</b> {pokeman.height}
              </h4>
              <h4>
                <b>Weight:</b> {pokeman.weight}
              </h4>
          </Typography>
        </CardContent>
        <Button onClick={() => handleClick('Default')}>
          Less Info
        </Button>
        {favourited ? <Unfavourite/> : <Favourite/> }
        </Card>
    </div>)
    }
  }
