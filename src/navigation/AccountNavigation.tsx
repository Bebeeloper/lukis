import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AccountScreen from '../screens/AccountScreen';
import { paletteColors } from '../colors/PaletteColors';
import { themeContext } from '../context/ThemeContext';

const Stack = createStackNavigator();

export default function AccountNavigation() {

  const {mode} = useContext(themeContext);

  return (
    <Stack.Navigator>
        <Stack.Screen 
            name='Account'
            component={AccountScreen}
            options={{
                title: 'Cuenta',
                headerTintColor: mode ? paletteColors.white : paletteColors.black,
                headerStyle: {
                  backgroundColor: mode ? paletteColors.black : paletteColors.white
                },
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
            }}
        />
    </Stack.Navigator>
  )
}