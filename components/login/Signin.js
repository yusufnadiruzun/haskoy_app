import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Signin = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity>
        <Text onPress={() => navigation.navigate('Login')}>Geri</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Signin