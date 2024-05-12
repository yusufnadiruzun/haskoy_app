import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const InspectionLItem = ({date, inspection, count}) => {
  return (
    <View>
        <TouchableOpacity className ="flex-row border">
        <Text className="py-3 px-1 my-auto font-bold w-1/12" style={{fontFamily:"serif"}}>1</Text>
        <Text className="py-2 my-auto font-bold w-1/4" style={{fontFamily:"serif"}}>{date} </Text>
        <Text className="py-2 my-auto font-bold w-1/3" style={{fontFamily:"serif"}}>Yoklama: {inspection}</Text>
        <Text className="py-2 ml-5 my-auto text-xs w-1/3" style={{fontFamily:"serif"}}>Katılımcı : {count}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default InspectionLItem