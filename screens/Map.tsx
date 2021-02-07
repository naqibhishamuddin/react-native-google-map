import MapView, {Marker} from 'react-native-maps';
import {SafeAreaView, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import MapViewDirections from 'react-native-maps-directions';

const API_KEY = 'YOUR API KEY';
const Map = ({route}: {route: any}) => {
  const [markers] = useState([
    {
      coordinate: {
        latitude: route.params.pickupLat,
        longitude: route.params.pickupLang,
      },
    },
    {
      coordinate: {
        latitude: route.params.destinationLat,
        longitude: route.params.destinationLang,
      },
    },
  ]);

  return (
    <SafeAreaView style={styles.map}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: route.params.pickupLat,
          longitude: route.params.pickupLang,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker coordinate={markers[0].coordinate} />
        <Marker coordinate={markers[1].coordinate} />
        <MapViewDirections
          origin={markers[0].coordinate}
          destination={markers[1].coordinate}
          strokeWidth={3}
          strokeColor={'yellow'}
          apikey={API_KEY}
        />
      </MapView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  map: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  addressText: {
    color: 'black',
    margin: 3,
  },
});

export default Map;
