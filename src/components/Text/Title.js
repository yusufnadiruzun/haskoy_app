import { View, Text } from 'react-native'
import React from 'react'

const Title = ({name,color}) => {

  return (
    <View>
      <Text  className={`mx-auto text-3xl mt-2 p-4 ${color} font-bold`}
        style={{ fontFamily: "serif" }}>{name}</Text>
    </View>
  )
}

export default Title