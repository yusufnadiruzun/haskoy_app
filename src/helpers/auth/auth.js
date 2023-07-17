import api from "../../../api";
import {LoginStarted,LoginSuccess,StopLoading,SigninStarted,SigninSuccess,} from "../../redux/actionTypes.js";
import { LoginTextControl } from "../../Methods/TextControl";
import { SignTextControl } from "../../Methods/TextControl";
import store from "../../redux/index"; // Import your Redux store
import AsyncStorage from '@react-native-async-storage/async-storage';

export const LoginControl = async (user) => {

  store.dispatch(LoginStarted()); // Dispatch LoginStarted action
  const usertoken = user.usertoken;
  if(usertoken != ""){
    if(LoginTextControl(user)){
    await api.login(user).then(result => store.dispatch(LoginSuccess())).catch(err => console.log(err));
    }
  }
  else{
  if (await LoginTextControl(user)) {
    try {
      const result = await api.login(user);
      await AsyncStorage.setItem('usertoken', result.data.userToken);
      store.dispatch(LoginSuccess(result.data.userToken));
    } catch (error) {
      alert("Kullanıcı Adı veya Şifre Hatalı");
    } finally {
      store.dispatch(StopLoading());
      const token = await AsyncStorage.getItem('usertoken');
      console.log("AsyncStorage'den okunan usertoken: ", token);
    }
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
