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
    Modal,
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ImageButton from '../../component/ImageButton';
import TextButton from '../../component/TextButton';
import Tts from 'react-native-tts';
import * as StorageUtils from '../../utils/StorageUtils';
import Quiz_ox from './Quiz_ox';
import Quiz_heart from './Quiz_heart';


export default function App({route, navigation}) {
    const [alert, setAlert] = React.useState(false);
    const [modalVisible, setModalVisible] = React.useState(false);
    const [correct, setCorrect] = React.useState(false);
    const [heart, setHeart] = React.useState(5);
    const [heartZero, setHeartZero] = React.useState(false);


    React.useEffect(() => {
        setHeart(StorageUtils.getHeart());
    }, []);

    React.useEffect(() => {

    }, []);
    return (
        <>
            <SafeAreaView style={styles.container}>
                <StatusBar
                    animated={true}
                    backgroundColor="#19191A"/>
                <Modal
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                        if (correct) {
                            navigation.replace('Quiz_grape');
                        } else {
                            navigation.replace('Quiz_apple');
                        }
                    }}
                >
                    <Quiz_ox
                        isShow={alert}
                        isCorrect={correct}
                        onClose={(result) => {
                            setAlert(false);
                            setModalVisible(!modalVisible);
                        }}
                        heartZero={heartZero}
                    />
                </Modal>
                <View style={styles.area_top}>
                    <Image
                        style={styles.top_logo}
                        source={require('../../../assets/images/topLogo.png')}
                        resizeMode={'contain'}
                    />
                </View>
                <View style={styles.content}>
                    <View style={styles.area_quiz_abc}>
                        <Quiz_heart heartNum={heart}/>
                        <ImageButton
                            style={styles.img_exit}
                            source={require('../../../assets/images/btnExit.png')}
                            resizeMode={'contain'}
                            onPress={() => {
                                navigation.navigate('Main');
                            }}
                        />
                        <Text style={styles.txt_quiz}>????????? ????????? ???????????????.</Text>

                        <ImageButton
                            style={styles.img_a}
                            source={require('../../../assets/images/imgApple.png')}
                            resizeMode={'contain'}
                            onPress={() => {
                                Tts.speak('Apple');
                            }}
                        />
                        <Text style={styles.txt_hint}>????????? ???????????? ????????? ????????????!</Text>

                        <ImageButton
                            style={styles.area_btn}
                            onPress={() => {
                                setAlert(true);
                                setCorrect(true);
                                setModalVisible(true);
                                setAlert(true);
                            }}
                            source={require('../../../assets/images/txtApple.png')}
                        />
                        <ImageButton
                            style={styles.area_btn_bottom}
                            onPress={() => {
                                setCorrect(false);
                                if (heart == 1) {
                                    setHeartZero(true);
                                } else {
                                    StorageUtils.setHeart(heart - 1);
                                }
                                setModalVisible(true);
                                setAlert(true);
                            }}
                            source={require('../../../assets/images/txtGrape.png')}
                        />
                        <ImageButton
                            style={styles.area_btn_bottom}
                            onPress={() => {
                                setCorrect(false);
                                if (heart == 1) {
                                    setHeartZero(true);
                                } else {
                                    StorageUtils.setHeart(heart - 1);
                                }
                                setModalVisible(true);
                                setAlert(true);
                            }}
                            source={require('../../../assets/images/txtBanana.png')}
                        />
                    </View>
                </View>
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
    content: {
        flex: 1,
        backgroundColor: '#C9E4ED',
        alignItems: 'center',
        justifyContent: 'center',

    },
    area_quiz_abc: {
        width: wp('90%'),
        height: hp('88%'),
        backgroundColor: '#ffffff',
        flexDirection: 'column',
        alignItems: 'center',
        borderBottomRightRadius: 15,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
    },
    area_heart: {
        position: 'absolute',
        top: 40,
        left: 20,
        flex: 1,
        backgroundColor: '#ffffff',
        flexDirection: 'row',
    },
    img_heart: {
        marginLeft: 10,
    },
    img_exit: {
        position: 'absolute',
        top: 40,
        right: 30,
    },
    area_btn: {
        width: wp('80%'),
        height: 80,
        backgroundColor: '#70C9E8',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomRightRadius: 8,
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        marginTop: 30,
    },
    area_btn_bottom: {
        width: wp('80%'),
        height: 80,
        backgroundColor: '#70C9E8',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomRightRadius: 8,
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        marginTop: 12,
    },
    txt_quiz: {
        marginTop: 110,
        fontSize: 20,
        fontWeight: '500',
        fontStyle: 'normal',
        color: '#000000',
    },
    img_a: {
        marginTop: 20,
    },
    txt_hint: {
        marginTop: 10,
        fontSize: 15,
        fontWeight: '500',
        fontStyle: 'normal',
        color: '#58595B',
    },
});

