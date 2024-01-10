import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AccountScreen from '../screens/AccountScreen';
import { paletteColors } from '../colors/PaletteColors';
import { themeContext } from '../context/ThemeContext';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const Stack = createStackNavigator();

export default function AccountNavigation() {

  const { mode } = useSelector((state: RootState) => state.themeReducer);
  // const {mode} = useContext(themeContext);

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