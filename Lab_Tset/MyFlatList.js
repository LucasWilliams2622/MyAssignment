const windowWIdth = Dimensions.get('window').width;
import { View, StyleSheet, SafeAreaView, RefreshControl, Dimensions, FlatList, Text, Alert, Image, TouchableOpacity } from 'react-native';
import ItemListNew from '../ASM/Screens/ItemListNew';
import ItemTest from './ItemTest';
import React, { useState } from 'react';
import { ActivityIndicator, TextInput } from 'react-native-paper';
export default function App() {
  const windowWIdth = Dimensions.get('window').width;

  const [isLoading, setIsLoading] = useState(false)
  const [refreshControl, setRefreshControl] = useState(false)

  const GridView = ({ data }) => (
    <View style={styleSheet.gridbox}>

      <Text style={styleSheet.gridText} onPress={() => { getOnPressItem(data) }}>{data}</Text>
    </View>
  );

  const getOnPressItem = (data) => {

    console.log(data)

  }

  const Grid_Header = () => {
    return (
      <View style={{
        height: 50,
        width: "100%",
        backgroundColor: "#A459D1",
        justifyContent: 'center',
        alignItems: 'center'
      }}>

        <Text style={{ fontSize: 24, color: '#F5EAEA', fontWeight: 'bold' }}> GridView in React Native </Text>

      </View>
    );
  }

  return (
    <SafeAreaView style={styles.MainContainer}>
      <View style={styles.inputBox}>
        <TouchableOpacity style={[styles.visible, { left: 12 }]}
        >
          <Image resizeMode='contain' source={require('../ASM/asset_ASM/IconSearch.png')}></Image>

        </TouchableOpacity>
        <TouchableOpacity style={styles.visible} >
          <Image resizeMode='contain' source={require('../ASM/asset_ASM/IconFilter.png')}></Image>

        </TouchableOpacity>
        {/* Input */}
        <TextInput style={styles.input} placeholder="Search"
          onChangeText={(text) => { countDownSearch(text) }}
        //onChangeText={searchText}
        />

      </View>
      <FlatList
        showsVerticalScrollIndicator={false}

        data={data}
        renderItem={({ item }) => <ItemTest data={item} />}
        keyExtractor={item => item.id}
        numColumns={2}
        key={item => item.id}
        ListHeaderComponent={Grid_Header}

        refreshControl={
          <RefreshControl refreshing={refreshControl} onRefresh={() => {
            setRefreshControl(true)
            console.log("Refresh")
            // setData(mang_du_lieu)
            // setData(data.concat([ { title : "moi a nha"}]))
            setRefreshControl(false)
          }} colors={['green']} />
        }


        //       Load More 
        ListFooterComponent={() => (
          isLoading ? //  a==b ? b : a
            <View style={{
              marginTop: 10,
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
              justifyContent: 'space-around',
              padding: 10,
              // width : WIDTH,
              // height : 50 ,
              flexDirection: 'column'
            }} >
              <Text > Tải Thêm </Text>
              <ActivityIndicator size="small" color='black' fontWeight='bold' />
            </View> : null
        )}
        onEndReached={() => {
          setIsLoading(true)
          console.log("Load More")
          // setData(mang_du_lieu)

          setTimeout(() => {
            //   setData(data.concat([ { title : "moi a nha"} ]))
            setIsLoading(false)
          }, 5000);
        }}
        onEndReachedThreshold={0.1}
      />


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  MainContainer: {
    flex: 1,
    backgroundColor: 'white'
  },

  gridbox: {
    flex: 1,
    height: 75,
    margin: 2,
    backgroundColor: '#00BFA5',
    justifyContent: 'center',
    alignItems: 'center',


  },

  gridText: {
    fontSize: 24,
    color: 'white',

  },
  visible: {
    position: 'absolute',
    right: 11,
    bottom: 13,
  },
  inputBox: {
    borderRadius: 6,
    borderColor: 'black',
  },
  input: {
    paddingLeft: 14,

    height: 48,
    width: windowWIdth - 130,
    marginLeft: 40,
    backgroundColor: 'white',

  },

});

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