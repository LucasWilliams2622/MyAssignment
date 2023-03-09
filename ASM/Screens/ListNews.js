import { StyleSheet, Text, Image, View, SafeAreaView, FlatList, ScrollView, Touchable, TouchableOpacity, Dimensions, ToastAndroid, ActivityIndicator, } from 'react-native'
import React, { useEffect, useState } from 'react'
import ItemListNew from './ItemListNew'
import axios from 'axios';
import AxiosIntance from '../Ultil/AxiosIntance';
import Recent from './Recent';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const ListNews = (props) => {
    const { navigation } = props;
    const [dataNe, setdataNe] = useState([]);
    const [isLoading, setisLoading] = useState(true)
    const [idDelete, setidDelete] = useState('')

    useEffect(() => {
        const getNews = async () => {
            const respond = await AxiosIntance().get("/articles");
            console.log(respond.data._id);
            if (respond.error == false) {//lấy thành công
                setdataNe(respond.data)
                setisLoading(false);
            } else {
                ToastAndroid.show("Lấy data thất bại")
            }
        }
        getNews();
        return () => {

        }
    }, [])

    // useEffect(() => {
    //     const getNews = async () => {
    //         console.log('aaaaaas');//async khong đòng bo
    //         const res = await axios.get('https://63e46788c04baebbcda5418e.mockapi.io/api/vn/myNews');
    //         if (res != "") {
    //             setdataNe(res.data);
    //         }
    //     }
    //     getNews();
    //     return () => {
    //         //return run when user dont in this screen

    //     }
    // }, []);

    const DeleteNews = async () => {
        const respond = await AxiosInstance()
            .delete("articles/" + idDelete + "/delete");
        if (respond.error == false) {//lấy thành công
            setdataNe(respond.data._id)
            setisLoading(false);

        } else {
            ToastAndroid.show("xóa thất bại", ToastAndroid.SHORT)
        }
    }

    const UpdateNews = async () => {
        const respond = await AxiosInstance()
            .delete("articles/" + idDelete + "/update");
        if (respond.error == false) {//lấy thành công
            setdataNe(respond.data)
            setisLoading(false);

        } else {
            ToastAndroid.show("update thất bại", ToastAndroid.SHORT)
        }
    }
    return (<Recent />)
    return (

        <SafeAreaView style={styles.main} >
            <View style={styles.container}>
                {/* Header */}
                <View>

                    <View style={styles.header}>
                        <TouchableOpacity>
                            <Image style={styles.image} source={require('../asset_ASM/Logo.png')}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={styles.image} source={require('../asset_ASM/AlertBell.png')}></Image>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.header, { marginTop: 32 }]}>
                        <TouchableOpacity>
                            <Text style={[styles.text, { color: "black", fontWeight: 'bold' }]}>Latest</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.text}>See all</Text>
                        </TouchableOpacity>

                    </View>
                    {/* Type of news */}
                    <View style={[styles.header, { marginTop: 16, marginBottom: 34 }]}>
                        <TouchableOpacity>
                            <Text style={[styles.text, { color: 'black', borderBottomColor: '#1877F2', borderBottomWidth: 1 }]}>All</Text>
                        </TouchableOpacity>
                        <Text style={styles.text}>Sports</Text>
                        <Text style={styles.text}>Politics</Text>
                        <Text style={styles.text}>Bussiness</Text>
                        <Text style={styles.text}>Health</Text>
                        <Text style={styles.text}>Travel</Text>

                    </View>
                </View>

                {/* Content */}
                {/* <ScrollView style={styles.mainContent}> */}
                <View style={styles.mainContent}>
                    {
                        isLoading == true ?
                            (
                                <View style={styles.loading}>
                                    <ActivityIndicator size='large' color='#fffff' />
                                    <Text>Loading....</Text>
                                </View>
                            )
                            :
                            (
                                <FlatList
                                    showsVerticalScrollIndicator={false}
                                    data={dataNe}
                                    renderItem={({ item }) => <ItemListNew data={item} navigation={navigation} />}
                                    keyExtractor={item => item._id}
                                />
                            )
                    }
                </View>


            </View>

        </SafeAreaView>

    )
}

export default ListNews

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'white'
    },
    container: {
        marginHorizontal: 32,
        marginTop: 34,
        backgroundColor: 'white'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    image: {

    },
    text: {
        fontSize: 16,
        color: '#4E4B66',
    },

    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }

})