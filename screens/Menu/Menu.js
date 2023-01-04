import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button, ThemeProvider } from '@rneui/themed';

const Menu = () => {
  return (
    <SafeAreaView >
      <Button title="Solid" type="solid"/>
    </SafeAreaView>

  )
}
export default Menu