import {Pokemon} from './'

type PokemonDetail = Pokemon & {
  weight: number
  height: number
  abilities: Ability[]
  description: string
  stats: Stat[]
}

type Ability = {
  name: string
  isHidden: boolean
}

type Stat = {
  baseStat: number 
  name: string
}

export default PokemonDetail