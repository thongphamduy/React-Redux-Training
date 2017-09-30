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
            console.log(action.id)
            let index = state.todos.findIndex(x=>x.id===action.id);
            console.log("index of item to delete " + index);
            let test = state.todos
            test.splice(index, 1)
            return Object.assign({}, state, {
                todos: test
            })
        default:
            return state;
    }
};

export default TodoReducer;