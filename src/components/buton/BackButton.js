import { View} from 'react-native'
import React from 'react'
import { Text, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
const BackButton = ({onPress,color}) => {
  return (
    <View className="p-6">
                <TouchableOpacity onPress={ onPress}>
                    <Icon
                        name="arrow-left"
                        size={20}
                        color={color}
                        
                    />
                </TouchableOpacity>
            </View>
  )
}

export default BackButton