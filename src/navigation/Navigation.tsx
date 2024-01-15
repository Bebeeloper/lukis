import React, { useState } from 'react'
import { Text, StatusBar, Platform, Image, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';

// Import Navigations components
import HomeNavigation from './HomeNavigation';
import IncomesNavigation from './IncomesNavigation';
import ExpensesNavigation from './ExpensesNavigation';
import AccountNavigation from './AccountNavigation';

// Import resources
import { paletteColors } from '../colors/PaletteColors';
import { incomesContext, totalMoneyContext, incomesSearchedContext } from '../context/ThemeContext';
import { incomesType } from '../types/Types';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const Tab = createBottomTabNavigator();

export default function Navigation() {

  // Global states
  const { mode } = useSelector((state: RootState) => state.themeReducer);
  const { login } = useSelector((state: RootState) => state.loginReducer);

  const [fontsLoading, setFontsLoading] = useState(false);
  const [fontsLoaded, fontError] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold
  });

  if (!fontsLoaded && !fontError) {
    setTimeout(() => {
      setFontsLoading(true);
    }, 5000);
  }

  // const [mode, setMode] = useState<boolean>(false);
  const [tabIndex, setTabIndex] = useState<number>(0);
  const [incomesArray, setIncomesArray] = useState<incomesType>({incomes:[
    {
      id: 1,
      name: 'Pago de nómina',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum',
      price: 2500000,
      date: '02/07/09',
      category: 'nomina'
    }
  ]});
  
  const [incomesSearchedArray, setIncomesSearchedArray] = useState<incomesType>({incomes:[]});

  const [ totalMoney, setTotalMoney ] = useState<number>(2500000);

  return (
    // <themeContext.Provider value={{
    //   mode,
    //   setMode
    // }}>
    
      <incomesSearchedContext.Provider value={{
        incomesSearchedArray, 
        setIncomesSearchedArray
      }}>
        <incomesContext.Provider value={{
          incomesArray, 
          setIncomesArray
        }}>
          <totalMoneyContext.Provider value={{
            totalMoney, 
            setTotalMoney
          }}>
            {!fontsLoading ? 
              <View style={{width: '100%', height: '100%', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Image
                  style={{width: 150, height: 150}}
                  source={require('../../assets/images/coins.gif')}
                />
              </View>
            :
              // login ? 
                <>
                  <StatusBar barStyle={(tabIndex === 1 || tabIndex === 2) || mode && Platform.OS != 'android' ? 'light-content' : 'dark-content'}/>
                  <Tab.Navigator 
                    initialRouteName='Home'
                    tabBarOptions={{
                      activeTintColor: paletteColors.purple,
                      style: {
                        backgroundColor: mode ? paletteColors.black : paletteColors.white
                      },
                      
                    }}
                  >
                    <Tab.Screen
                      name='Home' 
                      component={HomeNavigation} 
                      options={{
                        tabBarVisible: login ? true : false,
                        tabBarLabel: ({focused, color}) => (
                          <Text style={{
                            fontSize: 10,
                            fontFamily: 'Poppins_400Regular',
                            color: focused && mode ? paletteColors.purple : focused && !mode ? paletteColors.purple : color
                          }}>Inicio</Text>
                        ),
                        tabBarIcon: ({focused, color, size}) => (
                          <Icon name='fort-awesome' color={color} size={size}/>
                        )
                      }}
                      listeners={({ navigation, route }) => ({
                        tabPress: (e) => {
                          setTabIndex(0);
                        },
                      })}
                    />
                    <Tab.Screen 
                      name='Incomes' 
                      component={IncomesNavigation}
                      options={{
                        tabBarLabel: ({focused, color}) => (
                          <Text style={{
                            fontSize: 10,
                            fontFamily: 'Poppins_400Regular',
                            color: focused && mode ? paletteColors.lime : focused && !mode ? paletteColors.limeLight : color
                          }}>Ingresos</Text>
                        ),
                        tabBarIcon: ({focused, color, size}) => (
                          <Icon 
                            name='wallet' 
                            color={focused && mode ? paletteColors.lime : focused && !mode ? paletteColors.limeLight : color} 
                            size={size}
                          />
                        )
                      }}
                      listeners={({ navigation, route }) => ({
                        tabPress: (e) => {
                          setTabIndex(1);
                        },
                      })}
                    />
                    <Tab.Screen 
                      name='Expenses' 
                      component={ExpensesNavigation}
                      options={{
                        tabBarLabel: ({focused, color}) => (
                          <Text style={{
                            fontSize: 10,
                            fontFamily: 'Poppins_400Regular',
                            color: focused && mode ? paletteColors.fire : focused && !mode ? paletteColors.fireLight : color
                          }}>Egresos</Text>
                        ),
                        // tabBarLabe: paletteColors.lime,
                        tabBarIcon: ({focused, color, size}) => (
                          <Icon name='funnel-dollar' color={focused && mode ? paletteColors.fire : focused && !mode ? paletteColors.fireLight : color} size={size} />
                        )
                      }}
                      listeners={({ navigation, route }) => ({
                        tabPress: (e) => {
                          setTabIndex(2);
                          
                        },
                      })}
                    />
                    <Tab.Screen 
                      name='Account' 
                      component={AccountNavigation}
                      options={{
                        tabBarVisible: login ? true : false,
                        tabBarLabel: ({focused, color}) => (
                          <Text style={{
                            fontSize: 10,
                            fontFamily: 'Poppins_400Regular',
                            color: focused && mode ? paletteColors.purple : focused && !mode ? paletteColors.purple : color
                          }}>Cuenta</Text>
                        ),
                        tabBarIcon: ({color, size, }) => (
                          <Icon name='user-tie' color={color} size={size} />
                        )
                      }}
                      listeners={({ navigation, route }) => ({
                        tabPress: (e) => {
                          setTabIndex(3);
                        },
                      })}
                    />
                  </Tab.Navigator>
                </>
              // :
                // <LoginNavigation></LoginNavigation>
            }
          </totalMoneyContext.Provider>
        </incomesContext.Provider>
      </incomesSearchedContext.Provider>
    // </themeContext.Provider>
  )
}