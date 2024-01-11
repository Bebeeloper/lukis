import React, { useContext, useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import { themeContext } from '../context/ThemeContext';
import { paletteColors } from '../colors/PaletteColors';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import LoginScreen from '../screens/LoginScreen';
import { TabRouter } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function HomeNavigation() {

  const {login} = useSelector((state: RootState) => state.loginReducer)
  const { mode } = useSelector((state: RootState) => state.themeReducer);  

  return (
    <Stack.Navigator>
      {login ? 
        <Stack.Screen 
            name='Home'
            component={HomeScreen}
            options={{
              title: 'Inicio',
              headerTintColor: mode ? paletteColors.white : paletteColors.black,
              headerStyle: {
                backgroundColor: mode ? paletteColors.black : paletteColors.white
              },
              headerTitleStyle: {
                fontFamily: 'Poppins_700Bold'
              },
          }}
        />
      :
        <Stack.Screen 
            name='LoginScreen'
            component={LoginScreen}
            options={{
              headerShown: false,
              title: 'Loginki',
              headerTintColor: mode ? paletteColors.white : paletteColors.black,
              headerStyle: {
                backgroundColor: mode ? paletteColors.black : paletteColors.white
              },
              headerTitleStyle: {
                fontFamily: 'Poppins_700Bold'
              },
          }}
        />
      }
    </Stack.Navigator>
  )
}