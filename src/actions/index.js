import { ADD_NEW_TODO, DELETE_TODO, EDIT_TODO, SET_TODO_DONE, CHANGE_FILTER } from '../consts';

export const addNewTodo = (newTodo) => {
    const action = {
        type: ADD_NEW_TODO,
        newTodo
    }
    return action
}

export const deleteTodo = (index) => {
    const action = {
        type: DELETE_TODO,
        index
    }
    return action
}

export const editTodo = (newTodo, index) => {
    const action = {
        type: EDIT_TODO,
        newTodo,
        index  
    }
    return action
}

export const setTodoDone = (index) => {
    const action = {
        type: SET_TODO_DONE,
        index,
        doneTime: new Date()
    }
    return action
}

export const changeFilter = (priority) => {
    const action = {
        type: CHANGE_FILTER,
        priority
    }
    return action
}