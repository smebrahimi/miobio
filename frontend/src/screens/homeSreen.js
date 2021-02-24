import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { Button } from '../components/Button'

const homeScreen= ({
  navigation,
}: StackScreenProps<{ Home: undefined }>) => {
  return (
    <>
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>

          <View style={styles.body}>
            <Text>Hiiii</Text>
          </View>
          <Button
            title="Style Guide"
            onPress={() =>
              navigation.navigate('Style Guide')
            }
          />
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

export default homeScreen;
