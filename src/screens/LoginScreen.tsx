import { Text, TextInput, Image, KeyboardAvoidingView, Platform, TouchableOpacity, View} from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { paletteColors } from '../colors/PaletteColors'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { signIn } from '../store/loginReducer';
import { Button, IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {

  const navigation = useNavigation();
  const { login } = useSelector((state: RootState) => state.loginReducer);
  const dispatch = useDispatch();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [loadingLogin, setLoadingLogin] = useState<boolean>(false);

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
    setLoadingLogin(true);
    setTimeout(() => { 
      dispatch(signIn([email.toLowerCase(), password]));
      setLoadingLogin(false);
      navigation.navigate('Home');
    }, 1000);
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
          style={{marginBottom: 20, paddingLeft: 20, paddingRight: 20, width: '90%', height: 60, borderRadius: 15, borderWidth: 0.17, fontFamily: 'Poppins_400Regular', fontSize: 15}}
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
              fontSize: 15,
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
        {/* <TouchableOpacity style={{marginTop: 20, width: '90%', height: 60, borderRadius: 15, backgroundColor: paletteColors.purple}}>
          <Text>Login</Text>
        </TouchableOpacity> */}
        <Button 
          style={{marginTop: 20, padding: 10, width: '90%'}}
          buttonColor={paletteColors.purple} 
          // loading={true}
          icon="login" 
          mode="contained" 
          onPress={() => loginToHome()}
          labelStyle={{fontFamily: 'Poppins_700Bold', fontSize: 15}}
          loading={loadingLogin}
        >
          Login
        </Button>
        {/* <Button title='login' onPress={() => loginToHome()} /> */}
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}