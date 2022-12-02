
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './redux';
import Login from './components/login/login';

function App() {
  return (
  <Provider store={store}>
    <View>
      <Login></Login>
    </View>
  </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;