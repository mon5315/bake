import * as React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, StatusBar, TouchableOpacity, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import home from './Main_home';
import quiz from './Main_quiz';
import animation from './Main_animation';
import book from './Main_book';
import profile from './Main_profile';


const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="처음화면"
                        component={home}
                        options={{
                            headerShown: false,
                            tabBarStyle: { height: 60},
                            tabBarIcon: ({focused}) =>
                                focused ? (
                                    <Image
                                        source={require('../../assets/images/homeOn.png')}
                                    />
                                ) : (
                                    <Image
                                        source={require('../../assets/images/homeOff.png')}
                                    />
                                ),

                        }}
            />
            <Tab.Screen name="퀴즈"
                        component={quiz}
                        options={{
                            headerShown: false,
                            tabBarStyle: { height: 60},
                            tabBarIcon: ({focused}) =>
                                focused ? (
                                    <Image
                                        source={require('../../assets/images/quizOn.png')}
                                    />
                                ) : (
                                    <Image
                                        source={require('../../assets/images/quizOff.png')}
                                    />
                                ),
                        }}
            />
            <Tab.Screen name="만화"
                        component={animation}
                        options={{
                            headerShown: false,
                            tabBarStyle: { height: 60},
                            tabBarIcon: ({focused}) =>
                                focused ? (
                                    <Image
                                        source={require('../../assets/images/animationOn.png')}
                                    />
                                ) : (
                                    <Image
                                        source={require('../../assets/images/animationOff.png')}
                                    />
                                ),
                        }}
            />
            <Tab.Screen name="책"
                        component={book}
                        options={{
                            unmountOnBlur: true,
                            headerShown: false,
                            tabBarStyle: { height: 60},
                            tabBarIcon: ({focused}) =>
                                focused ? (
                                    <Image
                                        source={require('../../assets/images/bookOn.png')}
                                    />
                                ) : (
                                    <Image
                                        source={require('../../assets/images/bookOff.png')}
                                    />
                                ),
                        }}
            />
            <Tab.Screen name="내정보"
                        component={profile}
                        options={{
                            unmountOnBlur: true,
                            headerShown: false,
                            tabBarStyle: { height: 60},
                            tabBarIcon: ({focused}) =>
                                focused ? (
                                    <Image
                                        source={require('../../assets/images/profileOn.png')}
                                    />
                                ) : (
                                    <Image
                                        source={require('../../assets/images/profileOff.png')}
                                    />
                                ),
                        }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    img_tab: {
        height: 48,
        backgroundColor: '#70C9E8',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
