import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';

const Book = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <Text>Book</Text>
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
});

export default Book;
