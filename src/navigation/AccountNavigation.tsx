import { createStackNavigator } from '@react-navigation/stack';
import AccountScreen from '../screens/AccountScreen';
import { paletteColors } from '../colors/PaletteColors';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import LoginScreen from '../screens/LoginScreen';

const Stack = createStackNavigator();

export default function AccountNavigation() {

  const { login } = useSelector((state: RootState) => state.loginReducer);
  const { mode } = useSelector((state: RootState) => state.themeReducer);
  // const {mode} = useContext(themeContext);

  return (
    <Stack.Navigator>
      {login ? 
        <Stack.Screen 
            name='Account'
            component={AccountScreen}
            options={{
                title: 'Cuenta',
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
                title: 'Cuenta',
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