import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import QRCode from "react-native-qrcode-svg";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/FontAwesome";
import InspectionApi from "../../../../../../Api/Inspection";
import { useSelector } from "react-redux";
import { formatDate } from "../../../../../Methods/FormatDate";

const BarcodView = ({ navigation, route }) => {
  const {inspectionName} = route.params ;
  
  let [qrvalue, setQrvalue] = useState("");
  const selector = useSelector((state) => state.result);

  useEffect(() => {
    InspectionApi.createInspection(inspectionName).then(res => console.log(res.data)).catch(err => console.log(err));
    setQrvalue("http://51.20.253.38:5001/api/inspection/v1/addInspectionBarcod/" + inspectionName + "/" +(formatDate())) ;
    console.log(qrvalue)
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
          value={qrvalue ? qrvalue : "http://"}
          size={250}
        />
      </View>
    </SafeAreaView>
  );
};

export default BarcodView;
