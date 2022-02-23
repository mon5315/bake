import * as React from 'react';
import {WebView} from 'react-native-webview';

export default function App({route}) {
    const {url} = route.params;
    return (
        <WebView
            source={{uri: url}}
        />
    );
}

