import loginApi from "../../../Api/LoginApi";
import {
  LoginStarted,
  LoginSuccess,
  StopLoading,
  SigninStarted,
  SigninSuccess,
} from "../../redux/actionTypes.js";
import { LoginTextControl } from "../../Methods/TextControl";
import { SignTextControl } from "../../Methods/TextControl";
import store from "../../redux/index"; // Import your Redux store
import AsyncStorage from "@react-native-async-storage/async-storage";

export const LoginControl = async (user) => {
  store.dispatch(LoginStarted()); // Dispatch LoginStarted action
  const usertoken = user.usertoken;

  if (usertoken != "") {
    console.log("if");
    await loginApi
      .login(user)
      .then((result) => store.dispatch(LoginSuccess(result.data.userToken,result.data.phone,result.data.name,result.data.surname)))
      .catch((err) => store.dispatch(StopLoading()));
      
      store.dispatch(StopLoading())
  } else {
    if (await LoginTextControl(user)) {
      try {
        const result = await loginApi.login(user);
        await AsyncStorage.setItem("usertoken", result.data.userToken);
        store.dispatch(LoginSuccess(result.data.userToken,result.data.phone,result.data.name,result.data.surname));
      } catch (error) {
        alert("Kullanıcı Adı veya Şifre Hatalı");
        store.dispatch(StopLoading())
      } 
      
    }else{
      console.log("else ici ")
      store.dispatch(StopLoading());
    }
    
  }
};

export const SignupControl = async (user) => {

  if (await SignTextControl(user)) {
    store.dispatch(SigninStarted()); // Dispatch SigninStarted action
    //if (await loginApi.signup(user)) {
      const result = await loginApi.signup(user)
      store.dispatch(SigninSuccess(result.data.userToken,result.data.phone,result.data.name,result.data.surname)); // Dispatch SigninSuccess action
      await AsyncStorage.setItem("usertoken", result.data.userToken);
    }
 // }
};
