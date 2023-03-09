import { SafeAreaView, StyleSheet, Text, Image, Dimensions, TouchableOpacity, TextInput, View, Pressable, Alert, ToastAndroid } from 'react-native'
import React, { useContext } from 'react'
import { AppContext } from './AppContext';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import AxiosIntance from '../Ultil/AxiosIntance';
import AsyncStorage from '@react-native-async-storage/async-storage';
const windowHeight = Dimensions.get('window').height;
const windowWIdth = Dimensions.get('window').width;
const EditProfile = (props) => {
    const { navigation, route } = props;
    //const { params } = route;//nếu k trong dấu {} thì nó sẽ hiểu là thành phaanf k ngoặc là tên của component
    const { inforUser, setinforUser } = useContext(AppContext)//có thông tin user
    console.log("infor: " + inforUser)

    const dialogImageChoose = () => {
        return Alert.alert(
            "Thông báo",
            "Chọn phương thức thay đổi ảnh",
            [
                {
                    text: "Chụp ảnh ",
                    onPress: () => {
                        capture()
                    },
                },

                {
                    text: "Tải ảnh lên",
                    onPress: () => {
                        getImageLibrary()
                    },
                },
                {
                    text: "Hủy",
                },
            ]
        );
    };

    const capture = async () => {
        const result = await launchCamera();
        console.log(result.assets[0].uri)

        const formdata = new FormData();
        formdata.append('image', {
            uri: result.assets[0].uri,
            type: 'image/jpeg',
            name: 'image.jpg',
        });

        const respond = await AxiosIntance("multipart/form-data")
            .post("/media/upload", formdata);
        console.log("path image " + respond.data.path)//check upload success

        setinforUser({ ...inforUser, avatar: respond.data.path });//change 1 of the data of user
        // try {
        //   const granted = await PermissionsAndroid.request(
        //     PermissionsAndroid.PERMISSIONS.CAMERA,
        //     {
        //       title: 'App Camera Permission',
        //       message: 'App needs access to your camera ',
        //       buttonNeutral: 'Ask Me Later',
        //       buttonNegative: 'Cancel',
        //       buttonPositive: 'OK',
        //     },
        //   );
        //   if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        //     ImagePicker.launchCamera(
        //       {
        //         mediaType: 'photo',
        //         includeBase64: false,
        //         maxHeight: 200,
        //         maxWidth: 200,
        //       },
        //       (response) => {
        //         console.log(response);
        //         setResponseCamera(response);
        //         setResponseGallery(null);
        //       },
        //     );
        //   } else {
        //     console.log('Camera permission denied');
        //   }
        // } catch (err) {
        //   console.warn(err);
        // }
    }

    const getImageLibrary = async () => {
        const result = await launchImageLibrary();
        console.log(result.assets[0].uri)

        const formdata = new FormData();
        formdata.append('image', {
            uri: result.assets[0].uri,
            type: 'image/jpeg',
            name: 'image.jpg',
        });

        // const respond = await AxiosIntance("multipart/form-data").post("/media/upload", formdata);
        // setinforUser({ ...inforUser, avatar: respond.data.path });
        // console.log("path image " + respond.data.path)//check upload success

        const respond = await AxiosIntance("multipart/form-data")
            .post("/media/upload", formdata);
        console.log("path image " + respond.data.path)//check upload success

        setinforUser({ ...inforUser, avatar: respond.data.path });//change 1 of the data of user

    }


    const updateProfile = async () => {

        const respond = await AxiosIntance().post("/users/update-profile",
            {
                name: inforUser.name, address: inforUser.address,
                email: inforUser.email, phone: inforUser.phone, avatar: inforUser.avatar
            });
        if (respond.error == false) {
            ToastAndroid.show("Update successfully", ToastAndroid.SHORT)


        } else {
            ToastAndroid.show("Update failed", ToastAndroid.SHORT)

        }
    }
    return (
        <SafeAreaView style={styles.main} >
            <View style={styles.container}>

                {/* Header */}
                <View style={styles.header}>
                    <TouchableOpacity  >
                        <Pressable
                            onPress={() => {
                                // navigation.goBack();
                                navigation.navigate("Profile")
                            }}>
                            <Image style={[styles.iconBack, {}]} source={require('../asset_ASM/IconArrowBack.png')}></Image>
                        </Pressable>
                    </TouchableOpacity >
                    <View style={styles.text}>
                        <Text style={styles.textHeader}>Fill your Profile</Text>
                    </View>
                </View>
                {/* Avatar */}
                <View style={styles.avatar}>
                    <View style={styles.backgroundContainer}>
                        {
                            inforUser.avatar == ""
                                ?
                                <Image source={require('../asset_ASM/Avatar.png')} resizeMode='cover' style={styles.backdrop} />
                                :
                                <Image source={{ uri: inforUser.avatar }} resizeMode='cover' style={styles.backdrop} />
                        }
                    </View>
                    <View style={styles.overlay}>
                        <TouchableOpacity
                            onPress={dialogImageChoose}>
                            <Image style={styles.logo} source={require('../asset_ASM/IconCamera.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
                {/* Input */}
                <View style={[styles.boxInput, {}]}>
                    <Text style={styles.textNormal} >Full Name</Text>
                    <TextInput style={styles.textInput}
                        multiline={false}
                        value={inforUser.name}
                        onChangeText={(text) => setinforUser({ ...inforUser, name: text })}
                    //change value depend on smt imput it will change imedialy
                    />
                </View>
                <View style={[styles.boxInput, {}]}>
                    <Text style={styles.textNormal}>Address</Text>
                    <TextInput style={styles.textInput} value={inforUser.address} multiline={false}
                        onChangeText={(text) => setinforUser({ ...inforUser, address: text })}
                    />
                </View>



                <View style={[styles.boxInput, {}]}>
                    <View style={styles.textNormal}>
                        <Text style={styles.textNormal} >Email Address</Text>
                        <Text style={[styles.textNormal, { color: 'red' }]}>*</Text>
                    </View>
                    <TextInput style={styles.textInput} value={inforUser.email} multiline={false}
                        onChangeText={(text) => setinforUser({ ...inforUser, email: text })}
                    />
                </View>

                <View style={[styles.boxInput, {}]}>
                    <View style={styles.textNormal}>
                        <Text style={styles.textNormal}>Phone Number</Text>
                        <Text style={[styles.textNormal, { color: 'red' }]}>*</Text>
                    </View>
                    <TextInput style={styles.textInput}// value={inforUser.dob}
                        onChangeText={(text) => setinforUser({ ...inforUser, phone: text })}

                    />
                </View>

                <View style={[styles.boxInput, {}]}>
                    <View style={styles.textNormal}>
                        <Text style={styles.textNormal}>Password</Text>
                        <Text style={[styles.textNormal, { color: 'red' }]}>*</Text>
                    </View>
                    <TextInput style={styles.textInput} value={inforUser.dob} multiline={false}
                    // onChangeText={(text) => setinforUser({ ...inforUser, phone: text })}

                    />
                </View>
                {/* btn next */}
                <TouchableOpacity>
                    <Pressable style={styles.btnNext} onPress={updateProfile}>
                        <Text style={styles.textBtnNext} > Next</Text>
                    </Pressable>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default EditProfile

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'white'
    },
    container: {
        marginTop: 34,
        marginHorizontal: 25,

    },
    backgroundContainer: {
        position: 'absolute',

    },

    overlay: {
        opacity: 0.9,//lm mờ backgorund

    },
    logo: {
        backgroundColor: 'rgba(0,0,0,0)',
        marginTop: 90,
        marginLeft: 100

    },
    backdrop: {
        width: 140,
        height: 140,
        flexDirection: 'column',
        borderRadius: 100,
        borderWidth: 2,
        borderColor: 'black'
    },
    textHeader: {
        color: '#000000',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 100,

    },
    iconBack: {
        marginLeft: 4,
    },
    header: {
        flexDirection: 'row',
        // borderWidth: 2,
        // borderColor: 'black'
    },
    avatar: {
        justifyContent: "center",
        marginTop: 16,
        alignItems: 'center',
        flexDirection: 'row',



    },
    boxInput: {
        marginTop: 16,
    },
    textNormal: {
        flexDirection: "row",
        color: '#4E4B66',
        fontSize: 14,

    },
    textInput: {
        marginTop: 4,
        width: windowWIdth - 2 * 24,
        height: 48,
        borderColor: '#4E4B66',
        borderWidth: 2,
        borderRadius: 6,
        padding: 10,
        alignItems: 'center',
        alignSelf: 'stretch',
        flexDirection: 'row',
    },
    btnNext: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1877f2',
        borderRadius: 6,
        width: windowWIdth - 2 * 24,
        height: 50,
        marginTop: 15,

    },
    textBtnNext: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    camera: {

        marginTop: 100,

    }
})