import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Button } from "@rneui/themed";
import { useSelector, useDispatch } from "react-redux";
import { LoginControl } from "../../helpers/auth/auth";
import User from "../../Objects/User";
import * as Progress from "react-native-progress";

function Login({ navigation }) {
  const selector = useSelector((state) => state.result);

  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const control = async () => {
    const user = new User();
    user.phone = phone;
    user.password = password;
    user.usertoken = ""
    
    LoginControl(user);
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="items-center mt-10">
          <Image
            source={require("../../assets/haskoy.png")}
            className="w-1/2 h-28 "
          />
        </View>

        <Text className="m-auto mt-7 font-semibold text-2xl text-haskoyGreen">
          Hasköy'e Hoşgeldiniz
        </Text>

        <View className=" items-center justify-center mt-10">
          <TextInput
            className=" border-b border-haskoyGreen rounded-lg p-2 m-3 w-3/4 h-16 "
            placeholder="Kullanıcı Adı(5__ ___ __ __)"
            onChangeText={(value) => setPhone(value)}
          />

          <TextInput
            className="border-b border-haskoyGreen rounded-lg p-2 mt-3 w-3/4 h-16"
            placeholder="Şifre"
            secureTextEntry={true}
            onChangeText={(value) => setPassword(value)}
          />
        </View>
        <View className="items-center">
          <TouchableOpacity
            className="border-solid rounded-lg bg-haskoyGreen mt-10 w-2/4 "
            onPress={() => control()}
          >
            <Text className="text-center text-white font-bold text-lg">
              Giriş Yap
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="flex items-center justify-center mt-2"
            onPress={() => navigation.navigate("Sign")}
          >
            <Text className="font-bold">Hala Hesabınız Yokmu ?</Text>
          </TouchableOpacity>
        </View>
        <View className="items-center bottom-0 mt-20">
          <Text className="">© YNDR - 2022</Text>
        </View>
        {selector.loading ? (
          <View
            style={{ position: "absolute", zIndex: 1, top: "50%", left: "45%" }}
          >
            <Progress.CircleSnail  color={["red", "green", "blue"]} />
          </View>
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
}

export default Login;
