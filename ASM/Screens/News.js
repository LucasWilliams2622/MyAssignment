import { StyleSheet, Text, TouchableOpacity, TouchableHighlight, Image, View, SafeAreaView, Alert, ScrollView, FlatList, Animated } from 'react-native'
import React, { useState, useEffect } from 'react'
import ItemListNew from './ItemListNew'
import { SwipeListView } from 'react-native-swipe-list-view';
import AxiosIntance from '../Ultil/AxiosIntance';



const Recent = (props) => {
    const { navigation } = props;

    const [dataNe, setdataNe] = useState([]);
    const rowSwipeAnimatedValues = {};

    useEffect(() => {
        const getNews = async () => {
            const respond = await AxiosIntance().get("/articles");

            if (respond.error == false) {//lấy thành công
                setdataNe(respond.data.map((item, i) => ({ key: item._id, item: item })))

                respond.data.forEach((item, i) => {
                    rowSwipeAnimatedValues[item._id] = new Animated.Value(0);
                });
                // setisLoading(false);
            } else {
                ToastAndroid.show("Lấy data thất bại")
            }
        }

        getNews();
        return () => {

        }
    }, [])

    const closeRow = (rowMap, rowKey) => {
        if (rowMap[rowKey]) {
            rowMap[rowKey].closeRow();
        }
    };

    const DeleteNews = async (idDelete) => {
        console.log("articles/" + idDelete + "/delete")
        console.log(data.statusCode)
        const respond = await AxiosIntance()
            .delete("articles/" + idDelete + "/delete");

        if (respond.error == false) {//lấy thành công
            setdataNe(respond.data.map((item, i) => ({ key: item._id, item: item })))

            respond.data.forEach((item, i) => {
                rowSwipeAnimatedValues[item._id] = new Animated.Value(0);
            });

        } else {
            ToastAndroid.show("xóa thất bại", ToastAndroid.SHORT)
        }
    }


    const deleteRow = (rowMap, rowKey) => {
        closeRow(rowMap, rowKey);
        const newData = [...dataNe];
        const prevIndex = dataNe.findIndex(item => item.key == rowKey);

        newData.splice(prevIndex, 1);
        DeleteNews(rowKey)
        setdataNe(newData);
    };

    const onRowDidOpen = rowKey => {
        console.log('This row opened', rowKey);
    };

    const onSwipeValueChange = swipeData => {
        const { key, value } = swipeData;
        // console.log(key)
        rowSwipeAnimatedValues[key].setValue(Math.abs(value));
    };

    const getAnimatedRowKeys = (key) => {
        // console.log(key)
        rowSwipeAnimatedValues[key] = rowSwipeAnimatedValues[key] ? rowSwipeAnimatedValues[key] : new Animated.Value(0);
        return rowSwipeAnimatedValues[key];
    }

    const renderItem = data => (
        <TouchableHighlight
            onPress={() => console.log('You touched me')}
            style={styles.rowFront}
            underlayColor={'#FCFFE7'}

        >
            <ItemListNew data={data.item.item} navigation={navigation} />
       
        </TouchableHighlight>
    );

    const renderHiddenItem = (data, rowMap) => (
        <View style={styles.rowBack}>
            <Text>Left</Text>
            <TouchableOpacity
                style={[styles.backRightBtn, styles.backRightBtnLeft]}
                onPress={() => closeRow(rowMap, data.item)}
            >
                <Text style={styles.backTextWhite}>Update</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.backRightBtn, styles.backRightBtnRight]}
                onPress={() => deleteRow(rowMap, data.item.key)}
            >
                <Animated.View
                    style={[
                        styles.trash,
                        {
                            transform: [
                                {
                                    scale: getAnimatedRowKeys(data.item.key).interpolate({
                                        inputRange: [45, 90],
                                        outputRange: [0, 1],
                                        extrapolate: 'clamp',
                                    }),
                                },
                            ],
                        },
                    ]}
                >
                    <Image
                        source={require('../../examples/trash.png')}
                        style={styles.trash}
                    />
                </Animated.View>
            </TouchableOpacity>
        </View>
    );

    return (
        // <SafeAreaView style={styles.main} >
        //   <View style={styles.container}>
        //     <ScrollView showsVerticalScrollIndicator={false}>
        //       <View style={styles.mainContent}>
        //         <FlatList
        //           data={data}
        //           renderItem={({ item }) => <ItemListNew data={item} />}
        //           keyExtractor={item => item._id}
        //         />
        //       </View>
        //     </ScrollView>


        //   </View>
        // </SafeAreaView>


        <SafeAreaView style={styles.main}>

            <View style={styles.container1}>
                {/* <Text>{dataNe.length}</Text> */}
                <View>



                    {/* List news */}
                </View>
                {dataNe.length > 0 && <SwipeListView

                    data={dataNe}
                    renderItem={renderItem}
                    renderHiddenItem={renderHiddenItem}
                    leftOpenValue={75}
                    rightOpenValue={-150}
                    previewRowKey={'0'}
                    previewOpenValue={-40}
                    previewOpenDelay={3000}
                    onRowDidOpen={onRowDidOpen}
                    onSwipeValueChange={onSwipeValueChange}
                />}
            </View>
        </SafeAreaView>

    )
}

export default Recent

const styles = StyleSheet.create({
    main: {
        flex: 1,
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
    },
    container1: {
        backgroundColor: 'white',
        flex: 1,
        marginHorizontal: 14,
        marginTop: 14,

    },
    backTextWhite: {
        color: '#FFF',
    },
    rowFront: {
        alignItems: 'center',
        backgroundColor: 'white',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        justifyContent: 'center',
        height: 150,
    },
    rowBack: {
        alignItems: 'center',
        backgroundColor: '#DDD',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
    },
    backRightBtn: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 75,
    },
    backRightBtnLeft: {
        backgroundColor: '#BFDCE5',
        right: 75,
    },
    backRightBtnRight: {
        backgroundColor: '#EB455F',
        right: 0,
    },
    trash: {
        height: 25,
        width: 25,
    },
});

