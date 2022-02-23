import {Platform, TouchableOpacity} from 'react-native';
import React from 'react';

export default (props) => {
    const Component = Platform.select({
        ios: () => TouchableOpacity,
        android: () => TouchableOpacity,
    })();
    return <Component {...props}/>;
};
