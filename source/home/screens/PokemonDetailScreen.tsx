import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Theme } from "../../theme/theme";

export type PokemonDetailProps = {
  data?: any
}

export default function PokemonDetail({ data }: PokemonDetailProps) {
  // const { name, sprites, id, types } = data
  // const { other } = sprites
  // const { 'official-artwork': officialArtwork } = other
  // const pokemonNumber = '#' + ('000' + id.toString()).slice(-3).toString()
  // const { type: pokemonType } = types[0]
  // const { name: typeName } = pokemonType
  // const pokemonName = name[0].toUpperCase() + name.slice(1)
  return (
    <View>
      <Text> Alo !</Text>
    </View>
  )
}

const styles = StyleSheet.create({

})