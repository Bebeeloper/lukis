import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React, { useContext } from 'react';
import { paletteColors } from '../colors/PaletteColors';
import { themeContext } from '../context/ThemeContext';
import { Searchbar } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';

export default function ExpensesScreen() {

  const { mode } = useSelector((state: RootState) => state.themeReducer);

  // const {mode} = useContext(themeContext);
  const styles = getStylesExpenses(mode);
  const [searchValue, setSearchValue] = React.useState<string>('');
  const onChangeSearch = (value: string) => setSearchValue(value);

  return (
    <SafeAreaView style={styles.container}>
      {/* <TextInput
        style={styles.searchBar}
        placeholder='Buscar un ingreso'
        // onChangeText={onChangeText}
      ><Icon name='search'/></TextInput> */}
      <Searchbar
      style={styles.searchBar}
        iconColor= { mode ? paletteColors.light : paletteColors.black}
        traileringRippleColor={'white'}
        placeholderTextColor={paletteColors.light}
        placeholder="Busca un ingreso..."
        onChangeText={onChangeSearch}
        value={searchValue}
        // color={mode ? paletteColors.white : paletteColors.black}
        theme={{colors: { primary: !mode ? paletteColors.backgroundLight : paletteColors.limeLight}}}
      />
      <View style={styles.incomeContainer}>
        <View style={styles.dateContainer}>
          <Text style={styles.dateText}>10/09/2023</Text>
        </View>
        <View style={styles.infoPriceContainer}>
          <View style={styles.incomeInfoContantainer}>
            <Text style={styles.incomeName}>Pago de nómina</Text>
            <Text style={styles.incomeText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</Text>
          </View>
          <View style={styles.incomePriceContainer}>
            <Text style= {styles.incomePrice}>$ 250.000</Text>
          </View>
        </View>
      </View>
      <View style={styles.incomeContainer}>
        <View style={styles.dateContainer}>
          <Text style={styles.dateText}>10/09/2023</Text>
        </View>
        <View style={styles.infoPriceContainer}>
          <View style={styles.incomeInfoContantainer}>
            <Text style={styles.incomeName}>Pago de nómina</Text>
            <Text style={styles.incomeText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</Text>
          </View>
          <View style={styles.incomePriceContainer}>
            <Text style= {styles.incomePrice}>$ 250.000</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

// export const getStylesExpenses = (mode: boolean) => StyleSheet.create({
//   container: {
//     height: '100%',
//     backgroundColor: mode ? paletteColors.black : paletteColors.white
//   },
//   accountText: {
//     color: mode ? paletteColors.white : paletteColors.black
//   }
// });

export const getStylesExpenses = (mode: boolean) => StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: mode ? paletteColors.black : paletteColors.white
  },
  accountText: {
    color: mode ? paletteColors.white : paletteColors.black
  },
  searchBar: {
    marginTop: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '90%',
    borderRadius: 20,
    backgroundColor: mode ? paletteColors.backgroundLight : '',
    borderWidth: 0.3,
    borderColor: mode ? '' : paletteColors.light,
  },
  incomeContainer: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 20,
    borderRadius: 20,
    width: '90%'
  },
  dateContainer: {
    padding: 10,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    backgroundColor: paletteColors.fireLight,
  },
  dateText: {
    textAlign: 'center',
    color: paletteColors.white,
    fontWeight: 'bold'
  },
  infoPriceContainer: {
    padding: 15,
    flexDirection: 'row',
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    borderColor: paletteColors.fireLight,
    borderWidth: 1,

  },
  incomeInfoContantainer: {
    width: '70%',
  },
  incomeName: {
    marginBottom: 10,
    color: paletteColors.fireLight,
    fontWeight: 'bold',
  },
  incomeText: {
    color: mode ? paletteColors.whiteLight : paletteColors.black
  },
  incomePriceContainer: {
    width: '30%',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  incomePrice: {
    color: paletteColors.fireLight,
    fontWeight: 'bold',
  }
});