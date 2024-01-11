import { Text, TextInput, Image, KeyboardAvoidingView, Platform, TouchableOpacity, View, Button} from 'react-native'
import React, { useState } from 'react'
import { paletteColors } from '../colors/PaletteColors'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { signIn } from '../store/loginReducer';

export default function LoginScreen() {

  const { login } = useSelector((state: RootState) => state.loginReducer);
  const dispatch = useDispatch();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const onChangeEmail = (text: string) => {
    setEmail(text);
  }

  const onChangePassword = (text: string) => {
    setPassword(text);
  }

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const loginToHome = () => {
    // dispatch(signIn(['kevind@admin.com', '1234']));
    dispatch(signIn([email, password]));
  }

  return (
    <SafeAreaView style={{width: '100%', height: '100%', backgroundColor: paletteColors.white}}>
      {/* <img src="../../assets/images/Logo-Lukis.png" alt="" /> */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}
      >
        <Image 
          style={{width: 150, height: 150}}
          source={require('../../assets/images/Logo-Lukis-AmaticSC.png')}
        />
        <Text style={{padding: 20, color: paletteColors.purple, fontFamily: 'Poppins_700Bold', fontSize: 30}}>LOGIN</Text>
        <TextInput
          style={{marginBottom: 20, paddingLeft: 20, paddingRight: 20, width: '90%', height: 60, borderRadius: 15, borderWidth: 0.17, fontFamily: 'Poppins_400Regular', fontSize: 20}}
          inputMode='email'
          keyboardType='default'
          value={email}
          onChange={(event) => onChangeEmail(event.nativeEvent.text)}
          placeholder='Email'
        />
        {/* <TextInput
          style={{marginBottom: 20, paddingLeft: 20, paddingRight: 20, width: '90%', height: 60, borderRadius: 15, borderWidth: 0.17, fontFamily: 'Poppins_400Regular', fontSize: 20}}
          inputMode='text'
          secureTextEntry
          value={password}
          onChange={(text) => onChangePassword(text)}
          placeholder='password'
        /> */}
        <View style={{width: '90%', height: 60,}}>
          <TextInput
            style={{
              marginBottom: 20,
              paddingLeft: 20,
              paddingRight: 65,
              width: '100%',
              height: '100%',
              borderRadius: 15,
              borderWidth: 0.17,
              fontFamily: 'Poppins_400Regular',
              fontSize: 20,
            }}
            inputMode='text'
            secureTextEntry={!isPasswordVisible}
            value={password}
            onChangeText={(text) => onChangePassword(text)}
            placeholder='Password'
            // clearTextOnFocus={false}
          />
          <TouchableOpacity
            style={{ position: 'absolute', top: 15, right: 20 }}
            onPress={togglePasswordVisibility}
          >
            <Image
              source={
                isPasswordVisible
                  ? require('../../assets/icons/password-showed.png') // Ruta de tu icono de ojo cerrado 
                  : require('../../assets/icons/password-hided.png') // Ruta de tu icono de ojo abierto
              }
              style={{ width: 30, height: 30}}
            />
          </TouchableOpacity>
        </View>
        <Button title='login' onPress={() => loginToHome()} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}