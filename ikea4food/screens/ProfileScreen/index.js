import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity
} from 'react-native';
import {
    Card
} from 'react-native-elements';

import DataHelpers from '../../models/schemas';

import MainHeader from '../../components/MainHeader';
import BottomNav from '../../components/BottomNav';
import styles from '../../stylesheets/styles';

export default class ProfileScreen extends Component {
    constructor() {
        super();
        let userData = DataHelpers.getUserData();
        this.state = {
            userProfile: userData.profile,
            userAddress: userData.profile.address,
            subscriptions : userData.subscriptions
        }
    }

    _renderSubscriptionCard = ({item, seperator}) => {
        return(
            <TouchableOpacity>
                <Card
                key={item.id}
                image={{uri: item.product.image_uri}}
                featuredSubtitle={item.product.name}
                containerStyle={{width: 200}}>
                    <Text>{item.product.description}</Text>
                    <Text>Next Arrival: {item.next_arrival_time.toLocaleString()}</Text>
                </Card>
            </TouchableOpacity>
        );
    };

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
                                <Text>Name: {this.state.userProfile.name}</Text>
                                <Text>Age: {this.state.userProfile.age}</Text>
                                <Text>Email: {this.state.userProfile.email}</Text>
                                <Text>Contact: {this.state.userProfile.contact_number}</Text>
                            </Card>
                        </View>
                        <View style={{flex: 0.15, width: '100%'}}>
                            <Card >
                                <Text>Address: </Text>
                                <Text>{this.state.userAddress.street}</Text>
                                <Text>{this.state.userAddress.state}</Text>
                                <Text>{this.state.userAddress.zip}</Text>
                            </Card>                        
                        </View>
                        <View style={{flex: 0.7, width: '100%'}}>
                            <Card containerStyle={{flex: 1, padding : 0 }}>
                                <Text>Subscriptions: </Text>
                                <FlatList
                                horizontal
                                keyExtractor={(item) => item.product.id}
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