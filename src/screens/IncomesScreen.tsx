import React, { useContext, useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet, ScrollView, Button, Alert, Modal } from 'react-native'
import { IconButton } from 'react-native-paper';
import { paletteColors } from '../colors/PaletteColors';
import { incomesContext, themeContext } from '../context/ThemeContext';
import { Searchbar } from 'react-native-paper';
import { Pressable } from 'react-native';
import { BlurView } from 'expo-blur';
import Icon from 'react-native-vector-icons/FontAwesome5';

const categoryIcons: any = {
  nomina: 'file-invoice-dollar',
  freelance: 'laptop-house',
  tools: 'tools'
}

export default function IncomesScreen() {

  const { incomesArray, setIncomesArray } = useContext(incomesContext);

  const [modalVisible, setModalVisible] = useState(false);

  const [searchValue, setSearchValue] = React.useState<string>('');
  const onChangeSearch = (value: string) => setSearchValue(value);

  const {mode} = useContext(themeContext);

  const styles = getStylesIncomes(mode);
  const stylesModal = getStylesModal(mode);

  // const numberFormat = (value: number) =>
  // new Intl.NumberFormat('es-Es', {
  //   style: 'currency',
  //   currency: 'COP',
  //   maximumFractionDigits: 2,
  // }).format(value);

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
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <Searchbar
          style={styles.searchBar}
          iconColor= { mode ? paletteColors.light : paletteColors.black}
          // traileringRippleColor={'red'}
          placeholderTextColor={paletteColors.light}
          placeholder="Busca un ingreso..."
          onChangeText={onChangeSearch}
          value={searchValue}
          theme={{colors: { primary: !mode ? paletteColors.backgroundLight : paletteColors.limeLight}}}
          inputStyle={{color: mode ? paletteColors.white : paletteColors.backgroundLight}}
        />
      </View>
      <ScrollView style={styles.scrollList}>
        {
          incomesArray.incomes.map((item, i) => (
            <View style={styles.incomeContainer} key={i}>
              <View style={styles.dateContainer}>
                <Text style={styles.dateText}>{`Fecha: ${item.date}`}</Text>
              </View>
              <View style={styles.infoPriceContainer}>
                <View style={styles.incomeInfoContantainer}>
                  <Text style={styles.incomeName}>{item.name}</Text>
                  <Text style={styles.incomeText}>{item.description}</Text>
                </View>
                <View style={styles.incomePriceContainer}>
                  <Text style= {styles.incomePrice}>{`${numberFormat(item.price)}`}</Text>
                  <Icon style={styles.incomeIcon} name={categoryIcons[item.category]} size={35} color={mode ? paletteColors.lime : paletteColors.limeLight}/>
                </View>
              </View>
            </View>
          ))
        }
      </ScrollView>
      <View style={styles.btnAdd}>
        <IconButton
          icon="plus"
          iconColor={paletteColors.white}
          size={40}
          onPress={() => setModalVisible(true)}
        />
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <BlurView intensity={5} style={stylesModal.centeredView}>
          <View style={stylesModal.modalView}>
            <Text style={stylesModal.modalText}>Hello World!</Text>
            <Pressable
              style={[stylesModal.button, stylesModal.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={stylesModal.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </BlurView>
      </Modal>
    </SafeAreaView>
  )
}

const getStylesModal = (mode: boolean) => StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    position: 'absolute',
    bottom: -20,
    width: '100%',
    height: '90%',
    margin: 20,
    backgroundColor: paletteColors.limeLight,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export const getStylesIncomes = (mode: boolean) => StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: mode ? paletteColors.black : paletteColors.white
  },
  searchContainer: {
    width: '100%',
    height: '15%',
    // backgroundColor: 'blue'
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
    // color: 'red !important'
  },
  scrollList: {
    width: '100%',
    height: '55%',
    // backgroundColor: 'red'
  },
  incomeContainer: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 20,
    borderRadius: 20,
    width: '90%'
  },
  dateContainer: {
    padding: 10,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    backgroundColor: !mode ? paletteColors.limeLight : paletteColors.limeDark,
    // backgroundColor: paletteColors.limeLight,
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
    borderColor: paletteColors.limeLight,
    borderWidth: 0.5,

  },
  incomeInfoContantainer: {
    width: '70%',
  },
  incomeName: {
    marginBottom: 10,
    color: !mode ? paletteColors.limeLight : paletteColors.lime,
    // color: paletteColors.limeLightdlimeDark,
    fontWeight: 'bold',
  },
  incomeText: {
    color: mode ? paletteColors.white : paletteColors.black
  },
  incomePriceContainer: {
    width: '30%',
    flexDirection: 'column',
    // justifyContent: 'flex-end'
  },
  incomePrice: {
    color: !mode ? paletteColors.limeLight : paletteColors.lime,
    // color: paletteColors.limeLight,
    fontWeight: 'bold',
    fontSize: 12
  },
  incomeIcon: {
    marginLeft: 'auto', 
    marginRight: 'auto', 
    marginTop: 'auto', 
    marginBottom: 'auto'
  },
  btnAdd: {
    position: 'absolute',
    right: 15,
    bottom: 10,
    backgroundColor: paletteColors.limeLight,
    borderRadius: 50,
    shadowColor: paletteColors.black,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.3,
    shadowRadius: 7,
  }
});