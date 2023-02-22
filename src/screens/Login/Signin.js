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
import { WriteNewUser } from "../../database/DatabaseOperations";
import User from "../../Objects/User";
import { SafeAreaView } from "react-native-safe-area-context";
import { SignControl } from "../Methods/SignControl";
import { SelectList } from "react-native-dropdown-select-list";
import { Button, ThemeProvider } from "@rneui/themed";
import { useSelector, useDispatch } from "react-redux";
import { SigninStarted,SigninSuccess } from "../../redux/actionTypes.js";

const Signin = ({ navigation }) => {
  const selector = useSelector((state) => state.result);
  const dispatch = useDispatch();

  const data = [
    { key: "Tekamül Altı", value: "Tekamül Altı" },
    { key: "İhzari", value: "İhzari" },
    { key: "İbtidai", value: "İbtidai" },
    { key: "Hazırlık Arapça", value: "Hazırlık Arapça" },
    { key: "Kuranı Kerim", value: "Kuranı Kerim" },
    { key: "Muhacir Kuranı Kerim", value: "Muhacir Kuranı Kerim" },
    { key: "Personel", value: "Personel" },
  ];
  console.log(selector.showLoading);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [status, setStatus] = React.useState("");

  const control = async () => {
    
    
    const user = new User(name, email, phone, password, status);
    if (await SignControl(user)) {
      dispatch(SigninStarted());
      if (await WriteNewUser(user)) {
        dispatch(SigninSuccess());
      }
    }
    // (await SignControl(user)) ? (await WriteNewUser(user)) ? null: dispatch(SigninAction(false)) : dispatch(SigninAction(false));
  };
  console.log(selector.showLoading);
  return (
    <SafeAreaView>
      <ScrollView style={style.scrollView}>
        <TouchableOpacity>
          <Icon
            name="arrow-left"
            style={style.icon}
            size={20}
            color="#16B497"
            onPress={() => navigation.navigate("Login")}
          />
        </TouchableOpacity>
        <Image
          source={require("../../assets/haskoy.png")}
          style={style.haskoyIcon}
        />

        <SignBlocks
          icon="user"
          placeholder="İsim Soyisim"
          changeFunc={(name) => setName(name)}
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

        <TouchableOpacity style={style.button} onPress={() => control()}>
          <Text style={style.signButon}>Kaydol</Text>
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

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  signButon: {
    textAlign: "center",

    color: "white",
    fontWeight: "800",
    marginTop: "0%",
    fontSize: 20,
  },
  button: {
    width: 270,
    height: 35,
    marginTop: "5%",
    padding: 3,
    marginLeft: "15%",
    backgroundColor: "#EC823D",
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "#EC823D",
    borderRadius: 15,
  },
  text: {
    fontSize: 30,
    marginLeft: "10%",
    fontWeight: "500",
    color: "#F1701C",
    marginTop: "2%",
  },
  scrollView: {
    marginHorizontal: 20,
  },
  haskoyIcon: {
    width: 200,
    height: 150,
    marginLeft: "23%",
  },
  icon: {
    marginLeft: "5%",
    marginTop: "5%",
  },
  block: {
    marginHorizontal: "2%",
    marginTop: "0%",
  },
});

export default Signin;
