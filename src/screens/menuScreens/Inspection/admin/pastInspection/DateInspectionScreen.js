import { View, Text,TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import StudentLItem from '../../../../../components/StudentLItem'
import Icon from "react-native-vector-icons/FontAwesome";
import api from '../../../../../../Api/Inspection'
import inspectionApi from '../../../../../../Api/Inspection'
const DateInspectionScreen = ({route}) => {
    const {inspection_type,date} = route.params ;
    const [students, setStudents] = React.useState([])
    console.log(inspection_type,date)
    useEffect(()=>{
        api.getInspection(inspection_type,date).then(res => setStudents(res.data)).catch(err => console.log(err));
    })

  return (
    <SafeAreaView>
      <ScrollView>
        <TouchableOpacity>
          <Icon
            name="arrow-left"
            size={20}
            style={{marginLeft:10,marginTop:10}}
            color="#16B497"
            onPress={() => navigation.navigate("NewBarcod")}
          />
        </TouchableOpacity>
      <Text className="mx-auto text-3xl p-4 text-haskoyGreen font-bold" style={{fontFamily:"serif"}}>Talebe Listesi</Text>
      {students.map((student,index) => {
          
        return (
          <StudentLItem key={index} number={index+1} name={student.name} surname={student.surname} status={student.status}  onchange={(value) =>{ deneme(value,student.phone)}}></StudentLItem>
        )
      }
      )}
      </ScrollView>
    </SafeAreaView>
  )
}

export default DateInspectionScreen