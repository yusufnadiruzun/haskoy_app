import { View, Text } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome";
const DateInspectionLItem = ({number,name,surname,status,level, updateButton} ) => {
  const[phoneNumber, setPhoneNumber] = useState("");

  return (
    
    <View className = "p-2 border-b-2 border-b-haskoyOrange">
    <TouchableOpacity className ="flex-row">
    <Text className="p-1 my-auto font-bold w-1/12" style={{fontFamily:"serif"}}>{number}</Text>
      <Text className="py-2 my-auto font-bold w-1/3" style={{fontFamily:"serif"}}>{name} </Text>
      <Text className="py-2 my-auto font-bold w-1/6" style={{fontFamily:"serif"}}>{surname} </Text>
      <Text className="py-2 my-auto font-bold w-1/6" style={{fontFamily:"serif"}}>{level}</Text>
      <Text className="py-2 my-auto font-bold w-1/6" style={{fontFamily:"serif"}}>{status.charAt(0).toUpperCase() + status.slice(1)}</Text>
      <TouchableOpacity className="p-2 mr-6" onPress={(value) => updateButton(value)}>
        <Icon name="refresh" size={20} color="red"></Icon>
      </TouchableOpacity>
    </TouchableOpacity>
</View>
    
  );
};

export default DateInspectionLItem;
