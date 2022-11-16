import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Theme, getThemeByType} from '../../theme';
import PokeballIllustration from '../../../assets/svgs/pokeball-background.svg';
import GoBackArrowIllustration from '../../../assets/svgs/go-back-arrow.svg';
import PreviousPokemonIllustration from '../../../assets/svgs/previous-pokemon.svg';
import WeightIllustration from '../../../assets/svgs/weight-icon.svg';
import HeightIllustration from '../../../assets/svgs/height-icon.svg';
import NextPokemonIllustration from '../../../assets/svgs/next-pokemon.svg';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Formatter} from '../core/utils';
import {Stats, Separator} from '../components';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

type Ability = {
  isHidden: boolean;
  name: string;
};

export default function PokemonDetailScreen({route}) {
  const {top, bottom} = useSafeAreaInsets();
  const {data} = route.params;
  const {
    name,
    frontDefault,
    types,
    id,
    height,
    weight,
    abilities,
    description,
    stats,
  } = data;
  const [firstType, secondType] = types;

  const navigation = useNavigation();

  function onPress() {
    navigation.goBack();
  }

  function renderAbilities(): JSX.Element[] {
    return abilities.map((item: Ability, index: number) => {
      const {name: abilityName, isHidden} = item;
      if (isHidden) {
        return (
          <Text style={styles.aboutTexts} key={index}>
            {Formatter.capitalizeFirstLetter(abilityName)} (Hidden)
          </Text>
        );
      }
      return (
        <Text style={styles.aboutTexts} key={index}>
          {Formatter.capitalizeFirstLetter(abilityName)}
        </Text>
      );
    });
  }
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: getThemeByType(types[0]),
          paddingTop: top,
          paddingBottom: bottom,
        },
      ]}>
      <View style={[styles.pokeballContainer, {paddingTop: top}]}>
        <PokeballIllustration />
      </View>
      <View style={styles.headerContainer}>
        <View style={styles.nameContainer}>
          <TouchableOpacity onPress={onPress}>
            <GoBackArrowIllustration width={18} height={18} />
          </TouchableOpacity>
          <Text style={styles.text}>
            {Formatter.capitalizeFirstLetter(name)}
          </Text>
        </View>
        <Text style={[styles.text]}>#{id.toString().padStart(3, '0')}</Text>
      </View>

      <View style={styles.pokemonImageContainer}>
        <TouchableOpacity>
          <PreviousPokemonIllustration />
        </TouchableOpacity>

        <Image source={{uri: frontDefault}} style={styles.image} />

        <TouchableOpacity>
          <NextPokemonIllustration />
        </TouchableOpacity>
      </View>

      <View style={styles.pokemonDescriptionModal}>
        <View style={styles.pokemonTypesContainer}>
          <View
            style={[
              styles.pokemonTypeContainer,
              {backgroundColor: getThemeByType(firstType)},
            ]}>
            <Text style={styles.typesText}>
              {Formatter.capitalizeFirstLetter(firstType)}
            </Text>
          </View>
          {secondType && (
            <View
              style={[
                styles.pokemonTypeContainer,
                {backgroundColor: getThemeByType(secondType)},
              ]}>
              <Text style={styles.typesText}>
                {Formatter.capitalizeFirstLetter(secondType)}
              </Text>
            </View>
          )}
        </View>

        <Text style={[styles.aboutText, {color: getThemeByType(firstType)}]}>
          About
        </Text>

        <View style={styles.aboutContainer}>
          <View style={styles.weightAndHeightContainer}>
            <View style={styles.weightAndHeightImageContainer}>
              <WeightIllustration />
              <Text style={styles.aboutTexts}> {weight / 10} kg</Text>
            </View>
            <Text style={styles.bottomText}>Weight</Text>
          </View>
          <Separator />

          <View style={styles.weightAndHeightContainer}>
            <View style={styles.weightAndHeightImageContainer}>
              <HeightIllustration />
              <Text style={styles.aboutTexts}> {height / 10} m</Text>
            </View>
            <Text style={styles.bottomText}>Height</Text>
          </View>
          <Separator />

          <View style={styles.abilitiesContainer}>
            {renderAbilities()}
            <Text style={styles.bottomText}>Abilities</Text>
          </View>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.abilityText}>{description}</Text>
        </View>

        <Text
          style={[styles.baseStatsText, {color: getThemeByType(firstType)}]}>
          Base Stats
        </Text>

        <Stats type={firstType} stats={stats} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  descriptionContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  abilitiesContainer: {
    justifyContent: 'space-evenly',
  },
  bottomText: {
    textAlign: 'center',
    color: Theme.mediumGray,
    fontSize: 8,
  },
  weightAndHeightImageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  aboutTexts: {
    fontSize: 10,
    paddingLeft: 8,
    color: Theme.darkGray,
  },
  baseStatsText: {
    fontWeight: 'bold',
    fontSize: 16,
    paddingBottom: 15,
  },
  abilityText: {
    fontSize: 14,
    color: Theme.darkGray,
  },
  aboutContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
  },
  weightAndHeightContainer: {
    alignSelf: 'center',
    justifyContent: 'space-evenly',
    minHeight: 60,
  },
  aboutText: {
    fontWeight: 'bold',
    fontSize: 16,
    paddingVertical: 15,
  },
  pokemonTypesContainer: {
    marginTop: 56,
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
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 1,
  },
  pokemonDescriptionModal: {
    backgroundColor: Theme.white,
    height: '70%',
    flex: 1,
    position: 'absolute',
    marginTop: '85%',
    borderRadius: 24,
    width: '100%',
    alignItems: 'center',
  },
  pokemonTypeContainer: {
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 25,
    justifyContent: 'center',
  },
  typesText: {
    fontWeight: 'bold',
    color: Theme.white,
  },
});

PokemonDetailScreen.navigationOptions = {
  headerShown: false,
};
