import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
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

export default class RecipesScreen extends Component {
    constructor() {
        super();
        let userData = DataHelpers.getUserData();
        this.state = {
            showRecipe: false,
            selectedRecipeInstructions: [],
            subscriptions : userData.subscriptions || []
        }
    }

    _renderRecipeCard = ({item, seperators}) => {
        return(
            <TouchableOpacity
            onPress={() => this.showRecipe(item.product.product_composition.recipe)}>
                <Card 
                key={item.product.key} 
                featuredSubtitle={item.product.name}
                containerStyle={{width: 400}}>
                    <View
                    style={{flex:1, flexDirection: 'row'}}>
                        <Image
                        style={{width: 80, height: 80, borderRadius: 80}}
                        source={{uri: item.product.image_uri}}/>
                        <View>
                            <Text
                            style={styles.text_header}>
                                {item.product.name}
                            </Text>
                            <Text style={styles.text_recipesDescription}>{item.product.description}</Text>
                        </View>
                    </View> 
                </Card>
            </TouchableOpacity>
        );
    };

    showRecipe = (recipe) => this.setState({showRecipe: true, selectedRecipeInstructions: recipe.instructions})
    hideRecipe = () => this.setState({showRecipe: false})

    _loadRecipe() {
        return(this.state.selectedRecipeInstructions.map((instruction) => {
            return(<Text>{instruction}</Text>);
        }));
    }

    render() {
      return (
            <View style={styles.container}>
                <Modal
                transparent
                visible={this.state.showRecipe}
                animationType={'fade'}
                onRequestClose={() => this.hideRecipe()}>
                    <View style={styles.modal_transparentBlack}>
                        <View style={styles.container_recipeList}>
                            <Card
                            containerStyle={styles.card_shoppingCart}>
                                {this._loadRecipe()}
                                <Button
                                raised
                                title="CLOSE"
                                onPress={() => this.hideRecipe()}/>
                            </Card>
                        </View>
                    </View>
                </Modal>
                <MainHeader 
                title="RECIPES"
                navigation={this.props.navigation} />
                    <View style={styles.containerReverse}>
                        <View style={styles.container_recipes}>
                            <FlatList
                            showsVerticalScrollIndicator={false}
                            data={this.state.subscriptions}
                            keyExtractor={(item) => item.product.id}
                            renderItem={this._renderRecipeCard} />
                        </View>
                        <BottomNav navigation={this.props.navigation} />
                    </View>
            </View>
      );
    }
  }