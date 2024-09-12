import React, { useEffect } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

//packages
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

// menu
import Menu from "./src/screens/Menu/Menu";

// login
import Login from "./src/screens/Login/Login";
import Signup from "./src/screens/Login/Signup";

// navigation
import StudentsList from "./src/screens/menuScreens/StudentsList";
import InspectionMenu from "./src/screens/menuScreens/Inspection/InspectionMenu";
import Cleaner from "./src/screens/menuScreens/Cleaner";
import Guard from "./src/screens/menuScreens/Guard";
import FoodList from "./src/screens/menuScreens/FoodList";
import Wish from "./src/screens/menuScreens/Wish";
import Temp from "./src/screens/menuScreens/Temp";
import Competition from "./src/screens/menuScreens/Competition";

// navigation inspection admin
import NewBarcod from "./src/screens/menuScreens/Inspection/admin/addInspection/NewBarcod";
import BarcodView from "./src/screens/menuScreens/Inspection/admin/addInspection/BarcodView";
import InspectionStudentList from "./src/screens/menuScreens/Inspection/admin/addInspection/InspectionStudentList";
import InspectionList from "./src/screens/menuScreens/Inspection/admin/pastInspection/InspectionList";
import DateInspectionScreen from "./src/screens/menuScreens/Inspection/admin/pastInspection/DateInspectionScreen";
import StudentAnalyze from "./src/screens/menuScreens/Inspection/admin/studentAnalyze/StudentAnalyze";
import StudentAnalyzeScreen from "./src/screens/menuScreens/Inspection/admin/studentAnalyze/StudentAnalyzeScreen";
import StudentPastAttended from "./src/screens/menuScreens/Inspection/admin/studentAnalyze/StudentPastAttended";

// navigation inspection user
import BarcodScanner from "./src/screens/menuScreens/Inspection/user/BarcodScanner";
import PastInspection from "./src/screens/menuScreens/Inspection/user/PastInspection"

// helpers
import { LoginControl } from "./src/helpers/auth/auth";
import User from "./src/Objects/User";
// loading
import LoadingOverlay from "./src/components/LoadingOverlay";
import NewUpdateNotification from "./src/components/NewUpdateNotification";


const Stack = createNativeStackNavigator();

function Navigator() {
  const selector = useSelector((state) => state.result);
  useEffect(() => {
    // const user = {
    //   phone: "5531503592",
    //   password: "123456",
    //   usertoken: "$2a$10$9to60RHWgYS5DO17twbS6.XLydpBCQFuiscB.DdvKjKRS2VFjv2p.",
    // }
   const getStorageData = async () => {
    // AsyncStorage.setItem('usertoken',"$2a$10$gNWMdSmMHCb/4tWXSyMUoO7NpN2YXRv2PdBNpHSH5uFxl8u.kcOIO")
     const user = new User();
     
       user.usertoken =  await AsyncStorage.getItem('usertoken')
       await AsyncStorage.getItem("usertoken").then((value) => {
        if (value != null) {

          LoginControl(user)
        } else {
          console.log("null aq")
        }
      });
    };
    getStorageData();
    
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {selector.login ? (
        
        <NavigationContainer>
          <NewUpdateNotification />
                <LoadingOverlay />
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Menu" component={Menu} />
            <Stack.Screen name="InspectionMenu" component={InspectionMenu} />
            <Stack.Screen name="NewBarcod" component={NewBarcod} />
            <Stack.Screen name="BarcodView" component={BarcodView} />
            <Stack.Screen name="InspectionStudentList" component={InspectionStudentList} />
            <Stack.Screen name="InspectionList" component={InspectionList} />
            <Stack.Screen name="BarcodScanner" component={BarcodScanner} />
            <Stack.Screen name="PastInspection" component={PastInspection} />
            <Stack.Screen name="StudentAnalyze" component={StudentAnalyze} />
            <Stack.Screen name="StudentPastAttended" component={StudentPastAttended} />
            <Stack.Screen name="StudentAnalyzeScreen" component={StudentAnalyzeScreen} />
            <Stack.Screen name="DateInspectionScreen" component={DateInspectionScreen} />
            <Stack.Screen name="Cleaner" component={Cleaner} />
            <Stack.Screen name="Guard" component={Guard} />
            <Stack.Screen name="FoodList" component={FoodList} />
            <Stack.Screen name="StudentsList" component={StudentsList} />
            <Stack.Screen name="Temp" component={Temp} />
            <Stack.Screen name="Wish" component={Wish} />
            <Stack.Screen name="Competition" component={Competition} />
          </Stack.Navigator>
        </NavigationContainer>
      ) : (   
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Sign" component={Signup} />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </View>
  );
}
export default Navigator;
