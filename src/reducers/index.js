import { EDIT_TODO, SET_TODO_DONE } from '../consts';

export function reducer(state = [], action) {
    // console.log(state)
    switch (action.type) {
        case EDIT_TODO: {
            const { title, description, responsible, priority } = action.newTodo
            return [
                ...state.slice(0, action.index),
                state[action.index] = {
                    title,
                    description,
                    responsible,
                    priority,
                    // done: false
                },
                ...state.slice(action.index + 1)
            ]
        }
        case SET_TODO_DONE: {
            return [
                ...state.slice(0, action.index),
                state[action.index] = {
                    ...state[action.index],
                    done: true
                },
                ...state.slice(action.index + 1)
            ]
        }
        default: return state;
    }
}