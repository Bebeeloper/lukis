import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native';
import React from 'react';
import { paletteColors } from '../colors/PaletteColors';
import LoginScreen from '../screens/LoginScreen';

const Stack = createStackNavigator();

export default function LoginNavigation() {
  return (
    <Stack.Navigator>
        <Stack.Screen 
            name='Login'
            component={LoginScreen}
            options={{
              headerShown: false,
              title: 'Login',
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