import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import React from 'react';
import Book from './screens/Book';
import Destination from './screens/Destination';
import Pickup from './screens/Pickup';
import Map from './screens/Map';
import Home from './screens//Home';
const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            gestureEnabled: true,
            title: undefined,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Pickup"
          component={Pickup}
          options={{
            gestureEnabled: true,
            headerStyle: {
              elevation: 0, //for android
              shadowOpacity: 0, //for ios
              borderBottomWidth: 0, //for ios
              backgroundColor: 'white',
            },
            headerTintColor: 'black',
            headerBackTitleVisible: false,
            title: ' ',
          }}
        />
        <Stack.Screen
          name="Destination"
          component={Destination}
          options={{
            gestureEnabled: true,
            headerStyle: {
              elevation: 0, //for android
              shadowOpacity: 0, //for ios
              borderBottomWidth: 0, //for ios
              backgroundColor: 'white',
            },
            headerTintColor: 'black',
            headerBackTitleVisible: false,
            title: ' ',
          }}
        />
        <Stack.Screen
          name="Map"
          component={Map}
          options={{
            headerTransparent: true,
            gestureEnabled: true,
            headerTintColor: 'black',
            headerBackTitleVisible: false,
            title: ' ',
          }}
        />
        <Stack.Screen
          name="Book"
          component={Book}
          options={{
            gestureEnabled: true,
            headerStyle: {
              elevation: 0, //for android
              shadowOpacity: 0, //for ios
              borderBottomWidth: 0, //for ios
              backgroundColor: 'white',
            },
            headerTintColor: 'black',
            headerBackTitleVisible: false,
            title: ' ',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
