import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList,
} from 'react-native';
import {
    Card
} from 'react-native-elements';

import MainHeader from '../../components/MainHeader';
import BottomNav from '../../components/BottomNav';
import styles from '../../stylesheets/styles';

export default class ProductScreen extends Component {
    constructor() {
        super();
        this.state = {
            products: [
                {
                    key: 1,
                    name: 'McCreamy',
                    image_uri: {uri: 'https://source.unsplash.com/collection/345760/800x100'},
                    description: 'This is a lovely package of greens.',
                    price: '$4.99'
                },
                {
                    key: 2,
                    name: 'McCreamier',
                    image_uri: {uri: 'https://source.unsplash.com/collection/345760/800x101'},
                    description: 'This is a lovely package of greens.',
                    price: '$4.99'
                },
                {
                    key: 3,
                    name: 'McCreamiest',
                    image_uri: {uri: 'https://source.unsplash.com/collection/345760/801x100'},
                    description: 'This is a lovely package of greens.',
                    price: '$4.99'
                },
                {
                    key: 4,
                    name: 'Cocaine',
                    image_uri: {uri: 'https://source.unsplash.com/collection/345760/801x101'},
                    description: 'This is a lovely package of greens.',
                    price: '$4.99'
                }
            ]
        }
    }

    _renderProductCard = ({item, seperator}) => {
        return (
            <Card
            key={item.key} 
            image={item.image_uri}
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
                <MainHeader title="PRODUCTS" />
                <View style={styles.containerReverse}>
                    <View style={styles.container}>
                        <FlatList
                        showsVerticalScrollIndicator={false}
                        data={this.state.products}
                        renderItem={this._renderProductCard} />
                    </View>
                    <BottomNav navigation={this.props.navigation} />
                </View>
            </View>
      );
    }
  }