import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  StatusBar,
} from "react-native";
import React from "react";
import SignBlocks from "../../components/SignBlocks";
import Icon from "react-native-vector-icons/FontAwesome";
import { auth, createUserWithEmailAndPassword } from "../../database/Firebase";
import { writeNewUser } from "../../database/DatabaseOperations";
import User from "../../Objects/User";
import { SafeAreaView } from "react-native-safe-area-context";

const Signin = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");

  const control = () => {
    const user = new User(name, email, phone, password, "user");
    writeNewUser(user);
  };

  return (
    <SafeAreaView>
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
      <ScrollView style={style.scrollView}>
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
          
      
      </ScrollView>
      <TouchableOpacity style={style.button} onPress={() => control()}>
        <Text style={style.signButon}>Kaydol</Text>
      </TouchableOpacity>
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
    marginTop: "10%",
    marginLeft: "20%",
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
