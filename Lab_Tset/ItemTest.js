import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, Alert } from 'react-native'
import React from 'react'

const windowHeight = Dimensions.get('window').height;
const windowWIdth = Dimensions.get('window').width;
const ItemTest = (props) => {
    const { data, navigation } = props;


    // return (
    //     <View style={styles.box}>
    //         <Image style={styles.image} source={require('./AssetTest/PlusGreen.png')} />

    //         <Text style={styles.name}>a</Text>
    //         <View style={styles.box2}>
    //             <View >
    //                 <Text style={styles.content} numberOfLines={1}>a</Text>
    //                 <Text style={styles.price} numberOfLines={2}>a</Text>
    //             </View>
    //             <Image source={require('./AssetTest/PlusGreen.png')} />

    //         </View>

    //     </View>
    // )
    const clickItem = () => {
       console.log("aaa")
    }
    return (
        <TouchableOpacity onPress={() => {clickItem }}  underlayColor='aqua' style={styles.box}>
            <Image style={styles.image} source={{ uri: data.image }} />
            <TouchableOpacity onPress={clickItem}>
                <Text style={styles.name} numberOfLines={1}>{data.title}</Text>
            </TouchableOpacity>

            <View style={styles.box2}>
                <View >
                    <Text style={styles.content} numberOfLines={1}>{data._id}</Text>
                    <Text style={styles.price} numberOfLines={2}>{data._id}</Text>
                </View>
                <TouchableOpacity onPress={clickItem} >
                    <Image source={require('./AssetTest/PlusGreen.png')} />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

export default ItemTest

const styles = StyleSheet.create({
    box: {
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 20,
        margin: 10,
        padding: 10,
        width: windowWIdth / 2 - 20,
        backgroundColor: '#FFB84C',


        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,

    },
    name: {
        color: '#6D3805',
        fontSize: 15,
        lineHeight: 18,
        fontWeight: 'bold',
        marginTop: 12,
    },
    content: {
        fontSize: 12,
        color: '#6D3805',
        lineHeight: 14.4,
    },
    price: {
        fontSize: 20,
        lineHeight: 24,
        fontWeight: 'bold',
        color: '#FF5E00'
    },
    box2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 3,
        marginBottom: 16

    },
    image: {
        width: windowWIdth / 2 - 45,
        height: 96,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: 'black',

    }
})