let todoId = 0;

export const addTodo =(text) => ({
    type: "ADD_TODO",
    text,
    id: todoId++
});
export const toggleTodo = (id) => ({
    type: "TOGGLE_TODO",
    id
});
export const deleteTodo = (id) => ({
    type: "DELETE_TODO",
    id
});
export const saveEditTodo = ({ text,id,isRemind,remindDate,location,note }) => ({
    type: 'SAVE_EDIT',
    text,
    id,
    isRemind,
    remindDate,
    location,
    note
});