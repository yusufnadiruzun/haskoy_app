let default_state = {
  login: true,
  loading: false,
  usertoken: "$2a$10$5p/P/Dx0L1hQqwuzbOhOOew7pxi8oKfOThAJ.3I4al78adKCWHchG",//null,
  phone: 5531503592,//null,
  name: null,
  surname: null,
  jwttoken: null,
  userPermissions :[]
};

const reducer = (state = default_state, action) => {
  
  switch (action.type) {
    case "SIGNINSTARTED":
      return { ...state, loading: true };
      break;
    case "SIGNINSUCCESS":
      return { ...state, login: true, loading: false };
      break;
    case "LOGINSTARTED":
      return { ...state,loading: true };
      break;
    case "LOGINSUCCESS":
      return { ...state, login: true, loading: false, usertoken: action.usertoken, phone: action.phone, name: action.name, surname: action.surname };
      break;
      case "STOPLOADING":
      return { ...state, loading: false };
      break;
    case "GETUSERPERMISSIONS":
      return { ...state, userPermissions: action.permissions };
      break;
  }
  return state;
};

export default reducer;
