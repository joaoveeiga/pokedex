import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Theme} from '../../theme';

export default function Separator() {
  return (
    <View style={[styles.separator, {backgroundColor: Theme.lightGray}]} />
  );
}

const styles = StyleSheet.create({
  separator: {
    height: 60,
    width: 1,
  },
});
