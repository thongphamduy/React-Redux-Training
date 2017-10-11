const HandlePopup = (state = false, action) => {
    switch (action.type){
        case 'SHOW_POPUP':
            return true
        case 'HIDE_POPUP':
            return false
        default:
            return state
    }
};

export default HandlePopup