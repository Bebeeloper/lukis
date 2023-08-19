import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React, { useContext } from 'react';
import { paletteColors } from '../colors/PaletteColors';
import { themeContext } from '../context/ThemeContext';

export default function ExpensesScreen() {

  const {mode} = useContext(themeContext);
  const styles = getStylesExpenses(mode);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.accountText}>Egresos</Text>
    </SafeAreaView>
  )
}

export const getStylesExpenses = (mode: boolean) => StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: mode ? paletteColors.black : paletteColors.white
  },
  accountText: {
    color: mode ? paletteColors.white : paletteColors.black
  }
});