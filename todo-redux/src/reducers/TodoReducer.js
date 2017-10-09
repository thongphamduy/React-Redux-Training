const TodoReducer = (state=[], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
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
            return todosCloned
        default:
            return state;
    }
};

export default TodoReducer;