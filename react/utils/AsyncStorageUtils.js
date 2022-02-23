import AsyncStorage from '@react-native-async-storage/async-storage';

export function setValue(key, value) {
    return AsyncStorage.setItem(key, JSON.stringify({value}));
}

export function getValue(key, defaultValue) {
    return AsyncStorage.getItem(key).then((result) => {
        if (result) {
            return JSON.parse(result).value;
        } else {
            return defaultValue;
        }
    });
}
