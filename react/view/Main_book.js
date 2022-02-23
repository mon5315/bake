import * as React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, StatusBar, TouchableOpacity, View, ScrollView} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import ImageButton from '../component/ImageButton';


export default function App({route, navigation}) {
    const [title_book1, setTitle_book1] = React.useState(null);
    const [title_book2, setTitle_book2] = React.useState(null);
    const [title_book3, setTitle_book3] = React.useState(null);

    React.useEffect(() => {

        async function getPlayList(videoId) {
            const YOUTUBE_API_KEY = 'AIzaSyAYzGs1DQgxNibgpNOq-1QG3TQasLNnoLE';
            const url = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${YOUTUBE_API_KEY}&part=snippet,contentDetails,statistics,status`;
            const options = {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json;charset=UTF-8',
                },
            };
            let res = await fetch(url, options);

            let resOk = res && res.ok;
            if (resOk) {
                const resData = await res.json();
                const title = JSON.stringify(resData.items[0].snippet.title);

                return title;
            }

        }

        getPlayList('fF7RO3sz7TY').then((res) => {
            setTitle_book1(res);
        });
        getPlayList('fugjQxwy1Xs').then((res) => {
            setTitle_book2(res);
        });
        getPlayList('DUVi9fsmElk').then((res) => {
            setTitle_book3(res);
        });
    }, []);


    return (
        <>
            <SafeAreaView style={styles.container}>
                <StatusBar
                    animated={true}
                    backgroundColor="#19191A"/>
                <View style={styles.Area_top}>
                    <Image
                        style={styles.top_logo}
                        source={require('../../assets/images/topLogo.png')}
                        resizeMode={'contain'}
                    />
                </View>
                <ScrollView>
                    <View style={styles.content}>

                        <TouchableOpacity
                            style={styles.area_txt_quiz}
                            onPress={() => {
                                navigation.navigate('Webview', {url: 'https://www.youtube.com/watch?v=fF7RO3sz7TY&ab_channel=%EB%A6%AC%ED%8B%80%ED%8C%8D%EC%8A%A4-%EC%9E%AC%EB%B0%8C%EB%8A%94%EC%98%81%EC%96%B4'});
                            }}
                        >
                            <Text style={styles.txt_quiz_content_1}>{title_book1}</Text>
                            <Image
                                style={styles.img_book}
                                source={{uri: 'https://i.ytimg.com/vi/fF7RO3sz7TY/hqdefault.jpg'}}
                            />
                        </TouchableOpacity>
                        <View style={styles.view_line}/>
                        <TouchableOpacity
                            style={styles.area_txt_quiz}
                            onPress={() => {
                                navigation.navigate('Webview', {url: 'https://www.youtube.com/watch?v=fugjQxwy1Xs&ab_channel=%EB%A6%AC%ED%8B%80%ED%8C%8D%EC%8A%A4-%EC%9E%AC%EB%B0%8C%EB%8A%94%EC%98%81%EC%96%B4'});
                            }}
                        >
                            <Text style={styles.txt_quiz_content_1}>{title_book2}</Text>
                            <Image
                                style={styles.img_book}
                                source={{uri: 'https://i.ytimg.com/vi/fugjQxwy1Xs/hqdefault.jpg'}}
                            />
                        </TouchableOpacity>
                        <View style={styles.view_line}/>
                        <TouchableOpacity
                            style={styles.area_txt_quiz}
                            onPress={() => {
                                navigation.navigate('Webview', {url: 'https://www.youtube.com/watch?v=DUVi9fsmElk&ab_channel=%EB%A6%AC%ED%8B%80%ED%8C%8D%EC%8A%A4-%EC%9E%AC%EB%B0%8C%EB%8A%94%EC%98%81%EC%96%B4'});
                            }}
                        >
                            <Text style={styles.txt_quiz_content_1}>{title_book3}</Text>
                            <Image
                                style={styles.img_book}
                                source={{uri: 'https://i.ytimg.com/vi/DUVi9fsmElk/hqdefault.jpg'}}
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
        flex:1,
        backgroundColor: '#C9E4ED',
        alignItems: 'stretch',

    },
    Area_top: {
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

    view_line: {
        width: wp('100%'),
        marginTop: 20,
        height: 10,
        backgroundColor: '#9CDBE5',
    },

    img_book: {
        width: wp('90%'),
        height: 200,
        marginTop: 30,
    },

});
