import { Text, TextInput, Image, KeyboardAvoidingView, Platform, TouchableOpacity, View,StyleSheet} from 'react-native'
import React, { useState } from 'react'
import { paletteColors } from '../colors/PaletteColors'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { signIn } from '../store/loginReducer';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {

  const navigation = useNavigation();
  // const { login } = useSelector((state: RootState) => state.loginReducer);
  const { mode } = useSelector((state: RootState) => state.themeReducer);
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

  const styles = getStylesLogin(mode);
  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoiding}
      >
        <Image 
          style={styles.keyboardAvoiding.Image}
          source={require('../../assets/images/Logo-Lukis-AmaticSC.png')}
        />
        <Text style={styles.keyboardAvoiding.title}>LOGIN</Text>
        <TextInput
          style={styles.keyboardAvoiding.inputLogin}
          inputMode='email'
          keyboardType='default'
          value={email}
          onChange={(event) => onChangeEmail(event.nativeEvent.text)}
          placeholder='Email'
        />
        <View style={styles.keyboardAvoiding.passwordContainer}>
          <TextInput
            style={styles.keyboardAvoiding.passwordContainer.inputPassword}
            inputMode='text'
            secureTextEntry={!isPasswordVisible}
            value={password}
            onChangeText={(text) => onChangePassword(text)}
            placeholder='Password'
            // clearTextOnFocus={false}
          />
          <TouchableOpacity
            style={styles.keyboardAvoiding.passwordContainer.touchableOpacity}
            onPress={togglePasswordVisibility}
          >
            <Image
              source={
                isPasswordVisible
                  ? require('../../assets/icons/password-showed.png') // Ruta de tu icono de ojo cerrado 
                  : require('../../assets/icons/password-hided.png') // Ruta de tu icono de ojo abierto
              }
              style={styles.keyboardAvoiding.passwordContainer.touchableOpacity.Image}
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

export const getStylesLogin = (mode: boolean) => StyleSheet.create({
  safeArea: {
    width: '100%', 
    height: '100%', 
    backgroundColor: paletteColors.white
  },
  keyboardAvoiding: {
    width: '100%', 
    height: '100%', 
    justifyContent: 'center', 
    alignItems: 'center',
    'Image': {
      width: 150, 
      height: 150
    },
    title: {
      padding: 20, 
      color: paletteColors.purple, 
      fontFamily: 'Poppins_700Bold', 
      fontSize: 30
    },
    inputLogin: {
      marginBottom: 20, 
      paddingLeft: 20, 
      paddingRight: 20, 
      width: '90%' as '90%', 
      height: 60, 
      borderRadius: 15, 
      borderWidth: 1, 
      borderColor: paletteColors.purple,
      fontFamily: 'Poppins_400Regular' as string, 
      fontSize: 15
    },
    passwordContainer: {
      width: '90%' as '90%', 
      height: 60,
      inputPassword: {
        marginBottom: 20,
        paddingLeft: 20,
        paddingRight: 65,
        width: '100%' as '100%',
        height: '100%' as '100%',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: paletteColors.purple,
        fontFamily: 'Poppins_400Regular',
        fontSize: 15
      },
      touchableOpacity: { 
        position: 'absolute' as 'absolute', 
        top: 15, 
        right: 20,
        'Image': {
          width: 30, 
          height: 30
        }
      }
    }
  }
});