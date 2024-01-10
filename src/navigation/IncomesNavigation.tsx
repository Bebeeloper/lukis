import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import IncomesScreen from '../screens/IncomesScreen';
import { paletteColors } from '../colors/PaletteColors';
import { themeContext, totalMoneyContext } from '../context/ThemeContext';
import { IconButton } from 'react-native-paper';
import { Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';

const Stack = createStackNavigator();

export default function IncomesNavigation() {

  const { mode } = useSelector((state: RootState) => state.themeReducer);
  const dispatch = useDispatch();

  // const {mode} = useContext(themeContext);
  const { totalMoney } = useContext(totalMoneyContext);

  const numberFormat = (num: number) => {
    const numericValue = Number(num); // Convert the value to number
    if (isNaN(numericValue)) {
        // If not a valid number, return an empty string or the original value
        return "";
    } else {
        return "$ " + numericValue.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"); // And this would be the function
    }
  } 

  return (
    <Stack.Navigator>
        <Stack.Screen 
            name='Incomes'
            component={IncomesScreen}
            options={{
              title: 'Ingresos',
              headerTintColor: paletteColors.white,
              headerStyle: {
                backgroundColor: !mode ? paletteColors.limeLight : paletteColors.limeDark
                // backgroundColor: paletteColors.limeLight
              },
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerLeft: () => (
                <Text style={{marginLeft: 20, color: 'white'}}>{numberFormat(totalMoney)}</Text>
                // <Avatar.Image style={{marginRight: 20}} size={35} source={require('../../assets/avatar-icon.png')} /3
              ),
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

