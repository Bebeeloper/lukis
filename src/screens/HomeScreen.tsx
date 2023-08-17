import { View, Text, SafeAreaView } from 'react-native'
import React, {useContext} from 'react'
import { getStylesAcc } from './AccountScreen';
import { themeContext } from '../context/ThemeContext';

export default function HomeScreen() {

  const { mode, setMode } = useContext(themeContext);

  const styles = getStylesAcc(mode);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.accountText}>Inicio</Text>
    </SafeAreaView>
  )
}