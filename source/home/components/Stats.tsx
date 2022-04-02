import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Stat, StatType } from './'

type StatsType = {
  type: string
  stats: StatType[]
}

export default function Stats({ type, stats }: StatsType) {
  const renderStats = () =>
    stats.map(({ name, baseStat }, key) => <Stat {...{ type, key, name, baseStat }} />)
  return (
    <View style={styles.container}>
      <View style={styles.statContainer}>
        {renderStats()}
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  statContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  }
})