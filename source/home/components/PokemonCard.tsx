import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Theme } from "../../theme/theme"

export type PokemonCardProps = {
  data: any
}

export default function PokemonCard({ data }: PokemonCardProps) {
  const { name, sprites, id, types } = data
  const { other } = sprites
  const { 'official-artwork': officialArtwork } = other
  const pokemonNumber = '#' + ('000' + id.toString()).slice(-3).toString()
  const { type: pokemonType } = types[0]
  const { name: typeName } = pokemonType
  const pokemonName = name[0].toUpperCase() + name.slice(1)
  const navigation = useNavigation()

  function onPress() {
    navigation.navigate('PokemonDetailScreen')
  }

  return (
    <View>
      <TouchableOpacity style={[styles.container, { borderColor: Theme[typeName] }]} onPress={onPress}>
        <View style={styles.pokemonNumberContainer}>
          <Text style={[{ color: Theme[typeName], fontSize: 11, }]}>{pokemonNumber}</Text>
        </View>
        <View>
          <Image source={{ uri: officialArtwork.front_default }} style={styles.image} />
        </View>
        <View style={[styles.pokemonNameContainer, { backgroundColor: Theme[typeName] }]}>
          <Text style={[styles.pokemonName, { color: Theme.background }]}>{pokemonName}</Text>
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