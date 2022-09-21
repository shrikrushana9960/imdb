import {combineReducers} from 'redux';
import movie from './movieReducer';

const rootReducer = combineReducers({
    movie:movie
});

const mainReducer = (state = {}, action) => rootReducer(state, action);

export default mainReducer;