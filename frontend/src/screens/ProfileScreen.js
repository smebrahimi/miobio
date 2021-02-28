import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
} from 'react-native';
import  baseStyles from '../styles/base'

const profileScreen= ({navigation}) => {
  return (
    <>
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic">

          <View>
            <Text style={baseStyles.h1}>Profile</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default profileScreen;
