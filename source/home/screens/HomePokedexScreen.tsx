import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import PokeballHeaderIllustration from '../../../assets/svgs/pokeball-header.svg'
import SortByNameIllustration from '../../../assets/svgs/sort-by-name.svg'
import SortByNumberIllustration from '../../../assets/svgs/sort-by-number.svg'
import { Theme } from '../../theme'
import { PokemonCard, SearchBar } from '../components'
import { Pokemon } from '../types'
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

const pokemonOne: Pokemon = {
  name: 'charizard',
  frontDefault:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png',
  types: ['fire', 'flying'],
  id: 6,
}

const INITIAL_STATE: Pokemon = {
  name: '',
  frontDefault: '',
  types: [''],
  id: 0,
}

async function useGetRequest() {
  const results = await axios.get(
    'https://pokeapi.co/api/v2/pokemon?limit=2&offset=0',
  )
  return results.data.results
}

async function useGetPokemon(url: string) {
  const results = await axios.get(url)
  // console.log(results.data)
  return results.data
}

export default function HomePokedexScreen() {
  const [pokemons, setPokemons] = useState<{ name: string, url: string }[]>([])
  const [pokemon, setPokemon] = useState<Pokemon>(INITIAL_STATE)

  useEffect(() => {
    useGetRequest().then(results => {
      setPokemons(results)
    })
  }, [])

  const [filter, setFilter] = useState('SortByNumber')

  function onPressChangeFilter() {
    if (filter === 'SortByNumber') setFilter('SortByName')
    else setFilter('SortByNumber')
  }

  return (
    <View style={styles.mainViewContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.pokeballIconContainer}>
          <PokeballHeaderIllustration />
        </View>
        <View style={styles.pokedexTextContainer}>
          <Text
            style={{ fontWeight: 'bold', fontSize: 24, color: Theme.darkGray }}>
            Pokédex
          </Text>
        </View>
        <TouchableOpacity style={styles.filter} onPress={onPressChangeFilter}>
          {filter === 'SortByNumber' ? (
            <SortByNumberIllustration />
          ) : (
            <SortByNameIllustration />
          )}
        </TouchableOpacity>
      </View>
      <SearchBar />
      <View style={styles.cardsContainer}>
        <PokemonCard data={pokemonOne} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainViewContainer: {
    marginHorizontal: 15,
    backgroundColor: Theme.background,
    marginTop: 25,
  },
  pokeballIconContainer: {
    flexDirection: 'row',
    width: 42,
    height: 35,
    padding: 10,
    alignItems: 'center',
    backgroundColor: Theme.background,
  },
  cardsContainer: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Theme.background,
  },
  pokedexTextContainer: {
    alignSelf: 'center',
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
