import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import StudentLItem from "../../../../../components/StudentLItem";
import Icon from "react-native-vector-icons/FontAwesome";
import api from "../../../../../../Api/Users";
import inspectionApi from "../../../../../../Api/Inspection";
import TodayDate from "../../../../../Methods/TodayDate";
const InspectionStudentList = ({ navigation, route }) => {
  const [students, setStudents] = React.useState([]);
  const { inspectionName } = route.params;

  const deneme = (value, phone) => {
    if (value == "check") {
      value = "var";
    } else if (value == "times") {
      value = "yok";
    } else {
      value = "izinli";
    }
    inspectionApi
      .addInspection(inspectionName, phone, value)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    const createInspection = async () => {
      await inspectionApi
        .createInspection(inspectionName)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
    };
    const getInspection = async () => {
      await inspectionApi
        .getInspection(inspectionName, TodayDate())
        .then((res) => setStudents(res.data))
        .catch((err) => console.log(err));
    };
    createInspection();
    getInspection();
    // api
    //   .getUsers()
    //   .then((res) => setStudents(res.data))
    //   .catch((err) => console.log(err));
  }, []);
  return (
    <SafeAreaView>
      <ScrollView>
        <TouchableOpacity>
          <Icon
            name="arrow-left"
            size={20}
            style={{ marginLeft: 10, marginTop: 10 }}
            color="#16B497"
            onPress={() => navigation.navigate("NewBarcod")}
          />
        </TouchableOpacity>
        <Text
          className="mx-auto text-3xl p-4 text-haskoyGreen font-bold"
          style={{ fontFamily: "serif" }}
        >
          Talebe Listesi
        </Text>

        {Array.isArray(students) && students.length > 0 ? (
          students.map((student, index) => (
            <StudentLItem
              key={index}
              number={index + 1}
              name={student.name}
              surname={student.surname}
              status={student.status}
              onchange={(value) => {
                deneme(value, student.phone);
              }}
            />
          ))
        ) : (
          <Text>Veri bulunamadı</Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default InspectionStudentList;
