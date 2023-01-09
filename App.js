import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import store from "./redux";
import Login from "./screens/Login/Login";
import Menu from "./screens/Menu";
import Signin from "./screens/Login/Signin";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StudentsList from "./screens/StudentsList";
import InspectionMenu from "./screens/InspectionMenu";
import Cleaner from "./screens/Cleaner";
import Guard from "./screens/Guard";
import FoodList from "./screens/FoodList";
import Wish from "./screens/Wish";
import Temp from "./screens/Temp";
import Competition from "./screens/Competition";
//import {AsyncStorage} from 'react-native';

const Stack = createNativeStackNavigator();

function App() {
  let signIn = true;
  return (
    <Provider store={store}>
      {signIn ? (
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
            <Stack.Screen name="Menu" component={Menu} />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
