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

export default class ProfileScreen extends Component {
    constructor() {
        super();
        this.state = {
            subscriptions : [
                {
                    key: 1,
                    name: 'sureeee',
                    image_uri: require('../../res/img/salad1.jpg'),
                },
                {
                    key: 2,
                    name: 'uhuhuhuhuh',
                    image_uri: 'https://source.unsplash.com/random/400x200',
                },
                {
                    key: 3,
                    name: 'uhuhuhuhuh',
                    image_uri: 'https://source.unsplash.com/random/400x200',
                },
                {
                    key: 4,
                    name: 'uhuhuhuhuh',
                    image_uri: 'https://source.unsplash.com/random/400x200',
                }
            ]
        }
    }

    populateSubscriptionCards() {
        if (this.state.subscriptions == null) {
            return <Text>"You have no subscriptions!"</Text>
        } else {
            return this.state.subscriptions.map((subscribedPackage) => {
                return (
                    <View 
                    style={{width: '33%'}}>
                        <Card 
                        key={subscribedPackage.key} 
                        image={subscribedPackage.image_uri}
                        featuredSubtitle="Delicious Poision">
                            <Text>{subscribedPackage.name}</Text>
                        </Card>
                    </View>
                );
            });
        }
    }

    _renderSubscriptionCard = ({item, seperators}) => (
        <View>
            <Card 
            key={item.key} 
            image={item.image_uri}
            featuredSubtitle="Delicious Poision"
            containerStyle={{ width: 200 }}>
                <Text>{item.name}</Text>
            </Card>
        </View>
    );

    render() {
      return (
            <View style={styles.container}>
                <MainHeader title="PROFILE" />
                <View style={styles.containerReverse}>
                    <View style={styles.container}>
                        <View style={{flex: 0.15, width: '100%'}}>
                            <Card >
                                <Text>Name: </Text>
                                <Text>Name: </Text>
                                <Text>Name: </Text>
                                <Text>Name: </Text>
                            </Card>
                        </View>
                        <View style={{flex: 0.15, width: '100%'}}>
                            <Card >
                                <Text>Address: </Text>
                                <Text>Address: </Text>
                                <Text>Address: </Text>
                                <Text>Address: </Text>
                            </Card>                        
                        </View>
                        <View style={{flex: 0.7, width: '100%'}}>
                            <Card containerStyle={{flex: 1}}>
                                <Text>Subscriptions: </Text>
                                <FlatList
                                horizontal
                                data={this.state.subscriptions}
                                renderItem={this._renderSubscriptionCard} />
                            </Card>
                        </View>
                    </View>
                    <BottomNav navigation={this.props.navigation}/>
                </View>
            </View>
      );
    }
  }