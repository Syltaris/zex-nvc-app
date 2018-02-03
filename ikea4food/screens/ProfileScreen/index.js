import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

import MainHeader from '../../components/MainHeader';
import BottomNav from '../../components/BottomNav';
import styles from '../../stylesheets/styles';

export default class ProfileScreen extends Component {
    render() {
      return (
            <View style={styles.container}>
                <MainHeader title="PROFILE" />
                <View style={styles.containerReverse}>

                  <BottomNav navigation={this.props.navigation}/>
                </View>
            </View>
      );
    }
  }