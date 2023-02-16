let default_state = {
    result: 1,
    showLoading: false,
}

const reducer = (state = default_state, action) =>{
    switch(action.type){
        case "SIGNIN":
            return {...state, showLoading: action.result};
            break;
        
    }
    return state;
}

export default reducer;