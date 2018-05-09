import { createStore } from 'redux';
import reducer  from '../reducers';
import todos from '../data'

const store = createStore(reducer);

export default store;