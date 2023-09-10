import { View, Text, SafeAreaView, StyleSheet, TextInput } from 'react-native'
import React, { useContext } from 'react'
import { paletteColors } from '../colors/PaletteColors';
import { themeContext } from '../context/ThemeContext';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Searchbar } from 'react-native-paper';

export default function IncomesScreen() {

  const [searchValue, setSearchValue] = React.useState<string>('');
  const onChangeSearch = (value: string) => setSearchValue(value);

  const {mode} = useContext(themeContext);

  const styles = getStylesIncomes(mode);
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
        color={mode ? paletteColors.white : paletteColors.black}
      />
    </SafeAreaView>
  )
}

export const getStylesIncomes = (mode: boolean) => StyleSheet.create({
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
  }
});