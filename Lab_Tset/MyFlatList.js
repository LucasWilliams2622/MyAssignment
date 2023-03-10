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
              <Text > T???i Th??m </Text>
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