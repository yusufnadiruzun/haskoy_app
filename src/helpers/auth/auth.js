import api from "../../../api";
import {
  LoginStarted,
  LoginSuccess,
  StopLoading,
  SigninStarted,
  SigninSuccess,
} from "../../redux/actionTypes.js";
import { LoginTextControl } from "../../Methods/TextControl";
import { SignTextControl } from "../../Methods/TextControl";

export const LoginControl = async (phone, password) => {
  if (await LoginTextControl(phone, password)) {
    LoginStarted();
    if (await api.login(phone, password)) {
      LoginSuccess();
    } else {
      alert("Kullanıcı Adı veya Şifre Hatalı");
      StopLoading();
    }
  }
};

export const SignupControl = async (user) => {
  if (await SignTextControl(user)) {
    SigninStarted();
    if (await api.signup(user)) {
      SigninSuccess();
    }
  }
};
