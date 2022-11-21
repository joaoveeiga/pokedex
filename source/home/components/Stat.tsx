import React from 'react'
import {View, StyleSheet, Text} from 'react-native'
import {Theme, getThemeByType} from '../../theme'
import {MAX_STATS} from '../core/constants'

type FullAttributeType =
  | 'hp'
  | 'attack'
  | 'defense'
  | 'special-attack'
  | 'special-defense'
  | 'speed'
type ShortAttributeType = 'HP' | 'ATK' | 'DEF' | 'SATK' | 'SDEF' | 'SPD'
type ShortStatType = [FullAttributeType, ShortAttributeType]

export type StatType = {
  name: FullAttributeType
  baseStat: number
  type: string
}

export default function Stat({name, baseStat, type}: StatType) {
  const dictionaryStat: ShortStatType[] = [
    ['hp', 'HP'],
    ['attack', 'ATK'],
    ['defense', 'DEF'],
    ['special-attack', 'SATK'],
    ['special-defense', 'SDEF'],
    ['speed', 'SPD'],
  ]
  const [, shortName] = dictionaryStat.find(
    ([item]) => item === name,
  ) as ShortStatType

  function percentStat() {
    return (baseStat / MAX_STATS[shortName]) * 100
  }

  function paintStatBar() {
    return percentStat().toString().concat('%')
  }

  function opacityStatBar() {
    return (100 - percentStat()).toString().concat('%')
  }

  return (
    <View style={styles.stat}>
      <View style={styles.statContainer}>
        <Text style={[styles.statText, {color: getThemeByType(type)}]}>
          {shortName}
        </Text>
      </View>
      <View style={styles.separator} />
      <Text style={styles.numberText}>
        {baseStat > 99 ? baseStat : '0' + baseStat}
      </Text>
      <View style={styles.fullStatusBar}>
        <View
          style={[
            styles.barWithoutOpacity,
            {
              backgroundColor: getThemeByType(type),
              width: paintStatBar(),
            },
          ]}
        />
        <View
          style={[
            styles.barWithOpacity,
            {
              backgroundColor: getThemeByType(type).concat(50),
              width: opacityStatBar(),
            },
          ]}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  barWithoutOpacity: {
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
  },
  barWithOpacity: {
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
  },
  fullStatusBar: {
    height: 5,
    alignSelf: 'center',
    flexDirection: 'row',
    width: '75%',
  },
  numberText: {
    color: Theme.darkGray,
  },
  statContainer: {
    flexDirection: 'row',
    width: '12%',
    justifyContent: 'flex-end',
  },
  statText: {
    textAlign: 'right',
    fontWeight: 'bold',
  },
  separator: {
    width: 1,
    backgroundColor: Theme.lightGray,
  },
  stat: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
})
