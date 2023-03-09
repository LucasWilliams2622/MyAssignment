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

                        <Text>Một số tin tức khác:</Text>
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