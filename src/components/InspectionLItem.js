import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const InspectionLItem = ({date, inspection, count,index, dateInspectionScreen}) => {
  return (
    <View>
        <TouchableOpacity className ="flex-row p-4 justify-around" onPress={() => dateInspectionScreen()}>
        {/* <Text className="py-3 px-1 my-auto font-bold w-1/12" style={{fontFamily:"serif"}}>1</Text>
        <Text className="py-2 my-auto font-bold w-1/4" style={{fontFamily:"serif"}}>{date} </Text>
        <Text className="py-2 text-center font-bold w-1/3" style={{fontFamily:"serif"}}> {inspection.charAt(0).toUpperCase() + inspection.slice(1)} </Text>
        <Text className="py-2 ml-10 my-auto text-xs w-1/3" style={{fontFamily:"serif"}}>{count}</Text> */}
         <Text  style={{fontFamily:"serif"}}>{index}</Text>
        <Text  style={{fontFamily:"serif"}}>{date} </Text>
        <Text  style={{fontFamily:"serif"}}> {inspection.charAt(0).toUpperCase() + inspection.slice(1)} </Text>
        <Text  style={{fontFamily:"serif"}}>{count}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default InspectionLItem