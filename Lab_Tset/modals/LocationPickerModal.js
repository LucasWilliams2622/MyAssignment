
import React, {useState, useEffect} from 'react';
import {StyleSheet,Dimensions, Text, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

const App = () => {
  const [position, setPosition] = useState({
    latitude: 10,
    longitude: 10,
    latitudeDelta: 0.0421,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {

    Geolocation.getCurrentPosition((pos) => {
      const crd = pos.coords;
      setPosition({
        latitude: crd.latitude,
        longitude: crd.longitude,
        latitudeDelta: 0.0421,
        longitudeDelta: 0.0421,
      });
    }, (err) => {
      console.log(err);
    })
  }, []);

  useEffect(() => {
    console.log(position)
  }, [position])

  return (
    <MapView
    style={styles.map}
    initialRegion={position}
    showsUserLocation={true}
    showsMyLocationButton={true}
    followsUserLocation={true}
    showsCompass={true}
    scrollEnabled={true}
    zoomEnabled={true}
    pitchEnabled={true}
    rotateEnabled={true}>
     <Marker
     title='Yor are here'
     description='This is a description'
     coordinate={position}/>
     </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
    // width: Dimensions.get('window').width,
    // height: Dimensions.get('window').height,
  },
});


export default App;




// import { StyleSheet, Text, View } from 'react-native'
// import React, { useRef } from 'react'
// import { Modal } from 'react-native-paper'
// import { SafeAreaView } from 'react-native-safe-area-context'
// import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
// import AntDesign from 'react-native-vector-icons/AntDesign'
// const LocationPickerModal = () => {
//     const mapRef = useRef();
//     return (

//         <View style={{ flex: 1, backgroundColor: 'white', borderWidth: 2, borderColor: 'black' }}>
//             <MapView ref={mapRef}
//                 zoomControlEnabled={true} showsMyLocationButton={true} provider={PROVIDER_GOOGLE}
//                 style={styles.map}
//                 region={{
//                     latitude: 37.78825,
//                     longitude: -122.4324,
//                     latitudeDelta: 0.015,
//                     longitudeDelta: 0.0121,
//                 }}
                
//                 >

//             </MapView>
//         </View>

//     )
// }

// export default LocationPickerModal
// const styles = StyleSheet.create({
//     container: {
//         ...StyleSheet.absoluteFillObject,
//         height: 400,
//         width: 400,
//         justifyContent: 'flex-end',
//         alignItems: 'center',
//     },
//     map: {
//         ...StyleSheet.absoluteFillObject,
//     },
// });