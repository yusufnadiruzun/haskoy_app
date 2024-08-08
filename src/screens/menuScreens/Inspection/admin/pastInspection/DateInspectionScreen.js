import { View, Text,TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import StudentLItem from '../../../../../components/StudentLItem'
import Icon from "react-native-vector-icons/FontAwesome";
import api from '../../../../../../Api/Inspection'
import DateInspectionLItem from '../../../../../components/DateInspectionLItem';

const DateInspectionScreen = ({navigation,route}) => {
    const {inspection_name,date} = route.params ;
   
    const [students, setStudents] = React.useState([])
    console.log(inspection_name,date)
    useEffect(()=>{
      console.log(",,,ss-- -- ", inspection_name,date)
        api.getInspection(inspection_name,date).then(res => setStudents(res.data)).catch(err => console.log(err));
    },[])

  return (
    <SafeAreaView>
      <ScrollView>
        <TouchableOpacity>
          <Icon
            name="arrow-left"
            size={20}
            style={{marginLeft:10,marginTop:10}}
            color="#16B497"
            onPress={() => navigation.navigate("InspectionMenu")}
          />
        </TouchableOpacity>
      <Text className="mx-auto text-3xl p-4 text-haskoyGreen font-bold" style={{fontFamily:"serif"}}>Talebe Listesi</Text>
      {students.map((student,index) => {
          
        return (
          <DateInspectionLItem ></DateInspectionLItem>
        )
      }
      )}
      </ScrollView>
    </SafeAreaView>
  )
}

export default DateInspectionScreen