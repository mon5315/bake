import * as React from 'react';
import {
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    StatusBar,
    TouchableOpacity,
    View,
    ScrollView,
} from 'react-native';
import TextButton from '../component/TextButton';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import YoutubePlayer from 'react-native-youtube-iframe';
import animation from './Main_animation';
import book from './Main_book';


export default function App({navigation}) {

    React.useEffect(() => {

    }, []);


    return (
        <>
            <SafeAreaView style={styles.container}>
                <StatusBar
                    animated={true}
                    backgroundColor="#19191A"/>
                <View style={styles.area_top}/>
                <TouchableOpacity
                    style={styles.area_top_webview}
                    onPress={() => {
                        navigation.navigate('Webview', {url: 'https://mycake.me/?locale=ko'});
                    }}
                >
                    <Text style={styles.txt_webview}>bake가 궁금해요?</Text>
                    <Image
                        style={styles.webview_char}
                        source={require('../../assets/images/charWebview.png')}
                        resizeMode={'contain'}
                    />
                </TouchableOpacity>
                <ScrollView style={styles.scroll_content}>
                    <View style={styles.content}>
                        <TouchableOpacity
                            style={styles.area_txt_quiz}
                            onPress={() => {
                                navigation.navigate('Quiz_apple');
                            }}
                        >
                            <Text style={styles.txt_quiz_content_1}>오늘의 퀴즈 : 과일 이름을 맞춰라!</Text>
                            <Text style={styles.txt_quiz_content_2}>알록달록 맛있는 과일들의 이름을 맞춰봐요!</Text>
                            <Image
                                style={styles.btn_arrow}
                                source={require('../../assets/images/btnArrow.png')}
                                resizeMode={'contain'}
                            />
                        </TouchableOpacity>
                        <View style={styles.area_quiz_abc}>
                            <Image
                                style={styles.img_abc}
                                source={require('../../assets/images/fruit.png')}
                                resizeMode={'contain'}
                            />
                            <TextButton
                                style={styles.area_btn}
                                onPress={() => {
                                    navigation.navigate('Quiz_grape');
                                }}
                                textStyle={styles.txt_btn}
                                text={'시 작'}
                            >
                            </TextButton>
                        </View>

                        <View style={styles.view_line}/>

                        <TouchableOpacity
                            style={styles.area_txt_quiz}
                            onPress={() => {
                                navigation.navigate('만화', { screen: 'animation' });
                            }}
                        >
                            <Text style={styles.txt_quiz_content_1}>만화영화 : 따라해봐요!</Text>
                            <Image
                                style={styles.btn_arrow}
                                source={require('../../assets/images/btnArrow.png')}
                                resizeMode={'contain'}
                            />
                        </TouchableOpacity>

                        <ScrollView
                            style={{marginTop: 20}}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        >
                            <YoutubePlayer
                                webViewStyle={styles.area_youtube}
                                width={wp('90%')}
                                initialPlayerParams={{
                                    controls: true,
                                    start: 134,
                                    end: 197,
                                    preventFullScreen: false,
                                    modestbranding: true,
                                    rel: false,
                                }}
                                height={200}
                                mute={true}
                                play={true}

                                videoId={'B7ocIhwu9rk'}
                            />

                            <YoutubePlayer
                                webViewStyle={styles.area_youtube}
                                width={wp('90%')}
                                initialPlayerParams={{
                                    controls: true,
                                    start: 443,
                                    end: 681,
                                    preventFullScreen: false,
                                    modestbranding: true,
                                    rel: false,
                                }}
                                height={200}
                                mute={true}
                                play={true}

                                videoId={'qzR3ESi8ReU'}
                            />

                        </ScrollView>

                        <View style={styles.view_line}/>

                        <TouchableOpacity
                            style={styles.area_txt_quiz}
                            onPress={() => {
                                navigation.navigate('책', { screen: 'book' });
                            }}
                        >
                            <Text style={styles.txt_quiz_content_1}>책 : 이제 책도 들어요!</Text>
                            <Image
                                style={styles.btn_arrow}
                                source={require('../../assets/images/btnArrow.png')}
                                resizeMode={'contain'}
                            />
                            <Image
                                style={styles.img_book}
                                source={{uri: 'https://i.ytimg.com/vi/fF7RO3sz7TY/hqdefault.jpg'}}
                            />
                        </TouchableOpacity>

                    </View>
                    <View style={styles.view_line}/>

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
        backgroundColor: '#C9E4ED',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    top_logo: {
        height: 48,
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
    area_top_webview: {
        height: 45,
        backgroundColor: '#70C9E8',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    webview_char: {
        position: 'absolute',
        bottom: 0,
        right: 20,
    },
    txt_webview: {
        fontSize: 18,
        fontWeight: '500',
        fontStyle: 'normal',
        color: '#000000',
    },
    area_txt_quiz: {
        width: wp('90%'),
        flexDirection: 'column',

        alignItems: 'flex-start',
        marginTop: 20,
    },
    txt_quiz_content_1: {
        fontSize: 20,
        fontWeight: '500',
        fontStyle: 'normal',
        color: '#000000',
    },
    txt_quiz_content_2: {
        fontSize: 15,
        fontWeight: '500',
        fontStyle: 'normal',
        color: '#8E8E8E',
    },
    btn_arrow: {
        position: 'absolute',
        right: 20,
        top: 10,
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
        marginTop: 15,
    },
    img_abc: {
        marginTop: 10,
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
    txt_btn: {
        fontSize: 25,
        fontWeight: '500',
        fontStyle: 'normal',
        color: '#000000',
    },
    view_line: {
        width: wp('100%'),
        marginTop: 20,
        height: 10,
        backgroundColor: '#9CDBE5',
    },
    area_youtube: {
        alignItems: 'flex-start',
        marginLeft: 20,
        borderBottomRightRadius: 8,
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
    },
    img_book: {
        width: wp('90%'),
        height: 200,
        marginTop: 30,
    },
});
