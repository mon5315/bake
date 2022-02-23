import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import Main from '../view/Main';
import quiz_a from '../view/Quiz/Quiz_a';
import quiz_b from '../view/Quiz/Quiz_b';
import quiz_c from '../view/Quiz/Quiz_c';
import quiz_4 from '../view/Quiz/Quiz_4';
import quiz_5 from '../view/Quiz/Quiz_5';
import quiz_6 from '../view/Quiz/Quiz_6';
import quiz_apple from '../view/Quiz/Quiz_apple';
import quiz_banana from '../view/Quiz/Quiz_banana';
import quiz_grape from '../view/Quiz/Quiz_grape';
import webview from '../component/Webview';


const Stack = createStackNavigator();

export default () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Main"
                screenOptions={{
                    animation: 'fade',
                    orientation: 'portrait',
                }}>
                <Stack.Screen name="Main" options={{headerShown: false}} component={Main}/>
                <Stack.Screen name="Webview" options={{headerShown: false}} component={webview}/>
                <Stack.Screen name="Quiz_a" options={{headerShown: false}} component={quiz_a}/>
                <Stack.Screen name="Quiz_b" options={{headerShown: false}} component={quiz_b}/>
                <Stack.Screen name="Quiz_c" options={{headerShown: false}} component={quiz_c}/>
                <Stack.Screen name="Quiz_4" options={{headerShown: false}} component={quiz_4}/>
                <Stack.Screen name="Quiz_5" options={{headerShown: false}} component={quiz_5}/>
                <Stack.Screen name="Quiz_6" options={{headerShown: false}} component={quiz_6}/>
                <Stack.Screen name="Quiz_apple" options={{headerShown: false}} component={quiz_apple}/>
                <Stack.Screen name="Quiz_banana" options={{headerShown: false}} component={quiz_banana}/>
                <Stack.Screen name="Quiz_grape" options={{headerShown: false}} component={quiz_grape}/>

            </Stack.Navigator>
        </NavigationContainer>
    );
};

