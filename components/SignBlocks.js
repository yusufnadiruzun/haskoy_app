import React from 'react'
import { View,TextInput } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';

const SignBlocks = ({icon,placeholder,password, changeFunc}) => {

  return (
    <View style={{flexDirection:'row', padding:20,width:'100%'}}>
    <Icon name={icon} style={{padding:5,marginTop:'4%',fontSize:20}}></Icon>
    <TextInput placeholder={placeholder} secureTextEntry={password} onChangeText={changeFunc} style={{borderStyle:'solid',marginTop:'2%',width:'90%',borderBottomWidth:1,borderBottomColor:'#16B497',padding:7}} ></TextInput>
   </View>
  )
}

export default SignBlocks