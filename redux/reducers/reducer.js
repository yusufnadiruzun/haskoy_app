let default_state = {
    result: 1
}

const reducer = (state = default_state, action) =>{
    switch(action.type){
        case "ADD":
            state = state + action.payload;
            break;
        case "SUBTRACT":
            state = state - action.payload;
            break;
    }
    return state;
}

export default reducer;