import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import React, { useEffect, useState } from "react";
import InspectionLItem from "../../../../../components/InspectionLItem";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/FontAwesome";
import InspectionApi from "../../../../../../Api/Inspection";
const InspectionList = ({ navigation }) => {
  const [pastInspection, setPastInspection] = useState([]); // Başlangıç değeri null

  useEffect(() => {
    InspectionApi.getAllInspection()
      .then((res) => {
        console.log(res.data);
        setPastInspection(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // if (!pastInspection || !pastInspection.result) {
  //   // Veri yüklenirken gösterilecek bir durum
  //   return (
  //     <SafeAreaView>
  //       <Text>Loading...</Text>
  //     </SafeAreaView>
  //   );
  // }

  return (
    <SafeAreaView>
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
        className="mx-auto text-2xl p-4 text-haskoyGreen font-bold"
        style={{ fontFamily: "serif" }}
      >
        Geçmiş Yoklama Listesi
      </Text>

      <ScrollView style={styles.container}>
        <View style={styles.listItem}>
          {Array.isArray(pastInspection) && pastInspection.length > 0 ? (
            pastInspection.map((item, index) => (
              <View key={index}>
                <View className="flex-row justify-around p-3 ml-3">
                  <Text style={styles.title}>No</Text>
                  <Text style={styles.title}>Tarih</Text>
                  <Text style={styles.title}>Yoklama</Text>
                  <Text style={styles.title}> Katılımcı Sayısı</Text>
                </View>
                <InspectionLItem
                  index={index + 1}
                  count={item.participant_count}
                  date={item.date}
                  inspection={item.inspection_name}
                  dateInspectionScreen={() =>
                    navigation.navigate("DateInspectionScreen", {
                      date: item.date,
                      inspection_name: item.inspection_name,
                    })
                  }
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
    marginRight: "17%",
  },
});

export default InspectionList;
