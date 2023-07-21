import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import SignBlocks from '../../../../components/SignBlocks'
import Icon from "react-native-vector-icons/FontAwesome";
const NewBarcod = ({navigation}) => {
    const [inspectionName, setInspectionName] = React.useState("")

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
        <View className="items-center mt-40">
        <SignBlocks placeholder={"Yoklama İsmi Giriniz"} changeFunc={(value) => setInspectionName(value)}></SignBlocks>
        <TouchableOpacity
            className="border-solid rounded-lg bg-haskoyGreen mt-10 w-2/4 "
            onPress={() => navigation.navigate("BarcodView",{inspectionName:inspectionName})}
          >
            <Text className="text-center text-white font-bold text-lg">
              Barkod Oluştur
            </Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default NewBarcod