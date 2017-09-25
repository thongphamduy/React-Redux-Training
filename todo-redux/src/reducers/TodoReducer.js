let todoId = 0;

const TodoReducer = (state={todos: []}, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return Object.assign({}, state, {
               todos: [
                   ...state,
                   {
                       text: action.text,
                       completed: false,
                       id: todoId++
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