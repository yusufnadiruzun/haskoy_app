import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MenuItem from "../../components/MenuItem";
import { View, Text, Image, StyleSheet } from "react-native";

const Menu = ({ navigation }) => {
  return (
    <View className="container">
      <View className="items-center mt-2">
        <Image
          source={require("../../assets/haskoy.png")}
          className="w-1/2 h-32"
        />
      </View>
        
        <View className="flex-row flex-wrap mt-10 justify-center content-stretch" >
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
    
  );
};

export default Menu;
