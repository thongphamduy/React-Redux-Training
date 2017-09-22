 const rootReducer = (state = {value: 0}, action) => {
    switch (action.type) {
        case 'INCREATE_NUMBER':
            return { value: ++state.value };
        case  'DECREATE_NUMBER':
            return { value: --state.value };
        default:
            return state
    }
};

 export default rootReducer;