import React from 'react';
import {
    View
} from 'react-native';
import {
    Header,
} from 'react-native-elements';

import MenuButton from '../../components/pressables/MenuButton';
import { Colors } from '../../stylesheets/styles';

export default MainHeader = (props) => {
    return (
        <View style={{width: '100%'}}>
            <Header
            backgroundColor={Colors.PRIMARY}
            leftComponent={<MenuButton />}
            centerComponent={{ text: props.title, style: { color: '#fff' } }}/>
        </View>
    );
}