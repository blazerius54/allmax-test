import { ADD_NEW_TODO, EDIT_TODO, SET_TODO_DONE } from '../consts';

export const addNewTodo = (newTodo) => {
    const action = {
        type: ADD_NEW_TODO,
        newTodo
    }
    return action
}

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
        index,
        doneTime: new Date()
    }
    console.log(action)
    return action
}