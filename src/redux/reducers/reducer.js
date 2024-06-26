let default_state = {
  login: false,
  loading: false,
  usertoken: null,
  phone: null,
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
