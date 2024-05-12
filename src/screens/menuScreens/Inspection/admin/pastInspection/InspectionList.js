import { View, Text,TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import InspectionLItem from '../../../../../components/InspectionLItem'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from "react-native-vector-icons/FontAwesome";
import InspectionApi from '../../../../../../Api/Inspection';

const InspectionList = ({navigation}) => {
  useEffect(() => {
    InspectionApi.getAllInspection().then(res => console.log(res.data)).catch(err => console.log(err));
  }
  , [])
  return (
    <SafeAreaView>
        <View>
        <TouchableOpacity>
          <Icon
            name="arrow-left"
            size={20}
            style={{marginLeft:10,marginTop:10}}
            color="#16B497"
            onPress={() => navigation.navigate("NewBarcod")}
          />
        </TouchableOpacity>
      <Text className="mx-auto text-2xl p-4 text-haskoyGreen font-bold" style={{fontFamily:"serif"}}>Geçmiş Yoklama Listesi</Text>
            <InspectionLItem></InspectionLItem>
            <InspectionLItem > </InspectionLItem>
            <InspectionLItem > </InspectionLItem>
            <InspectionLItem > </InspectionLItem>
            <InspectionLItem > </InspectionLItem>

        </View>
    </SafeAreaView>
  )
}

export default InspectionList