import React, {Component} from "react";
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getFavouritePoke, delFavouritePoke, addFavouritePoke } from "../../actions/pokemon";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

export class Favourite extends Component {
    static propTypes = {
        pokemon: PropTypes.array.isRequired,
        delFavouritePoke: PropTypes.func.isRequired,
        getFavouritePoke: PropTypes.func.isRequired,
    };

    componentDidMount(){
        this.props.getFavouritePoke();
    }
    render() {
        return(
            <div>
                 <h1>Favourite Pokemon List</h1>
                <Paper sx={{ backgroundImage: `url(https://external-preview.redd.it/z7_wYb9-YSvt0pDJlDIu8iuK_aWdqZPg0wvrGdwNvBw.png?width=640&crop=smart&auto=webp&s=e21f4d315bf85615ee6b0aa46461a28659fbd009)` }}>
                <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {this.props.pokemon.map(pokemon => (
                    <Grid key={pokemon.name} item xs={2} sm={4} md={4}>
                    <Card raised
                        sx={{
                            maxWidth: 280,
                            margin: "0 auto",
                            padding: "0.1em",
                        }} >
                            <CardActionArea>
                            <a href={`https://www.pokemon.com/us/pokedex/${pokemon.name}`} target="_blank" rel="noreferrer"></a>
                            <CardMedia
                            component="img"
                            height="250"
                            image={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`}
                            alt="pokemon"
                            sx={{ padding: "1em 1em 0 1em" }}
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {pokemon.name[0].toUpperCase()+pokemon.name.slice(1)}
                            </Typography>
                            </CardContent>
                            </CardActionArea>
                            <Button onClick={this.props.delFavouritePoke.bind(this, pokemon.id)}>
                                Unfavourite
                            </Button>
                        </Card>
                    </Grid>
                ))}
                </Grid>
                </Box>
                </Paper>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    pokemon: state.pokemon.pokemon
});

export default connect(mapStateToProps, {getFavouritePoke, delFavouritePoke})(Favourite);