const HandlePopup = (state = false, action) => {
    let tempt= state;
    if(action.type === 'HANDLE_POPUP') {
        return (!tempt)
    } else {
        return state
    }
};

export default HandlePopup