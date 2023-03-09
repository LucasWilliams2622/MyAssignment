import { Dimensions, StyleSheet, Image, Text, TextInput, FlatList, TouchableOpacity, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AxiosInstance } from 'axios';
import { ActivityIndicator, List } from 'react-native-paper';
import Recent from './Recent';
import ListNe from './ListNe';
const windowHeight = Dimensions.get('window').height;
const windowWIdth = Dimensions.get('window').width;
import ItemListNew from './ItemListNew'

import AxiosIntance from '../Ultil/AxiosIntance';


const Bookmark = (props) => {


  const { navigation } = props;
  const [dataNe, setdataNe] = useState([]);
  const [isLoading, setisLoading] = useState(true)
  const [idDelete, setidDelete] = useState("")
  const [searchText, setsearchText] = useState("")

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

  let timeOut = null;
  const countDownSearch = (searchText) => {
    if (timeOut) {
      clearTimeout(timeOut);
    }
    timeOut = setTimeout(() => {
      search(searchText);
    }, 3000);
  }

  const search = async (searchText) => {
    setisLoading(true);
    const response = await AxiosIntance().get("/articles/search?title=" + searchText)
    if (response.error == false) {
      //lấy dữ liệu thành công
      setdataNe(response.data)
      setisLoading(false);
    } else {
      ToastAndroid.show("Không tìm thấy nội dung tìm kiếm", ToastAndroid.SHORT)
    }
  }


  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        {/* header */}
        <Text style={styles.textHeader}>Bookmark</Text>

        <View style={styles.inputBox}>
          <TouchableOpacity style={[styles.visible, { left: 12 }]}
            onPress={search}>
            <Image resizeMode='contain' source={require('../asset_ASM/IconSearch.png')}></Image>

          </TouchableOpacity>
          <TouchableOpacity style={styles.visible} >
            <Image resizeMode='contain' source={require('../asset_ASM/IconFilter.png')}></Image>

          </TouchableOpacity>
          {/* Input */}
          <TextInput style={styles.input} placeholder="Search"
            onChangeText={(text) => { countDownSearch(text) }}
          //onChangeText={searchText}
          />

        </View>
        <View style={styles.listNews}>
          {
            isLoading == true ?
              (<View style={styles.loading}>
                <ActivityIndicator size='large' color='#fffff' />
                <Text>Loading....</Text>
              </View>)
              :
              (<FlatList
                showsVerticalScrollIndicator={false}
                data={dataNe}
                renderItem={({ item }) => <ItemListNew data={item} navigation={navigation} />}
                keyExtractor={item => item._id}
              />)
          }

        </View>
      </View>
    </SafeAreaView>
  )
}

export default Bookmark

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',

  },
  container: {
    bacgroundColor: "#fff",
    marginHorizontal: 24,
  },
  textHeader: {
    fontSize: 32,
    lineHeight: 48,
    letterSpacing: 0.12,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 6,
  },
  input: {
    paddingLeft: 14,

    height: 48,
    width: windowWIdth - 130,
    marginLeft: 40

  },
  listNews: {
    marginTop: 24,

    height: windowHeight,

  },
  visible: {
    position: 'absolute',
    right: 11,
    bottom: 13,
  },
  inputBox: {
    borderWidth: 1,
    borderRadius: 6,
    borderColor: 'black',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -200,
  },

})