import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Pokemon } from '../types'
import { Theme, getThemeByType} from "../../theme"

export type PokemonCardProps = {
  data: Pokemon
}

export default function PokemonCard({ data }: PokemonCardProps) {
  const {frontDefault, id, name, types} = data
  const navigation = useNavigation()

  function onPress() {
    navigation.navigate('PokemonDetailScreen')
  }

  
  return (
    <View>
      <TouchableOpacity style={[styles.container, { borderColor: getThemeByType(types[0]) }]} onPress={onPress}>
        <View style={styles.pokemonNumberContainer}>
          <Text style={[{ color: getThemeByType(types[0]), fontSize: 11, }]}>#00{id}</Text>
        </View>
        <View>
          <Image source={{ uri: frontDefault }} style={styles.image} />
        </View>
        <View style={[styles.pokemonNameContainer, { backgroundColor: getThemeByType(types[0]) }]}>
          <Text style={[styles.pokemonName, { color: Theme.background }]}>{name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 5,
    width: 110,
    height: 110,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    marginTop: -5,
    width: 76,
    height: 76,
  },
  pokemonNumberContainer: {
    alignSelf: 'flex-end',
    paddingRight: 5,
    paddingTop: 3,
    fontSize: 11,
  },
  pokemonNameContainer: {
    height: 24,
    width: 110,
    borderRadius: 5,
    borderTopEndRadius: 0,
    borderTopLeftRadius: 0,
    justifyContent: 'center',
  },
  pokemonName: {
    alignSelf: 'center',
    justifyContent: 'center',
  }
})