import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';


const Temp = () => {
  return (
    <View style={style.container}>
      <Text style={style.Text}>Bu Hizmet Çok Yakında Sizlerle Olacak </Text>
      <Icon style={style.icon} name='smile-wink'></Icon>
    </View>
  )
}
const style = StyleSheet.create({
  container:{
    width:'100%',
    height:'100%',
    alignItems:'center',
    alignContent:'center',
    justifyContent:'center'
  },
  icon:{
    fontSize:70
  },
  Text: {
    padding: 30,
    fontSize: 20,
  },
})
export default Temp