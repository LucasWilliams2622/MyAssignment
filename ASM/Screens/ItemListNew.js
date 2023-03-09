import { StyleSheet, Text, Image, View, SafeAreaView, TouchableOpacity, Dimensions, ScrollView, } from 'react-native'
import React from 'react'
import NewsDetail from './NewsDetail';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ItemListNew = (props) => {
    const { data, navigation } = props;
    const ClickItem = () => {
        console.log('Click item')
        navigation.navigate("NewsDetail", { id: data._id });
        // console.log("image :"+ data.image)
    }
    return (
        <TouchableOpacity onPress={ClickItem}>
            <SafeAreaView style={styles.container}>
                <Image style={styles.image} source={{ uri: data.image }} />
                {/* <Image style={styles.image} source={require('../asset_ASM/BtnFb.png')} /> */}

                <View style={styles.fullContent}>
                    <Text style={styles.tilte}>{data.title}</Text>
                    <Text style={styles.content} numberOfLines={2}>{data.content}</Text>


                    <View style={styles.box}>
                        {/* <Image style={styles.iconClock} source={require('../asset_ASM/IconClock.png')}></Image> */}
                        <Text numberOfLines={1}>{data.createdAt}</Text>
                    </View>
                </View>
            </SafeAreaView>
        </TouchableOpacity>

    )
}

export default ItemListNew

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 20
    },
    image: {
        width: 96,
        height: 96,
        borderRadius: 6,
    },
    tilte: {
        color: 'black',
        fontSize: 13,
        marginBottom: 4,
        width: windowWidth - 180

    },
    text: {
        fontSize: 13,
        color: '#4E4B66'
    },
    fullContent: {
        margin: 4,
        // borderWidth:2,
        // borderColor:'black'

    },
    content: {
        width: windowWidth - 170,
        // borderWidth:2,
        // borderColor:'black'

    },
    iconClock: {
        width: 11,
        height: 11,
    },
    box: {
        marginTop: 4,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
})