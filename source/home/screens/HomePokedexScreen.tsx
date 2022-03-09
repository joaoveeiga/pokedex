import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SearchBar, PokemonCard } from '../components'
import PokeballHeaderIllustration from '../../../assets/svgs/pokeball-header.svg'
import SortByNumberIllustration from '../../../assets/svgs/sort-by-number.svg'
import SortByNameIllustration from '../../../assets/svgs/sort-by-name.svg'
import { PokemonDetailScreen } from '../screens'
import { Pokemon } from '../types'


const pokemonOne: Pokemon = {
  name: "charizard",
  frontDefault: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
  types: [
    "fire",
    "flying",
  ],
  id: 6
}


export default function HomePokedexScreen() {

  const [filter, setFilter] = useState('SortByNumber')
  function onPressChangeFilter() {
    if (filter === 'SortByNumber')
      setFilter('SortByName')
    else
      setFilter('SortByNumber')
  }

  return (
    <View style={styles.mainViewContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.pokeballIconContainer}>
          <PokeballHeaderIllustration />
        </View>
        <View style={styles.pokedexTextContainer}>
          <Text style={{ fontWeight: "bold", fontSize: 24, color: '#212121' }}>
            Pokédex
          </Text>
        </View>
        <TouchableOpacity style={styles.filter} onPress={onPressChangeFilter}>
          {filter === 'SortByNumber' ? <SortByNumberIllustration /> : <SortByNameIllustration />}
        </TouchableOpacity>
      </View>
      <SearchBar />
      <View style={styles.cardsContainer}>
        <PokemonCard data={pokemonOne} />
        {/* <PokemonCard data={data2} />
        <PokemonCard data={data3} /> */}
        {/* <PokemonDetailScreen data={data3} /> */}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainViewContainer: {
    marginHorizontal: 20,
    backgroundColor: '#F7F7F7',
  },
  pokeballIconContainer: {
    flexDirection: 'row',
    width: 42,
    height: 35,
    padding: 10,
    alignItems: 'center',
  },
  cardsContainer: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  pokedexTextContainer: {
    alignSelf: 'flex-start',
    height: 35,
    width: 280,
    paddingLeft: 10,
  },
  headerContainer: {
    flexDirection: 'row',
  },
  filter: {
    width: 40,
    height: 35,
  },
})