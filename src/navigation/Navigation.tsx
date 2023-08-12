import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome5';

// Import Navigations components
import HomeNavigation from './HomeNavigation';
import IncomesNavigation from './IncomesNavigation';
import ExpensesNavigation from './ExpensesNavigation';
import AccountNavigation from './AccountNavigation';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
        <Tab.Screen 
          name='Home' 
          component={HomeNavigation} 
          options={{
            tabBarLabel: 'Inicio',
            tabBarIcon: ({color, size}) => (
              <Icon name='fort-awesome' color={color} size={size} />
            )
          }}
        />
        <Tab.Screen 
          name='Incomes' 
          component={IncomesNavigation}
          options={{
            tabBarLabel: 'Ingresos',
            tabBarIcon: ({color, size}) => (
              <Icon name='wallet' color={color} size={size} />
            )
          }}
        />
        <Tab.Screen 
          name='Expenses' 
          component={ExpensesNavigation}
          options={{
            tabBarLabel: 'Egresos',
            tabBarIcon: ({color, size}) => (
              <Icon name='funnel-dollar' color={color} size={size} />
            )
          }}
        />
        <Tab.Screen 
          name='Account' 
          component={AccountNavigation}
          options={{
            tabBarLabel: 'Cuenta',
            tabBarIcon: ({color, size, }) => (
              <Icon name='user-tie' color={color} size={size} />
            )
          }}
        />
    </Tab.Navigator>
  )
}