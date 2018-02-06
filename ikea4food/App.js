/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { DrawerNavigator } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import ProductScreen from './screens/ProductScreen';
import CustomProductScreen from './screens/CustomProductScreen';

import CustomDrawerComponent from './components/CustomDrawerComponent';

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
  ProductScreen: {
    screen: ProductScreen,
    navigationOptions: {
      header: null,
    }
  },
  CustomProductScreen: {
    screen: CustomProductScreen,
    navigationOptions: {
      header: null,
    }
  }
}, {
  contentComponent: CustomDrawerComponent,
})
