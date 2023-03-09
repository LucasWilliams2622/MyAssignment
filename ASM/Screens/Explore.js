import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

// console.log(Dimensions.get('window').height)
// console.log(Dimensions.get('window').width)

const windowHeight = Dimensions.get('window').height;
const windowWIdth = Dimensions.get('window').width;

if (windowHeight < 700) {

}


const Explore = () => {
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        {/* header */}
        <Text style={styles.textHeader}>Explore</Text>
        <View style={styles.header}>
          <Text style={[styles.title, { fontWeight: 'bold' }]}>Topic</Text>
          <Text style={styles.text}>See all</Text>
        </View>

        {/* Topc suggest */}
        <View style={styles.suggestTopic}>

        </View>


        {/* Popular Topic */}
        <View style={styles.popularTopic}>
          <Text style={[styles.title, { fontWeight: 'bold' ,marginTop:16}]}>Popular Topic</Text>
          
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Explore

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
  text: {
    fontSize: 14,
    color: '#4E4B66',
    lineHeight: 22,
  },
  title: {
    fontSize: 16,
    color: 'black'
  },
  header: {
    marginVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  suggestTopic: {
    width: Dimensions.get('window').width - 50,
    height: 232,
    borderWidth: 2,
    borderColor: 'black'

  },

})