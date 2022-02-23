import React from 'react';
import Touchable from './Touchable';
import {Image, Text} from 'react-native';

export default ({style, textStyle, imageStyle, source, resizeMode, text, onPress, onLongPress}) => {
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
            <Image
                style={imageStyle}
                source={source}
                resizeMode={resizeMode}/>
        </Touchable>
    );
}
