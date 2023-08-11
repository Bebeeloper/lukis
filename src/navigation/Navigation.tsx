import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Account from '../screens/AccountScreen';
import HomeScreen from '../screens/HomeScreen';
import IncomesScreen from '../screens/IncomesScreen';
import ExpensesScreen from '../screens/ExpensesScreen';
import AccountScreen from '../screens/AccountScreen';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
        <Tab.Screen name='Inicio' component={HomeScreen} />
        <Tab.Screen name='Ingresos' component={IncomesScreen} />
        <Tab.Screen name='Egresos' component={ExpensesScreen} />
        <Tab.Screen name='Cuenta' component={AccountScreen} />
    </Tab.Navigator>
  )
}