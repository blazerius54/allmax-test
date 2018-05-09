import { ADD_NEW_TODO, DELETE_TODO, EDIT_TODO, SET_TODO_DONE } from '../consts';
import todos from '../data';

export function todo(state = todos, action) {
    // console.log(state)
    switch (action.type) {
        case ADD_NEW_TODO: {
            return [
                ...state, {...action.newTodo}
            ]
        }
        case DELETE_TODO: {
            return [
                ...state.slice(0, action.index),
                ...state.slice(action.index+1)
            ]
        }
        case EDIT_TODO: {
            console.log(action.index + 1)
            const { title, description, responsible, priority, done, date, doneTime } = action.newTodo
            return [
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
            ]
        }
        case SET_TODO_DONE: {
            console.log(action.doneTime)
            return [
                ...state.slice(0, action.index),
                state[action.index] = {
                    ...state[action.index],
                    done: true,
                    doneTime: action.doneTime
                },
                ...state.slice(action.index + 1)
            ]
        }
        default: return state;
    }
}