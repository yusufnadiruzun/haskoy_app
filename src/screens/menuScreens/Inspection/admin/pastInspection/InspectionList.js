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
import {formatDate} from "../../../../../Methods/FormatDate"
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
      <View>
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
          {pastInspection.map((item, index) => (
            <View key={index}>
              <InspectionLItem
                count={index}
                date={formatDate(item.date)}
                inspection={item.inspection_type}
                dateInspectionScreen={() => navigation.navigate("DateInspectionScreen",{date:item.date,inspection_type:item.inspection_type})}

              ></InspectionLItem>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    padding: 2,
  },
});

export default InspectionList;
