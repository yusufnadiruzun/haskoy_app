import React, { useState, useEffect } from "react";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import StudentLItem from "../../../../../components/StudentLItem";
import Icon from "react-native-vector-icons/FontAwesome";
import api from "../../../../../../Api/Inspection";
import DateInspectionLItem from "../../../../../components/DateInspectionLItem";

const DateInspectionScreen = ({ navigation, route }) => {
  const { inspection_name, date } = route.params;

  const [students, setStudents] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [selectedStudentIndex, setSelectedStudentIndex] = useState(null);

  useEffect(() => {
    api
      .getInspection(inspection_name, date)
      .then((res) => setStudents(res.data))
      .catch((err) => console.log(err));
  }, []);

  const showPopUpScreenToUpdate = (student, index) => {
    setSelectedStudent(student);
    setModalVisible(true);
    setSelectedStudentIndex(index);
  };
  const setStudentStatus = (newStatus, phone) => {
    api
      .updateInspection(newStatus, inspection_name, phone, date)
      .then((res) => {
        // Öğrenci durumunu güncelle
        const updatedStudents = [...students];

        if (updatedStudents[selectedStudentIndex]) {
          updatedStudents[selectedStudentIndex].status = newStatus;
          setStudents(updatedStudents);
        }

        // Pop-up kapat
        setModalVisible(false);

        // Başarı mesajı göster
        Alert.alert("Başarılı", "Öğrenci Yoklaması Güncellendi");
      })
      .catch((err) => console.log(err));
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <TouchableOpacity>
          <Icon
            name="arrow-left"
            size={20}
            style={{ marginLeft: 10, marginTop: 10 }}
            color="#16B497"
            onPress={() => navigation.navigate("InspectionMenu")}
          />
        </TouchableOpacity>
        <Text
          className="mx-auto text-3xl p-4 text-haskoyGreen font-bold"
          style={{ fontFamily: "serif" }}
        >
          Talebe Listesi
        </Text>

        {students.map((student, index) => (
          <View key={index}>
            <DateInspectionLItem
              number={index + 1}
              name={student.name}
              surname={student.surname}
              level={student.level}
              status={student.status}
              updateButton={() => showPopUpScreenToUpdate(student, index)}
            />
          </View>
        ))}

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Öğrenci Yoklama Güncelle</Text>
              {selectedStudent && (
                <Text className="text-2xl font-extrabold text-haskoyOrange">
                  {selectedStudent.name} {selectedStudent.surname}
                </Text>
              )}
              <TouchableOpacity
                className="p-4"
                onPress={() => setStudentStatus("var", selectedStudent.phone)}
              >
                <View className=" flex-row">
                  <Text className="mr-3">Var</Text>
                  <Icon name="check" size={20} color="green"></Icon>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                className="p-4"
                onPress={() =>
                  setStudentStatus("izinli", selectedStudent.phone)
                }
              >
                <View className=" flex-row  ">
                  <Text className="mr-3">İzinli</Text>
                  <Icon name="info" size={20} color="orange"></Icon>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                className="p-4"
                onPress={() => setStudentStatus("yok", selectedStudent.phone)}
              >
                <View className=" flex-row  ">
                  <Text className="mr-3">Yok</Text>
                  <Icon name="times" size={20} color="red"></Icon>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.closeButtonText}>Kapat</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.0)",
  },
  modalView: {
    width: 300,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
  modalText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  closeButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#16B497",
    borderRadius: 5,
  },
  closeButtonText: {
    color: "white",
  },
});

export default DateInspectionScreen;
