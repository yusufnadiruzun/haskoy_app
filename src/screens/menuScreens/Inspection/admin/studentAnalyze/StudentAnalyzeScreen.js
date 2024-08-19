import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import inspectionApi from "../../../../../../Api/Inspection";
import analyze from "../../../../../Methods/AnalyzeInspection";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { useDispatch } from "react-redux";
import { LoginStarted,StopLoading,getStudentPastInspection } from "../../../../../redux/actionTypes";
import { SafeAreaView } from "react-native-safe-area-context";
const StudentAnalyzeScreen = ({ navigation, route }) => {
    const dispatch = useDispatch()
  const { name,surname,level,studentPhone } = route.params;
  const [analyzeResult, setanalyzeResult] = useState([]);

  useEffect(() => {
    dispatch(LoginStarted());

    const callPastInspection = async () => {
      const pastInspectionsData = await inspectionApi.getStudentInspection(
        studentPhone
      );
      dispatch(getStudentPastInspection(pastInspectionsData.data)); // Geçmiş yoklamaları state'e kaydet
      setanalyzeResult(analyze(pastInspectionsData.data));
      dispatch(StopLoading());
    };
    callPastInspection();
  },[]);
  return (
    <SafeAreaView>
        <View className="border">
        <Text className="border mt-48 text-center">{`${name} ${surname}`}</Text>
        </View>
        <View>
            <TouchableOpacity>
                <Text className="text-center mt-8 border rounded-2xl"> Öğrencinin Geçmiş Yoklamaları </Text>
            </TouchableOpacity>
        </View>
        <View className="items-center mt-48">
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
        Programlara Katılım Oranı %{parseFloat("0." + analyzeResult[3]) * 100}
      </Text>
      </View>
      </SafeAreaView>
  );
};

export default StudentAnalyzeScreen;
