import React, { useEffect } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import Login from "./src/screens/Login/Login";
import Menu from "./src/screens/Menu/Menu";
import Signup from "./src/screens/Login/Signup";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StudentsList from "./src/screens/menuScreens/StudentsList";
import InspectionMenu from "./src/screens/menuScreens/InspectionMenu";
import Cleaner from "./src/screens/menuScreens/Cleaner";
import Guard from "./src/screens/menuScreens/Guard";
import FoodList from "./src/screens/menuScreens/FoodList";
import Wish from "./src/screens/menuScreens/Wish";
import Temp from "./src/screens/menuScreens/Temp";
import Competition from "./src/screens/menuScreens/Competition";
import { useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LoginControl } from "./src/helpers/auth/auth";
import User from "./src/Objects/User";
const Stack = createNativeStackNavigator();

function Navigator() {
  const selector = useSelector((state) => state.result);
  useEffect(() => {
    // const user = {
    //   phone: "5531503592",
    //   password: "123456",
    //   usertoken: "$2a$10$9to60RHWgYS5DO17twbS6.XLydpBCQFuiscB.DdvKjKRS2VFjv2p.",
    // }
    // LoginControl(user)
  
    const getStorageData = async () => {

     const user = new User();
     await AsyncStorage.setItem(
        "usertoken",
        "$2a$10$8xcqi/c9rUfXlx.qW8bd/.F20y97Nikoa7XwVClvk7O7O.A9BWNym"
      );
       user.usertoken =  await AsyncStorage.getItem('usertoken')
       await AsyncStorage.getItem("usertoken").then((value) => {
        if (value == null) {
          AsyncStorage.setItem(
            "usertoken",
            "$2a$10$8xcqi/c9rUfXlx.qW8bd/.F20y97Nikoa7XwVClvk7O7O.A9BWNym"
          );
          LoginControl(user)
        } else {
          LoginControl(user);
        }
      });
    };
    getStorageData();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {selector.login ? (
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Menu" component={Menu} />
            <Stack.Screen name="InspectionMenu" component={InspectionMenu} />
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
