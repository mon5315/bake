import * as React from 'react';
import {
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    StatusBar,
    TouchableOpacity,
    View,
    Platform,
    PermissionsAndroid,
} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import ImageButton from '../component/ImageButton';
import TextImageButton from '../component/TextImageButton';
import * as StorageUtils from '../utils/StorageUtils';
import ImagePicker_Alert from '../Common/Camera';
import * as AlertUtils from '../utils/AlertUtils';


export default function App({route, navigation}) {
    const [heart, setHeart] = React.useState(5);
    const [response, setResponse] = React.useState(null);
    const [alert, setAlert] = React.useState(false);

    async function requestPermission() {
        if (Platform.OS === 'android') {
            await PermissionsAndroid.requestMultiple([
                PermissionsAndroid.PERMISSIONS.CAMERA,
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
            ]).then((result) => {
                if (result['android.permission.CAMERA']
                    && result['android.permission.WRITE_EXTERNAL_STORAGE']
                    && result['android.permission.READ_EXTERNAL_STORAGE']
                    === 'granted') {
                } else {
                    AlertUtils.showYes('권한거절', '필요한 권한이 거절되었습니다. 권한을 허용해주세요.');
                    console.log('권한거절');
                }
            });
        } else {
        }
    }

    const renderThumbNailImage = () => {
        const source = response;
        return (
            response ?
                <ImageButton
                    style={styles.btn_profile}
                    onPress={() => {
                        requestPermission().then(() => {
                            setAlert(true);
                        });
                    }}
                    source={source}
                    resizeMode={'contain'}
                />
                :
                <ImageButton
                    style={styles.btn_profile}
                    onPress={() => {
                        requestPermission().then(() => {
                            setAlert(true);
                        });
                    }}                    source={require('../../assets/images/btnProfile.png')}
                    resizeMode={'contain'}
                />
        );
    };

    const renderDim = () => {
        if (alert) {
            return <View style={styles.dim}/>;
        }
    };

    React.useEffect(() => {
        setHeart(StorageUtils.getHeart());
    }, [heart]);

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
                <View style={styles.content}>
                    <View style={styles.area_profile}>
                        {renderThumbNailImage()}
                        <Text style={styles.txt_profile}>문지환</Text>
                        <Text style={styles.txt_attend}>연속 1일 출석(총 3일)</Text>
                        <View style={styles.area_star}>
                            <Text style={styles.txt_star}>가지고 있는 하트 개수</Text>
                            <View style={styles.img_heart_arrow}>
                                <Image
                                    style={styles.img_star}
                                    source={require('../../assets/images/heartOn.png')}
                                    resizeMode={'contain'}
                                />
                                <Text style={styles.txt_star_num}>{heart}</Text>
                            </View>
                        </View>
                        <TextImageButton
                            style={styles.area_btn_top}
                            textStyle={styles.txt_star}
                            text={'하트 충전하기'}
                            imageStyle={styles.img_arrow}
                            source={require('../../assets/images/btnArrow.png')}
                            resizeMode={'contain'}
                            onPress={() => {
                                StorageUtils.setHeart(5);
                                setHeart(5);
                            }}
                        />
                        <TextImageButton
                            style={styles.area_btn_bottom}
                            textStyle={styles.txt_star}
                            text={'나의 정보 보기'}
                            imageStyle={styles.img_arrow}
                            source={require('../../assets/images/btnArrow.png')}
                            resizeMode={'contain'}
                        />

                    </View>

                </View>
                {renderDim()}
                <ImagePicker_Alert
                    isShow={alert}
                    onClose={(result) => {
                        setAlert(false);
                        if (result) {
                            // setResponse(result);
                        }
                    }}/>


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
    area_profile: {
        width: wp('90%'),
        backgroundColor: '#ffffff',
        flexDirection: 'column',
        alignItems: 'center',
        // justifyContent: 'center',
        borderBottomRightRadius: 15,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        marginTop: 30,
    },
    btn_real_profile: {
        marginTop: 30,
        width: 140,
        height: 140,
        borderRadius: 60,
    },
    btn_profile: {
        marginTop: 30,
    },
    txt_profile: {
        marginTop: 30,
        fontSize: 25,
        fontWeight: '500',
        fontStyle: 'normal',
        color: '#000000',
    },
    txt_attend: {
        marginTop: 7,
        fontSize: 18,
        fontWeight: '500',
        fontStyle: 'normal',
        color: '#000000',
    },
    txt_star: {
        position: 'absolute',
        left: 20,
        fontSize: 18,
        fontWeight: '500',
        fontStyle: 'normal',
        color: '#000000',
    },
    txt_star_num: {
        fontSize: 18,
        fontWeight: '500',
        fontStyle: 'normal',
        color: '#000000',
    },
    img_star: {
        height: 25,
        position: 'absolute',
        right: 20,
    },
    img_heart_arrow: {
        position: 'absolute',
        right: 20,
        flexDirection: 'row',
    },
    img_arrow: {
        position: 'absolute',
        right: 20,
    },
    area_star: {
        width: wp('80%'),
        height: 60,
        borderColor: '#70C9E8',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
        marginTop: 30,
    },
    area_btn_top: {
        width: wp('80%'),
        height: 60,
        backgroundColor: '#70C9E8',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomRightRadius: 8,
        borderBottomLeftRadius: 8,
    },
    area_btn_bottom: {
        width: wp('80%'),
        height: 60,
        backgroundColor: '#70C9E8',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomRightRadius: 8,
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        marginTop: 30,
        marginBottom: 50,
    },
});
