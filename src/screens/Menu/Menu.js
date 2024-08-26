import React from "react";

import MenuItem from "../../components/MenuItem";
import { View,  Image, StyleSheet } from "react-native";
import Title from "../../components/Text/Title";
import { useSelector } from "react-redux";
import Icon from "react-native-vector-icons/FontAwesome";
import { SafeAreaView } from "react-native-safe-area-context";
const Menu = ({ navigation }) => {
  const state = useSelector((state)=> state.result)
  return (
    <SafeAreaView className="container">
      {/* <View className = "flex-row justify-center mt-2">
      <Icon name="user" size={20}  style={{padding:5,marginTop:'4%',fontSize:20, color:"orange"}}/>  
   </View> */}
      <View className="items-center mt-10">
        <Image
          source={require("../../assets/haskoy.png")}
          className="w-1/2 h-32"
        />
      </View>
      
        <View className="flex-row flex-wrap mt-10 justify-center ">
          
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
        </SafeAreaView>
    
  );
};

export default Menu;
