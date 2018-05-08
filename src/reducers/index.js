import { EDIT_TODO } from '../consts';

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
        default: return state;
    }
}