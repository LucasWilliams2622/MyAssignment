import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'

const Wellcome = () => {
  return (
    <View>
     <Image style={{marginHorizontal:56,marginTop:222,marginBottom:481}} source={require('../asset_ASM/BigLogo.png')}></Image>
    </View>
  )
}

export default Wellcome

const styles = StyleSheet.create({})