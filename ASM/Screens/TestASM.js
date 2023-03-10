import { Animated, StyleSheet, Text, View, Image, Pressable, TouchableOpacity, FlatList, TouchableHighlight } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ItemListNew from './ItemListNew';
import { SwipeListView } from 'react-native-swipe-list-view';

import { NavigationContainer } from '@react-navigation/native';
import Profile from './EditProfile';
import Register from './Register';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const rowSwipeAnimatedValues = {};
Array(20)
    .fill('')
    .forEach((_, i) => {
        rowSwipeAnimatedValues[`${i}`] = new Animated.Value(0);
    });



const TestASM = () => {
    const [listViewData, setlistViewData] = useState(Array(20)
        .fill("")
        .map((_, i) => ({ key: `${i}`, text: `item #${i}` })))

    const closeRow = (rowMap, rowKey) => {
        if (rowMap[rowKey]) {
            rowMap[rowKey].closeRow();
        }
    };

    const deleteRow = (rowMap, rowKey) => {

        closeRow(rowMap, rowKey);
        const newData = [...listViewData];
        const prevIndex = listViewData.findIndex(item => item.key === rowKey);
        console.log("item  "+rowKey)

        newData.splice(prevIndex, 1);
        setlistViewData(newData);
    };

    const onRowDidOpen = rowKey => {
        console.log('This row opened', rowKey);
    };

    const onSwipeValueChange = swipeData => {
        const { key, value } = swipeData;
        rowSwipeAnimatedValues[key].setValue(Math.abs(value));
    };

    const renderItem = data => (
        <TouchableHighlight
            onPress={() => console.log('You touched me')}
            style={styles.rowFront}
            underlayColor={'#FCFFE7'}
        >
            <View>
                <Text>I am {data.item.text} in a SwipeListView</Text>
            </View>
            {/* <View style={{borderWidth:2,borderColor:'black'}}>
            <FlatList 
                data={data}
                renderItem={({ item }) => <ItemListNew data={item} />}
                keyExtractor={item => item._id}
            />
            </View> */}
        </TouchableHighlight>
    );

    const renderHiddenItem = (data, rowMap) => (
        <View style={styles.rowBack}>
            <Text>Save</Text>
            <TouchableOpacity
                style={[styles.backRightBtn, styles.backRightBtnLeft]}
                onPress={() => closeRow(rowMap, data.item.key)}
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
                                    scale: rowSwipeAnimatedValues[
                                        data.item.key
                                    ].interpolate({
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

        <SafeAreaView style={styles.container1}>
            <SwipeListView
                data={listViewData}
                renderItem={renderItem}
                renderHiddenItem={renderHiddenItem}
                leftOpenValue={75}
                rightOpenValue={-150}
                previewRowKey={'0'}
                previewOpenValue={-40}
                previewOpenDelay={3000}
                onRowDidOpen={onRowDidOpen}
                onSwipeValueChange={onSwipeValueChange}
            />
        </SafeAreaView>

    )
}

export default TestASM
const styles = StyleSheet.create({
    container1: {
        backgroundColor: 'white',
        flex: 1,
    },
    backTextWhite: {
        color: '#FFF',
    },
    rowFront: {
        alignItems: 'center',
        backgroundColor: '#CCC',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        justifyContent: 'center',
        height: 250,
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


const data =
    [
        {
            "_id": "1",
            "title": "Tr?????ng c??ng l???p ?????u ti??n d???y v?? thi ch????ng tr??nh d??? b??? ?????i h???c M???",
            "content": "Ph??? th??ng N??ng khi???u l?? tr?????ng c??ng l???p ?????u ti??n ??? Vi???t Nam d???y v?? thi 6 m??n c???a ch????ng tr??nh Advanced Placement (AP), th?????ng g???i l?? ch????ng tr??nh d??? b??? ?????i h???c M???.",
            "image": "https://i1-vnexpress.vnecdn.net/2023/02/02/328463889-891024988600042-6177-9136-2603-1675295134.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=BCVEDMn0Smx1XLiCRi0rrA",
            "createdAt": "2023-01-12T06:26:17.539Z",
            "createdBy": {
                "_id": "63ac39aeedf7c80016c57a67",
                "name": "",
                "avatar": ""
            }
        },
        {
            "_id": "2",
            "title": "L???ch thi ????nh gi?? n??ng l???c, t?? duy n??m 2023",
            "content": "C??c k??? thi ????nh gi?? n??ng l???c, t?? duy di???n ra t??? th??ng 3 ?????n 7, th?? sinh c?? th??? tham d??? nhi???u ?????t v?? ????ng k?? t??? ?????u th??ng 2.",
            "image": "https://i1-vnexpress.vnecdn.net/2023/01/31/117f5804708184dfdd90-162556098-1999-1999-1675148782.jpg?w=300&h=180&q=100&dpr=1&fit=crop&s=Ie6cEqbs1YL8PDAG85QrsA",
            "createdAt": "2023-01-12T06:26:17.539Z",
            "createdBy": {
                "_id": "63ac39aeedf7c80016c57a67",
                "name": "",
                "avatar": ""
            }
        },
        {
            "_id": "3",
            "title": "?????i ph?? v???i b??i t???p T???t",
            "content": "Ng??y ngh??? T???t cu???i c??ng, h??ng ch???c trang b??i t???p To??n, Ti???ng Vi???t v?? Ti???ng Anh c???a Anh Th?? ???????c gi???i quy???t, nh??ng do m??? v?? d?? l??m gi??p.",
            "image": "https://i1-vnexpress.vnecdn.net/2023/01/30/4313-1662984910-1675082690-4516-1675083076.jpg?w=300&h=180&q=100&dpr=1&fit=crop&s=BnjiAv8Bq8iaZcGQ2jJC3Q",
            "createdAt": "2023-01-12T06:26:17.539Z",
            "createdBy": {
                "_id": "63ac39aeedf7c80016c57a67",
                "name": "",
                "avatar": ""
            }
        },
        {
            "_id": "4",
            "title": "???????ng tr??? th??nh gi??o vi??n ??? M??? c???a m???t ph??? n??? Vi???t",
            "content": "Ch??? ??inh Thu H???ng ph???i theo h???c ch????ng tr??nh ????o t???o gi??o vi??n v?? ho??n th??nh nhi???u th??? t???c ????? ???????c c???p ph??p h??nh ngh??? d???y h???c ??? M???.",
            "image": "https://i1-vnexpress.vnecdn.net/2023/01/31/giao-vien3-7193-1674696213-167-6044-9285-1675150549.jpg?w=300&h=180&q=100&dpr=1&fit=crop&s=GJm7EfgbBZ4Pvlut0Bl1rw",
            "createdAt": "2023-01-12T06:26:17.539Z",
            "createdBy": {
                "_id": "63ac39aeedf7c80016c57a67",
                "name": "",
                "avatar": ""
            }
        },
        {
            "_id": "5",
            "title": "C?? gi??o ????o hai con gi???a m??a r??t, v?????t 100 km ?????n tr?????ng",
            "content": "C?? Nguy???n Th??? H?? g??y x??c ?????ng khi ????o hai con, v?????t 100 km trong m??a l???nh ????? tr??? l???i ??i???m tr?????ng ??? x?? Tr?? D??n, huy???n Nam Tr?? My, sau T???t.",
            "image": "https://i1-vnexpress.vnecdn.net/2023/01/31/untitled-1675115482-6811-1675116325.jpg?w=300&h=180&q=100&dpr=1&fit=crop&s=sDv36arZmV-B6KEYjStHbA",
            "createdAt": "2023-01-12T06:26:17.539Z",
            "createdBy": {
                "_id": "63ac39aeedf7c80016c57a67",
                "name": "",
                "avatar": ""
            }
        },
        {
            "_id": "6",
            "title": "Nam sinh tr??? l???i h??n 40 tri???u ?????ng nh???t ???????c",
            "content": "L?? H???i Th??ng, 17 tu???i, ???????c tuy??n d????ng v?? n???p l???i t??i nylon ?????ng h??n 40 tri???u ?????ng nh???t ???????c h??m 29 T???t.",
            "image": "https://i1-vnexpress.vnecdn.net/2023/01/30/tuyenduongnamsinh-1675076463-2581-1675077291.jpg?w=300&h=180&q=100&dpr=1&fit=crop&s=vlqGCurXgocetWe4SYl13g",
            "createdAt": "2023-01-12T06:26:17.539Z",
            "createdBy": {
                "_id": "63ac39aeedf7c80016c57a67",
                "name": "",
                "avatar": ""
            }
        },
        {
            "_id": "7",
            "title": "Cho con ??i ng???m tr??ng, sao t??? b??",
            "content": "T??? khi 4 tu???i, con trai ch??? H???ng Anh ???? ???????c ????a ??i ng???m nh???t th???c, m??a sao b??ng v?? tham gia c??u l???c b??? thi??n v??n tr??? em.",
            "image": "https://i1-vnexpress.vnecdn.net/2023/01/30/danny-kim-png-1929-1673698701-1199-6656-1675037287.png?w=300&h=180&q=100&dpr=1&fit=crop&s=uYWNW2YjIsttuhLT4s8fqQ",
            "createdAt": "2023-01-12T06:26:17.539Z",
            "createdBy": {
                "_id": "63ac39aeedf7c80016c57a67",
                "name": "",
                "avatar": ""
            }
        }
    ];