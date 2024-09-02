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
import Title from "../../components/Text/Title"
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
    <SafeAreaView className="container flex-1">
      <ScrollView>
        <View className="items-center mt-10">
          <Image
            source={require("../../assets/haskoy.png")}
            className="w-1/2 h-28 "
          />
        </View>

        <Title name={"Hasköy'e Hoşgeldiniz"} color={"text-haskoyGreen"}></Title>
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
        
        {selector.loading ? (
          <View
            style={{ position: "absolute", zIndex: 1, top: "50%", left: "45%" }}
          >
            <Progress.CircleSnail  color={["red", "green", "blue"]} />
          </View>
        ) : null}
      </ScrollView>
      <View className="items-center  mb-8">
          <Text className="font-bold">© YNDR - 2022</Text>
        </View>
    </SafeAreaView>
  );
}

export default Login;
