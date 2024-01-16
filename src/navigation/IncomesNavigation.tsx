import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { paletteColors } from '../colors/PaletteColors';
import { themeContext, totalMoneyContext } from '../context/ThemeContext';
import { IconButton } from 'react-native-paper';
import { Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';

// Import screens
import IncomesScreen from '../screens/IncomesScreen';
import AddIncomeScreen from '../screens/AddIncomeScreen';

const Stack = createStackNavigator();

export default function IncomesNavigation() {

  const { mode } = useSelector((state: RootState) => state.themeReducer);

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
              },
              headerTitleStyle: {
               fontFamily: 'Poppins_700Bold'
              },
              headerLeft: () => (
                <Text style={{marginLeft: 20, color: 'white', fontFamily: 'Poppins_400Regular'}}>{numberFormat(totalMoney)}</Text>
              ),
              headerRight: () => (
                <IconButton
                  icon="account-circle"
                  iconColor={paletteColors.white}
                  size={30}
                  // onPress={}
                />
              ),
          }}
        />
        <Stack.Screen 
            name='AddIncome'
            component={AddIncomeScreen}
            options={{
              title: 'Añadir ingreso',
              headerTintColor: paletteColors.white,
              headerStyle: {
                backgroundColor: !mode ? paletteColors.limeLight : paletteColors.limeDark
              },
              headerTitleStyle: {
               fontFamily: 'Poppins_700Bold'
              },
              headerRight: () => (
                <IconButton
                  icon="account-circle"
                  iconColor={paletteColors.white}
                  size={30}
                  // onPress={}
                />
              ),
          }}
        />
    </Stack.Navigator>
  )
}

