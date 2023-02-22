let default_state = {
  login: false,
  loading: false,
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
      return { ...state, login: true, loading: false };
      break;
  }
  return state;
};

export default reducer;
