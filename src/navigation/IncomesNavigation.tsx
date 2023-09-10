import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import IncomesScreen from '../screens/IncomesScreen';
import { paletteColors } from '../colors/PaletteColors';
import { themeContext } from '../context/ThemeContext';

const Stack = createStackNavigator();

export default function IncomesNavigation() {

  const {mode} = useContext(themeContext);

  return (
    <Stack.Navigator>
        <Stack.Screen 
            name='Incomes'
            component={IncomesScreen}
            options={{
              title: 'Ingresos',
              headerTintColor: paletteColors.white,
              headerStyle: {
                backgroundColor: paletteColors.limeLight
              },
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              
          }}
        />
    </Stack.Navigator>
  )
}

