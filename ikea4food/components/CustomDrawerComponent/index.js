import React from 'react';
import {
    View,
    Image,
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
        style={styles.container_drawerItems} 
        forceInset={{ top: 'always', horizontal: 'never' }}>
            <View style={styles.drawer_top}>
                <Image />
            </View>
            <DrawerItems 
            {...props}
            items={props.items.filter((item) => item.routeName === 'Settings')}/>
        </SafeAreaView>
    </ScrollView>
);