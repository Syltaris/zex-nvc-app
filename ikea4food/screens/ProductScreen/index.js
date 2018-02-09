import React, { Component } from 'react';
import {
  Text,
  View,
  Modal,
  FlatList,
  TouchableOpacity
} from 'react-native';
import {
    Card,
    Button
} from 'react-native-elements';

import DataHelpers from '../../models/schemas';

import MainHeader from '../../components/MainHeader';
import BottomNav from '../../components/BottomNav';
import styles from '../../stylesheets/styles';

export default class ProductScreen extends Component {
    constructor() {
        super();
        let products = DataHelpers.getAllProducts();
        let user = DataHelpers.getUserData();
        this.state = {
            showShoppingCart: false,
            selectedProduct: null,
            user: user,
            products: products,
            shoppingCart: user.shoppingCart || [],
        }
    }

    _renderProductCard = ({item, seperator}) => {
        return (
            <TouchableOpacity
            onPress={() => {
                this.addProductToShoppingCart(item);
            }}>
                <Card
                image={{uri: item.image_uri}}
                featuredSubtitle={item.name}
                containerStyle={{width: 400}}>
                    <Text>{item.description}</Text>
                    <Text>{item.price}</Text>
                </Card>
            </TouchableOpacity>
        );
    }

    populateShoppingCart = () => {
        return (
            this.state.shoppingCart.map((cartItem)=> {
                return (
                    <Card
                    key
                    containerStyle={styles.card_shoppingCartItem}>
                        <Text
                        style={styles.text_shoppingCartItemName}>
                            {cartItem.name}
                        </Text>
                        <Text
                        style={styles.text_shoppingCartItemPrice}>
                        Price: ${cartItem.price}
                        </Text>
                    </Card>
                );
            })
        );
    }
    openShoppingCart = () => {this.setState({showShoppingCart: true})}
    closeShoppingCart = () => {this.setState({showShoppingCart: false})}

    addProductToShoppingCart = (itemToAdd) => {
        DataHelpers.addShoppingCartItem(this.state.user, itemToAdd);
        this.setState({shoppingCart: DataHelpers.getUserData().shoppingCart});
        this.openShoppingCart();
    }
    checkoutShoppingCart = () => {
        var updatedSubscriptions = this.state.shoppingCart.map((cartItem) => 
            DataHelpers.addSubscriptionItem(this.state.user, cartItem));
        this.closeShoppingCart();
        DataHelpers.clearShoppingCart(this.state.user);
        this.setState({shoppingCart: DataHelpers.getUserData().shoppingCart});
    }

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
                        onPress={() => this.checkoutShoppingCart()}/>
                    </Card>
                    </View>
                </Modal>

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