import React from 'react';
import {
    ScrollView
} from 'react-native';
import {
    DrawerItems,
    SafeAreaView,
} from 'react-navigation';

import SettingsScreen from '../../screens/SettingsScreen';

import styles from '../../stylesheets/styles';

export default CustomDrawerContentComponent = (props) => (
    <ScrollView>
        <SafeAreaView 
        style={styles.container} 
        forceInset={{ top: 'always', horizontal: 'never' }}>
            <DrawerItems 
            {...props}
            items={props.items.filter((item) => item.routeName === 'SettingsScreen')}/>
        </SafeAreaView>
    </ScrollView>
);