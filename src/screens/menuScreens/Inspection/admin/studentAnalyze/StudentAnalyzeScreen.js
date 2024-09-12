import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import inspectionApi from "../../../../../../Api/Inspection";
import analyze from "../../../../../Methods/AnalyzeInspection";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { useDispatch } from "react-redux";
import {
  LoginStarted,
  StopLoading,
  getStudentPastInspection,
} from "../../../../../redux/actionTypes";
import { SafeAreaView } from "react-native-safe-area-context";
import Title from "../../../../../components/Text/Title";
import Button from "../../../../../components/buton/Button";

const StudentAnalyzeScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const { name, surname, level, studentPhone } = route.params;
  const [analyzeResult, setanalyzeResult] = useState([]);
  const fillValue = parseInt(analyzeResult[3]); // Değeri 0-1 arasında normalize et

  useEffect(() => {
    dispatch(LoginStarted());

    const callPastInspection = async () => {
      const pastInspectionsData = await inspectionApi.getStudentInspection(
        studentPhone
      );
      const inspections = Array.isArray(pastInspectionsData.data)
        ? pastInspectionsData.data
        : [];

      dispatch(getStudentPastInspection(inspections)); // Geçmiş yoklamaları state'e kaydet
      await setanalyzeResult(analyze(inspections));

      dispatch(StopLoading());
    };

    callPastInspection();
  }, []);
  return (
    <SafeAreaView>
      <Title name={name + " " + surname}></Title>
      <Button
        style={"w-1/2 mx-auto mt-11"}
        onPress={() =>
          navigation.navigate("StudentPastAttended", {
            name: name,
            surname: surname,
          })
        }
        title={"Öğrencinin Geçmiş Yoklamaları "}
      ></Button>

      <View className="items-center mt-48">
        <AnimatedCircularProgress
          size={200}
          width={15}
          fill={
            parseFloat("0." + analyzeResult[3]) * 100 == 10
              ? 100
              : parseFloat("0." + analyzeResult[3]) * 100
          }
          tintColor="orange"
          backgroundColor="#3d5875"
          duration={1500}
          rotation={0}
          lineCap="round"
        />
        <Text className="font-bold text-midnight mt-5 text-2xl">
          Programlara Katılım Oranı %
          {isNaN(parseInt(analyzeResult[3])) ? 0 : parseInt(analyzeResult[3])}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default StudentAnalyzeScreen;
