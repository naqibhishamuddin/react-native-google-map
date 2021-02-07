import React, {useState} from 'react';
import {SafeAreaView, View, StyleSheet, Text, Alert} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Button from '../components/Button';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
const API_KEY = 'AIzaSyAyXTFfzxlon-22ZWnHfphwRWdHBVgAXTM';
const Destination = ({navigation, route}: {navigation: any; route: any}) => {
  const [destinationLat, setDestinationLat] = useState(undefined);
  const [destinationLang, setDestinationLang] = useState(undefined);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>Where are you heading?</Text>
        <GooglePlacesAutocomplete
          enableHighAccuracyLocation={true}
          placeholder="Search for a location"
          minLength={2}
          fetchDetails={true}
          renderDescription={(row) => row.description}
          enablePoweredByContainer={false}
          listUnderlayColor="lightgrey"
          onPress={(data, details: any) => {
            setDestinationLat(details.geometry.location.lat);
            setDestinationLang(details.geometry.location.lng);
          }}
          query={{
            key: API_KEY,
            language: 'en', // language of the results
            components: 'country:my',
          }}
          styles={{
            description: {
              color: 'black',
              fontSize: 12,
            },
            textInputContainer: {
              width: '100%',
              marginTop: hp('8%'),
              alignSelf: 'center',
            },
            textInput: {
              backgroundColor: '#e8e8e8',
              height: hp('7%'),
            },
            predefinedPlacesDescription: {
              color: 'black',
            },
            listView: {
              position: 'absolute',
              marginTop: 44,
              backgroundColor: 'white',
              borderBottomEndRadius: 15,
              elevation: 2,
            },
          }}
          nearbyPlacesAPI="GooglePlacesSearch"
          GooglePlacesSearchQuery={{
            rankby: 'distance',
          }}
          filterReverseGeocodingByTypes={[
            'locality',
            'administrative_area_level_3',
          ]}
          debounce={200}
        />
        <Button
          onPress={() => {
            if (destinationLang === undefined || null) {
              Alert.alert('Please enter your destination');
            } else {
              navigation.navigate('Map', {
                pickupLat: route.params.pickupLat,
                pickupLang: route.params.pickupLang,
                destinationLat: destinationLat,
                destinationLang: destinationLang,
              });
            }
          }}
          name={'Confirm Destination'}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  inner: {
    flex: 1,
    backgroundColor: 'white',
    margin: '10%',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    lineHeight: 30,
  },
});

export default Destination;
