import { View, Text, SafeAreaView, Switch, StyleSheet, Button } from 'react-native'
import React, { useContext, useState } from 'react';
import { themeContext } from '../context/ThemeContext';
import { paletteColors } from '../colors/PaletteColors';
import { useDispatch } from 'react-redux';
import { logOut } from '../store/loginReducer';

export default function AccountScreen() {
  
  const dispatch = useDispatch();

  const { mode, setMode } = useContext(themeContext);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
    setMode(!mode);
  }

  const stylesAcc = getStylesAcc(mode);

  return (
    <SafeAreaView style={stylesAcc.container}>
      <Text style={stylesAcc.accountText}>Cuenta</Text>
      <Switch
        trackColor={{false: paletteColors.white, true: paletteColors.purple}}
        thumbColor={isEnabled ? paletteColors.white : 'white'}
        ios_backgroundColor={paletteColors.white}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <Button title='Logout' onPress={() => dispatch(logOut())}></Button>
    </SafeAreaView>
  )

}

export const getStylesAcc = (mode: boolean) => StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: mode ? paletteColors.black : paletteColors.white
  },
  accountText: {
    color: mode ? paletteColors.white : paletteColors.black
  }
});
