import React, {Component} from 'react';
import get from 'lodash.get';
import set from 'lodash.set';
import * as AsyncStorageUtils from './AsyncStorageUtils';
import StorageConstants from '../Constant/StorageConstants';

const store = {};

export function getValue(key, defaultValue = null) {
    let value = get(store, key, defaultValue);
    if (value === null) {
        value = defaultValue;
    }
    return value;
}

export function setValue(key, value) {
    set(store, key, value);
    AsyncStorageUtils.setValue(key, value);
}

export function setHeart(value) {
    setValue(StorageConstants.User.heart, value);
}
export function getHeart() {
    return getValue(StorageConstants.User.heart);
}
