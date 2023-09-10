import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React, {useContext} from 'react'
// import { getStylesAcc } from './AccountScreen';
import { themeContext } from '../context/ThemeContext';
import { paletteColors } from '../colors/PaletteColors';

export default function HomeScreen() {

  const { mode, setMode } = useContext(themeContext);

  const styles = getStylesHome(mode);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.accountText}>Inicio</Text>
    </SafeAreaView>
  )
}

export const getStylesHome = (mode: boolean) => StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: mode ? paletteColors.black : paletteColors.white
  },
  accountText: {
    color: mode ? paletteColors.white : paletteColors.black
  }
});