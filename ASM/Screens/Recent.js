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


<SafeAreaView  style={styles.main}>

    <View style={styles.container1}>
      {/* <Text>{dataNe.length}</Text> */}
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