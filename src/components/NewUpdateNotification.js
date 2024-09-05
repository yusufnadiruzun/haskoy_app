import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Modal, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useSelector, useDispatch } from "react-redux";

const NewUpdateNotification = () => {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.result);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={result.updateVisible}
    >
      <View>
        <View>
          <Text>Öğrenci Yoklama Güncelle</Text>
        </View>
      </View>
    </Modal>
  );
};

export default NewUpdateNotification;
