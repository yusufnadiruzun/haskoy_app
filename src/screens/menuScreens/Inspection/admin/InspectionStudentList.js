import { View, Text,TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import StudentLItem from '../../../../components/StudentLItem'
import Icon from "react-native-vector-icons/FontAwesome";
import api from '../../../../../Api/Users'
import inspectionApi from '../../../../../Api/Inspection'

const InspectionStudentList = ({navigation}) => {
  const [students, setStudents] = React.useState([])
  const [inspectionStatus, setInspectionStatus] = React.useState("")
  const [phone , setPhone] = React.useState("");
  let number = 0;

  const deneme = () => {
    console.log("inspectionStatus: ",inspectionStatus)
    console.log("phone: ",phone)

    inspectionApi.addInspection("hatim",phone,).then(res => console.log(res.data)).catch(err => console.log(err));
  }
  useEffect(() => {
   api.getUsers().then(res => setStudents(res.data)).catch(err => console.log(err));
  }
  , [])
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
      {students.map((student) => {
        
        return (
          <StudentLItem key={number+=1-1} number={number++} name={student.name} surname={student.surname} status={student.status}  onchange={(value) =>{ setInspectionStatus(value) ; setPhone(student.phone); deneme()}}></StudentLItem>
        )
      }
      )}
      </ScrollView>
    </SafeAreaView>
  )
}

export default InspectionStudentList