import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

const Button = (
  {
    title,
    onPress,
    ...props
  }) => {
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{title.toUpperCase()}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
    borderRadius: 23,
    height: 52,
    backgroundColor: '#4E9D2D'
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
});

export {Button};