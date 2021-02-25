import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import  baseStyles from '../styles/base'

const Button = (
  {
    title,
    onPress,
    type,
    icon,
    ...props
  }) => {
  const buttonStyle = type === 'outlined' ? baseStyles.btnSecondary : baseStyles.btnPrimary
  const textStyle = type === 'outlined' ? baseStyles.btnSecondary.text : baseStyles.btnPrimary.text
  return (
    <View>
      <TouchableOpacity style={[buttonStyle, baseStyles.button]} onPress={onPress}>
        <Text style={textStyle}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export {Button};