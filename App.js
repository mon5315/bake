import React from 'react';
import {AppProvider} from './react/AppContext';
import AppRouter from './react/router/AppRouter';
import {LogBox} from 'react-native';
import * as StorageUtils from './react/utils/StorageUtils';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
  "`new NativeEventEmitter()` was called with a non-null argument without the required `addListener` method.",
  "`new NativeEventEmitter()` was called with a non-null argument without the required `removeListeners` method."
]);


export default () => {

  StorageUtils.setHeart(5);

  return (
      <AppRouter/>
  );
};
