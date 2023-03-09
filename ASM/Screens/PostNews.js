import { StyleSheet, Text, Image, TextInput, View, TouchableOpacity, Dimensions, ToastAndroid, Button, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'
import AxiosIntance from '../Ultil/AxiosIntance';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';


const windowHeight = Dimensions.get('window').height;
const windowWIdth = Dimensions.get('window').width;

const PostNews = (props) => {
  const { navigation } = props;
  const [imageUrl, setimageUrl] = useState("")
  //  const [showImage, setshowImage] = useState(null)

  const [title, settitle] = useState('');
  const [content, setcontent] = useState('')

  const dialogImageChoose = () => {
    return Alert.alert(
      "Thông báo",
      "Chọn phương thức đăng ảnnh",
      [
        {
          text: "Chụp ảnh ",
          onPress: () => {
            capture()
          },
        },

        {
          text: "Tải ảnh lên",
          onPress: () => {
            getImageLibrary()
          },
        },
        {
          text: "Hủy",


        },
      ]
    );
  };



  //   // try {
  //   //   const granted = await PermissionsAndroid.request(
  //   //     PermissionsAndroid.PERMISSIONS.CAMERA,
  //   //     {
  //   //       title: 'App Camera Permission',
  //   //       message: 'App needs access to your camera ',
  //   //       buttonNeutral: 'Ask Me Later',
  //   //       buttonNegative: 'Cancel',
  //   //       buttonPositive: 'OK',
  //   //     },
  //   //   );
  //   //   if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //   //     ImagePicker.launchCamera(
  //   //       {
  //   //         mediaType: 'photo',
  //   //         includeBase64: false,
  //   //         maxHeight: 200,
  //   //         maxWidth: 200,
  //   //       },
  //   //       (response) => {
  //   //         console.log(response);
  //   //         setResponseCamera(response);
  //   //         setResponseGallery(null);
  //   //       },
  //   //     );
  //   //   } else {
  //   //     console.log('Camera permission denied');
  //   //   }
  //   // } catch (err) {
  //   //   console.warn(err);
  //   // }
  // }

  const capture = async () => {
    const result = await launchCamera();
    console.log(result.assets[0].uri);
    const formdata = new FormData();
    formdata.append('image', {
      uri: result.assets[0].uri,
      type: 'image/jpeg',
      name: 'image.jpg',


    });
    const response = await AxiosIntance("multipart/form-data").post('/media/upload', formdata);
    console.log(response.data.path);
    if (response.error == false) {
      setimageUrl(response.data.path);
      ToastAndroid.show("Upload ảnh thành công", ToastAndroid.SHORT);
    }
    else {
      ToastAndroid.show("Upload ảnh thất bại", ToastAndroid.SHORT);
    }
  }

  const getImageLibrary = async () => {
    const result = await launchImageLibrary();
    console.log(result.assets[0].uri);
    const formdata = new FormData();
    formdata.append('image', {
      uri: result.assets[0].uri,
      type: 'image/jpeg',
      name: 'image.jpg',


    });
    const response = await AxiosIntance("multipart/form-data").post('/media/upload', formdata);
    console.log(response.data.path);
    if (response.error == false) {
      setimageUrl(response.data.path);
      ToastAndroid.show("Upload ảnh thành công", ToastAndroid.SHORT);
    }
    else {
      ToastAndroid.show("Upload ảnh thất bại", ToastAndroid.SHORT);
    }
  }

  const PostNews = async () => {
    const response = await AxiosIntance().post("/articles", { title: title, content: content, image: imageUrl });
    if (response.error == false) {
      ToastAndroid.show("Đăng tin thành công", ToastAndroid.SHORT);
      console.log("Upload news successfully")

    }
    else {
      console.log("Upload image failed")

      ToastAndroid.show("Đăng tin thất bại! Hãy thử lại?", ToastAndroid.SHORT);
    }
  }
 

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <View>
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
              <Text>Create News</Text>
            </View>

            <TouchableOpacity  >
              <Pressable
              >
                <Image style={{ marginRight: 3 }} source={require('../asset_ASM/Icon3dot.png')}></Image>

              </Pressable>
            </TouchableOpacity >
          </View>

          {/* create news */}

          <TouchableOpacity onPress={dialogImageChoose} >
            <View style={styles.box2} >
              <Image style={styles.Image} source={{ uri: imageUrl }} />
              <View style={styles.box1}>
                <Text style={{ fontSize: 30 }}>+</Text>
                <Text>Add Cover Photo</Text>
              </View>
            </View>
          </TouchableOpacity>

          <View>
            <TextInput placeholder='News title'
              multiline={false}
              autoCapitalize={true}
              style={[styles.title,{color:'black',fontWeight:'bold'}]}
              onChangeText={settitle} />

            <TextInput placeholder='Add News/Article'
              multiline={true}
              autoCapitalize={true}
              style={styles.text}
              onChangeText={setcontent} />
          </View>

          {/* Bootom nav create news */}
          <View>
            <View style={styles.boxIcon}>
              <TouchableOpacity>
                <Image
                  style={styles.icon}
                  source={require('../asset_ASM/Icon/IconB.png')} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  style={styles.icon}
                  source={require('../asset_ASM/Icon/IconI.png')} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  style={styles.icon}
                  source={require('../asset_ASM/Icon/IconSortByNum.png')} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  style={styles.icon}
                  source={require('../asset_ASM/Icon/IconSortByLetter.png')} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  style={styles.icon}
                  source={require('../asset_ASM/Icon/IconLink.png')} />
              </TouchableOpacity>
            </View>
          </View>

          {/* Bottom nav */}
          <View style={styles.bottomNav}>
            <View style={styles.boxIcon2}>
              <TouchableOpacity>
                <Image
                  style={styles.icon}
                  source={require('../asset_ASM/Icon/IconAa.png')} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  style={styles.icon}
                  source={require('../asset_ASM/Icon/IconFormat.png')} />
              </TouchableOpacity>
              <TouchableOpacity onPress={dialogImageChoose}>
                <Image
                  style={styles.icon}
                  source={require('../asset_ASM/Icon/IconImage.png')} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  style={styles.icon}
                  source={require('../asset_ASM/Icon/Icon3dotHor.png')} />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity style={styles.buttonPost}>
                <Pressable
                  onPress={PostNews}>
                  <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#FFFFFF' }}>
                    Publish
                  </Text>
                </Pressable>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default PostNews

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',

  },
  container: {
    bacgroundColor: "#fff",
    marginHorizontal: 24,
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
  Image: {
    width: windowWIdth - 24 * 2,
    marginTop: 16,
    height: 180,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 2,
  },
  title: {
    fontSize: 24,
    lineHeight: 24,
    letterSpacing: 0.16,
    marginTop: 16,
    color: '#A0A3BD',
    borderBottomColor: '#A0A3BD',
    borderBottomWidth: 1,
    height: 46,

  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.16,
    marginTop: 16,
    color: '#A0A3BD',

  },
  box1: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',

  },
  box2: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 218,
    height: 40,
    marginLeft: 5,

    marginTop: 210,
    marginBottom: 20,

  },
  icon: {
    height: 24,
    width: 24,
    marginRight: 26

  },
  boxIcon2: {
    justifyContent: 'space-between',
    flexDirection: 'row',


    alignItems: 'center',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    width: windowWIdth - 24 * 2,

  },
  buttonPost: {
    justifyContent: 'center',
    alignItems: 'center',
    color: '#FFFFFF',

    width: 100,
    height: 50,
    backgroundColor: '#1877F2'
  }

})