const TodoReducer = (state=[], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false,
                    isRemind: false,
                    remindDate: "",
                    location: "",
                    note: ""
                }
            ];
        case 'TOGGLE_TODO':
            const newTodos = state.slice(0);
            newTodos.map((todo)=>{
                if(action.id === todo.id)
                    return (todo.completed = !todo.completed)

            });
            return newTodos;
        case 'DELETE_TODO':
            const index = state.findIndex(x=>(action.id===x.id));
            console.log("index of item to delete " + index);
            const todosCloned = state.slice(0);
            todosCloned.splice(index, 1);
            return todosCloned;
        case 'SAVE_EDIT':
            const todos1 = state.slice(0)
            todos1.map(todo => {
                if(action.id===todo.id)
                    return ({
                        text: action.text,
                        isRemind: action.isRemind,
                        remindDate: action.remindDate,
                        location: action.location,
                        note: action.note
                    })
            })
            return todos1
        default:
            return state;
    }
};

export default TodoReducer;