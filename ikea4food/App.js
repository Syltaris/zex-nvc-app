/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { DrawerNavigator } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';

export default RootNavigator = DrawerNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      header: null,
    },
  },
  ProfileScreen: {
    screen: ProfileScreen,
    navigationOptions: {
      header: null,
    },
  },
})
