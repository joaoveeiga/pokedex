import React, {useState} from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import SearchIconIllustration from '../../../assets/svgs/search-icon.svg';
import CancelSearchIconIllustration from '../../../assets/svgs/cancel-search-icon.svg';
import {Theme} from '../../theme';

export default function SearchBar() {
  const [search, setSearch] = useState('');

  function searchPokemon(pokemon: string) {
    setSearch(pokemon);
  }

  function onPressCancelSearchIcon() {
    setSearch('');
  }
  return (
    <View style={styles.searchBarContainer}>
      <View style={styles.icons}>
        <SearchIconIllustration />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Procurar"
          onChangeText={searchPokemon}
          placeholderTextColor={Theme.mediumGray}
          style={[styles.textInput, search !== '' ? {width: 310} : null]}
          value={search}
        />
      </View>
      {search !== '' && (
        <View>
          <TouchableOpacity
            style={styles.icons}
            onPress={onPressCancelSearchIcon}>
            <CancelSearchIconIllustration />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  searchBarContainer: {
    width: 350,
    height: 24,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 7,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  inputContainer: {
    height: 24,
    justifyContent: 'center',
    marginLeft: -3,
    maxWidth: 310,
  },
  textInput: {
    height: 40,
    fontSize: 12,
  },
  icons: {
    paddingHorizontal: 5,
    alignItems: 'flex-end',
  },
});
