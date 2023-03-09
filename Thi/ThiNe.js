import { StyleSheet, Image, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextInput } from 'react-native-paper'

const ThiNe = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#DF0054' }}>
      <View style={{ backgroundColor: '#DF0054', marginHorizontal: 24, }}>
        <Text style={{ fontWeight: 'bold', marginTop: 10, fontSize: 25, lineHeight: 30, color: 'white' }}>Explore</Text>
        <Text style={{ fontSize: 22, lineHeight: 27, color: 'white', marginTop: 10 }}>search for a pet</Text>

        <View style={{ marginTop: 20, backgroundColor: 'white', borderRadius: 30, }}>
          <TextInput placeholder='Sreach' style={{ backgroundColor: 'white', width: '90%', height: 50, borderRadius: 30, borderTopStartRadius: 30 }}></TextInput>
        </View>
        <View style={{ marginTop: 24, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <View style={{ width: 60, height: 60, backgroundColor: '#E5E5E5', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 16, color: 'white' }}>Cats</Text>
          </View>
          <View style={{ width: 60, height: 60, backgroundColor: '#FFB228', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 16, color: 'white' }}>Dogs</Text>
          </View>
          <View style={{ width: 60, height: 60, backgroundColor: '#E5E5E5', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 16, color: 'white' }}>Birds</Text>
          </View>
          <View style={{ width: 60, height: 60, backgroundColor: '#E5E5E5', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 16, color: 'white' }}>Others</Text>
          </View>
        </View>
        <View>
          <View style={{flexDirection:'row',marginTop:34,backgroundColor:'#FFD2BBA8',borderRadius:25}}>
            <Image style={{borderRadius:25}} source={require('../Thi/AssetThi/Dog.png')} />
            <View style={{ flexDirection: 'column',marginLeft:11,marginTop:22, }}>
              <Text style={{color:'white',marginBottom:12, fontSize:16,fontWeight:'bold',}}>coco</Text>
              <Text style={{fontSize:12,color:'white'}}>Coat</Text>
              <Text style={{color:'#DF0054', marginBottom:15, fontSize:12,}}>Medium</Text>
              <Text style={{fontSize:12,color:'white'}}>Age</Text>
              <Text style={{color:'#DF0054', marginBottom:15, fontSize:12,}}>3yrs</Text>


            </View>
            <View style={{ flexDirection: 'column',marginLeft:11,marginTop:22, marginLeft:40}}>
              <Text style={{color:'#DF0054',marginBottom:12, fontSize:16,fontWeight:'bold',}}>female</Text>
              <Text style={{fontSize:12,color:'white'}}>origin</Text>
              <Text style={{color:'#DF0054', marginBottom:15, fontSize:12,}}>canada</Text>
              <Text style={{fontSize:12,color:'white'}}>weight</Text>
              <Text style={{color:'#DF0054', marginBottom:15, fontSize:12,}}>4 pounds</Text>
            </View>
          </View>

          <View style={{flexDirection:'row',marginTop:34,backgroundColor:'#FFD2BBA8',borderRadius:25}}>
            <Image style={{borderRadius:25}} source={require('../Thi/AssetThi/Dog.png')} />
            <View style={{ flexDirection: 'column',marginLeft:11,marginTop:22, }}>
              <Text style={{color:'white',marginBottom:12, fontSize:16,fontWeight:'bold',}}>coco</Text>
              <Text style={{fontSize:12,color:'white'}}>Coat</Text>
              <Text style={{color:'#DF0054', marginBottom:15, fontSize:12,}}>Medium</Text>
              <Text style={{fontSize:12,color:'white'}}>Age</Text>
              <Text style={{color:'#DF0054', marginBottom:15, fontSize:12,}}>3yrs</Text>


            </View>
            <View style={{ flexDirection: 'column',marginLeft:11,marginTop:22, marginLeft:40}}>
              <Text style={{color:'#DF0054',marginBottom:12, fontSize:16,fontWeight:'bold',}}>female</Text>
              <Text style={{fontSize:12,color:'white'}}>origin</Text>
              <Text style={{color:'#DF0054', marginBottom:15, fontSize:12,}}>canada</Text>
              <Text style={{fontSize:12,color:'white'}}>weight</Text>
              <Text style={{color:'#DF0054', marginBottom:15, fontSize:12,}}>4 pounds</Text>
            </View>
          </View>
        </View>

      </View>
    </SafeAreaView>

  )
}

export default ThiNe

const styles = StyleSheet.create({})