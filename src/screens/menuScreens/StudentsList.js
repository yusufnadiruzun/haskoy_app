import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Divider, Icon, Image } from '@rneui/themed'
import { useNavigation } from '@react-navigation/native'

const img = 'https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80'


const StudentsList = () => {
  
  const [studentList, setStudentList] = useState([]);
  const navigation = useNavigation()

  useEffect(() => {
    getStudents()
  }, []);

  const getStudents = () => {
    GetStudentList().then((updatedList) => {
      setStudentList(updatedList);
    }).catch((error) => {
      console.log(error);
    });
  }



  return (
    <View style={style.container}>
      <SafeAreaView style={{ flex: 1, width: '100%', }}>
        <View style={{ paddingLeft: 10, paddingTop: 40, paddingBottom: 10, flexDirection: 'row', alignItems: 'center' }}>
          <Icon name='arrow-left' type='feather' size={30} onPress={() => navigation.goBack()} />
          <Text style={style.header}>Öğrenciler</Text>
        </View>
        <Divider style={style.divider} />
        <FlatList
          contentContainerStyle={style.contentContainerStyle}
          data={studentList}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={{ flexDirection: 'row', paddingBottom: 15 }}>
              <Image source={{ uri: img }} style={style.photoStyle} resizeMode='cover' />
              <View style={{ justifyContent: 'center' }}>
                <Text style={style.title}>{item['name']}</Text>
                <Text style={{ color: 'gray' }}>{item['status']}</Text>
              </View>
            </View>
          )}
          keyExtractor={item => item['phone']}
        />
      </SafeAreaView>
    </View>
  )
}

const style = StyleSheet.create({
  header: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  divider: {
    backgroundColor: 'teal',
    height: 2,
    marginLeft: 10,
    marginRight: 100,
  },
  photoStyle: {
    height: 70,
    width: 70,
    borderRadius: 40,
    marginRight: 10,
  },
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    justifyContent: 'flex-start',
  },
  contentContainerStyle: {
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    paddingVertical: 30,
    paddingHorizontal: 12,
  },
  icon: {
    fontSize: 70,
    color: '#16B497'
  },
  title: {
    fontSize: 20,
  },
})

export default StudentsList
