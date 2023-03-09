import { Alert, Pressable, Image, StyleSheet, Text, Dimensions, TextInput, View, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { text } from '@fortawesome/fontawesome-svg-core';
const windowHeight = Dimensions.get('window').height;
const windowWIdth = Dimensions.get('window').width;
const Validation = (props) => {
  const { navigation } = props;
  const [email, onChangeEmail] = useState('');
  const [isValidEmail, setisValidEmail] = useState(true)
  const [phoneNumber, onChangePhoneNumber] = useState('')
  const [isValidPhone, setisValidPhone] = useState(true)
  const [date, onChangeDate] = useState('')
  const [isValidDate, setisValidDate] = useState(true)
  const [getPasswordVisible, setPasswordVisible] = useState(false)

  const [PasswordUser, setPasswordUser] = useState('');


  const verifyEmail = (email) => {
    let regex = new RegExp(/([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])/);
    if (email == "") return true
    if (regex.test(email)) {
      return true
    }
    return false

  }

  const verifyPhoneNumber = (phoneNumber) => {

    let regex = new RegExp(/([\+84|84|0]+(3|5|7|8|9|1[2|6|8|9]))+([0-9]{8})\b/);
    if (!phoneNumber) return true
    if (regex.test(phoneNumber)) {
      return true
    }
    return false

  }
  const verifyDate = (date) => {

    let regex = new RegExp(/^[0-9]{2,2}\/[0-9]{2,2}\/[0-9]{4,4}/);
    if (!date) return true
    if (regex.test(date)) {
      return true
    }
    return false

  }
  const submitForm = () => {
    {
      if (isValidEmail && isValidPhone && isValidDate) {
        (email == "") || (phoneNumber == "") || (date == "")
          ?
          Alert.alert(
            "Thông báo",
            "Hãy điền đủ thông tin !",
            [
              {
                text: "OK",
              },
            ]
          )
          :
          navigation.navigate("MyFlatList")

      } else {
        Alert.alert(
          "",
          "Submit failed",
          [

            {
              text: "OK",
            },
          ]
        );
      }

    }

  }

  return (
    <SafeAreaView style={styles.main} >
      <View style={styles.container}>
        <View style={{
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Text style={styles.title}>Validation</Text>
        </View>

        <Text style={styles.text}>Email</Text>
        <TextInput style={styles.input}
          keyboardType="email-address"
          onChangeText={(text) => {
            onChangeEmail(text)
            const invalid = verifyEmail(text);
            invalid ? setisValidEmail(true) : setisValidEmail(false);
          }}
          value={email} />
        <Text style={[styles.text, { color: 'red' }]}>{isValidEmail ? "" : " Email is invalid"}</Text>


        <Text style={[styles.text, { marginTop: 20 }]}>Phone Number</Text>
        <TextInput style={styles.input}
          onChangeText={(text) => {
            onChangePhoneNumber(text)
            const invalid = verifyPhoneNumber(text);

            invalid ? setisValidPhone(true) : setisValidPhone(false);
          }} value={phoneNumber}

          keyboardType="numeric" />
        <Text style={[styles.text, { color: 'red' }]}>{isValidPhone ? "" : " Phone number is invalid"}</Text>


        <Text style={[styles.text, { marginTop: 20 }]}>Day of birth</Text>
        <TextInput style={styles.input}
          placeholder="11/11/1111"
          keyboardType="numbers-and-punctuation"
          onChangeText={(text) => {
            onChangeDate(text)
            const invalid = verifyDate(text);
            invalid ? setisValidDate(true) : setisValidDate(false);
          }} value={date}
        />
        <Text style={[styles.text, { color: 'red' }]}>{isValidDate ? "" : " Date of birht is invalid"}</Text>

        <KeyboardAvoidingView
          behavior="padding">

          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <TextInput style={styles.textInput}
              multiline={false}
              autoCapitalize={false}
              autoCorrect={false}
              secureTextEntry={getPasswordVisible ? false : true}
              onChangeText={setPasswordUser} />
            <TouchableOpacity style={styles.visible}
              onPress={() => {
                setPasswordVisible(!getPasswordVisible)
              }}>
              {
                getPasswordVisible ?
                  <Image resizeMode='contain' source={require('../ASM/asset_ASM/VisibleEye.png')}></Image>
                  :
                  <Image resizeMode='contain' source={require('../ASM/asset_ASM/InvisibleEye.png')}></Image>
              }
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
        <TouchableOpacity>
          <Pressable onPress={submitForm} style={styles.button}>
            <Text style={styles.textSubmit}>
              Submit
            </Text>
          </Pressable>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  )
}

export default Validation

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white'
  },
  container: {
    marginHorizontal: 32,
    marginTop: 34,
    backgroundColor: 'white',

  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 16,
    color: 'black'
  },
  input: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 6,
  },
  button: {
    borderRadius: 6,
    width: windowWIdth - 32 * 2,
    height: 50,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',

    borderBottomColor: 'black',
    borderBottomWidth: 4,
    borderRightColor: 'black',
    borderRightWidth: 2,

  },
  textSubmit: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
  },
  textInput: {
    marginTop: 4,
    width: windowWIdth - 32 * 2,
    height: 48,
    borderColor: '#4E4B66',
    borderWidth: 2,
    borderRadius: 6,
    padding: 10,
    flexDirection: 'row',
    textAlign: 'left',
    paddingRight: 50,

  },
  visible: {
    position: 'absolute',
    right: 11,
    bottom: 13,
  }
})