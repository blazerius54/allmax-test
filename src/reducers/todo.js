import { ADD_NEW_TODO, DELETE_TODO, EDIT_TODO, SET_TODO_DONE } from '../consts';
import { bake_cookie, read_cookie } from 'sfcookies';

export function todo(state = [], action) {
    let newState = null;
    if(read_cookie('todos')) {
        state = read_cookie('todos');
    }
    switch (action.type) {
        case ADD_NEW_TODO: {
            newState = [
                ...state, {...action.newTodo}
            ];
            bake_cookie('todos', newState);
            return newState;
        }
        case DELETE_TODO: {
            newState = [
                ...state.slice(0, action.index),
                ...state.slice(action.index+1)
            ];
            bake_cookie('todos', newState);
            return newState;
        }
        case EDIT_TODO: {
            const { title, description, responsible, priority, done, date, doneTime } = action.newTodo
            newState = [
                ...state.slice(0, action.index ),
                state[action.index] = {
                    title,
                    description,
                    responsible,
                    priority,
                    done,
                    date,
                    doneTime
                },
                ...state.slice(action.index + 1)
            ];
            bake_cookie('todos', newState);
            return newState;
        }
        case SET_TODO_DONE: {
            newState = [
                ...state.slice(0, action.index),
                state[action.index] = {
                    ...state[action.index],
                    done: true,
                    doneTime: action.doneTime
                },
                ...state.slice(action.index + 1)
            ];
            bake_cookie('todos', newState);
            return newState;
        }
        default: return state;
    }
}