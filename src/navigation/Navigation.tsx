import React, { useState } from 'react'
import { Text, StyleSheet, StatusBar } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome5';

// Import Navigations components
import HomeNavigation from './HomeNavigation';
import IncomesNavigation from './IncomesNavigation';
import ExpensesNavigation from './ExpensesNavigation';
import AccountNavigation from './AccountNavigation';

// Import resources
import { paletteColors } from '../colors/PaletteColors';
import { themeContext } from '../context/ThemeContext';

const Tab = createBottomTabNavigator();

export default function Navigation() {

  const [mode, setMode] = useState<boolean>(false);

  return (
    <themeContext.Provider value={{
      mode,
      setMode
    }}>
      <StatusBar barStyle={!mode ? 'dark-content' : 'light-content'}/>
      <Tab.Navigator 
        tabBarOptions={{
          activeTintColor: paletteColors.purple,
          style: {
            backgroundColor: mode ? paletteColors.black : paletteColors.white
          }
        }}
      >
        <Tab.Screen 
          name='Home' 
          component={HomeNavigation} 
          options={{
            tabBarLabel: 'Inicio',
            tabBarIcon: ({focused, color, size}) => (
              <Icon name='fort-awesome' color={color} size={size}/>
            )
          }}
        />
        <Tab.Screen 
          name='Incomes' 
          component={IncomesNavigation}
          options={{
            tabBarLabel: ({focused, color}) => (
              <Text style={{
                fontSize: 10,
                color: focused && mode ? paletteColors.lime : focused && !mode ? paletteColors.limeLight : color
              }}>Ingresos</Text>
            ),
            tabBarIcon: ({focused, color, size}) => (
              <Icon name='wallet' color={focused && mode ? paletteColors.lime : focused && !mode ? paletteColors.limeLight : color} size={size} />
            )
          }}
        />
        <Tab.Screen 
          name='Expenses' 
          component={ExpensesNavigation}
          options={{
            tabBarLabel: ({focused, color}) => (
              <Text style={{
                fontSize: 10,
                color: focused && mode ? paletteColors.fire : focused && !mode ? paletteColors.fireLight : color
              }}>Egresos</Text>
            ),
            // tabBarLabe: paletteColors.lime,
            tabBarIcon: ({focused, color, size}) => (
              <Icon name='funnel-dollar' color={focused && mode ? paletteColors.fire : focused && !mode ? paletteColors.fireLight : color} size={size} />
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
    </themeContext.Provider>
  )
}