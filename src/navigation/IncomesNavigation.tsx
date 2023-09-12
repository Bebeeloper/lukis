import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import IncomesScreen from '../screens/IncomesScreen';
import { paletteColors } from '../colors/PaletteColors';
import { themeContext } from '../context/ThemeContext';
import { IconButton } from 'react-native-paper';
import { Avatar } from 'react-native-paper';

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
              headerRight: () => (
                <IconButton
                  // style={{marginRight: 20}}
                  icon="account-circle"
                  iconColor={paletteColors.white}
                  size={30}
                  onPress={() => (console.log('Pressing account button'))
                  }
                />
                // <Avatar.Image style={{marginRight: 20}} size={35} source={require('../../assets/avatar-icon.png')} /3
              ),
          }}
        />
    </Stack.Navigator>
  )
}

