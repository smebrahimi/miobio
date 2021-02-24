import React from 'react';
import {
  View,
  TextInput,
  Text
} from 'react-native';

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
    errorStyles,
    helperText,
    onSubmitEditing,
    returnKeyType,
    keyboardType,
    newStyles,
    autoFocus,
    multiline,
    maxLength,
    inlineImageLeft,
    ...props
  }) => {
  const {inputStyle, errorStyle, testErrorStyle, labelStyle} = InputFieldStyles;
  return (
    <View>
      {label && <Text htmlFor={name} style={labelStyle}>{label}</Text>}
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
        style={ error ? ( (errorStyles) ? errorStyles : errorStyle ) : (newStyles ? newStyles : inputStyle)}
        autoFocus={autoFocus}
        multiline={multiline}
        maxLength={maxLength}
      />
      {error && <Text style={testErrorStyle}>{ helperText }</Text>}
    </View>
  );
};


const InputFieldStyles = {
  labelStyle: {
    color: '#A7EB8A'
  },
  inputStyle: {
    height: 50,
    backgroundColor: 'white',
    color: 'black',
    paddingHorizontal: 8,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#62C538'
  },
  errorStyle: {
    height: 50,
    borderColor: 'red',
    borderWidth: 2,
    borderRadius: 4,
    color: '#000',
    paddingHorizontal: 5
  },
  testErrorStyle: {
    color: 'red'
  }
};

export {Input};