import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  FlatList
} from 'react-native';
import {
    Card
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
            subscriptions : userData.subscriptions || false
        }
    }

    _renderRecipeCard = ({item, seperators}) => (
        <View>
            <Card 
            key={item.key} 
            featuredSubtitle={item.name}
            containerStyle={{width: 400}}>
                <View
                style={{flex:1, flexDirection: 'row'}}>
                    <Image
                    style={{width: 80, height: 80, borderRadius: 80}}
                    source={item.image_uri}/>
                    <View>
                        <Text
                        style={styles.text_header}>
                            {item.name}
                        </Text>
                        <Text style={styles.text_recipesDescription}>{item.description}</Text>
                    </View>
                </View> 
            </Card>
        </View>
    );

    render() {
      return (
            <View style={styles.container}>
                <MainHeader 
                title="RECIPES"
                navigation={this.props.navigation} />
                <View style={styles.containerReverse}>
                  <View style={styles.container_recipes}>
                    <FlatList
                    showsVerticalScrollIndicator={false}
                    data={this.state.subscriptions}
                    keyExtractor={(item) => item.id}
                    renderItem={this._renderRecipeCard} />
                  </View>
                  <BottomNav navigation={this.props.navigation} />
                </View>
            </View>
      );
    }
  }