import { StyleSheet, Text, View, Image, Pressable, TouchableOpacity, FlatList, ScrollView, TouchableHighlight, Animated } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ItemListNew from './ItemListNew';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from './Home';
import Recent from './Recent';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import News from './News'
import { SwipeListView } from 'react-native-swipe-list-view';
const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();
const TopTab = createMaterialTopTabNavigator();

// const Tab = createBottomTabNavigator();
// const TabTop = createMaterialTopTabNavigator();


const Profile = (props) => {






    // const [listViewData, setlistViewData] = useState(Array(20)
    //     .fill("")
    //     .map((_, i) => ({ key: `${i}`, text: `item #${i}` })))

    // const closeRow = (rowMap, rowKey) => {
    //     if (rowMap[rowKey]) {
    //         rowMap[rowKey].closeRow();
    //     }
    // };

    // const deleteRow = (rowMap, rowKey) => {

    //     closeRow(rowMap, rowKey);
    //     const newData = [...listViewData];
    //     const prevIndex = listViewData.findIndex(item => item.key === rowKey);
    //     console.log("item  " + rowKey)

    //     newData.splice(prevIndex, 1);
    //     setlistViewData(newData);
    // };

    // const onRowDidOpen = rowKey => {
    //     console.log('This row opened', rowKey);
    // };

    // const onSwipeValueChange = swipeData => {
    //     const { key, value } = swipeData;
    //     rowSwipeAnimatedValues[key].setValue(Math.abs(value));
    // };

    // const renderItem = data => (
    //     <TouchableHighlight
    //         onPress={() => console.log('You touched me')}
    //         style={styles.rowFront}
    //         underlayColor={'#FCFFE7'}
    //     >
    //         <View>
    //             <Text>I am {data.item.text} in a SwipeListView</Text>
    //         </View>
    //         {/* <View style={{borderWidth:2,borderColor:'black'}}>
    //     <FlatList 
    //         data={data}
    //         renderItem={({ item }) => <ItemListNew data={item} />}
    //         keyExtractor={item => item._id}
    //     />
    //     </View> */}
    //     </TouchableHighlight>
    // );

    // const renderHiddenItem = (data, rowMap) => (
    //     <View style={styles.rowBack}>
    //         <Text>Save</Text>
    //         <TouchableOpacity
    //             style={[styles.backRightBtn, styles.backRightBtnLeft]}
    //             onPress={() => closeRow(rowMap, data.item.key)}
    //         >
    //             <Text style={styles.backTextWhite}>Update</Text>
    //         </TouchableOpacity>
    //         <TouchableOpacity
    //             style={[styles.backRightBtn, styles.backRightBtnRight]}
    //             onPress={() => deleteRow(rowMap, data.item.key)}
    //         >
    //             <Animated.View
    //                 style={[
    //                     styles.trash,
    //                     {
    //                         transform: [
    //                             {
    //                                 scale: rowSwipeAnimatedValues[
    //                                     data.item.key
    //                                 ].interpolate({
    //                                     inputRange: [45, 90],
    //                                     outputRange: [0, 1],
    //                                     extrapolate: 'clamp',
    //                                 }),
    //                             },
    //                         ],
    //                     },
    //                 ]}
    //             >
    //                 <Image
    //                     source={require('../../examples/trash.png')}
    //                     style={styles.trash}
    //                 />
    //             </Animated.View>
    //         </TouchableOpacity>
    //     </View>
    // );


    const { navigation } = props;
    // const { params } = route;//nếu k trong dấu {} thì nó sẽ hiểu là thành phaanf k ngoặc là tên của component

    const GoEditProfile = () => {
        navigation.navigate('EditProfile');
    }
    const GoToSetting = () => {
        navigation.navigate('Settings');
    }

    const GoMain = () => {
        navigation.navigate('ListNews');
    }



    return (

        <SafeAreaView style={styles.main}>
            <SafeAreaView >
                <View style={styles.container}>
                    {/* Header */}
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
                        <View style={styles.titleHeader}>
                            <Text>Profile</Text>
                        </View>

                        <TouchableOpacity  >
                            <Pressable
                                onPress={GoToSetting}>
                                <Image style={{ marginRight: 3 }} source={require('../asset_ASM/IconSetting.png')}></Image>

                            </Pressable>
                        </TouchableOpacity >
                    </View>

                    {/* Infor User */}
                    <View style={styles.infoUser}>
                        <View>
                            <Image style={styles.image} source={require('../asset_ASM/Avatar.png')}></Image>
                        </View>

                        <View style={styles.itemInfoUser}>
                            <Text style={[styles.text, { fontWeight: 'bold' }]}>2156</Text>
                            <Text style={[styles.text, { color: '#4E4B66' }]}>Followers</Text>
                        </View>


                        <View style={styles.itemInfoUser}>
                            <Text style={[styles.text, { fontWeight: 'bold' }]}>567</Text>
                            <Text style={[styles.text, { color: '#4E4B66' }]}>Following</Text>
                        </View>
                        <View style={styles.itemInfoUser}>
                            <Text style={[styles.text, { fontWeight: 'bold' }]}>23</Text>
                            <Text style={[styles.text, { color: '#4E4B66' }]}>News</Text>
                        </View>

                    </View>

                    {/* Name and Introduction */}
                    <View style={styles.introduction}>
                        <Text style={[styles.text, { fontWeight: 'bold' }]}>Lucas Williams </Text>
                        <Text style={[styles.text, { color: '#4E4B66' }]}>Hola chicos! Soy Lucas y Soy Vietnamita {'\n'}
                            https://www.facebook.com/profile.php?id=100012341778287
                        </Text>
                    </View>

                    {/* Button */}
                    <View style={styles.buttonClick}>
                        <Pressable style={styles.btn}
                            onPress={GoEditProfile}
                        >
                            <Text style={[styles.text, { color: 'white', fontWeight: 'bold' }]}>
                                Edit profile
                            </Text>
                        </Pressable>

                        <Pressable style={styles.btn}>
                            <Text style={[styles.text, { color: 'white', fontWeight: 'bold' }]}>
                                Website
                            </Text>
                        </Pressable>
                    </View>

                    {/* News */}
                    {/* <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 13, alignItems: 'center', }}>
                        <Text style={[styles.text, { color: '#4E4B66', marginRight: 24 }]}>News</Text>
                        <Text style={[styles.text, { borderBottomWidth: 4, borderBottomColor: '#1877F2' }]}>Recent</Text>
                    </View> */}

                    {/* <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.mainContent}>
                        <FlatList
                            data={data}
                            renderItem={({ item }) => <ItemListNew data={item} />}
                            keyExtractor={item => item._id}
                        />
                    </View>
                </ScrollView> */}

                    {/* <NavigationContainer >
                    <Tab.Navigator initialRouteName='Recent' screenOptions={{
                        tabBarActiveTintColor: 'black',
                        tabBarIconStyle: { display: "none" },
                        tabBarLabelStyle: { fontSize: 16 },
                        // tabBarStyle: { backgroundColor: 'white' },
                    }}>
                        <Tab.Screen
                            renderTabBar={props => <TabBar {...props} style={{ backgroundColor: 'black' }} />}
                            name="News" component={Home} />
                        <Tab.Screen name="Recent" component={Recent} />
                    </Tab.Navigator>
                </NavigationContainer> */}
                </View>
            </SafeAreaView>

            <TopTab.Navigator initialRouteName='A' screenOptions={{

                tabBarActiveTintColor: 'black',
                tabBarLabelStyle: { fontSize: 12 },
                tabBarStyle: { backgroundColor: 'white', marginHorizontal: 120, fontWeight: 'bold' },
                tabBarItemStyle: {
                    borderRadius: 10,
                }

            }}>
                <TopTab.Screen name="News" component={News} />
                <TopTab.Screen name="Recent" component={Home} />
            </TopTab.Navigator>
        </SafeAreaView>



    )
}

export default Profile

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
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    titleHeader: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 16,
        color: 'black',
        lineHeight: 24,

    },
    text: {
        fontSize: 16,
        color: '#000000',
        lineHeight: 24,
        letterSpacing: 0.12,
        flexGrow: 0,
    },



    infoUser: {
        marginTop: 13,
        justifyContent: 'space-between',
        alignContent: 'center',
        flexDirection: 'row',

    },
    itemInfoUser: {
        alignItems: 'center',
        marginTop: 24,
    },
    image: {
        width: 100, height: 100,

    },


    introduction: {
        marginTop: 15,
        flexDirection: 'column',
    },
    buttonClick: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    btn: {
        backgroundColor: '#1877F2',
        borderRadius: 6,
        width: 172,
        height: 50,
        gap: 10,
        justifyContent: 'center',
        alignItems: 'center',

    },


})
const data =
    [
        {
            "_id": "1",
            "title": "Trường công lập đầu tiên dạy và thi chương trình dự bị đại học Mỹ",
            "content": "Phổ thông Năng khiếu là trường công lập đầu tiên ở Việt Nam dạy và thi 6 môn của chương trình Advanced Placement (AP), thường gọi là chương trình dự bị đại học Mỹ.",
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
            "title": "Lịch thi đánh giá năng lực, tư duy năm 2023",
            "content": "Các kỳ thi đánh giá năng lực, tư duy diễn ra từ tháng 3 đến 7, thí sinh có thể tham dự nhiều đợt và đăng ký từ đầu tháng 2.",
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
            "title": "Đối phó với bài tập Tết",
            "content": "Ngày nghỉ Tết cuối cùng, hàng chục trang bài tập Toán, Tiếng Việt và Tiếng Anh của Anh Thư được giải quyết, nhưng do mẹ và dì làm giúp.",
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
            "title": "Đường trở thành giáo viên ở Mỹ của một phụ nữ Việt",
            "content": "Chị Đinh Thu Hồng phải theo học chương trình đào tạo giáo viên và hoàn thành nhiều thủ tục để được cấp phép hành nghề dạy học ở Mỹ.",
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
            "title": "Cô giáo đèo hai con giữa mưa rét, vượt 100 km đến trường",
            "content": "Cô Nguyễn Thị Hà gây xúc động khi đèo hai con, vượt 100 km trong mưa lạnh để trở lại điểm trường ở xã Trà Dơn, huyện Nam Trà My, sau Tết.",
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
            "title": "Nam sinh trả lại hơn 40 triệu đồng nhặt được",
            "content": "Lê Hải Thăng, 17 tuổi, được tuyên dương vì nộp lại túi nylon đựng hơn 40 triệu đồng nhặt được hôm 29 Tết.",
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
            "title": "Cho con đi ngắm trăng, sao từ bé",
            "content": "Từ khi 4 tuổi, con trai chị Hồng Anh đã được đưa đi ngắm nhật thực, mưa sao băng và tham gia câu lạc bộ thiên văn trẻ em.",
            "image": "https://i1-vnexpress.vnecdn.net/2023/01/30/danny-kim-png-1929-1673698701-1199-6656-1675037287.png?w=300&h=180&q=100&dpr=1&fit=crop&s=uYWNW2YjIsttuhLT4s8fqQ",
            "createdAt": "2023-01-12T06:26:17.539Z",
            "createdBy": {
                "_id": "63ac39aeedf7c80016c57a67",
                "name": "",
                "avatar": ""
            }
        }
    ];