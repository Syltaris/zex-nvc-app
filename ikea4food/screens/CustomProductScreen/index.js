import React, { Component } from 'react';
import {
  Text,
  View,
  Modal
} from 'react-native';
import {
  Slider,
  Card,
  Button
} from 'react-native-elements';

import MainHeader from '../../components/MainHeader';
import BottomNav from '../../components/BottomNav';

import styles from '../../stylesheets/styles';

export default class CustomProductScreen extends Component {
  constructor() {
    super();
    this.state = {
      showShoppingCart: false,
      product_composition: {
        kale: 0,
        potatoes: 0,
        tomatoes: 0,
        spinach: 0,
        dressing: 0,
      }
    }
  }

  calculateNutrients = () => {
    return(
      <View>
        <Text>Proteins: 
          {(this.state.product_composition.kale * 5).toFixed(1)}
        </Text>
        <Text>Fats: 
          {(this.state.product_composition.potatoes + this.state.product_composition.dressing * 4).toFixed(1)}
        </Text>
        <Text>Carbohydrates: 
          {(this.state.product_composition.potatoes * 4 + this.state.product_composition.tomatoes).toFixed(1)}
        </Text>
        <Text>Vitamin A/B/C/D/E: 
          {(this.state.product_composition.tomatoes + this.state.product_composition.spinach + this.state.product_composition.kale).toFixed(1)}
        </Text>
      </View>
    );
  }

  populateSliders = () => {
    return Object.keys(this.state.product_composition).map((key) => {
      return(
        <View 
        key={key} 
        style={{flex: 1, alignItems: 'stretch', justifyContent: 'center', width: '80%'}}>
          <Slider
          key={key}
          step={0.1}
          thumbTouchSize={{width: 60, height: 60}}
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

  calculateCost = () => {
    var totalCost = 0;
    for(item in this.state.product_composition) {
      totalCost += this.state.product_composition[item]*0.2;
    }
    return totalCost.toFixed(2);
  }

  populateShoppingCart = () => {
    return (
      <Card
      containerStyle={styles.card_shoppingCartItem}>
        <Text
        style={styles.text_shoppingCartItemName}>
          Your New Custom Meal
        </Text>
        {
          Object.keys(this.state.product_composition).map((key) => {
            return (
              <Text key={key}>{key}: {this.state.product_composition[key].toFixed(1)}g</Text>
            );
          })
        }
        <Text
        style={styles.text_shoppingCartItemPrice}>
          Price: ${this.calculateCost()}
        </Text>
      </Card>
    );
  }
  openShoppingCart = () => {this.setState({showShoppingCart: true})}
  closeShoppingCart = () => {this.setState({showShoppingCart: false})}

  render() {
    return (
          <View style={styles.container}>
              <Modal
              transparent
              visible={this.state.showShoppingCart}
              animationType={'slide'}
              onRequestClose={() => this.closeShoppingCart()}>
                <View style={styles.container_shoppingCart}>
                  <Card
                    containerStyle={styles.card_shoppingCart}>
                    <Text style={styles.text_header}>
                        Your Shoppping List
                    </Text>
                    <View style={{marginBottom: 10}}>
                      {this.populateShoppingCart()}
                    </View>
                    <Button
                    raised
                    title="CHECKOUT"
                    onPress={() => this.closeShoppingCart()}/>
                  </Card>
                </View>
              </Modal>
              <MainHeader 
              title="CUSTOMIZED PACKAGE" 
              navigation={this.props.navigation}/>
              <View style={styles.containerReverse}>
                <View style={styles.container}>
                  <View style={styles.container_sliders}>
                    {this.populateSliders()}
                  </View>
                  <View style={{flex: 0.2, width: '100%'}}>
                    <Card>
                      <Text>Nutrients</Text>
                      {this.calculateNutrients()}
                    </Card>
                  </View>
                  <View
                  style={{flex: 0.1, width: '100%'}}>
                    <Button
                    buttonStyle={styles.button_fullWidth}
                    onPress={() => this.openShoppingCart()}
                    title="PURCHASE"/>
                  </View>
                </View>
                <BottomNav navigation={this.props.navigation} />
              </View>
          </View>
    );
  }
}