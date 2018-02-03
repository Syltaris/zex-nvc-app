import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
} from 'react-native';
import {
    Icon
} from 'react-native-elements';

import styles, { Colors } from '../../stylesheets/styles';

export default class BottomNav extends Component {
    render() {
        return (
            <View style={styles.container_bottomNav}>
                <TouchableOpacity 
                style={styles.container_bottomNavButtons}
                onPress={() => {this.props.navigation.navigate({ routeName: 'HomeScreen' })}}>
                    <Icon
                    name="home"
                    type="entypo"
                    color={Colors.ICON_PRIMARY}/>
                </TouchableOpacity>
                <TouchableOpacity 
                style={styles.container_bottomNavButtons}
                onPress={() => {this.props.navigation.goBack()}}>
                    <Icon
                    name="home"
                    type="entypo"
                    color={Colors.ICON_PRIMARY}/>
                </TouchableOpacity>
                <TouchableOpacity 
                style={styles.container_bottomNavButtons}>
                    <Icon
                    name="home"
                    type="entypo"
                    color={Colors.ICON_PRIMARY}/>
                </TouchableOpacity>
                <TouchableOpacity 
                style={styles.container_bottomNavButtons}
                onPress={() => {this.props.navigation.navigate({ routeName: 'ProfileScreen' })}}>
                    <Icon
                    name="face-profile"
                    type="material-community"
                    color={Colors.ICON_PRIMARY}/>
                </TouchableOpacity>
            </View>
        );
    }
}