import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

import MainHeader from '../../components/MainHeader';
import BottomNav from '../../components/BottomNav';
import styles from '../../stylesheets/styles';

export default class HomeScreen extends Component {
    render() {
      return (
            <View style={styles.container}>
                <MainHeader title="MAIN MENU" />
                <View style={styles.containerReverse}>
                  <View style={styles.container}>
                    <Text style={styles.welcome}>
                    Welcome to React Native!3
                    </Text>
                  </View>
                  <BottomNav navigation={this.props.navigation} />
                </View>
            </View>
      );
    }
  }