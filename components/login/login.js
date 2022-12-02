import React from 'react'
import { View, Text, SafeAreaView,Image,TextInput, StyleSheet, TouchableOpacity} from 'react-native'

function login() {
  return (
  
   <SafeAreaView style>   
    
    <Image 
    source={require('../../assets/haskoy.png')} 
    style ={{width: 250, height: 200,marginLeft:'20%'}}/>
    <Text style={{fontSize: 30,marginLeft:'18%',color:'#00cca3'}}>Hasköy'e Hoşgeldiniz</Text>
    <TextInput style={style.input} placeholder="Kullanıcı Adı"  />
    <TextInput style={style.input} placeholder="Şifre" secureTextEntry={true} />
    <TouchableOpacity style={{width:170,height:25,marginTop:'10%', marginLeft:"25%",backgroundColor: "blue"}} >
            <Text style={{textAlign :"center", color:'white',fontWeight:'700'}} >Giriş Yap</Text>
    </TouchableOpacity>
   </SafeAreaView>
  )
}

const style = StyleSheet.create({

  input:{
    padding:10,
    marginLeft:'10%',
    marginTop:'10%',
    borderStyle:'solid',
    width:'75%',
    borderBottomWidth:1,
    borderBottomColor:'#59C1CC',
  },
  button:{
    marginTop:'50%',
    width:'50%',
    
  }
})

export default login