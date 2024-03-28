import React, { useContext, useState } from 'react'
import { View, Text, SafeAreaView, TextInput, StyleSheet, TouchableWithoutFeedback, Keyboard, Pressable, ScrollView, TouchableOpacity } from 'react-native';
import { Button, IconButton } from 'react-native-paper';
// import { TextInput } from 'react-native-paper';
import { paletteColors } from '../colors/PaletteColors';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import DatePicker from '../components/DatePicker'
import { iconsType, incomeType, incomesType } from '../types/Types';
import { useFormik, FormikProps } from 'formik';
import * as Yup from 'yup';
import { incomesContext, totalMoneyContext } from '../context/ThemeContext';
import { useNavigation } from '@react-navigation/native';

export default function AddIncomeScreen() {
    
  const {mode} = useSelector((state: RootState) => state.themeReducer);
  const { incomesArray, setIncomesArray } = useContext(incomesContext);
  const { totalMoney, setTotalMoney } = useContext(totalMoneyContext);
  const navigation = useNavigation();

  const [price, setPrice] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [date, setDate ] = useState<Date>(new Date());
  const [dateAndroid, setDateAndroid ] = useState<string>('');
  const [showPicker, setShowPicker ] = useState<boolean>(false);
  const [iconCategory, setIconCategory] = useState<string>('');
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

  const styles = getIncomeStyles(mode);

  const toggleDatePicker = () => {
    console.log('Presionando el pressable');
    
    setShowPicker(!showPicker);
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

  // useFormik
  const formik: FormikProps<incomeType> = useFormik<incomeType>({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: (getValues, { resetForm }) => {
      resetForm();
      // setModalVisible(!modalVisible);
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

  const handleSubmit = () => {
    formik.handleSubmit();
    navigation.navigate('Incomes');
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.safeArea}>
          <Text style={styles.safeArea.subtitle}>Nuevo ingreso</Text>
          <TextInput
            style={styles.safeArea.inputPrice}
            inputMode='numeric'
            // value={price}
            value={formik.values.price}
            // onChangeText={(text) => setPrice(text)}
            onChangeText={(text) => formik.setFieldValue('price', text)}
            placeholder='Precio'
          />
          <TextInput
            style={styles.safeArea.inputPrice}
            inputMode='text'
            // value={name}
            value={formik.values.name}
            // onChangeText={(text) => setName(text)}
            onChangeText={(text) => formik.setFieldValue('name', text)}
            placeholder='Nombre'
          />
          <TextInput
            style={styles.safeArea.inputDescription}
            inputMode='text'
            multiline
            // value={description}
            value={formik.values.description}
            // onChangeText={(text) => setDescription(text)}
            onChangeText={(text) => formik.setFieldValue('description', text)}
            placeholder='Descripción'
          />
          {!showPicker && (
            <Pressable 
              style={styles.safeArea.pressableDate}
              onPress={() => toggleDatePicker()}
            >
              <TextInput
              style={styles.safeArea.pressableDate.TextInput}
              inputMode='text'
              value={dateAndroid}
              onChangeText={(text) => setPrice(text)}
              placeholder='07/02/1994'
              editable={false}
              onPressIn={() => toggleDatePicker()}
            />
            </Pressable>
          )}

          {showPicker && (
            <DatePicker 
              date={date}
              setDate={setDate}
              toggleDatePicker={toggleDatePicker}
              dateAndroid={dateAndroid} 
              setDateAndroid={setDateAndroid}
              showPicker={showPicker}
              setShowPicker={setShowPicker}
            />
          )}
          <View style={{marginTop: 20, width: '90%', height: 100}}>
            <ScrollView
              // style={{height: '100%', backgroundColor: 'blue', }}
              horizontal={true} 
              showsHorizontalScrollIndicator={false}
            >
              {
                iconCategoryArray.icons.map((itemIcon, i) => (
                  <TouchableOpacity 
                    style={{  
                      padding: 6, 
                      backgroundColor: itemIcon.background, 
                      margin: 5, 
                      borderRadius: 10, 
                      flexDirection: 'column', 
                      justifyContent: 'space-around', 
                      alignItems: 'center', 
                      shadowColor: '#171717',
                      shadowOffset: {width: 0, height: 0},
                      shadowOpacity: 0.2,
                      shadowRadius: 2
                    }} 
                    key={i + 1} 
                    onPress={() => selecticonCategory(i, itemIcon.text)}
                  >
                    <IconButton
                      style={{padding: 0, margin: 2}}
                      icon={itemIcon.name}
                      iconColor={itemIcon.color}
                      size={50}
                      // onPress={() => selecticonCategory(i, itemIcon.text)}
                    />
                    <Text style={{fontSize: 10, color: itemIcon.color}}>{itemIcon.text}</Text>
                  </TouchableOpacity>
                ))
              }
            </ScrollView>  
          </View>
          <Button 
            style={{marginTop: 20}}
            buttonColor={paletteColors.limeLight} 
            // loading={true}
            icon="content-save-outline" 
            mode="contained" 
            onPress={() => handleSubmit()}
            disabled={buttonDisabled}
          >
            Añadir
          </Button>
      </SafeAreaView>
    </TouchableWithoutFeedback>
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

const getIncomeStyles = (mode: boolean) => StyleSheet.create({
  safeArea: {
    width: '100%' as '100%',
    height: '100%' as '100%',
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: paletteColors.white,
    subtitle: {
      padding: 20,
      textAlign: 'center' as 'center',
      fontSize: 20,
      fontFamily: 'Poppins_700Bold',
      color: paletteColors.limeLight
    },
    inputPrice: {
      marginBottom: 20,
      paddingLeft: 20,
      paddingRight: 20,
      width: '90%' as '90%',
      height: 60,
      fontSize: 16,
      fontFamily: 'Poppins_400Regular',
      color: paletteColors.limeLight,
      borderWidth: 1,
      borderRadius: 16,
      borderColor: paletteColors.limeLight,
      // backgroundColor: 'blue'
    },
    inputDescription: {
      marginBottom: 20,
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 20,
      paddingBottom: 20,
      width: '90%' as '90%',
      height: 80,
      fontSize: 16,
      fontFamily: 'Poppins_400Regular',
      color: paletteColors.limeLight,
      borderWidth: 1,
      borderRadius: 16,
      borderColor: paletteColors.limeLight,
    },
    pressableDate: {
      width: '90%' as '90%',
      height: 60,
      borderRadius: 15,
      // backgroundColor: 'blue',
      'TextInput': {
        marginBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20,
        paddingBottom: 20,
        width: '100%' as '100%',
        height: 60,
        fontSize: 16,
        fontFamily: 'Poppins_400Regular',
        color: paletteColors.limeLight,
        borderWidth: 1,
        borderRadius: 16,
        borderColor: paletteColors.limeLight,
      }
    }
  }
});