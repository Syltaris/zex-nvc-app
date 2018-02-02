import React from 'react';
import {
    Header,
} from 'react-native-elements';

export default MainHeader = (props) => {
    return (
        <Header
        leftComponent={<MenuButton />}
        centerComponent={{ text: props.title, style: { color: '#fff' } }}/>
    );
}