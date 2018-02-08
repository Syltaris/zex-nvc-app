import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList,
} from 'react-native';
import {
    Card
} from 'react-native-elements';

import DataHelpers from '../../models/schemas';

import MainHeader from '../../components/MainHeader';
import BottomNav from '../../components/BottomNav';
import styles from '../../stylesheets/styles';

export default class ProductScreen extends Component {
    constructor() {
        super();
        let products = DataHelpers.getAllProducts();
        this.state = {
            products: products
        }
    }

    _renderProductCard = ({item, seperator}) => {
        return (
            <Card
            key={item.id}
            image={{uri: item.image_uri}}
            featuredSubtitle={item.name}
            containerStyle={{width: 400}}>
                <Text>{item.description}</Text>
                <Text>{item.price}</Text>
            </Card>
        );
    }

    render() {
      return (
            <View style={styles.container}>
                <MainHeader 
                title="PRODUCTS"
                navigation={this.props.navigation} />
                <View style={styles.containerReverse}>
                    <View style={styles.container}>
                        <FlatList
                        showsVerticalScrollIndicator={false}
                        data={this.state.products}
                        keyExtractor={(item) => item.id}
                        renderItem={this._renderProductCard} />
                    </View>
                    <BottomNav navigation={this.props.navigation} />
                </View>
            </View>
      );
    }
  }