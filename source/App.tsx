import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { View, StyleSheet, SafeAreaView } from 'react-native'
import { HomePokedexScreen } from './home/screens'


export default function App() {
  return (
    <NavigationContainer>
      <HomePokedexScreen />
    </NavigationContainer>  
  )
}

const styles = StyleSheet.create({
})