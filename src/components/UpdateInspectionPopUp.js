import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import inspectionApi from "../../Api/Inspection";
import { useSelector,useDispatch } from 'react-redux';
import { setModalVisible } from '../redux/actionTypes';
import { updateInspectionData } from '../redux/actionTypes';

const UpdateInspectionPopUp = ({ name, surname, inspection_name, student_phone, date }) => {


  const dispatch = useDispatch()
  const result = useSelector((state) => state.result);
 


  const updateInspection = (newStatus) => {
    inspectionApi.updateInspection(newStatus, inspection_name, student_phone, date)
      .then(() => alert("Başarılı"))
      .catch((err) => console.log("Error:", err));  
      const inspection = {
        date : date,
        inspection_name : inspection_name,
        status : newStatus
      }
      dispatch(updateInspectionData(inspection))
      dispatch(setModalVisible(false))
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={result.modalVisible}
      
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Öğrenci Yoklama Güncelle</Text>
          <Text className="text-2xl font-extrabold text-haskoyOrange">
            {name} {surname}
          </Text>
          <TouchableOpacity className="p-4" onPress={() => updateInspection("var")}>
            <View className="flex-row">
              <Text className="mr-3">Var</Text>
              <Icon name="check" size={20} color="green" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="p-4" onPress={() => updateInspection("izinli")}>
            <View className="flex-row">
              <Text className="mr-3">İzinli</Text>
              <Icon name="info" size={20} color="orange" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="p-4" onPress={() => updateInspection("yok")}>
            <View className="flex-row">
              <Text className="mr-3">Yok</Text>
              <Icon name="times" size={20} color="red" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.closeButton} onPress={() => dispatch(setModalVisible(false))}>
            <Text style={styles.closeButtonText}>Kapat</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
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

export default UpdateInspectionPopUp;
