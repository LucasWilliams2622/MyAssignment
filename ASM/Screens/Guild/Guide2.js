import { StyleSheet, Text, View, Dimensions, Image, TouchableHighlight, TouchableOpacity } from 'react-native'
import React from 'react'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
const windowHeight = Dimensions.get('window').height;
const windowWIdth = Dimensions.get('window').width;
const Giude2 = (props) => {
  const { navigation } = props;
  const goBack = () => {
    navigation.pop(1)
  }
  const Next=()=>{
    navigation.navigate('Guild2')
  }
  return (
    <View>
      {/* Image header */}
      <Image style={styles.image} source={require('../../asset_ASM/BackgroundGuide/ImageGuide1.png')}></Image>

      <Text style={styles.title}>Lorem Ipsum is simply {"\n"}
        dummy</Text>
      <Text style={styles.text}>Lorem Ipsum is simply dummy text of {"\n"}
        the printing and typesetting industry.</Text>

      {/* Footer */}
      <View style={styles.footer}>
        <View>
          <Text></Text>
        </View>
        <View style={{ flexDirection: "row", }}>
          <TouchableOpacity style={[styles.button, { backgroundColor: 'white', }]}>
            <Pressable onPress={goBack}>
              <Text style={[styles.textButton, { color: '#B0B3B8' }]}>Back</Text>
            </Pressable>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Pressable>
              <Text style={styles.textButton}>Next</Text>
            </Pressable>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  )
}

export default Giude2

const styles = StyleSheet.create({
  image: {
    width: windowWIdth,
    height: windowHeight - 300
  },
  title: {
    marginTop: 20,
    marginLeft: 24,
    fontSize: 24,
    lineHeight: 36,
    fontWeight: 'bold',
    letterSpacing: 0.12,
    color: 'black',
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.12,
    color: '#4E4B66',
    marginLeft: 24,

  },
  footer: {
    marginTop: 70,
    marginHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // borderWidth: 2, borderColor: 'black'
  },
  button: {
    borderRadius: 6,
    backgroundColor: '#1877F2',
    width: 85,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textButton: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  }
})