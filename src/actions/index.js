import { EDIT_TODO, SET_TODO_DONE } from '../consts';

export const editTodo = (newTodo, index) => {
    const action = {
        type: EDIT_TODO,
        newTodo,
        index  
    }
    // console.log(action)
    return action
}

export const setTodoDone = (index) => {
    const action = {
        type: SET_TODO_DONE,
        index  
    }
    console.log(action)
    return action
}