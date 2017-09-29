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
                todos: state.todos.map((todo, index) => {
                    if(action.id === index) {
                        return Object.assign({}, todo, {
                            completed: !todo.completed
                        });
                    }
                    return todo;
                })
            });
        case 'DELETE_TODO':
            return Object.assign({}, state, {
                todos: state.splice(action.id,1)
            });
        default:
            return state;
    }
};

export default TodoReducer;