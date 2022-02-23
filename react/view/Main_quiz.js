import * as React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, StatusBar, TouchableOpacity, View, ScrollView} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ImageButton from '../component/ImageButton';
import TextButton from '../component/TextButton';

function randomNum(min,max){
    let Num = Math.floor(Math.random()*(max-min+1))+min;
    return Num
}

export default function App({route, navigation}) {
    React.useEffect(() => {
    }, []);

    const Quiz_abc = () => {
        switch (randomNum(1,3)) {
            default:
            case 1:
                return navigation.navigate("Quiz_a");
            case 2:
                return navigation.navigate("Quiz_a");
            case 3:
                return navigation.navigate("Quiz_a");
        }
    }

    const Quiz_num = () => {
        switch (randomNum(1,3)) {
            default:
            case 1:
                return navigation.navigate("Quiz_4");
            case 2:
                return navigation.navigate("Quiz_4");
            case 3:
                return navigation.navigate("Quiz_4");
        }
    }

    const Quiz_fruit = () => {
        switch (randomNum(1,3)) {
            default:
            case 1:
                return navigation.navigate("Quiz_apple");
            case 2:
                return navigation.navigate("Quiz_apple");
            case 3:
                return navigation.navigate("Quiz_apple");
        }
    }
    return (
        <>
            <SafeAreaView style={styles.container}>
                <StatusBar
                    animated={true}
                    backgroundColor="#19191A"/>
                <View style={styles.area_top}>
                    <Image
                        style={styles.top_logo}
                        source={require('../../assets/images/topLogo.png')}
                        resizeMode={'contain'}
                    />
                </View>
                <ScrollView style={styles.scroll_content}>
                    <View style={styles.content}>
                        <View style={styles.area_quiz_abc}>
                            <Image
                                style={styles.img_abc}
                                source={require('../../assets/images/abc.png')}
                                resizeMode={'contain'}
                            />
                            <TextButton
                                style={styles.area_btn}
                                onPress={Quiz_abc}
                                textStyle={styles.txt_btn}
                                text={"시 작"}
                            >
                            </TextButton>
                        </View>
                        <View style={styles.area_quiz_abc}>
                            <Image
                                style={styles.img_abc}
                                source={require('../../assets/images/number.png')}
                                resizeMode={'contain'}
                            />
                            <TextButton
                                style={styles.area_btn}
                                onPress={Quiz_num}
                                textStyle={styles.txt_btn}
                                text={"시 작"}
                            >
                            </TextButton>
                        </View>
                        <View style={styles.area_bottom_quiz_abc}>
                            <Image
                                style={styles.img_abc}
                                source={require('../../assets/images/fruit.png')}
                                resizeMode={'contain'}
                            />
                            <TextButton
                                style={styles.area_btn}
                                onPress={Quiz_fruit}
                                textStyle={styles.txt_btn}
                                text={"시 작"}
                            >
                            </TextButton>
                        </View>

                    </View>
                </ScrollView>


            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C9E4ED',
        alignItems: 'stretch',
    },
    area_top: {
        height: 48,
        backgroundColor: '#70C9E8',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    top_logo: {
        height: 48,
        backgroundColor: '#70C9E8',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    scroll_content: {
        flex: 1,
        backgroundColor: '#C9E4ED',
    },
    content: {
        alignItems: 'center',
    },
    area_quiz_abc: {
        width: wp('90%'),
        height: 250,
        backgroundColor: '#ffffff',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomRightRadius: 15,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        marginTop: 25,
    },
    area_bottom_quiz_abc: {
        width: wp('90%'),
        height: 250,
        backgroundColor: '#ffffff',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomRightRadius: 15,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        marginTop: 25,
        marginBottom:25,
    },
    area_btn: {
        width: wp('80%'),
        height: 70,
        backgroundColor: '#70C9E8',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomRightRadius: 8,
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        marginTop: 30,
    },
    img_abc: {
        marginTop: 10,
    },
    txt_btn: {
        fontSize: 25,
        fontWeight: '500',
        fontStyle: 'normal',
        color: '#000000',
    },

});
