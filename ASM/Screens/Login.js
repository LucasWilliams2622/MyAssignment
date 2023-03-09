import { View, Text, TextInput, SafeAreaView, Image, CheckBox, Dimensions, Button, Pressable, Touchable, TouchableOpacity, ToastAndroid, KeyboardAvoidingView } from 'react-native'
import React, { useContext, useState, useEffect } from 'react'
import { StyleSheet, } from 'react-native'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import AxiosIntance from '../Ultil/AxiosIntance';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppContext } from './AppContext';
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
} from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
    scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
    webClientId: '<FROM DEVELOPER CONSOLE>', // client ID of type WEB for your server (needed to verify user ID and offline access)
    offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    hostedDomain: '', // specifies a hosted domain restriction
    forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
    accountName: '', // [Android] specifies an account name on the device that should be used
    iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    googleServicePlistPath: '', // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
    openIdRealm: '', // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
    profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
});
const windowHeight = Dimensions.get('window').height;
const windowWIdth = Dimensions.get('window').width;

const Login = (props) => {


    const { navigation } = props;
    const GoRegister = () => {
        navigation.navigate('Register');
    }
    const GoMain = () => {
        navigation.navigate('MainContainer');
    }
    const [getPasswordVisible, setPasswordVisible] = useState(false)
    const [EmailUser, setEmailUser] = useState('');
    const [isValidEmail, setisValidEmail] = useState(true)
    const [PasswordUser, setPasswordUser] = useState('');
    const { setisLogin, setinforUser, setPWUser } = useContext(AppContext);
    const [valid, setValid] = useState({});


    useEffect(() => {
        setValid({...valid, email: verifyEmail(EmailUser), password: PasswordUser.length > 4});
        
      return () => {
      }
    }, [EmailUser, PasswordUser])
    

    const stylesValidator = (name) => {
        if(valid[name]) return {}
        else return {
            borderColor: 'red'
        };
    }

    const verifyEmail = (EmailUser) => {
        let regex = new RegExp(/([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])/);
        if (EmailUser == "") return true
        if (regex.test(EmailUser)) {
            return true
        }
        return false

    }
    const LoginUser = async () => {
        // if (EmailUser == "" || PasswordUser == "") {
        //     ToastAndroid.show('Vui lòng điền đầy đủ thông tin !', ToastAndroid.SHORT);
        // } else {

        try {
            console.log("mail " + EmailUser + "pass " + PasswordUser);
            const respond = await AxiosIntance().post("/auth/login", { email: EmailUser, password: PasswordUser });
            //console.log(respond)
            if (respond.error == false) {
                console.log("token" + respond.data.token)
                await AsyncStorage.setItem("token", respond.data.token);
                ToastAndroid.show("Login Success", ToastAndroid.SHORT);
                // setPWUser()
                setinforUser(respond.data.user)
                setisLogin(true);

            } else {
                ToastAndroid.show("Login Failed", ToastAndroid.SHORT);

            }
        } catch (e) {
            console.log("=========>" + e);
        }
        // }

    }
    //console.log('get email'+EmailUser)
    return (

        <SafeAreaView style={styles.main}>
            <View style={styles.container}>


                <Text style={styles.textHeader} >Hello</Text>
                <Text style={[styles.textHeader, { color: '#1877f2', marginTop: 2, }]}>Again!</Text>
                <Text style={[styles.textNormal, { fontSize: 20, letterSpacing: 0.12 }]}>Wellcome back you've {'\n'}been missed</Text>

                {/* Input Username */}
                <View style={[styles.textNormal, { marginTop: 48 }]}>
                    <Text style={styles.textNormal}>Username</Text>
                    <Text style={[styles.textNormal, { color: 'red' }]}>*</Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <TextInput style={[styles.textInput, stylesValidator("email")]}
                        multiline={false}
                        value={EmailUser}
                        onChangeText={(text) => {
                            setEmailUser(text)
                            setisValidEmail(verifyEmail(text));
                        }} />
                    <Text style={[styles.text, { color: 'red', fontSize: 10, fontWeight: 'bold' }]}>{isValidEmail ? "" : " Email is invalid"}</Text>

                </View>

                {/* Input Password */}
                <View style={[styles.textNormal, { marginTop: 10 }]}>
                    <Text style={styles.textNormal}>Password</Text>
                    <Text style={[styles.textNormal, { color: 'red' }]}>*</Text>
                </View>
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
                                    <Image resizeMode='contain' source={require('../asset_ASM/VisibleEye.png')}></Image>
                                    :
                                    <Image resizeMode='contain' source={require('../asset_ASM/InvisibleEye.png')}></Image>
                            }
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>

                <View style={[styles.textNormal, { marginTop: 9, justifyContent: 'space-between' }]}>
                    <View style={styles.checkBox}>
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
                    <Text style={[styles.textNormal, { color: '#5890FF' }]}>
                        Forgot the password ?
                    </Text>
                </View>

                {/* Button Login */}
                <TouchableOpacity >
                    <Pressable
                        onPress={LoginUser}
                        style={styles.btnLogin}>
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
                    {/* <TouchableOpacity>
                        <Pressable>
                            <Image style={styles.imgIconSocial} source={require('../asset_ASM/BtnGoogle.png')}></Image>
                        </Pressable>
                    </TouchableOpacity> */}
                     <Text>
                <GoogleSigninButton
                    style={{ width: 192, height: 48 }}
                    size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Dark}
                onPress={this._signIn}
                //   disabled={this.state.isSigninInProgress}
                />;
            </Text>
                </View>

                {/* Sign Up */}
                <View style={[styles.bottomText, {}]}>
                    <Text style={styles.textNormal}>
                        don’t have an account ?
                    </Text>
                    <TouchableOpacity>
                        <Text
                            onPress={GoRegister}
                            style={[styles.textNormal, { color: '#1877F2', fontWeight: 'bold' }]}>
                            Sign Up
                        </Text>
                    </TouchableOpacity>

                </View>

                
            </View>
        </SafeAreaView>
    )
}

export default Login;
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
        width: 370,
        height: 48,
        borderColor: '#4E4B66',
        borderWidth: 2,
        borderRadius: 6,
        padding: 10,
        flexDirection: 'row',
        textAlign: 'left',
        paddingRight: 50,

    },
    btnLogin: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1877f2',
        borderRadius: 6,
        width: windowWIdth - 45,
        height: 50,
        marginTop: 17.5,

    },
    textbtnLogin: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    bottomText: {

        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 16
    },
    boxSocical: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        // alignItems: 'center',
        // borderWidth: 2,
        // borderColor: 'black',
    },
    checkBox: {
        flexDirection: 'row'
    },
    visible: {
        position: 'absolute',
        right: 11,
        bottom: 13,
    }

})

