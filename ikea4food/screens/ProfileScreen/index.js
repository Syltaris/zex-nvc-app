import React, { Component } from 'react';
import {
  Text,
  View
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
                    name: 'sure',
                },
                {
                    key: 2,
                    name: 'uhuh',
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
                    <Card key={subscribedPackage.key} style={{width: '33%'}}>
                        <Text>{subscribedPackage.name}</Text>
                    </Card>
                );
            });
        }
    }

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
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                                    {this.populateSubscriptionCards()}
                                </View>
                            </Card>                        
                        </View>
                    </View>
                    <BottomNav navigation={this.props.navigation}/>
                </View>
            </View>
      );
    }
  }