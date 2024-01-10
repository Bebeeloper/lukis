import React, { useContext, useState } from 'react'
import { TouchableWithoutFeedback, Keyboard, View, Text, SafeAreaView, StyleSheet, ScrollView, Alert, Modal } from 'react-native';
import { Button, IconButton } from 'react-native-paper';
import { paletteColors } from '../colors/PaletteColors';
import { incomesContext, incomesSearchedContext, themeContext, totalMoneyContext } from '../context/ThemeContext';
import { Searchbar } from 'react-native-paper';
import { BlurView } from 'expo-blur';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TextInput } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import { iconsType, incomeType, incomesType } from '../types/Types';
import { useFormik, FormikProps } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';

const categoryIcons: any = {
  nomina: 'file-invoice-dollar',
  freelance: 'laptop-house',
  tools: 'tools'
}

export default function IncomesScreen() {

  const { mode } = useSelector((state: RootState) => state.themeReducer);
  const dispatch = useDispatch();

  //////////////////////////////////////////////////////////////////////

  const [date, setDate] = useState(new Date());
  const [mode1, setMode1] = useState<any>('date');
  const [show, setShow] = useState(false);
  
  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  //////////////////////////////////////////////////////////////////////

  const { incomesSearchedArray, setIncomesSearchedArray } = useContext(incomesSearchedContext);
  const { totalMoney, setTotalMoney } = useContext(totalMoneyContext);
  const { incomesArray, setIncomesArray } = useContext(incomesContext);
  const [iconCategoryArray, setIconCategoryArray] = useState<iconsType>({icons: [
    {
      name: 'account-cash-outline',
      color: paletteColors.whiteLight,
      text: 'Nomina',
      background: paletteColors.white
    },
    {
      name: 'desktop-mac-dashboard',
      color: paletteColors.whiteLight,
      text: 'Freelance',
      background: paletteColors.white
    },
    {
      name: 'tools',
      color: paletteColors.whiteLight,  
      text: 'Mantenimiento',
      background: paletteColors.white
    },
    {
      name: 'account-cash-outline',
      color: paletteColors.whiteLight,
      text: 'Nomina',
      background: paletteColors.white
    },
    {
      name: 'desktop-mac-dashboard',
      color: paletteColors.whiteLight,
      text: 'Freelance',
      background: paletteColors.white
    },
    {
      name: 'tools',
      color: paletteColors.whiteLight,
      text: 'Mantenimiento',
      background: paletteColors.white
    },
    {
      name: 'account-cash-outline',
      color: paletteColors.whiteLight,
      text: 'Nomina',
      background: paletteColors.white
    },
    {
      name: 'desktop-mac-dashboard',
      color: paletteColors.whiteLight,
      text: 'Freelance',
      background: paletteColors.white
    },
    {
      name: 'tools',
      color: paletteColors.whiteLight,
      text: 'Mantenimiento',
      background: paletteColors.white
    }
  ]});
  
  const [iconCategory, setIconCategory] = useState<string>('');
  
  const [modalVisible, setModalVisible] = useState(false);
  
  const [searchValue, setSearchValue] = React.useState<string>('');
  const onChangeSearch = (value: string) => {
    setSearchValue(value);

    if (!value) {
      setIncomesSearchedArray({incomes: []});
    }
  }
  
  // const {mode} = useContext(themeContext);
  
  const styles = getStylesIncomes(mode);
  const stylesModal = getStylesModal(mode);

  // useFormik
  const formik: FormikProps<incomeType> = useFormik<incomeType>({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: (getValues, { resetForm }) => {
      resetForm();
      setModalVisible(!modalVisible);
      const newArray: incomesType = {
        incomes: [{
          id: 0,
          name: getValues.name,
          description: getValues.description,
          price: parseInt(getValues.price),
          date: formatDate(date),
          category: iconCategory === 'Mantenimiento' ? 'tools' : iconCategory.toLowerCase(),
        }]
      };
      
      setIncomesArray((incomesArray) => {
        return {
          incomes: [...incomesArray.incomes, ...newArray.incomes]
        };
      });

      let total = 0;

      incomesArray.incomes.forEach(item => {
        total += item.price;
      });

      total += parseInt(getValues.price);

      setTotalMoney(total);
      
    }
  });

  const buttonDisabled = formik.values.price === '' ? true : formik.isValid ? false : true;

  const numberFormat = (num: number) => {
    const numericValue = Number(num); // Convert the value to number
    if (isNaN(numericValue)) {
        // If not a valid number, return an empty string or the original value
        return "";
    } else {
        return "$ " + numericValue.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"); // And this would be the function
    }
  }  

  const selecticonCategory = (index: number, iconText: string) => {
    
    setIconCategory(iconText);

    let arrayIconJson = iconCategoryArray;

    for (let i = 0; i < arrayIconJson.icons.length; i++) {
      if (index === i) {
        arrayIconJson.icons[index].color = paletteColors.white
        arrayIconJson.icons[index].background = paletteColors.limeLight
      }else{
        arrayIconJson.icons[i].color = paletteColors.whiteLight
        arrayIconJson.icons[i].background = paletteColors.white
      }
    }      
    setIconCategoryArray({...arrayIconJson});
    
  }

  const getObjectKey = (obj: any, value: any) => {
    return Object.keys(obj).find(key => obj[key] === value);
  }

  const padTo2Digits = (num: number) => {
    return num.toString().padStart(2, '0');
  }

  const formatDate = (date: Date) => {
    return [
      padTo2Digits(date.getDate()),
      padTo2Digits(date.getMonth() + 1),
      date.getFullYear(),
    ].join('-');
  }

  const onSubmitSearch = (nameSearched: string) => {
    let newIncomesSearched: incomesType = {incomes: []}
    let incomesFiltered = incomesArray.incomes.filter((item) => item.name.toLowerCase().includes(nameSearched.toLowerCase()));

    
    
    newIncomesSearched.incomes = incomesFiltered;
    console.log(incomesFiltered);

    setIncomesSearchedArray(newIncomesSearched);
    // console.log('Enter presionado. Realizar búsqueda u otras acciones aquí.');
  };

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
          onSubmitEditing={() => onSubmitSearch(searchValue)}
        />
      </View>
      <ScrollView style={styles.scrollList}>
        {
          incomesSearchedArray.incomes.length > 0 ?

            incomesSearchedArray.incomes.map((item, i) => (
              <View style={styles.incomeContainer} key={i + 1}>
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

          :

            incomesArray.incomes.map((item, i) => (
              <View style={styles.incomeContainer} key={i + 1}>
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
          <ScrollView style={{zIndex: 1, position: 'absolute', height: '10%', width: '100%'}}
            onScrollEndDrag={() => setModalVisible(!modalVisible)}
          >
            <Icon style={{textAlign: 'center', top: -35}} name={'window-minimize'} size={50} color={paletteColors.whiteLight}/>
          </ScrollView>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}> 
            <View style={{paddingTop: 50, paddingHorizontal: 30}}>
              <Text style={stylesModal.modalText}>Nuevo ingreso</Text>
              <TextInput
                // ref={inputRef}
                style={{backgroundColor: paletteColors.white, borderRadius: 50}}
                label="Precio"
                keyboardType='numeric'
                mode={'outlined'}
                value={formik.values.price}
                onChangeText={(text) => formik.setFieldValue('price', text)}
                left={<TextInput.Icon icon="currency-usd" />}
              />
              <Text style={{color: 'red', marginTop: 10}}>{formik.errors.price}</Text>
              <TextInput
                style={{marginTop: 20, backgroundColor: paletteColors.white, borderRadius: 50, maxHeight: 100}}
                label="Nombre"
                mode={'outlined'}
                value={formik.values.name}
                onChangeText={(text) => formik.setFieldValue('name', text)}
                left={<TextInput.Icon icon="comment-processing-outline" />}
                multiline={true}
                numberOfLines={3}
              />
              <Text style={{color: 'red', marginTop: 10}}>{formik.errors.name}</Text>
              <TextInput
                style={{marginTop: 20, backgroundColor: paletteColors.white, borderRadius: 50, maxHeight: 100}}
                label="Descripción"
                mode={'outlined'}
                value={formik.values.description}
                onChangeText={(text) => formik.setFieldValue('description', text)}
                left={<TextInput.Icon icon="comment-processing-outline" />}
                multiline={true}
                numberOfLines={3}
              />
              <Text style={{color: 'red', marginTop: 10}}>{formik.errors.description}</Text>
              <View style={{marginTop: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <Icon style={{marginLeft: 15}} name={'calendar-alt'} size={25}/>
                <DateTimePicker
                  style={{zIndex: 2}}
                  testID="dateTimePicker"
                  value={date}
                  mode={mode1}
                  is24Hour={true}
                  onChange={onChange}
                  themeVariant={mode ? 'dark' : 'light'}
                  accentColor={mode ? paletteColors.limeDark : paletteColors.limeLight}
                  negativeButton={{label: 'Cancel', textColor: 'red'}}
                  // placeholderText="select date"
                />
              </View>
              <Text style={{marginTop: 20}}>{'Categorías'}</Text>
              <ScrollView
                style={{paddingTop: 10}}
                horizontal={true} 
                showsHorizontalScrollIndicator={false}
              >
                {
                  iconCategoryArray.icons.map((itemIcon, i) => (
                    <View style={{padding: 6, backgroundColor: itemIcon.background, margin: 5, borderRadius: 10, flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center', shadowColor: '#171717',
                    shadowOffset: {width: 0, height: 0},
                    shadowOpacity: 0.2,
                    shadowRadius: 2}} key={i + 1} >
                      <IconButton
                        style={{padding: 0, margin: 2}}
                        icon={itemIcon.name}
                        iconColor={itemIcon.color}
                        size={50}
                        onPress={() => selecticonCategory(i, itemIcon.text)}
                      />
                      <Text style={{fontSize: 10, color: itemIcon.color}}>{itemIcon.text}</Text>
                    </View>
                  ))
                }
              </ScrollView>  
              {/* <Button style={{}} title='Guardar' onPress={() => setModalVisible(!modalVisible)}/> */}
              <Button 
                style={{marginTop: 20}}
                buttonColor={paletteColors.limeLight} 
                // loading={true}
                icon="content-save-outline" 
                mode="contained" 
                onPress={() => formik.handleSubmit()}
                disabled={buttonDisabled}
              >
                Guardar
              </Button>
            </View> 
          </TouchableWithoutFeedback>
        </View>
        </BlurView>
      </Modal>
    </SafeAreaView>
  )
}

const initialValues = () => {
    return {
      id: '',
      name: '',
      description: '',
      price: '',
      date: '',
      category: '',
    }
}

const validationSchema = () => {
    return {
      // id: '',
      name: Yup.string().required("El nombre es requerido"),
      description: Yup.string().required("La descripción es requerida"),
      price: Yup.string().required("El precio es requerido"),
      // date: '',
      // category: '',
    }
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
    backgroundColor: mode ?paletteColors.limeDark : paletteColors.white,
    borderRadius: 20,
    // padding: 35,
    // alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    // backgroundColor: 'yellow'
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
    padding: 10,
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