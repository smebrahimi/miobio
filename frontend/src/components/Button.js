import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

const Button = (
  {
    title,
    onPress,
    type,
    icon,
    ...props
  }) => {
  const buttonStyle = type === 'outline' ? styles.buttonOutlined : styles.button
  const textStyle = type === 'outline' ? styles.textOutlined : styles.text
  return (
    <View>
      <TouchableOpacity style={buttonStyle} onPress={onPress}>
        <Text style={textStyle}>{title.toUpperCase()}</Text>
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
  buttonOutlined: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
    borderRadius: 23,
    height: 52,
    borderWidth: 2,
    borderColor: '#4E9D2D',
    backgroundColor: '#fff'
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
  textOutlined: {
    color: '#4E9D2D'
  }
});

export {Button};