import {Alert,StyleSheet} from 'react-native';


export function show(title, message, left, right) {

    return new Promise((resolve) => {
        const buttons = [];
        const onPress = (result) => {
            resolve(result);
        };
        if (left) {
            buttons.push({text: left, style: 'cancel', onPress: () => onPress(false)});
        }
        if (right) {
            buttons.push({text: right, onPress: () => onPress(true)});
        }
        Alert.alert(title, message, buttons);
    }
    );
}
export function showYes(title, message) {
    return show(title, message, null, '확인');
}

export function showYesOrNo(title, message) {
    return show(title, message, '취소', '확인');
}

;
