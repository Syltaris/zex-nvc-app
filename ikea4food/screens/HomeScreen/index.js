import React, { Component } from 'react';
import {
  Platform,
  Text,
  View
} from 'react-native';

import MainHeader from '../../components/MainHeader';
import BottomNav from '../../components/BottomNav';
import styles from '../../stylesheets/styles';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
      'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
      'Shake or press menu button for dev menu',
  });

export default class HomeScreen extends Component {
    render() {
      return (
            <View style={styles.container}>
                <MainHeader title="MAIN MENU" />
                <View style={styles.containerReverse}>
                    <Text style={styles.welcome}>
                    Welcome to React Native!3
                    </Text>
                    <Text style={styles.instructions}>
                    To get started, edit App.js
                    </Text>
                    <Text style={styles.instructions}>
                    {instructions}
                    </Text>
                  <BottomNav />
                </View>
            </View>
      );
    }
  }