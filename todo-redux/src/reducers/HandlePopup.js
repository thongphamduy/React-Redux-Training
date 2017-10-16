const HandlePopup = (state = {isShow: false, id: ""}, action) => {
    switch (action.type){
        case 'SHOW_POPUP':
            return {
                isShow: true,
                id: action.id
            };
        case 'HIDE_POPUP':
            return {
                isShow: false,
                id: action.id
            }
        default:
            return state
    }
};

export default HandlePopup