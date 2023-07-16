import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  StatusBar,
} from "react-native";
import React, { useEffect } from "react";
import SignBlocks from "../../components/SignBlocks";
import Icon from "react-native-vector-icons/FontAwesome";
import User from "../../Objects/User";
import { SafeAreaView } from "react-native-safe-area-context";
import { SelectList } from "react-native-dropdown-select-list";
import { Button, ThemeProvider } from "@rneui/themed";
import { useSelector, useDispatch } from "react-redux";
import { SignupControl } from "../../helpers/auth/auth";

const Signup = ({ navigation }) => {

  const selector = useSelector((state) => state.result);


  const data = [
    { key: "Tekamül Altı", value: "Tekamül Altı" },
    { key: "İhzari", value: "İhzari" },
    { key: "İbtidai", value: "İbtidai" },
    { key: "Hazırlık Arapça", value: "Hazırlık Arapça" },
    { key: "Kuranı Kerim", value: "Kuranı Kerim" },
    { key: "Muhacir Kuranı Kerim", value: "Muhacir Kuranı Kerim" },
    { key: "Personel", value: "Personel" },
  ];
  
  const [mail, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [surname, setSurname] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [status, setStatus] = React.useState("");

  const control = async () => {
    
    const user = new User(name,surname, mail, phone, password, status);
    SignupControl(user);
   
    // (await SignControl(user)) ? (await WriteNewUser(user)) ? null: dispatch(SigninAction(false)) : dispatch(SigninAction(false));
  };

  return (
    <SafeAreaView >
      <ScrollView>
        <TouchableOpacity>
          <Icon
            name="arrow-left"
            style={{ marginLeft: "3%", marginTop: "3%" }}
            size={20}
            color="#16B497"
            onPress={() => navigation.navigate("Login")}
          />
        </TouchableOpacity>
        <Image
          source={require("../../assets/haskoy.png")}
          className="w-1/2 h-28 mx-auto mt-7"
        />
        <SignBlocks
          icon="user"
          placeholder="İsim"
          changeFunc={(name) => setName(name)}
        ></SignBlocks>
        <SignBlocks
          icon="map-signs"
          placeholder="Soyisim"
          changeFunc={(name) => setSurname(name)}
        ></SignBlocks>
        <SignBlocks
          icon="lock"
          placeholder="Şifre"
          password={true}
          changeFunc={(password) => setPassword(password)}
        ></SignBlocks>
        <SignBlocks
          icon="envelope"
          placeholder="Mail"
          changeFunc={(mail) => setEmail(mail)}
        ></SignBlocks>
        <SignBlocks
          icon="phone"
          placeholder="Telefon No"
          changeFunc={(phone) => setPhone(phone)}
        ></SignBlocks>

        <SelectList
          data={data}
          setSelected={setStatus}
          placeholder="Talebe Nevi"
          inputStyles={{ fontSize: 15, width: "80%", color: "#16B497" }}
          dropdownStyles={{ color: "#16B497", width: "80%", marginLeft: "10%" }}
          boxStyles={{ width: "80%", marginLeft: "10%", marginTop: "2%" }}
        ></SelectList>

        <TouchableOpacity className="border-solid rounded-lg mx-auto bg-haskoyOrange mt-7 p-1 mb-4 w-2/4" onPress={() => control()}>
          <Text className="text-white text-center text-xl font-bold">Kaydol</Text>
        </TouchableOpacity>
      </ScrollView>
      {selector.loading ? (
        <View
          style={{ position: "absolute", zIndex: 1, top: "50%", left: "45%" }}
        >
          <Button title="Solid" type="solid" loading />
        </View>
      ) : null}
    </SafeAreaView>
  );
};



export default Signup;
