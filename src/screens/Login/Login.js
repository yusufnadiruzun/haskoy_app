import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Button } from "@rneui/themed";
import { useSelector, useDispatch } from "react-redux";
import { LoginControl } from "../../helpers/auth/auth";

function Login({ navigation }) {
  
  const selector = useSelector((state) => state.result);
  const dispatch = useDispatch();

  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const control = async () => {

      LoginControl(phone, password);
    
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Image
        source={require("../../assets/haskoy.png")}
        style={style.haskoyIcon}
      />
      <Text style={style.welcome}>Hasköy'e Hoşgeldiniz</Text>
      <TextInput
        style={style.input}
        placeholder="Kullanıcı Adı(5__ ___ __ __)"
        onChangeText={(value) => setPhone(value)}
      />
      <TextInput
        style={style.input}
        placeholder="Şifre"
        secureTextEntry={true}
        onChangeText={(value) => setPassword(value)}
      />
      <View>
        <TouchableOpacity style={style.loginButton} onPress={() => control()}>
          <Text style={style.loginText}>Giriş Yap</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.signButton}
          onPress={() => navigation.navigate("Sign")}
        >
          <Text style={style.signText}>Hala Hesabınız Yokmu ?</Text>
        </TouchableOpacity>
      </View>
      <View style={style.footer}>
        <Text>© Hasköy - 2022</Text>
      </View>
      {selector.loading ? (
        <View
          style={{ position: "absolute", zIndex: 1, top: "50%", left: "45%" }}
        >
          <Button title="Solid" type="solid" loading />
        </View>
      ) : null}
    </SafeAreaView>
  );
}
const style = StyleSheet.create({
  haskoyIcon: {
    width: 250,
    height: 200,
    marginLeft: "20%",
  },
  welcome: {
    fontSize: 30,
    marginLeft: "18%",
    fontWeight: "500",
    color: "#16B497",
  },
  input: {
    padding: 10,
    marginLeft: "13%",
    marginTop: "10%",
    borderStyle: "solid",
    width: "75%",
    borderBottomWidth: 1,
    borderBottomColor: "#59C1CC",
  },
  loginButton: {
    width: 270,
    height: 35,
    marginTop: "10%",
    marginLeft: "20%",
    backgroundColor: "#16B497",
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "#16B497",
    borderRadius: 15,
  },
  signButton: {
    width: 300,
    height: 20,
    marginTop: "3%",
    marginLeft: "3%",
    flexDirection: "row",
  },
  loginText: {
    textAlign: "center",
    color: "white",
    fontWeight: "800",
    marginTop: "0%",
    fontSize: 20,
  },
  signText: {
    textAlign: "center",
    color: "black",
    marginLeft: "40%",
    fontWeight: "700",
  },
  footer: {
    position: "relative",
    margin: "auto",
    marginLeft: "40%",
    bottom: "-15%",
  },
});

export default Login;
