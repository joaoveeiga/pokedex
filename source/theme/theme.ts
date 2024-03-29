const Theme: ThemeType = {
  rock: '#B69E31',
  ghost: '#70559B',
  steel: '#B7B9D0',
  water: '#6494EB',
  grass: '#74CB48',
  psychic: '#FB5584',
  ice: '#9AD6DF',
  dark: '#75574C',
  fairy: '#E69EAC',
  normal: '#AAA67F',
  fighting: '#C12239',
  flying: '#A891EC',
  poison: '#A43E9E',
  ground: '#DEC16B',
  bug: '#A7B723',
  fire: '#F57D31',
  electric: '#F9CF30',
  dragon: '#3037FF',
  darkGray: '#212121',
  mediumGray: '#666666',
  lightGray: '#E0E0E0',
  white: '#FFFFFF',
  background: '#F7F7F7',
}

const dynamicTheme: any = {
  rock: '#B69E31',
  ghost: '#70559B',
  steel: '#B7B9D0',
  water: '#6494EB',
  grass: '#74CB48',
  psychic: '#FB5584',
  ice: '#9AD6DF',
  dark: '#75574C',
  fairy: '#E69EAC',
  normal: '#AAA67F',
  fighting: '#C12239',
  flying: '#A891EC',
  poison: '#A43E9E',
  ground: '#DEC16B',
  bug: '#A7B723',
  fire: '#F57D31',
  electric: '#F9CF30',
  dragon: '#3037FF',
  darkGray: '#212121',
  mediumGray: '#666666',
  lightGray: '#E0E0E0',
  white: '#FFFFFF',
  background: '#F7F7F7',
}

export function getThemeByType(type: string) {
  return dynamicTheme[type] ?? dynamicTheme.white
}

export type ThemeType = {
  rock: string
  ghost: string
  steel: string
  water: string
  grass: string
  psychic: string
  ice: string
  dark: string
  fairy: string
  normal: string
  fighting: string
  flying: string
  poison: string
  ground: string
  bug: string
  fire: string
  electric: string
  dragon: string
  darkGray: string
  mediumGray: string
  lightGray: string
  white: string
  background: string
}

export default Theme
