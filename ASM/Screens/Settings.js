import { StyleSheet, Text, View, TouchableOpacity, Image, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Settings = (props) => {
    const { navigation, route } = props;

    const LogOut = () => {
        navigation.navigate("Login")
    }
    return (
        <SafeAreaView style={styles.main} >
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity  >
                        <Pressable
                            onPress={() => {
                                // navigation.goBack();
                                navigation.pop(1);
                            }}>
                            <Image style={[styles.iconBack, {}]} source={require('../asset_ASM/IconArrowBack.png')}></Image>
                        </Pressable>
                    </TouchableOpacity >
                    <View style={styles.text}>
                        <Text>Settings</Text>
                    </View>
                    <Text> </Text>

                </View>

                <View style={styles.listSettings}>

                    <TouchableOpacity  >
                        <View style={styles.itemSettings}>
                            <View style={styles.imageAndTitle}>
                                <Image source={require('../asset_ASM/IconNotification.png')}></Image>
                                <Text style={styles.text}>Notification</Text>
                            </View>


                            <Pressable>
                                <Image style={[styles.iconBack, {}]} source={require('../asset_ASM/IconArrow.png')}></Image>
                            </Pressable>
                        </View>
                    </TouchableOpacity >
                    <TouchableOpacity  >
                        <View style={styles.itemSettings}>
                            <View style={styles.imageAndTitle}>
                                <Image source={require('../asset_ASM/IconSecurity.png')}></Image>
                                <Text style={styles.text}>Security</Text>
                            </View>


                            <Pressable>
                                <Image style={[styles.iconBack, {}]} source={require('../asset_ASM/IconArrow.png')}></Image>
                            </Pressable>
                        </View>
                    </TouchableOpacity >
                    <TouchableOpacity  >
                        <View style={styles.itemSettings}>
                            <View style={styles.imageAndTitle}>
                                <Image source={require('../asset_ASM/IconHelp.png')}></Image>
                                <Text style={styles.text}>Help</Text>
                            </View>


                            <Pressable>
                                <Image style={[styles.iconBack, {}]} source={require('../asset_ASM/IconArrow.png')}></Image>
                            </Pressable>
                        </View>
                    </TouchableOpacity >
                    <TouchableOpacity  >
                        <View style={styles.itemSettings}>
                            <View style={styles.imageAndTitle}>
                                <Image source={require('../asset_ASM/IconDarkMode.png')}></Image>
                                <Text style={styles.text}>Dark Mode</Text>
                            </View>


                            <Pressable>
                                <Image style={[styles.iconBack, {}]} source={require('../asset_ASM/radioButton.png')}></Image>
                            </Pressable>
                        </View>
                    </TouchableOpacity >
                    

                    <TouchableOpacity onPress={LogOut} >
                        <View style={[styles.itemSettings, { justifyContent: 'flex-start' }]}>
                            <Image source={require('../asset_ASM/IconLogOut.png')}></Image>
                            <Text style={styles.text}>Logout</Text>
                        </View>
                    </TouchableOpacity >
                </View>

            </View>
        </SafeAreaView>
    )
}

export default Settings

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'white'
    },
    container: {

        marginHorizontal: 24,
        // borderWidth: 2,
        // borderColor: 'black',

    },
    text: {
        fontSize: 16,
        color: '#000000',
        lineHeight: 24,
        letterSpacing: 0.12,
        flexGrow: 0,
        marginLeft:6,


    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,

    },

    listSettings: {
        marginTop: 23,
        marginHorizontal: 4,

    },
    itemSettings: {
        flexDirection: 'row',
        marginBottom: 48,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    imageAndTitle: {
        flexDirection: 'row'
    }
})