import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useState, useEffect } from 'react';
import axios from "axios"

export const CardDisplay = props => {
  const [pokemon, setPokemon] = useState({
    name: "",
    species: "",
    weight: "",
    attack: "",
    type: ""
  });

  const baseurl = "https://pokeapi.co/";

  // const searchPokemon = () => {
  //   axios.get(`${baseurl}api/v2/pokemon/5`).then(
  //     (response) => {
  //       setPokemon({
  //         name: props.pokemon.name,
  //         species: response.types[0].type.name,
  //         // hp: response.data.stats[0].base_stat,
  //         // attack: response.data.stats[1].base_stat,
  //         // type: response.data.types[0].type.name,
  //       })
  //     }
  //   )
  // }

  // useEffect( () =>
  //  axios.get(`${baseurl}api/v2/pokemon/${props.pokemon.name}`).then(
  //     (response) => {
  //       setPokemon({
  //         name: props.pokemon.name,
  //         weight: response.data.weight,
  //         species: response.data.types[0].type.name,
  //         attack: response.data.moves[0].move.name,
  //         type: response.data.types[0].type.name,
  //       })
  //     }
  //   ), [])
  

  const MoreInfo = () => (
    <>
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
            {/* {props.pokemon.name[0].toUpperCase()+props.pokemon.name.slice(1)} */}
            {/* {pokemon.species} */}
            {/* {pokemon.hp}
            {pokemon.attack}
            {pokemon.type} */}
          </Typography>
        </CardContent>
        <Button>
          Less Info
        </Button>
      </CardActionArea>
    </Card>
    </>
  )


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
            {/* {pokemon.name} */}
            {/* {console.log(pokemon.species)}
            {pokemon.weight} */}
            {/* {pokemon.hp} */}
            {/* {pokemon.attack} */}
            {/* {pokemon.type} */}
          </Typography>
        </CardContent>
        <Button>
          More Info
        </Button>
        <FavoriteBorderIcon color="primary" />
      </CardActionArea>
    </Card>
    </div>

    )};


