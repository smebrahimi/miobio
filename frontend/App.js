import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
} from 'react-native';

import {
  Header,
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import { Input } from './src/components/TextInput'

const App: () => React$Node = () => {

  const [values, setValues] = useState({
    email: '',
    password: ''
  });
  
  const onChange = (value) => {
    setValues(value);
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>

          <View style={styles.body}>
            <Input
              label="Email"
              name="email"
              placeholder="E-Mail"
              error={false}
              required
              onChange={onChange}
              value={values.email}
            ></Input>

            <Input
              name="password"
              placeholder="Password"
              error={true}
              required
              secureTextEntry
              onChange={onChange}
              error
              helperText="password is required"
              value={values.password}
            ></Input>
          </View>

        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    padding: 15
  }
});

export default App;
