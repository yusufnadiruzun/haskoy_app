import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, ThemeProvider } from "@rneui/themed";
import MenuItem from "../../components/MenuItem";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const Menu = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={style.Icon}>
        <Image
          source={require("../../assets/haskoy.png")}
          style={style.HaskoyIcon}
        />
      </View>
      <View style={{ flexWrap: "wrap" }}>
        <View style={style.ButtonBlocks}>
          <MenuItem
            name={"Yoklama"}
            where={() => navigation.navigate("InspectionMenu")}
          ></MenuItem>
          <MenuItem
            name={"Talebe Listesi"}
            where={() => navigation.navigate("StudentsList")}
          ></MenuItem>
          <MenuItem
            name={"Yoklama"}
            where={() => navigation.navigate("InspectionMenu")}
          ></MenuItem>
          <MenuItem
            name={"Talebe Listesi"}
            where={() => navigation.navigate("StudentsList")}
          ></MenuItem>
          <MenuItem
            name={"Yoklama"}
            where={() => navigation.navigate("InspectionMenu")}
          ></MenuItem>
          <MenuItem
            name={"Talebe Listesi"}
            where={() => navigation.navigate("StudentsList")}
          ></MenuItem>
          <MenuItem
            name={"Yoklama"}
            where={() => navigation.navigate("InspectionMenu")}
          ></MenuItem>
          <MenuItem
            name={"Talebe Listesi"}
            where={() => navigation.navigate("StudentsList")}
          ></MenuItem>
          <MenuItem
            name={"Talebe Listesi"}
            where={() => navigation.navigate("StudentsList")}
          ></MenuItem>
          <MenuItem
            name={"Talebe Listesi"}
            where={() => navigation.navigate("StudentsList")}
          ></MenuItem>
          <MenuItem
            name={"Talebe Listesi"}
            where={() => navigation.navigate("StudentsList")}
          ></MenuItem>
          <MenuItem
            name={"Talebe Listesi"}
            where={() => navigation.navigate("StudentsList")}
          ></MenuItem>
        </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  Icon: {
    width: "100%",
    height: "20%",
    alignItems: "center",
    justifyContent: "center",
  },
  HaskoyIcon: {
    width: 250,
    height: 150,
  },
  ButtonBlocks: {
    padding:4,
    width: "80%",
    height: "90%",
    flexDirection: "row", // yan yana gelmesini sağlayan kod
    flexWrap: "wrap", // yer dolduğu zaman aşagı alan kod, hem containerde hemde iç elementte olmalı
    alignContent:'stretch',// yukarıdan aşağıda 2 buton arasındaki uzaklık ayarı
    justifyContent:'space-evenly', // yan yana  2 buton arasındaki uzaklık ayarı
    marginHorizontal: "10%",
  },
});
export default Menu;
