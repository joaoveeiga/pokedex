import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Pokemon } from '../types'
import { Theme, getThemeByType} from "../../theme"
import { Formatter } from '../core/utils'
import PokemonDetail from '../types/pokemonDetailType'

export type PokemonCardProps = {
  data: Pokemon
}

const pokemonOneDetail: PokemonDetail = { 
  name: "charizard",
  frontDefault: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
  types: [
    "fire",
    "flying",
  ],
  id: 6,
  weight: 905,
  height: 17,
  abilities: [
    {
      name: 'blaze',
      isHidden: false,
    },
    {
      name: 'solar-power',
      isHidden: true,
    },
  ],
  description: 'Spits fire that is hot enough to melt boulders. Known to cause forest fires unintentionally.',
  stats: [
    {
      baseStat: 78,
      name: 'hp',
    },
    {
      baseStat: 84,
      name: 'attack',
    },{
      baseStat: 78,
      name: 'defense',
    },{
      baseStat: 109,
      name: 'special-attack',
    },{
      baseStat: 85,
      name: 'special-defense',
    },{
      baseStat: 100,
      name: 'speed',
    },
  ]
}

export default function PokemonCard({ data }: PokemonCardProps) {
  const {frontDefault, id, name, types} = data
  const navigation = useNavigation()

  function onPress() {
    navigation.navigate('PokemonDetailScreen', {
      data: pokemonOneDetail
    })
  }
  
  return (
    <View>
      <TouchableOpacity style={[styles.container, { borderColor: getThemeByType(types[0]) }]} onPress={onPress}>
        <View style={styles.pokemonNumberContainer}>
          <Text style={[{ color: getThemeByType(types[0]), fontSize: 11, }]}>#{id.toString().padStart(3, '0')}</Text>
        </View>
        <View>
          <Image source={{ uri: frontDefault }} style={styles.image} />
        </View>
        <View style={[styles.pokemonNameContainer, { backgroundColor: getThemeByType(types[0]) }]}>
          <Text style={[styles.pokemonName, { color: Theme.background }]}>{Formatter.capitalizeFirstLetter(name)}</Text>
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