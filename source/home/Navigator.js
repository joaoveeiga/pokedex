import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import {
  HomePokedexScreen,
  PokemonDetailScreen
} from './screens'

const { Navigator, Screen } = createStackNavigator()

export default function HomeNavigator() {
  return (
    <Navigator>
      <Screen
        name="HomePokedexScreen"
        component={HomePokedexScreen}
      />
      <Screen
        name="PokemonDetailScreen"
        component={PokemonDetailScreen}
      />
    </Navigator>
  )
}