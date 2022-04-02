import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Theme, getThemeByType } from "../../theme"
import PokeballIllustration from '../../../assets/svgs/pokeball-background.svg'
import GoBackArrowIllustration from '../../../assets/svgs/go-back-arrow.svg'
import PreviousPokemonIllustration from '../../../assets/svgs/previous-pokemon.svg'
import WeightIllustration from '../../../assets/svgs/weight-icon.svg'
import HeightIllustration from '../../../assets/svgs/height-icon.svg'
import NextPokemonIllustration from '../../../assets/svgs/next-pokemon.svg'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Formatter } from '../core/utils'
import { Stats, Separator } from '../components'

type Ability = {
  isHidden: boolean
  name: string
}


export default function PokemonDetailScreen({ route }) {

  const { data } = route.params
  const { name,
    frontDefault,
    types,
    id,
    height,
    weight,
    abilities,
    description,
    stats
  } = data
  const [firstType, secondType] = types


  const navigation = useNavigation()

  function onPress() {
    navigation.goBack()
  }

  function renderAbilities(): JSX.Element[] {
    return abilities.map((item: Ability, index: number) => {
      const { name, isHidden } = item
      if (isHidden)
        return <Text style={styles.abilityText} key={index}>{Formatter.capitalizeFirstLetter(name)} (Hidden)</Text>
      return <Text style={styles.abilityText} key={index}>{Formatter.capitalizeFirstLetter(name)}</Text>
    })
  }
  return (
    <View style={[styles.container, { backgroundColor: getThemeByType(types[0]) }]}>
      <View style={styles.pokeballContainer}>
        <PokeballIllustration />
      </View>
      <View style={styles.headerContainer}>
        <View style={styles.nameContainer}>
          <TouchableOpacity onPress={onPress}>
            <GoBackArrowIllustration width={18} height={18} />
          </TouchableOpacity>
          <Text style={styles.text}>{Formatter.capitalizeFirstLetter(name)}</Text>
        </View>
        <Text style={[styles.text, { fontSize: 16, }]}>#{id.toString().padStart(3, '0')}</Text>
      </View>

      <View style={styles.pokemonImageContainer}>
        <TouchableOpacity>
          <PreviousPokemonIllustration />
        </TouchableOpacity>

        <Image source={{ uri: frontDefault }} style={styles.image} />

        <TouchableOpacity>
          <NextPokemonIllustration />
        </TouchableOpacity>
      </View>

      <View style={styles.pokemonDescriptionModal}>
        <View style={styles.pokemonDescription}>

          <View style={styles.pokemonTypesContainer}>
            <View style={[styles.pokemonTypeContainer, { backgroundColor: getThemeByType(firstType) }]}>
              <Text style={styles.typesText}>{Formatter.capitalizeFirstLetter(firstType)}</Text>
            </View>
            {secondType && <View style={[styles.pokemonTypeContainer, { backgroundColor: getThemeByType(secondType) }]}>
              <Text style={styles.typesText}>{Formatter.capitalizeFirstLetter(secondType)}</Text>
            </View>}
          </View>

          <Text style={[styles.aboutText, { color: getThemeByType(firstType) }]}>
            About
          </Text>

          <View style={styles.aboutContainer}>

            <View style={styles.weightAndHeightContainer}>
              <View style={styles.weightAndHeightImageContainer}>
                <WeightIllustration />
                <Text style={styles.weightAndHeightNumbersText}>    {weight / 10} kg</Text>
              </View>
              <Text style={styles.bottomText}>Weight</Text>
            </View>
            <Separator />

            <View style={styles.weightAndHeightContainer}>
              <View style={styles.weightAndHeightImageContainer}>
                <HeightIllustration />
                <Text style={styles.weightAndHeightNumbersText}>    {height / 10} m</Text>
              </View>
              <Text style={styles.bottomText}>Height</Text>
            </View>
            <Separator />

            <View style={styles.abilitiesContainer}>
              {renderAbilities()}
              <Text style={styles.bottomText}>Abilities</Text>
            </View>
          </View>

          <Text style={styles.abilityText}>{description}</Text>

          <Text style={[styles.aboutText, { color: getThemeByType(firstType) }]}>Base Stats</Text>

          <Stats type={firstType} stats={stats} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  abilitiesContainer: { 
    justifyContent: 'space-evenly' 
  },
  bottomText: {
    textAlign: 'center',
    color: Theme.mediumGray,
    fontSize: 8,
  },
  weightAndHeightImageContainer: {
    flexDirection: 'row',
  },
  weightAndHeightNumbersText: {
    fontSize: 10,
    color: Theme.darkGray,
  },
  abilityText: {
    fontSize: 10,
    textAlign: 'justify',
    color: Theme.darkGray,
  },
  aboutContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    paddingHorizontal: 20,

  },
  weightAndHeightContainer: {
    alignSelf: 'center',
    justifyContent: 'space-evenly',
    height: 60,
  },
  aboutText: {
    fontWeight: 'bold',
    fontSize: 16,
    paddingVertical: 15,
  },
  pokemonTypesContainer: {
    flexDirection: 'row',
    width: '40%',
    justifyContent: 'space-evenly',
  },
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Theme.white,
    paddingLeft: 20,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pokeballContainer: {
    flex: 1,
    position: 'absolute',
    alignSelf: 'flex-end',
    padding: 8,
  },
  image: {
    height: 300,
    width: 300,
  },
  pokemonImageContainer: {
    height: 300,
    width: '100%',
    justifyContent: 'space-evenly',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 1,
    marginTop: -30,
  },
  pokemonDescriptionModal: {
    backgroundColor: Theme.white,
    flexDirection: 'row',
    width: '98%',
    alignSelf: 'center',
    height: '65%',
    position: 'absolute',
    bottom: 5,
    borderRadius: 10,
    justifyContent: 'space-evenly',
  },
  pokemonDescription: {
    marginTop: 70,
    width: '100%',
    alignItems: 'center',
  },
  pokemonTypeContainer: {
    borderRadius: 30,
    paddingHorizontal: 10,
    height: 25,
  },
  typesText: {
    fontWeight: 'bold',
    color: Theme.white,
  }
})

PokemonDetailScreen.navigationOptions = {
  headerShown: false
}