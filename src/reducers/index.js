import { combineReducers } from 'redux';
import rootReducer from './rootReducer';
import visibilityFilter from './visibilityFilter';

export default combineReducers(
    rootReducer,
    visibilityFilter
)