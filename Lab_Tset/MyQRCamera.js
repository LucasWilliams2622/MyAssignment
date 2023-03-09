import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps';
import LocationPickerModal from './modals/LocationPickerModal';
import { SafeAreaView } from 'react-native-safe-area-context';
const MyQRCamera = () => {
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'pink'}}>
     
      <LocationPickerModal />
    </SafeAreaView>
  )
}

export default MyQRCamera

const styles = StyleSheet.create({})