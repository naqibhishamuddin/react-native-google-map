import React, {useState} from 'react';
import {SafeAreaView, View, StyleSheet, Text, Alert} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Button from '../components/Button';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const API_KEY = 'YOUR API KEY';
const Pickup = ({navigation}: {navigation: any}) => {
  const [pickupLat, setPickupLat] = useState();
  const [pickupLang, setPickupLang] = useState();
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
            setPickupLat(details.geometry.location.lat);
            setPickupLang(details.geometry.location.lng);
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
              marginTop: hp('8%'),
              width: '100%',
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
              //position: 'absolute',
              marginTop: hp('3%'),
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
            if (pickupLat === undefined || null) {
              Alert.alert('Please enter your pickup location first');
            } else {
              navigation.navigate('Destination', {
                pickupLat: pickupLat,
                pickupLang: pickupLang,
              });
            }
          }}
          name={'Confirm Pickup'}
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

export default Pickup;
