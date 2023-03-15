import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native'
import { Card } from '@rneui/themed';
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { CardDivider } from '@rneui/base/dist/Card/Card.Divider';
import { CardTitle } from '@rneui/base/dist/Card/Card.Title';

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
  {
    name: "rick",
    id: "4",
  },
]

const StudentsList = () => {
  return (
    <SafeAreaView style={style.container}>
      <FlatList contentContainerStyle={style.contentContainerStyle}
        data={Items}
        renderItem={({ item }) => (
          <Card>
            <Card.Title>{item.name}</Card.Title>
            <CardDivider />
          </Card>
        )}
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
  contentContainerStyle: {
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