import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StyleGuideScreen from './src/screens/StyleGuideScreen';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import DeliveriesScreen from './src/screens/DeliveriesScreen';
import VacationStopsScreen from './src/screens/VacationStopsScreen';
import  baseStyles from './src/styles/base'
import {
  Text
} from 'react-native';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer theme={baseStyles.navigation}>
      <Tab.Navigator
        initialRouteName="Style Guide"
        tabBarOptions={{
          activeTintColor: '#A7EB8A',
          inactiveTintColor: '#FFFFFF'
        }}>
        <Tab.Screen
          name="Style Guide"
          component={StyleGuideScreen}
        />
        <Tab.Screen
          name="Deliveries"
          component={DeliveriesScreen}
        />
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
        component={HomeScreen}
      />
      <Stack.Screen
        name="Style Guide"
        component={StyleGuideScreen}
        options={{
          headerTitle: props => <Text>my title</Text>,
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Info"
              color="#00cc00"
            />
          ),
        }}
      />
    </Stack.Navigator>
  )
}

export default App;
