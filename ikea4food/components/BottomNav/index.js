import React from 'react';
import {
    View,
    TouchableOpacity,
} from 'react-native';
import {
    Icon
} from 'react-native-elements';

import styles, { Colors } from '../../stylesheets/styles';

export default BottomNav = () => {
    return (
        <View style={styles.container_bottomNav}>
            <View style={styles.container_bottomNavButtons}>
                <Icon
                name="home"
                type="entypo"
                color={Colors.ICON_PRIMARY}/>
            </View>
            <View style={styles.container_bottomNavButtons}>
                <Icon
                name="home"
                type="entypo"
                color={Colors.ICON_PRIMARY}/>
            </View>
            <View style={styles.container_bottomNavButtons}>
                <Icon
                name="home"
                type="entypo"
                color={Colors.ICON_PRIMARY}/>
            </View>
            <View style={styles.container_bottomNavButtons}>
                <Icon
                name="home"
                type="entypo"
                color={Colors.ICON_PRIMARY}/>
            </View>
        </View>
    );
}