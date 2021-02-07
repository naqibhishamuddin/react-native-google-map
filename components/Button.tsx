import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const Button = (props: {name: string; onPress(): void}) => {
  return (
    <TouchableOpacity style={styles.buttonArea} onPress={props.onPress}>
      <Text style={styles.buttonText}>{props.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonArea: {
    width: '100%',
    height: '10%',
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
  },
});

export default Button;
