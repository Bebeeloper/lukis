import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import ExpensesScreen from '../screens/ExpensesScreen';

const Stack = createStackNavigator();

export default function ExpensesNavigation() {
  return (
    <Stack.Navigator>
        <Stack.Screen 
            name='Expenses'
            component={ExpensesScreen}
            options={{
                title: 'Egresos'
            }}
        />
    </Stack.Navigator>
  )
}