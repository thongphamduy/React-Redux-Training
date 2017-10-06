const TodoReducer = (state={todos: []}, action) => {
    console.log(state.todos);
    switch (action.type) {
        case 'ADD_TODO':
            return Object.assign({}, state, {
                   todos: [
                   ...state.todos,
                   {
                       text: action.text,
                       completed: false,
                       id: action.id
                   }
               ]
            });
        case 'TOGGLE_TODO':
            const newTodos = state.todos.slice(0);
            newTodos.map((todo)=>{
                if(action.id === todo.id)
                    return (todo.completed = !todo.completed)

            });
            return Object.assign({}, state, {
                todos: newTodos
            })
        case 'DELETE_TODO':
            const index = state.todos.findIndex(x=>(action.id===x.id))
            console.log("index of item to delete " + index)
            const todosCloned = state.todos.slice(0);
            todosCloned.splice(index, 1);
            return Object.assign({}, state, {
                todos: todosCloned
            })
        default:
            return state;
    }
};

export default TodoReducer;