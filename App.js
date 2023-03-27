import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Home from './Components/Home';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavi from './Components/Bottom_tab_navi';
const App = () => {
  return (
    <SafeAreaProvider style={styles.container}>
      <NavigationContainer>
        <BottomTabNavi/>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff'
  }
})

export default App;
