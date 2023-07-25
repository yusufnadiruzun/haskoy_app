import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import QRCode from "react-native-qrcode-svg";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/FontAwesome";


const BarcodView = ({ navigation, route }) => {
  const {inspectionName} = route.params;
  
  useEffect(() => {
    console.log(inspectionName);
  }, []);
  
  return (
    <SafeAreaView className="">
      <View className="p-3">
        <TouchableOpacity>
          <Icon
            name="arrow-left"
            size={20}
            color="#16B497"
            onPress={() => navigation.navigate("NewBarcod")}
          />
        </TouchableOpacity>
      </View>
      <View className="items-center justify-center mt-40">
        <Text className=" p-2 mb-5 text-2xl"> {inspectionName} Yoklaması</Text>
        <QRCode
          value="http://"
          size={250}
        />
      </View>
    </SafeAreaView>
  );
};

export default BarcodView;
