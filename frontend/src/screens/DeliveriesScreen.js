import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
} from 'react-native';
import  baseStyles from '../styles/base'

const deliveriesScreen= ({navigation}) => {
  return (
    <>
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic">
          <View>
            <Text style={baseStyles.h1}>Deliveries</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};



export default deliveriesScreen;
