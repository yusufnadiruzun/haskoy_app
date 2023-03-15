import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import Login from "./src/screens/Login/Login";
import Menu from "./src/screens/Menu";
import Signin from "./src/screens/Login/Signin";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StudentsList from "./src/screens/StudentsList";
import InspectionMenu from "./src/screens/InspectionMenu";
import Cleaner from "./src/screens/Cleaner";
import Guard from "./src/screens/Guard";
import FoodList from "./src/screens/FoodList";
import Wish from "./src/screens/Wish";
import Temp from "./src/screens/Temp";
import Competition from "./src/screens/Competition";
import { useSelector } from "react-redux";
//import {AsyncStorage} from 'react-native';

const Stack = createNativeStackNavigator();

function Navigator() {
  const selector = useSelector((state)=>(state.result))

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
            <Stack.Screen name="Sign" component={Signin} />
            
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </View>
  );
}
export default Navigator;
