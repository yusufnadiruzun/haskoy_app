let default_state = {
  login: true,
  loading: false,
  usertoken: "$2a$10$gNWMdSmMHCb/4tWXSyMUoO7NpN2YXRv2PdBNpHSH5uFxl8u.kcOIO",//null,
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
