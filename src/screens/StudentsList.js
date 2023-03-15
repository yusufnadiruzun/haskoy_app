import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native'
import { Card } from 'react-native-elements'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';

const Items = [
  {
    name: "ali",
    id: "1",
  },
  {
    name: "sıla",
    id: "2",
  },
  {
    name: "emirhan",
    id: "3",
  },
]

const StudentsList = () => {
  return (
    <SafeAreaView style={style.container}>
      <FlatList
        data={Items}
        renderItem={({ item }) => <Card.Title>{item.name}</Card.Title>}
        keyExtractor={item => item.id}



      />
    </SafeAreaView>
  )
}
const style = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center'
  },
  icon: {
    fontSize: 70,
    color: '#16B497'
  },
  Text: {
    padding: 30,
    fontSize: 20,
  },
})

export default StudentsList