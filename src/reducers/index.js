import { combineReducers } from 'redux';
import { todo } from './todo';
import { filter } from './filter';

const reducer = combineReducers({
    tasks: todo,
    filter: filter,
});

export default reducer;