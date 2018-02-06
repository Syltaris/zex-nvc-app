import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import {
  Slider
} from 'react-native-elements';

import MainHeader from '../../components/MainHeader';
import BottomNav from '../../components/BottomNav';
import styles from '../../stylesheets/styles';

export default class CustomProductScreen extends Component {
  constructor() {
    super();
    this.state = {
      product_composition: {
        kale: 0,
        potatoes: 0,
        tomatoes: 0,
        spinach: 0,
        dressing: 0,
      }
    }
  }

  populateSliders() {
    return Object.keys(this.state.product_composition).map((key) => {
      return(
        <View key={key} style={{flex: 1, alignItems: 'stretch', justifyContent: 'center', width: '80%'}}>
          <Slider
          key={key}
          step={0.1}
          value={this.state.product_composition[key]}
          onValueChange={(value) => {
            var updated_composition = this.state.product_composition;
            updated_composition[key] = value;
            this.setState({product_composition: updated_composition});
          }}/>
          <Text>{this.state.product_composition[key].toFixed(1)}g of {key}</Text>
        </View>
      );
    });
  }

  render() {
    return (
          <View style={styles.container}>
              <MainHeader title="CUSTOMIZED PACKAGE" />
              <View style={styles.containerReverse}>
                <View style={styles.container}>
                  {this.populateSliders()}
                </View>
                <BottomNav navigation={this.props.navigation} />
              </View>
          </View>
    );
  }
}