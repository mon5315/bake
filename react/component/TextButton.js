import React from 'react';
import Touchable from './Touchable';
import {Image, Text} from 'react-native';

export default ({style, textStyle, text, onPress, onLongPress}) => {
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
            <Text style={textStyle}>{text}</Text>
        </Touchable>
    );
}
