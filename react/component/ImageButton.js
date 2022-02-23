import React, {Component} from 'react';
import Touchable from './Touchable';
import {Image} from 'react-native';

export default ({style, onPress, onLongPress, source}) => {
    return (
        <Touchable
            style={style}
            onPress={() => {
                if (onPress) {
                    onPress();
                }
            }}
            onLongPress={() => {
                if (onLongPress) {
                    onLongPress();
                }
            }}>
            <Image source={source}/>
        </Touchable>
    );
}
