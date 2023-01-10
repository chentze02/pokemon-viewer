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
 
  const [moreInfoToggle, setMoreInfoToggle] = useState(false)

  const baseurl = "https://pokeapi.co/";

  const handleClick = (props) => {
    axios.get(`${baseurl}api/v2/pokemon/${props.pokemon.name}`).then(
      (response) => {
        setPokemon({
          name: props.pokemon.name,
          weight: response.data.weight,
          species: response.data.types[0].type.name,
          attack: response.data.moves[0].move.name,
          type: response.data.types[0].type.name,
        });
        console.log(pokemon);
      }
    )
  }

  const moreInfo = () => {
    return ( 
    <div>
    <Card raised
      sx={{
        maxWidth: 280,
        margin: "0 auto",
        padding: "0.1em",
      }} >
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.pokemon.name[0].toUpperCase()+props.pokemon.name.slice(1)}
          </Typography>
        </CardContent>
        <Button onClick={handleClick}>
          Less Info
        </Button>
        <FavoriteBorderIcon color="primary" />
    </Card>
    </div>)
  }

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
        <Button onClick={handleClick}>
          More Info
        </Button>
        <FavoriteBorderIcon color="primary" />
    </Card>
    </div>

    )};

