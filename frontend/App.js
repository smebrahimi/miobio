import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StyleGuideScreen from './src/screens/styleGuide';
import homeScreen from './src/screens/homeSreen';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={homeScreen}
        />
        <Stack.Screen
          name="Style Guide"
          component={StyleGuideScreen}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
