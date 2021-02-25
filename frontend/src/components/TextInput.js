import React from 'react';
import {
  View,
  TextInput,
  Text
} from 'react-native';
import  baseStyles from '../styles/base'

const Input = (
  {
    label,
    name,
    value,
    autoCapitalize,
    onChange,
    placeholder,
    secureTextEntry,
    error,
    helperText,
    onSubmitEditing,
    returnKeyType,
    keyboardType,
    autoFocus,
    multiline,
    maxLength,
    inlineImageLeft,
    ...props
  }) => {
  return (
    <View>
      {label && <Text htmlFor={name} style={baseStyles.forms.label}>{label}</Text>}
      <TextInput
        name={name}
        returnKeyType={returnKeyType}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        onSubmitEditing={onSubmitEditing}
        placeholder={placeholder}
        autoCorrect={false}
        value={value}
        inlineImageLeft={inlineImageLeft}
        onChangeText={onChange}
        underlineColorAndroid={'transparent'}
        blurOnSubmit={true}
        autoCapitalize={ autoCapitalize ? autoCapitalize : 'none' }
        style={[ baseStyles.forms.input, error &&  baseStyles.forms.errorInput ]}
        autoFocus={autoFocus}
        multiline={multiline}
        maxLength={maxLength}
      />
      {error && <Text style={baseStyles.forms.errorMessage}>{ helperText }</Text>}
    </View>
  );
};

export {Input};