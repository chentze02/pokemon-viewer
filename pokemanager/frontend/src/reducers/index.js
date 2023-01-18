import { combineReducers } from 'redux';
import pokemon from './pokemon';
import messages from './messages';
import errors from './errors';
import auth from './auth';

export default combineReducers({
    pokemon,
    messages,
    errors,
    auth,
});

