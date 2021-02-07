import React from 'react';
import {SafeAreaView, View, StyleSheet, Text} from 'react-native';
import Button from '../components/Button';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Home = ({navigation}: {navigation: any}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>Google Map Driving Direction</Text>
        <Button
          onPress={() => navigation.navigate('Pickup')}
          name={'Get Started'}
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
    fontSize: 30,
    fontWeight: 'bold',
    lineHeight: 50,
    marginBottom: hp('40%'),
    marginTop: hp('10%'),
  },
});

export default Home;
