import React, {useState} from 'react'
import { View, Text, SafeAreaView,Image,TextInput, StyleSheet, TouchableOpacity} from 'react-native'

function Login({navigation}) {

  const [userName,setUserName] = useState('');
  const [password,setPassword] = useState('');

  const GoSignin = () => {
    navigation.navigate('Sign');
  }
  return (
  
   <SafeAreaView style>   
    <Image 
    source={require('../../assets/haskoy.png')} 
    style ={style.haskoyIcon}/>
    <Text style={style.welcome}>Hasköy'e Hoşgeldiniz</Text>
    <TextInput style={style.input} placeholder="Kullanıcı Adı" onChange={(value) =>setUserName(value)}  />
    <TextInput style={style.input} placeholder="Şifre" secureTextEntry={true} onChange={(value) =>setPassword(value)} />
    <View>
    <TouchableOpacity style={style.loginButton}>
            <Text style={style.loginText}>Giriş Yap</Text>
    </TouchableOpacity>
    <TouchableOpacity style={style.signButton} onPress={GoSignin}>
             <Text style={style.signText} >Hala Hesabınız Yokmu ?</Text>
    </TouchableOpacity>
    </View>
    <View>
      <Text style={style.footer} >© Yusuf Nadir Uzun - 2022</Text>
    </View>
   </SafeAreaView>
  )
}
const style = StyleSheet.create({
  haskoyIcon:{
    width: 250, height: 200,marginLeft:'20%'
  },
  welcome:{
    fontSize: 30,marginLeft:'18%',fontWeight:'500',color:'#16B497'
  },
  input:{
    padding:10,
    marginLeft:'13%',
    marginTop:'10%',
    borderStyle:'solid',
    width:'75%',
    borderBottomWidth:1,
    borderBottomColor:'#59C1CC',
  },
  loginButton:{
    width:270,
    height:35,
    marginTop:'10%', 
    marginLeft:"20%",
    backgroundColor: "#16B497",
    borderStyle:'solid',
    borderWidth:2,	
    borderColor:'#16B497',
    borderRadius:15,
  },
  signButton:{
    width:300,
    height:20,
    marginTop:'3%',
    marginLeft:'3%',
    flexDirection:'row',

  },
  loginText:{
    textAlign :"center",
     color:'white',
     fontWeight:'800',
     marginTop:'0%',
     fontSize:20
  },
  signText:{
    textAlign :"center",
     color:'black',
     marginLeft:'40%',
     fontWeight:'700'
  },
  footer:{
    textAlign :"center",
    marginTop:'22%',
    marginBottom:'15%',
    fontSize:14
  }
})

export default Login;