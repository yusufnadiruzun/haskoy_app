import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import { SafeAreaView } from "react-native-safe-area-context";
import MenuItem from "../../components/MenuItem";
import { useEffect } from "react";

const InspectionMenu = () => {
  return (
    <SafeAreaView className="container">
      <MenuItem></MenuItem>
      <MenuItem></MenuItem>
    </SafeAreaView>
  );
};

export default InspectionMenu;
