import { EDIT_TODO } from '../consts';

export const editTodo = (newTodo, index) => {
    const action = {
        type: EDIT_TODO,
        newTodo,
        index  
    }
    console.log(action)
    return action
}