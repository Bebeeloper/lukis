import { View, Text, SafeAreaView, Switch } from 'react-native'
import React, { useContext, useState } from 'react';
import { themeContext } from '../context/ThemeContext';
import { paletteColors } from '../colors/PaletteColors';

export default function AccountScreen() {

  const { mode, setMode } = useContext(themeContext);

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
    setMode(!mode);
  }

  return (
    <SafeAreaView>
      <Text>Cuenta</Text>
      <Switch
        trackColor={{false: 'white', true: paletteColors.black}}
        thumbColor={isEnabled ? paletteColors.lime : 'white'}
        ios_backgroundColor={paletteColors.lime}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </SafeAreaView>
  )
}