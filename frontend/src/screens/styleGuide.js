import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { Input } from '../components/TextInput'
import { Button } from '../components/Button'


const StyleGuideScreen= ({
  navigation,
}: StackScreenProps<{ StyleGuide: undefined }>) => {

  const [values, setValues] = useState({
    email: '',
    password: ''
  });
  
  const onChange = (value) => {
    setValues(value);
  };

  const onPress = () => {
    console.log(`It's working.`);
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

            <Button
              title="Ferienstopp hinzufügen"
              onPress={onPress}
            />
            <Button
              type="outline"
              title="Ferienstopp hinzufügen"
              onPress={onPress}
            />

            <Button
              title="Go to Home"
              onPress={() =>
                navigation.navigate('Home')
              }
            />
          </View>

        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
  },
  body: {
    padding: 15
  }
});

export default StyleGuideScreen;
