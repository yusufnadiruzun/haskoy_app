let default_state = {
    signin: false,
    loading: false,
}

const reducer = (state = default_state, action) =>{
    switch(action.type){
        case "SIGNINSTARTED":
            return {...state, loading: true};
            break;
        
        case "SIGNINSUCCESS":
            return {...state, signin: true, loading: false};
            break;
    }
    return state;
}

export default reducer;