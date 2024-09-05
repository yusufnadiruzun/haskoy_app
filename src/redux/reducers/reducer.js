let default_state = {
  login: false,
  loading: false,
  usertoken:null, //"$2a$10$gNWMdSmMHCb/4tWXSyMUoO7NpN2YXRv2PdBNpHSH5uFxl8u.kcOIO",//null,
  phone: null,//5531503592,//null,
  name: null,
  surname: null,
  jwttoken: null,
  modalVisible : false,
  userPermissions :[],
  updateVisible : false,
  studentPastInspection:[]
};

const reducer = (state = default_state, action) => {
  
  switch (action.type) {
    case "SIGNINSTARTED":
      return { ...state, loading: true };
      break;
    case "SIGNINSUCCESS":
      return { ...state, login: true, loading: false, usertoken: action.usertoken, phone: action.phone, name: action.name, surname: action.surname  };
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
      case "SETMODALVISIBLE":
        return { ...state, modalVisible: action.modalVisible };
        break;
        
    case "GETUSERPERMISSIONS":
      return { ...state, userPermissions: action.permissions };
      break;
      case "UPDATE_INSPECTION":
        return {...state,studentPastInspection: state.studentPastInspection.map((item) =>item.date === action.payload.date && item.inspection_name === action.payload.inspection_name
      ? { ...item, ...action.payload }
              : item
          ),
        };
    case "GETSTUDENTPASTINSPECTION":
      return { ...state, studentPastInspection: action.inspection };
      break;
  
  }
  return state;
};

export default reducer;
