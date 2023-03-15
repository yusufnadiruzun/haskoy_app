import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MenuItem from "../components/MenuItem";
import { View, Text, Image, StyleSheet } from "react-native";

const Menu = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={style.Icon}>
        <Image
          source={require("../assets/haskoy.png")}
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
            name={"Yemekçilik"}
            where={() => navigation.navigate("Cleaner")}
          ></MenuItem>
          <MenuItem
            name={"Nöbetçi Hoca"}
            where={() => navigation.navigate("Guard")}
          ></MenuItem>
          <MenuItem
            name={"Yemek Listesi"}
            where={() => navigation.navigate("FoodList")}
          ></MenuItem>
          <MenuItem
            name={"Talebe Listesi"}
            where={() => navigation.navigate("StudentsList")}
          ></MenuItem>
          <MenuItem
            name={"Çamaşırhane Randevu"}
            where={() => navigation.navigate("Temp")}
          ></MenuItem>
          <MenuItem
            name={"Dilek ve Şikayet"}
            where={() => navigation.navigate("Wish")}
          ></MenuItem>
          <MenuItem
            name={"Haftanın Yarışması"}
            where={() => navigation.navigate("Competition")}
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
    marginTop:'7%',
    padding:4,
    width: "80%",
    height: "80%",
    flexDirection: "row", // yan yana gelmesini sağlayan kod
    flexWrap: "wrap", // yer dolduğu zaman aşagı alan kod, hem containerde hemde iç elementte olmalı
    alignContent:'stretch',// yukarıdan aşağıda 2 buton arasındaki uzaklık ayarı
    justifyContent:'space-around', // yan yana  2 buton arasındaki uzaklık ayarı
    marginHorizontal: "10%",
  },
});
export default Menu;
