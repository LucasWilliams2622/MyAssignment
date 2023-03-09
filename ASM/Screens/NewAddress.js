import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, TextInput, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const windowHeight = Dimensions.get('window').height;
const windowWIdth = Dimensions.get('window').width;
const NewAddress = () => {
    return (
        <SafeAreaView style={styles.main}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity >
                        <Image style={styles.imgIconSocial} source={require('../asset_ASM/IconArrowBack.png')}></Image>
                    </TouchableOpacity>
                    <Text></Text>
                </View>
                <View style={styles.title}>
                    <Text style={styles.title}>New Address</Text>
                </View>


                {/* Input */}

                <View>
                    <TextInput
                        style={[styles.input, { marginTop: 64 }]}
                        placeholder='Address Title'
                        placeholderTextColor="#AC8E71" />
                    <TextInput
                        style={[styles.input, {}]}
                        placeholder='Name Surname'
                        placeholderTextColor="#AC8E71" />
                    <TextInput
                        style={[styles.input, {}]}
                        placeholder='City'
                        placeholderTextColor="#AC8E71" />
                    <Image style={{ position: 'absolute', marginLeft: 310, top: 245 }} resizeMode='contain'
                        source={require('../asset_ASM/MultipleFlag.png')}></Image>

                    <TextInput
                        style={[styles.input, {}]}
                        placeholder='Address'
                        placeholderTextColor="#AC8E71" />
                </View>

                {/* BUTTON  */}
                <TouchableOpacity style={styles.btnAdd}>
                    <Pressable>
                        <Text style={[styles.text, { color: 'white', fontWeight: 'bold', fontSize: 20, }]}>
                            Add
                        </Text>
                    </Pressable>
                </TouchableOpacity>
            </View>
        </SafeAreaView>

    )
}

export default NewAddress

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'white'
    },
    container: {

        bacgroundColor: "#fff",
        marginHorizontal: 16,

    },
    header: {
        justifyContent: 'space-between',
        marginTop: 10,

    },
    title: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        color: "#FF5E00",
        lineHeight: 29,

    },
    input: {
        marginTop: 13,
        backgroundColor: '#F3F3F3',
        width: windowWIdth - 40,
        height: 48,
        borderRadius: 5,
        marginTop: 30,
        paddingLeft: 27,
        color: "black"
    },
    btnAdd: {
        marginTop: 180,
        backgroundColor: '#FF5E00',
        width: windowWIdth - 40,
        height: 50,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',

    },
})