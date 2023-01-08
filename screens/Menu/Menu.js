import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button, ThemeProvider } from '@rneui/themed';

const Menu = ({navigation}) => {
  return (
    <SafeAreaView >
      <TouchableOpacity style={{width:'30%',height:'30%',backgroundColor:'white', borderStyle:'solid',borderWidth:1,borderColor:'gray',borderRadius:10,alignItems:'center',justifyContent:'center'}} onPress={()=>navigation.navigate("InspectionMenu")}>
        <Text>Yoklama</Text>
      </TouchableOpacity>
    </SafeAreaView>

  )
}
export default Menu