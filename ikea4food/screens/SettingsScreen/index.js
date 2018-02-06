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
                <MainHeader 
                title="SETTINGS"
                navigation={this.props.navigation} />
                <View style={styles.containerReverse}>
                  <View style={styles.container}>
                    <Text>
                        Uhh...you're probably not supposed to be here :P
                    </Text>
                  </View>
                </View>
            </View>
      );
    }
  }