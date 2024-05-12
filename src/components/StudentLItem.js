import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

const StudentLItem = ({number,name,surname,status,onchange}) => {

    const [check, setCheck] = React.useState(false);
    const [info, setInfo] = React.useState("");

    const handleCheck = (info) => {
      setCheck(true);
      setInfo(info);
      onchange(info);
    }
  return (
    <View className="flex-row border justify-center ">
      <Text className="p-1 my-auto font-bold w-1/12" style={{fontFamily:"serif"}}>{number}</Text>
      <Text className="py-2 my-auto font-bold w-1/4" style={{fontFamily:"serif"}}>{name}</Text>
      <Text className="py-2 my-auto font-bold w-1/6" style={{fontFamily:"serif"}}>{surname}</Text>
      <Text className="py-2 my-auto text-xs w-1/12" style={{fontFamily:"serif"}}>{status}</Text>
      
      <TouchableOpacity className="p-3 my-auto" onPress={() => handleCheck("check")}>
        <Icon name="check" size={20} color="green"></Icon>
      </TouchableOpacity>
      <TouchableOpacity className="p-3 my-auto" onPress={() => handleCheck("info")}>
        <Icon name="info" size={20} color="orange"></Icon>
      </TouchableOpacity>
      
      <TouchableOpacity className="p-3 my-auto" onPress={() => handleCheck("times")}>
        <Icon name="times" size={20} color="red"></Icon>
      </TouchableOpacity>
            
        {check ? <View className="mx-auto justify-center"><Icon name={info} size={20} color="blue"></Icon></View >: <View className="mx-auto justify-center"><Icon name="circle" size={20} color="red"></Icon></View>}      
    </View>
  );
};

export default StudentLItem;
