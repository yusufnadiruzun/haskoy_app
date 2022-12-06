import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import React from "react";
import SignBlocks from "../../components/SignBlocks";
import Icon from "react-native-vector-icons/FontAwesome";
import {auth, createUserWithEmailAndPassword}  from "../../database/Firebase";

const Signin = ({ navigation }) => {

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");

  const signDB = async () => {
    
      await createUserWithEmailAndPassword(auth,email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
        alert(errorCode + " " + errorMessage);
      });
      
  }
  
  return (
    <View>
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
      <View style={style.block}>
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
      </View>
      <TouchableOpacity style={style.button} onPress={() => signDB()}>
        <Text style={style.signButon}>Kaydol</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
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
  haskoyIcon: {
    width: 250,
    height: 150,
    marginLeft: "20%",
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
