import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import SignBlocks from '../../../../../components/SignBlocks'
import Icon from "react-native-vector-icons/FontAwesome";

import { SelectList } from "react-native-dropdown-select-list";
import { ScrollView } from 'react-native-web';

const NewBarcod = ({navigation}) => {
    const [newInspection, setNewInspection] = React.useState("")
    const [inspectionName, setInspectionName] = React.useState("")
    const data = [
      { key: "Sabah", value: "Sabah" },
      { key: "Öğle", value: "Öğle" },
      { key: "İkindi", value: "İkindi" },
      { key: "Akşam", value: "Akşam" },
      { key: "Yatsı", value: "Yatsı" },
      { key: "Hatim", value: "Hatim" },
      { key: "Yat", value: "Yat" },
      { key: "Diğer", value: "Diğer" },
    ];
  return (
    <SafeAreaView>
      
      <View className="p-6">
       <TouchableOpacity>
          <Icon
            name="arrow-left"
            
            size={20}
            color="#16B497"
            onPress={() => navigation.navigate("InspectionMenu")}
          />
        </TouchableOpacity>
        </View>
        <Text className="text-center text-2xl font-bold mt-10 p-4 text-haskoyOrange">Yoklama Seçiniz</Text>
        <SelectList
          data={data}
          setSelected={setInspectionName}
          placeholder="Yoklama Türü"
          inputStyles={{ fontSize: 15, width: "80%", color: "#16B497" }}
          dropdownStyles={{ color: "#16B497", width: "80%", marginLeft: "10%" }}
          boxStyles={{ width: "80%", marginLeft: "10%", marginTop: "2%" }}
        ></SelectList>
        
        <View className="items-center mt-20">

        
        {inspectionName == "Diğer" ? <SignBlocks placeholder={"Yoklama İsmi Giriniz"} changeFunc={(value) => setInspectionName(value)}></SignBlocks> : null}
        <TouchableOpacity
            className="border-solid rounded-lg bg-haskoyGreen mt-6 w-2/4 "
            onPress={() => navigation.navigate("BarcodView",{inspectionName:inspectionName})}
          >
            <Text className="text-center text-white font-bold text-lg">
              Barkod Oluştur
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="border-solid rounded-lg bg-haskoyGreen mt-6 w-2/4 "
            onPress={() => navigation.navigate("InspectionStudentList",{inspectionName:inspectionName})}
          >
            <Text className="text-center text-white font-bold text-lg">
              Listeden Yoklama Al
            </Text>
          </TouchableOpacity>
        </View>
        
    </SafeAreaView>
  )
}

export default NewBarcod