import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StyleGuideScreen from './src/screens/StyleGuideScreen';
import homeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import DeliveriesScreen from './src/screens/DeliveriesScreen';
import VacationStopsScreen from './src/screens/VacationStopsScreen';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Style Guide" component={StyleGuideScreen} />
        <Tab.Screen name="Deliveries" component={DeliveriesScreen} />
        <Tab.Screen name="Vacation Stops" component={VacationStopsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const BottomNav = () => {
  return (
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
  )
}

export default App;
