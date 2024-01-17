import React, { useState } from 'react'
import { View, Text, SafeAreaView, TextInput, StyleSheet, TouchableWithoutFeedback, Keyboard, Pressable } from 'react-native'
// import { TextInput } from 'react-native-paper';
import { paletteColors } from '../colors/PaletteColors';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import DatePicker from '../components/DatePicker'


export default function AddIncomeScreen() {
    
  const {mode} = useSelector((state: RootState) => state.themeReducer);
  const [price, setPrice] = useState<string>('');
  const [date, setDate ] = useState<Date>(new Date());
  const [dateAndroid, setDateAndroid ] = useState<string>('');
  const [showPicker, setShowPicker ] = useState<boolean>(false);

  const styles = getIncomeStyles(mode);

  const toggleDatePicker = () => {
    console.log('Presionando el pressable');
    
    setShowPicker(!showPicker);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.safeArea}>
          <Text style={styles.safeArea.subtitle}>Nuevo ingreso</Text>
          <TextInput
            style={styles.safeArea.inputPrice}
            inputMode='numeric'
            value={price}
            onChangeText={(text) => setPrice(text)}
            placeholder='Precio'
          />
          <TextInput
            style={styles.safeArea.inputPrice}
            inputMode='text'
            value={price}
            onChangeText={(text) => setPrice(text)}
            placeholder='Nombre'
          />
          <TextInput
            style={styles.safeArea.inputDescription}
            inputMode='text'
            multiline
            value={price}
            onChangeText={(text) => setPrice(text)}
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
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

const getIncomeStyles = (mode: boolean) => StyleSheet.create({
  safeArea: {
    width: '100%' as '100%',
    height: '100%' as '100%',
    justifyContent: 'center',
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