import React, {Component} from "react";
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getFavouritePoke } from "../../actions/pokemon";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export class Favourites extends Component {

    static propTypes = {
        pokemon: PropTypes.array.isRequired
    }

    componentDidMount(){
        this.props.getFavouritePoke();
    }
    render() {
        return(
            <div>
                <h1>Favourite Pokemon List</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Favourite</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.pokemon.map(pokemon => (
                            <tr key={pokemon.id}>
                                <td>{pokemon.id}</td>
                                <td>{pokemon.name}</td>
                                <td>{pokemon.email}</td>
                                <td>{pokemon.favourties}</td>
                                <td>
                                    <FavoriteBorderIcon color="primary" />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    pokemon: state.pokemon.pokemon
});

export default connect(mapStateToProps, {getFavouritePoke})(Favourites);