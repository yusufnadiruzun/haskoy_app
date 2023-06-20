import api from "../../../api";
import {LoginStarted,LoginSuccess,StopLoading,SigninStarted,SigninSuccess,} from "../../redux/actionTypes.js";
import { LoginTextControl } from "../../Methods/TextControl";
import { SignTextControl } from "../../Methods/TextControl";
import store from "../../redux/index"; // Import your Redux store

export const LoginControl = async (user) => {
  const { usertoken } = user;
  console.log(usertoken);
  if(usertoken != ""){
    await api.login(user).then(result => store.dispatch(LoginSuccess())).catch(err => console.log(err));
  }else{
  if (await LoginTextControl(user)) {
    store.dispatch(LoginStarted()); // Dispatch LoginStarted action
    await api.login(user).then(result => store.dispatch(LoginSuccess())).catch(error =>  alert("Kullanıcı Adı veya Şifre Hatalı"));
    store.dispatch(StopLoading()); // Dispatch StopLoading action
  }
}
};

export const SignupControl = async (user) => {
  console.log("signup", user);
  if (await SignTextControl(user)) {
    store.dispatch(SigninStarted()); // Dispatch SigninStarted action
    if (await api.signup(user)) {
      store.dispatch(SigninSuccess()); // Dispatch SigninSuccess action
    }
  }
};
