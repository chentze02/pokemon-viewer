import React from 'react';
import { CardDisplay } from './Card';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


export const CardList = props => {

  return(
       <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {props.pokemons.map(pokemon => {return(
             <Grid key={pokemon.name} item xs={2} sm={4} md={4}>
                <CardDisplay key={pokemon.name} pokemon={pokemon}></CardDisplay>
            </Grid>
        )})}
       </Grid>
    </Box>

);
        }