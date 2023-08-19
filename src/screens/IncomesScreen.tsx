import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { paletteColors } from '../colors/PaletteColors';
import { themeContext } from '../context/ThemeContext';

export default function IncomesScreen() {

  const {mode} = useContext(themeContext);

  const styles = getStylesIncomes(mode);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.accountText}>Ingresos</Text>
    </SafeAreaView>
  )
}

export const getStylesIncomes = (mode: boolean) => StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: mode ? paletteColors.black : paletteColors.white
  },
  accountText: {
    color: mode ? paletteColors.white : paletteColors.black
  }
});