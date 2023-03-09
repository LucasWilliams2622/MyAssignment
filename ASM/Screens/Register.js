import { View, Text, TextInput, SafeAreaView, Image, Button, Pressable, Touchable, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useState } from 'react'

import { StyleSheet } from 'react-native'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import axios from 'axios';
import AxiosIntance from '../Ultil/AxiosIntance';


const Register = (props) => {
  const { navigation } = props;
  const [EmailUser, setEmailUser] = useState('');
  const [isValidEmail, setisValidEmail] = useState(true)

  const [PasswordUser, setPasswordUser] = useState('');
  const [getPasswordVisible, setPasswordVisible] = useState(false)
  const verifyEmail = (EmailUser) => {
    let regex = new RegExp(/([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])/);
    if (EmailUser == "") return true
    if (regex.test(EmailUser)) {
      return true
    }
    return false

  }
  const GoLogin = () => {
    navigation.navigate('Login', { name: 'Nguyễn Văn A', old: 26 });
  }
  const RegisterAccount = async () => {
    if (isValidEmail && PasswordUser != "") {
      try {
        console.log('email ' + EmailUser + '\npassword ' + PasswordUser);

        const respond = await AxiosIntance().post("users/register",
          { email: EmailUser, password: PasswordUser });//variable(mail password) chuyen len API
        console.log(respond);
        if (respond.error == false) {
          ToastAndroid.show("Register Success", ToastAndroid.SHORT);
          navigation.navigate('Login');
        } else {
          ToastAndroid.show("Register Failed", ToastAndroid.SHORT);
        }
      } catch (e) {
        console.log(e)
      }
    } else {
      ToastAndroid.show("Please check email and password", ToastAndroid.SHORT);
    }

  }
  return (

    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        {/* Hello Text */}
        <Text style={[styles.textHeader, { color: '#1877f2', }]}>Hello!</Text>
        <Text style={[styles.textNormal, { fontSize: 20, letterSpacing: 0.12 }]}>Signup to get Started</Text>

        {/* Input Username */}
        <View style={[styles.textNormal, { marginTop: 48 }]}>
          <Text style={styles.textNormal}>Username</Text>
          <Text style={[styles.textNormal, { color: 'red' }]}>*</Text>
        </View>
        <TextInput multiline={false} style={styles.textInput}

          value={setEmailUser}
          onChangeText={(text) => {
            setEmailUser(text)
            const invalid = verifyEmail(text);
            invalid ? setisValidEmail(true) : setisValidEmail(false);
          }} />
        <Text style={[styles.text, { color: 'red', fontSize: 10, fontWeight: 'bold' }]}>{isValidEmail ? "" : " Email is invalid"}</Text>

        {/* Input Password */}
        <View style={[styles.textNormal, { marginTop: 10 }]}>
          <Text style={styles.textNormal}>Password</Text>
          <Text style={[styles.textNormal, { color: 'red' }]}>*</Text>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <TextInput multiline={false} style={styles.textInput}
            secureTextEntry={getPasswordVisible ? false : true}
            onChangeText={setPasswordUser} />
          <TouchableOpacity style={styles.visible}
            onPress={() => {
              setPasswordVisible(!getPasswordVisible)
            }}>
            {
              getPasswordVisible ?
                <Image resizeMode='contain' source={require('../asset_ASM/VisibleEye.png')}></Image>
                :
                <Image resizeMode='contain' source={require('../asset_ASM/InvisibleEye.png')}></Image>
            }
          </TouchableOpacity>
        </View>
        {/* End Input Password */}

        {/* Remember me */}
        <View style={[styles.textNormal, { marginTop: 9, justifyContent: 'space-between' }]}>
          <View style={{ flexDirection: 'row' }}>
            <BouncyCheckbox
              size={20}
              unfillColor="#FFFFFF"
              isChecked='true'
              fillColor='#1877F2'
              style={{ borderRadius: 0 }} />
            <Text style={styles.textNormal}>
              Remember me
            </Text>
          </View>
        </View>

        {/* Button Login */}
        <TouchableOpacity>
          <Pressable style={styles.btnLogin}
            onPress={(RegisterAccount)}>
            <Text style={styles.textbtnLogin} > Login</Text>
          </Pressable>
        </TouchableOpacity>

        <View style={[styles.textNormal, { justifyContent: 'center', marginTop: 16, }]}>
          <Text style={styles.textNormal}>or continue with</Text>
        </View>

        {/* Facebook Google */}
        <View style={styles.boxSocical}>
          <TouchableOpacity>
            <Pressable>
              <Image style={styles.imgIconSocial} source={require('../asset_ASM/BtnFb.png')}></Image>
            </Pressable>
          </TouchableOpacity>
          <TouchableOpacity>
            <Pressable>
              <Image style={styles.imgIconSocial} source={require('../asset_ASM/BtnGoogle.png')}></Image>
            </Pressable>
          </TouchableOpacity>
        </View>

        {/* Sign Up */}
        <View style={[styles.bottomText, {}]}>
          <Text style={styles.textNormal}>
            Already have an account ?
          </Text>
          <TouchableOpacity>
            <Text
              onPress={() => { GoLogin() }}
              style={[styles.textNormal, { color: '#1877F2', fontWeight: 'bold', marginLeft: 10 }]}>
              Login
            </Text>
          </TouchableOpacity>

        </View>
      </View>
    </SafeAreaView>
  )
}

export default Register


const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white'
  },
  container: {

    bacgroundColor: "#fff",
    marginHorizontal: 24,

  },
  textHeader: {
    fontSize: 50,
    color: '#050505',
    fontWeight: 'bold',
    marginTop: 30,

  },
  wellcomeText: {
    marginTop: 4,
    fontSize: 20,
    color: '#4E4B66'

  },
  textNormal: {
    flexDirection: "row",
    color: '#4E4B66',
    fontSize: 14,

  },
  textInput: {
    marginTop: 4,
    width: '100%',
    height: 48,
    borderColor: '#4E4B66',
    borderWidth: 2,
    borderRadius: 6,
    padding: 10,
    flexDirection: 'row',
  },
  btnLogin: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1877f2',
    borderRadius: 6,
    width: '100%',
    height: 50,
    marginTop: 17.5,

  },
  textbtnLogin: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  bottomText: {
    // borderWidth:1,
    // borderColor:'black',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 16
  },
  boxSocical: {
    marginTop: 16,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
  },
  visible: {
    position: 'absolute',
    right: 11,

    bottom: 13,


  }
})
