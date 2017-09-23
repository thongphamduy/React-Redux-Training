 const rootReducer = (state = {value: 0}, action) => {
    switch (action.type) {
        case 'INCREATE_NUMBER':
            return { value: ++state.value };
        case  'DECREATE_NUMBER':
            return { value: --state.value };
        case 'RESET_COUNTER':
            return{value: 0};
        default:
            return state
    }
};

 export default rootReducer;