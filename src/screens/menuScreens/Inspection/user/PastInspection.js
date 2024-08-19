import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import Icon from "react-native-vector-icons/FontAwesome";
import InspectionLItem from "../../../../components/InspectionLItem";
const PastInspection = ({ navigation }) => {
  const result = useSelector((state) => state.result);
  console.log(result.studentPastInspection);
  return (
    <SafeAreaView className="flex w-full">
        
      <TouchableOpacity>
        <Icon
          name="arrow-left"
          size={20}
          style={{ marginLeft: 10, marginTop: 10 }}
          color="#16B497"
          onPress={() => navigation.navigate("InspectionMenu")}
        />
      </TouchableOpacity>
      <ScrollView style={styles.container}>
        <View style={styles.listItem}>
          {Array.isArray(result.studentPastInspection) &&
          result.studentPastInspection.length > 0 ? (
            <View className="flex-row justify-around p-3 ml-3">
              <Text style={styles.title}>No</Text>
              <Text style={styles.title}>Tarih</Text>
              <Text style={styles.title}>Yoklama</Text>
              <Text style={styles.title}>Durum</Text>
            </View>
          ) : null}
          {Array.isArray(result.studentPastInspection) &&
          result.studentPastInspection.length > 0 ? (
            result.studentPastInspection.map((item, index) => (
              <View key={index}>
                <InspectionLItem
                  index={index + 1}
                  count={item.status}
                  date={item.date}
                  inspection={item.inspection_name}
                  dateInspectionScreen={() => null}
                />
              </View>
            ))
          ) : (
            <Text>Veri bulunamadi</Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    display: "flex",
    padding: 2,
  },
  warningText: {},
  title: {
    fontSize: 15,
    fontWeight: "bold",
  },
  listItem: {
    flex: 1,
  },
});

export default PastInspection;
