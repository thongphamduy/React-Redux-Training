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
            return Object.assign({}, state, {
                todos: state.todos.map((todo) => {
                    if(todo.id === action.id) {
                        return Object.assign({}, todo, {
                            completed: !todo.completed
                        });
                    }
                    return todo;
                })
            });
        case 'DELETE_TODO':
            const index = state.todos.findIndex(x=>(action.id===x.id))
            console.log("index of item to delete " + index)
            return Object.assign({}, {
                todos: state.todos.splice(index,1)
            })
        default:
            return state;
    }
};

export default TodoReducer;