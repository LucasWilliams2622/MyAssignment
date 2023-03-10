import { StyleSheet, Text, Image, Dimensions, View, ScrollView, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'
import ItemListNew from './ItemListNew'
import { Axios } from 'axios'
import AxiosIntance from '../Ultil/AxiosIntance';

const NewsDetail = (props) => {
    const {navigation}=props;
    const { route } = props;
    const { params } = route;

    const [title, settitle] = useState('')
    const [content, setcontent] = useState('')
    const [imageUrl, setimageUrl] = useState("")
const back=()=>{
    navigation.navigate("Profile")
}
    useEffect(() => {

        const getDetails = async () => {
            const respond = await AxiosIntance().get("articles/" + params.id + "/detail");
            console.log(respond);
            if (respond.error == false) {
                //get data success
                console.log("image " + respond.data[0].image);

                settitle(respond.data[0].title);
                setcontent(respond.data[0].content);
                setimageUrl(respond.data[0].image);



            } else {
                ToastAndroid.show("Failed to get data", ToastAndroid.SHORT)
            }

        }
        getDetails();

        return () => {

        }
    }, [])

    return (
        <SafeAreaView style={styles.container} >
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={back}>
                    <Image style={styles.icon} source={require('../asset_ASM/IconArrowBack.png')}></Image>
                </TouchableOpacity>
                <View style={styles.rightTopIcon}>
                    <TouchableOpacity>
                        <Image style={[styles.icon, { marginRight: 21.5 }]} source={require('../asset_ASM/IconShare.png')}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={styles.icon} source={require('../asset_ASM/Icon3dot.png')}></Image>
                    </TouchableOpacity>
                </View>
            </View>


            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Detail Content */}
                <View style={styles.contentNews}>
                    <View style={styles.headerContentNews}>
                        <View style={styles.headerContentNews}>
                            <Image style={styles.logoNews} source={require('../asset_ASM/LogoBBCNews.png')}></Image>
                            <View>
                                <Text style={styles.textTitle}>BBC News</Text>
                                <Text style={[styles.text, { fontSize: 14 }]}>14m ago</Text>
                            </View>
                        </View>
                        <View>
                            <Pressable style={styles.btnFollowing}>
                                <TouchableOpacity>
                                    <Text style={[styles.textTitle, { color: 'white' }]} >Following</Text>

                                </TouchableOpacity>
                            </Pressable>
                        </View>
                    </View>
                    {/* Image News */}
                    <Image style={styles.imageNews} source={{ uri: imageUrl }} />
                    {/* Content and Tiles news */}
                    <View style={styles.content}>
                        <Text style={[styles.text, { marginTop: 10, fontSize: 14 }]}></Text>
                        <Text style={styles.newsTitle}>{title}</Text>
                        <Text style={styles.text}>{content}</Text>

                        <Text>M???t s??? tin t???c kh??c:</Text>
                        {
                            data.map((item) => <ItemListNew key={item._id} data={item} />)
                        }

                    </View>


                </View>
            </ScrollView>
            {/* Footer */}
            <View style={styles.footer}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flexDirection: 'row', marginRight: 31, alignItems: 'center' }}>
                        <TouchableOpacity>
                            <Image style={styles.icon} source={require('../asset_ASM/IconLove.png')}></Image>

                        </TouchableOpacity>
                        <Text style={styles.text}>24.5K</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity>
                            <Image style={styles.icon} source={require('../asset_ASM/IconComment.png')}></Image>

                        </TouchableOpacity>
                        <Text style={[styles.text, {}]}>1K</Text>

                    </View>
                </View>
                <TouchableOpacity>
                    <Image style={styles.icon} source={require('../asset_ASM/IconSave.png')}></Image>

                </TouchableOpacity>

            </View>
        </SafeAreaView>
    )
}

export default NewsDetail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        bacgroundColor: "#fff",
        marginHorizontal: 24,
        marginTop: 20,


    },
    header: {
        marginTop: 15,
        marginHorizontalt: 4,
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    rightTopIcon: {
        flexDirection: 'row',

    },
    icon: {
        height: 20,
        width: 20,
        color: '#4E4B66',
        marginRight: 5,
    },
    contentNews: {
        marginTop: 20,
    },
    headerContentNews: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,

    },
    logoNews: {
        height: 50,
        width: 50,
        marginRight: 4,
    },
    textTitle: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,

    },
    text: {
        fontSize: 16,
        color: '#4E4B66',
        lineHeight: 24,
        marginBottom: 10,
        letterSpacing: 0.12,
    },
    btnFollowing: {
        backgroundColor: '#1877F2',
        width: 102,
        height: 34,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 6
    },
    imageNews: {
        width: Dimensions.get('window').width - 50,
        height: 200,
        borderColor: 'black',
        borderWidth: 2
    },
    newsTitle: {
        marginTop: 4,
        marginBottom: 16,
        fontSize: 24,
        color: 'black',
        lineHeight: 36,
    },
    content: {
        marginBottom: 70,
    },
    footer: {
        width: Dimensions.get('window').width - 50,
        height: 78,
        color: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        padding: 24,
        backgroundColor: 'white',
        // borderColor: 'black',
        // borderWidth: 2,

        marginTop: 700

    }
})

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