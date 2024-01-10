import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import { themeContext } from '../context/ThemeContext';
import { paletteColors } from '../colors/PaletteColors';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';

const Stack = createStackNavigator();

export default function HomeNavigation() {

  const { mode } = useSelector((state: RootState) => state.themeReducer);
  // const {mode} = useContext(themeContext);

  return (
    <Stack.Navigator>
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
    </Stack.Navigator>
  )
}