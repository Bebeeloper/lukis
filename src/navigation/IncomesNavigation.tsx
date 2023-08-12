import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import IncomesScreen from '../screens/IncomesScreen';

const Stack = createStackNavigator();

export default function IncomesNavigation() {
  return (
    <Stack.Navigator>
        <Stack.Screen 
            name='Incomes'
            component={IncomesScreen}
            options={{
                title: 'Ingresos'
            }}
        />
    </Stack.Navigator>
  )
}