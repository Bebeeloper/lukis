import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import ExpensesScreen from '../screens/ExpensesScreen';
import { paletteColors } from '../colors/PaletteColors';
import { themeContext } from '../context/ThemeContext';

const Stack = createStackNavigator();

export default function ExpensesNavigation() {

  const {mode} = useContext(themeContext);
  
  return (
    <Stack.Navigator>
        <Stack.Screen 
            name='Expenses'
            component={ExpensesScreen}
            options={{
              title: 'Egresos',
              headerTintColor: paletteColors.white,
              headerStyle: {
                backgroundColor: paletteColors.fireLight
              },
              headerTitleStyle: {
                fontWeight: 'bold'
              },
          }}
        />
    </Stack.Navigator>
  )
}