import * as React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, StatusBar, TouchableOpacity, View, ScrollView} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';


export default function App({route, navigation}) {
    const [assign, setAssign] = React.useState(0);

    React.useEffect(() => {

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
                                navigation.navigate('Webview', {url: 'https://www.youtube.com/watch?v=B7ocIhwu9rk&t=196s&ab_channel=%EC%8B%AC%EC%8A%A4%ED%8B%B0%EB%B9%84Sim%27sTV'});
                            }}
                        >
                            <Text style={styles.txt_quiz_content_1}>보스베이비</Text>

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

                        </TouchableOpacity>

                        <View style={styles.view_line}/>

                        <TouchableOpacity
                            style={styles.area_txt_quiz}
                            onPress={() => {
                                navigation.navigate('Webview', {url: 'https://www.youtube.com/watch?v=qzR3ESi8ReU&t=2s&ab_channel=%5B%EC%98%81%EC%96%B4%EB%98%91%EB%9D%A0%5D%EC%98%81%EC%96%B4%EB%A5%BC%EB%98%91%EB%98%91%ED%95%98%EA%B2%8C%EA%B3%B5%EB%B6%80%ED%95%98%EB%8A%94%EB%B0%A9%EB%B2%95'});
                            }}
                        >
                            <Text style={styles.txt_quiz_content_1}>주토피아</Text>

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

                                videoId={'qzR3ESi8ReU'}
                            />

                        </TouchableOpacity>

                        <View style={styles.view_line}/>

                        <TouchableOpacity
                            style={styles.area_txt_quiz}
                            onPress={() => {
                                navigation.navigate('Webview', {url: 'https://www.youtube.com/watch?v=6AijUOnGgZQ&ab_channel=%5B%EC%98%81%EC%96%B4%EB%98%91%EB%9D%A0%5D%EC%98%81%EC%96%B4%EB%A5%BC%EB%98%91%EB%98%91%ED%95%98%EA%B2%8C%EA%B3%B5%EB%B6%80%ED%95%98%EB%8A%94%EB%B0%A9%EB%B2%95'});
                            }}
                        >
                            <Text style={styles.txt_quiz_content_1}>모아나</Text>

                            <YoutubePlayer
                                webViewStyle={styles.area_youtube}
                                width={wp('90%')}
                                initialPlayerParams={{
                                    controls: true,
                                    start: 48,
                                    end: 297,
                                    preventFullScreen: false,
                                    modestbranding: true,
                                    rel: false,
                                }}
                                height={200}
                                mute={true}
                                play={true}

                                videoId={'6AijUOnGgZQ'}
                            />

                        </TouchableOpacity>
                    </View>

                </ScrollView>

                <View style={styles.view_line}/>

            </SafeAreaView>
            {/*{assign === 0 ? <SearchView {...props}/> : <ClipView {...props}/>}*/}
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    scroll_content: {
        flex: 1,
        backgroundColor: '#C9E4ED',
    },
    content: {
        alignItems: 'center',
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
        marginBottom: 20,
    },
    area_youtube: {
        alignItems: 'flex-start',
        borderBottomRightRadius: 8,
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
    },
    view_line: {
        width: wp('100%'),
        marginTop: 20,
        height: 10,
        backgroundColor: '#9CDBE5',
    },

});
