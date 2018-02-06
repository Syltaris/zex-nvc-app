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
            userProfile: {
                profile: {
                    name: 'Bacon Pork',
                    age: '23',
                    email: 'piggyfarms@vegan.com',
                    contact_number: '509-232-5319',
                },
                address: {
                    street: '1648 Dane Street',
                    state: 'Spokane, Washington(WA)',
                    postal: '99201',
                }
            },
            subscriptions : [
                {
                    key: 1,
                    name: 'Perfected Strike',
                    image_uri: require('../../res/img/salad1.jpg'),
                    description: 'Tasty poison.',
                    next_arrival_time: 'Sometime like never'
                },
                {
                    key: 2,
                    name: 'uhuhuhuhuh',
                    image_uri: {uri: 'https://source.unsplash.com/collection/345760/200x100'}, 
                },
                {
                    key: 3,
                    name: 'uhuhuhuhuh',
                    image_uri: {uri: 'https://source.unsplash.com/collection/345760/201x100'},
                },
                {
                    key: 4,
                    name: 'uhuhuhuhuh',
                    image_uri: {uri: 'https://source.unsplash.com/collection/345760/200x101'},
                }
            ]
        }
    }

    _renderSubscriptionCard = ({item, seperators}) => (
        <View>
            <Card 
            key={item.key} 
            image={item.image_uri}
            featuredSubtitle={item.name}
            containerStyle={{width: 200}}>
                <Text>{item.description}</Text>
                <Text>{item.next_arrival_time}</Text>
            </Card>
        </View>
    );

    render() {
      return (
            <View style={styles.container}>
                <MainHeader 
                title="PROFILE"
                navigation={this.props.navigation} />
                <View style={styles.containerReverse}>
                    <View style={styles.container}>
                        <View style={{flex: 0.15, width: '100%'}}>
                            <Card>
                                <Text>Name: {this.state.userProfile.profile.name}</Text>
                                <Text>Age: {this.state.userProfile.profile.age}</Text>
                                <Text>Email: {this.state.userProfile.profile.email}</Text>
                                <Text>Contact: {this.state.userProfile.profile.contact_number}</Text>
                            </Card>
                        </View>
                        <View style={{flex: 0.15, width: '100%'}}>
                            <Card >
                                <Text>Address: </Text>
                                <Text>{this.state.userProfile.address.street}</Text>
                                <Text>{this.state.userProfile.address.state}</Text>
                                <Text>{this.state.userProfile.address.postal}</Text>
                            </Card>                        
                        </View>
                        <View style={{flex: 0.7, width: '100%'}}>
                            <Card containerStyle={{flex: 1, padding : 0 }}>
                                <Text>Subscriptions: </Text>
                                <FlatList
                                horizontal
                                showsHorizontalScrollIndicator={false}
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