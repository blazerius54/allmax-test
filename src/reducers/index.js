import { combineReducers } from 'redux';
import { todo } from './todo';
import { filter } from './filter';

const reducer = combineReducers({
    tasks: todo,
    filter: filter,
    // meetUps: meetupReducer,
    // comments: commentsReducer
});

export default reducer;