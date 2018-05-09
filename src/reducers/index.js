import { EDIT_TODO, SET_TODO_DONE } from '../consts';

export function reducer(state = [], action) {
    // console.log(state)
    switch (action.type) {
        case EDIT_TODO: {
            const { title, description, responsible, priority, done, date, doneTime } = action.newTodo
            return [
                ...state.slice(0, action.index),
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