import { Text, TextInput, Image, KeyboardAvoidingView, Platform, TouchableOpacity, View,StyleSheet} from 'react-native'
import React, { useState } from 'react'
import { paletteColors } from '../colors/PaletteColors'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { signIn } from '../store/loginReducer';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

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
          placeholderTextColor={mode ? paletteColors.light : paletteColors.light}
        />
        <View style={styles.keyboardAvoiding.passwordContainer}>
          <TextInput
            style={styles.keyboardAvoiding.passwordContainer.inputPassword}
            inputMode='text'
            secureTextEntry={!isPasswordVisible}
            value={password}
            onChangeText={(text) => onChangePassword(text)}
            placeholder='Password'
            placeholderTextColor={mode ? paletteColors.light : paletteColors.light}
            // clearTextOnFocus={false}
          />
          <TouchableOpacity
            style={styles.keyboardAvoiding.passwordContainer.touchableOpacity}
            onPress={togglePasswordVisibility}
          >
            <Icon name={isPasswordVisible ? 'eye' : 'eye-slash'} color={mode ? paletteColors.purpleLight : 'black'} size={25}/>
            {/* <FontAwesomeIcon icon="far fa-eye-slash" /> */}
          </TouchableOpacity>
        </View>
        <Button 
          style={styles.keyboardAvoiding.loginButton}
          buttonColor={mode ? paletteColors.purpleLight : paletteColors.purple} 
          // loading={true}
          // icon="login"
          icon={({ size, color }) => (
            <Icon name="sign-in-alt" size={30} color={paletteColors.white} />
          )}
          mode="contained" 
          onPress={() => loginToHome()}
          labelStyle={styles.keyboardAvoiding.loginButton.label}
          loading={loadingLogin}
          // contentStyle={{justifyContent: 'center', alignItems: 'center'}}
          
        >
          Login
        </Button>
        <View style={styles.keyboardAvoiding.createAccountContainer}>
          <Text style={styles.keyboardAvoiding.createAccountContainer.question}>
            ¿No tenés cuenta ve? 
          </Text>
          <Text style={styles.keyboardAvoiding.createAccountContainer.goCreate}>
            ¡Creála ome!
          </Text>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export const getStylesLogin = (mode: boolean) => StyleSheet.create({
  safeArea: {
    width: '100%',
    height: '100%',
    backgroundColor: mode ? paletteColors.black : paletteColors.white
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
      color: mode ? paletteColors.purpleLight : paletteColors.purple, 
      fontFamily: 'Poppins_700Bold', 
      fontSize: 30
    },
    inputLogin: {
      marginBottom: 20, 
      paddingLeft: 20, 
      paddingRight: 20, 
      width: '90%' as '90%', 
      height: 60, 
      color: mode ? paletteColors.purpleLight : 'black',
      borderRadius: 15, 
      borderWidth: 1, 
      borderColor: mode ? paletteColors.purpleLight :paletteColors.purple,
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
        color: mode ? paletteColors.purpleLight : 'black',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: mode ? paletteColors.purpleLight : paletteColors.purple,
        fontFamily: 'Poppins_400Regular',
        fontSize: 15
      },
      touchableOpacity: { 
        position: 'absolute' as 'absolute',
        top: 0,
        right: 20, 
        bottom: 0,
        justifyContent: 'center' as 'center', 
        // alignItems: 'center',
        'Image': {
          width: 30, 
          height: 30
        }
      }
    },
    loginButton: {
      marginTop: 20,
      width: '90%' as '90%',
      borderRadius: 15,
      label: {
        paddingTop: 12, 
        paddingBottom: 5,
        fontFamily: 'Poppins_700Bold', 
        fontSize: 20,
      }
    },
    createAccountContainer: {
      marginTop: 40,
      marginBottom: 40,
      width: '90%' as '90%',
      flexDirection: 'row' as 'row',
      justifyContent: 'space-around' as 'space-around',
      question: {
        color: mode ? paletteColors.whiteLight : 'black',
        fontSize: 16,
        fontFamily: 'Poppins_400Regular',
      },
      goCreate: {
        fontSize: 16,
        fontFamily: 'Poppins_400Regular',
        color: mode ? paletteColors.purpleLight : paletteColors.purple
      }
    }
  }
});