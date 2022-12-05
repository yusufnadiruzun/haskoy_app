import { View, Text, TouchableOpacity,StyleSheet, TextInput,Image } from 'react-native'
import React from 'react'
import SignBlocks from '../../components/SignBlocks';
import Icon from 'react-native-vector-icons/FontAwesome';
const Signin = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity>
      <Icon name="arrow-left" style={style.icon} size={20} color="#16B497" onPress={() => navigation.navigate("Login")}/>
      </TouchableOpacity>
      <Image 
    source={require('../../assets/haskoy.png')} 
     style ={style.haskoyIcon}/>
      <View style={style.block}>
      <SignBlocks icon="user" placeholder='İsim Soyisim'></SignBlocks> 
      <SignBlocks icon="lock" placeholder='Şifre' password={true}></SignBlocks> 
      <SignBlocks icon="envelope" placeholder='Mail'></SignBlocks> 
      <SignBlocks icon="phone" placeholder='Telefon No'></SignBlocks> 
      </View>
      <TouchableOpacity style={style.button}>
      <Text style={style.signButon}>Kaydol</Text>  
      </TouchableOpacity> 
    </View>
  )
}

const style = StyleSheet.create({
  signButon:{
    textAlign :"center",
     color:'white',
     fontWeight:'800',
     marginTop:'0%',
     fontSize:20
  },
  button:{
    width:270,
    height:35,
    marginTop:'10%', 
    marginLeft:"20%",
    backgroundColor: "#EC823D",
    borderStyle:'solid',
    borderWidth:2,	
    borderColor:'#EC823D',
    borderRadius:15,
  },
  text:{
    fontSize: 30,marginLeft:'10%',fontWeight:'500',color:'#F1701C',
    marginTop:'2%',
  
  },
  haskoyIcon:{
    width: 250, height: 150,marginLeft:'20%'
  },
  icon:{
    marginLeft:'5%',
    marginTop:'5%',
  },
  block:{
    marginLeft:'5%',
    marginTop:'0%',
  }

});

export default Signin