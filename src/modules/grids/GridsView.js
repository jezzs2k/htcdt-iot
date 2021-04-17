import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { colors } from '../../styles';
import ListIot from '../ListDeviceIot';

export default function GridsScreen() {
    return (
      <View style={styles.container}>
        <ListIot />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 4
  },
});
