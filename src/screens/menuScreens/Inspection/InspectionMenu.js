import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import { SafeAreaView } from "react-native-safe-area-context";
import MenuItem from "../../../components/MenuItem";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import permissionApi from "../../../../Api/PermissionApi";
import { useDispatch } from "react-redux";
import { getUserPermissions } from "../../../redux/actionTypes";


import * as Progress from "react-native-progress";

const InspectionMenu = ({navigation}) => {
  const result = useSelector((state) => state.result);
  const dispatch = useDispatch();


  useEffect(() => {
    const getPermission = async () => {
      const { data } = await permissionApi.getUserPermissions(result.usertoken);
      dispatch(getUserPermissions(data)); // Verileri Redux mağazasına doğrudan ekleyin
    };
  
    getPermission();
  }, []);
  
  return (
    <SafeAreaView className="container">
      {result.userPermissions.some((item) => item.permission_name === "yoklama") ? (
        <View className="flex-row flex-wrap justify-center items-center">
          <MenuItem key={1} where={() => navigation.navigate("NewBarcod")} name={"Yoklama Al"}></MenuItem> 
          <MenuItem key={2} where={() => navigation.navigate("InspectionList")} name={"Geçmiş Yoklamalar"}></MenuItem>
        </View>
      ) : (
        <View className="flex-row flex-wrap justify-center items-center">
          <MenuItem key={3} where={() => navigation.navigate("BarcodScanner")} name={"Yoklamaya Gir"}></MenuItem>
          <MenuItem key={4} where={() => navigation.navigate("InspectionList")}  name={"Geçmiş Yoklamalarım"}></MenuItem>
        </View>
      )}
  
      <View className="items-center mt-60">
        <Progress.Pie color="blue" className="mt-3" progress={0.2} size={200} />
      </View>
    </SafeAreaView>
  );
      };
  
export default InspectionMenu;
