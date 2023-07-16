import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import { SafeAreaView } from "react-native-safe-area-context";
import MenuItem from "../../components/MenuItem";

const InspectionMenu = () => {
  return (
    <SafeAreaView>
      <View className="container">
      <View className="grid grid-cols-2">
        <MenuItem></MenuItem>
        <MenuItem></MenuItem>
      </View>
      </View>
    </SafeAreaView>
  );
};

export default InspectionMenu;
