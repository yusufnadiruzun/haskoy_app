import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import Icon from "react-native-vector-icons/FontAwesome";
import InspectionLItem from "../../../../../components/InspectionLItem";
import Title from "../../../../../components/Text/Title";
import UpdateInspectionPopUp from "../../../../../components/UpdateInspectionPopUp";
import { useDispatch } from "react-redux";
import { setModalVisible } from "../../../../../redux/actionTypes";
const StudentPastAttended = ({ navigation, route }) => {
  const result = useSelector((state) => state.result);
  const dispatch = useDispatch();
  
  const { name, surname } = route.params;
  
  const [date, setDate] = useState("");
  const [inspectionName, setInspectionName] = useState("");
  const [phone, setPhone] = useState("");
  

  const updateInspection = (phone, date, inspectionName) => {
    setDate(date)
    setInspectionName(inspectionName)
    setPhone(phone)
    dispatch(setModalVisible(true))
  };


  return (
    <SafeAreaView style={styles.safeArea}>
      <UpdateInspectionPopUp 
        name={name} 
        surname={surname} 
        date={date} 
        inspection_name={inspectionName} 
        student_phone={phone} 
        
        
      />
      <TouchableOpacity onPress={() => navigation.navigate("StudentAnalyze")}>
        <Icon
          name="arrow-left"
          size={20}
          style={styles.icon}
          color="#16B497"
        />
      </TouchableOpacity>

      <Title name={`${name} ${surname}`} />

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
      >
        <View style={styles.listContainer}>
          {Array.isArray(result.studentPastInspection) &&
          result.studentPastInspection.length > 0 ? (
            <View style={styles.headerRow}>
              <Text style={styles.title}>Tarih</Text>
              <Text style={styles.title}>Yoklama</Text>
              <Text style={styles.title}>Durum</Text>
            </View>
          ) : null}

          {Array.isArray(result.studentPastInspection) &&
          result.studentPastInspection.length > 0 ? (
            result.studentPastInspection.map((item, index) => (
              <InspectionLItem
                key={index}
                index={index + 1}
                count={item.status}
                date={item.date}
                inspection={item.inspection_name}
                dateInspectionScreen={() => updateInspection(item.phone, item.date, item.inspection_name)}
              />
            ))
          ) : (
            <Text>Veri bulunamadı</Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  icon: {
    marginLeft: 10,
    marginTop: 10,
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 20, // Ekstra boşluk eklendi
  },
  listContainer: {
    paddingHorizontal: 10,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default StudentPastAttended;
