import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";

import { SafeAreaView } from "react-native-safe-area-context";
import MenuItem from "../../../components/MenuItem";
import { useEffect } from "react";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import permissionApi from "../../../../Api/PermissionApi";
import inspectionApi from "../../../../Api/Inspection";
import { useDispatch } from "react-redux";
import {
  getUserPermissions,
  getStudentPastInspection,
  StopLoading,
} from "../../../redux/actionTypes";

import { useSelector } from "react-redux";
import analyze from "../../../Methods/AnalyzeInspection";
import { LoginStarted } from "../../../redux/actionTypes";
import BackButton from "../../../components/buton/BackButton";
import Title from "../../../components/Text/Title";
const InspectionMenu = ({ navigation }) => {

  const result = useSelector((state) => state.result);
  const dispatch = useDispatch();
  const [analyzeResult, setanalyzeResult] = useState([]);
  

  useEffect(() => {

    dispatch(LoginStarted());
    const getPermission = async () => {
      const { data } = await permissionApi.getUserPermissions(result.usertoken);
      dispatch(getUserPermissions(data)); // Verileri Redux mağazasına doğrudan ekleyin
      dispatch(StopLoading())
    };
    const callPastInspection = async () => {
      if (
        !result.userPermissions.some(
          (item) => item.permission_name === "yoklama"
        )
      ) {
        const pastInspectionsData = await inspectionApi.getStudentInspection(
          result.phone
        );
        
        dispatch(getStudentPastInspection(pastInspectionsData.data == "empty data" ? [] :pastInspectionsData.data )); // Geçmiş yoklamaları state'e kaydet
        setanalyzeResult(analyze(pastInspectionsData.data == "empty data" ? [] :pastInspectionsData.data ));
        dispatch(StopLoading())
        
      }
     
    };
    getPermission();
    callPastInspection();
  }, []);
  
  return (

    <SafeAreaView className="container">
      <BackButton onPress={()=> navigation.navigate("Menu")}></BackButton>
      <Title color={"text-haskoyGreen"} name={"Yoklama"}></Title>
     
      {result.userPermissions.some(
        (item) => item.permission_name === "yoklama"
      ) ? (
        <View className="flex-row flex-wrap justify-center items-center">
          <MenuItem
            key={1}
            where={() => navigation.navigate("NewBarcod")}
            name={"Yoklama Al"}
          ></MenuItem>
          <MenuItem
            key={2}
            where={() => navigation.navigate("InspectionList")}
            name={"Geçmiş Yoklamalar"}
          ></MenuItem>
          <MenuItem
            key={3}
            where={() => navigation.navigate("StudentAnalyze")}
            name={"Talebe Analiz"}
          ></MenuItem>
        </View>
      ) : (
        <View className="flex-row flex-wrap justify-center items-center mt-8">
          <MenuItem
            key={3}
            where={() => navigation.navigate("BarcodScanner")}
            name={"Yoklamaya Gir"}
          ></MenuItem>
          <MenuItem
            key={4}
            where={() => navigation.navigate("PastInspection")}
            name={"Geçmiş Yoklamalarım"}
          ></MenuItem>
          {/* <View className="flex items-center mt-60">
            <Progress.Pie
              color="orange"

              className="mt-3"
              progress={parseFloat("0."+analyzeResult[3])}
              size={200}
            />
            <Text className="font-bold text-2xl text-haskoyGreen mt-4">Programlara Katılım Oranı "%{100*parseFloat("0."+analyzeResult[3])}"</Text>
          </View> */}
          <View className="items-center mt-72">
            <AnimatedCircularProgress
              size={200}
              width={15}
              fill={parseFloat("0." + analyzeResult[3]) * 100}
              tintColor="orange"
              backgroundColor="#3d5875"
              duration={1500}
              rotation={0}
              lineCap="square"
            />
            <Text className="font-bold text-midnight mt-5 text-2xl">
              Programlara Katılım Oranı %
              {(parseFloat("0." + analyzeResult[3]) * 100).toFixed(0.1)}
            </Text>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default InspectionMenu;
