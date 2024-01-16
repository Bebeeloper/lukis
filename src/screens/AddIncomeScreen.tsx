import React, { useState } from 'react'
import { View, Text, SafeAreaView, TextInput } from 'react-native'
// import { TextInput } from 'react-native-paper';
import { paletteColors } from '../colors/PaletteColors';


export default function AddIncomeScreen() {
    
   const [price, setPrice] = useState<string>('');
    
  return (
    <SafeAreaView>
      <Text>AddIncomeScreen</Text>
      <TextInput
        // style={styles.keyboardAvoiding.passwordContainer.inputPassword}
        inputMode='text'
        // secureTextEntry={!isPasswordVisible}
        value={price}
        onChangeText={(text) => setPrice(text)}
        placeholder='Password'
        // placeholderTextColor={mode ? paletteColors.light : paletteColors.light}
        // clearTextOnFocus={false}
      />
    </SafeAreaView>
  )
}