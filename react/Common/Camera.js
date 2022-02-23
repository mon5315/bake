import * as React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import TextImageButton from '../component/TextImageButton';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

export default function ImagePicker_Alert({onClose,isShow}) {
    if(!isShow){
        return null
    }
    return (
        <View style={styles.dim}>
        <View style={styles.Area_alert}>
            <Text style={styles.txt_alert_title}>내 사진 변경</Text>
            <TextImageButton
                style={styles.Area_touch_content_1}
                textStyle={styles.txt_alert_content}
                text={"앨범에서 선택"}
                imageStyle={styles.img_arrow}
                source={require('../../assets/images/btnArrow.png')}
                resizeMode={'contain'}
                onPress={()=>{
                    launchImageLibrary(
                        {
                            mediaType: 'photo',
                            includeBase64: false,
                            maxHeight: 1000,
                            maxWidth: 1000,
                        },
                        (response) => {
                            console.log(response)
                            if (response.didCancel) {
                                onClose();
                            } else {
                                onClose(response.assets[0].uri);
                            }
                        },
                    )
                }}
            />
            <TextImageButton
                style={styles.Area_touch_content_2}
                textStyle={styles.txt_alert_content}
                text={"사진 찍기"}
                imageStyle={styles.img_arrow}
                source={require('../../assets/images/btnArrow.png')}
                resizeMode={'contain'}
                onPress={()=>{
                    launchCamera(
                        {
                            mediaType: 'photo',
                            includeBase64: false,
                            maxHeight: 1000,
                            maxWidth: 1000,
                        },
                        (response) => {
                            console.log(response.assets[0].uri)
                            if (response.didCancel) {
                                onClose();
                            } else {
                                onClose(response.assets[0].uri);
                            }
                        },
                    )
                }}
            />


                <TouchableOpacity style={styles.Area_cancel} onPress={() => {
                    onClose();
                }}>
                    <Text style={styles.txt_cancel}>취소</Text>
                </TouchableOpacity>
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    dim: {
        width: wp('100%'),
        height: hp('100%'),
        position: 'absolute',
        left: 0,
        top: 0,
        backgroundColor: '#00000088'
    },
    Area_alert: {
        position: 'absolute',
        bottom: 61,
        width: wp('100%'),
        borderTopRightRadius: 16,
        borderTopLeftRadius: 16,
        backgroundColor: "#C9E4ED"
    },
    txt_alert_title: {
        marginLeft: 24,
        marginTop: 27,
        fontSize: 25,
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: -0.5,
        color: "#000000",
        marginBottom: 27,
    },
    Area_touch_content_1: {
        borderBottomWidth:0.2,
        borderTopWidth:1,
        borderColor:"#F1F2F2",
        height: 80,
        justifyContent: 'center'
    },
    Area_touch_content_2: {
        borderBottomWidth:0.2,
        borderTopWidth:1,
        borderColor:"#F1F2F2",
        height: 80,
        justifyContent: 'center'
    },
    img_arrow: {
        position:'absolute',
        right:20,
    },
    txt_alert_content: {
        marginLeft: 24,
        fontSize:18,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: -0.5,
        color: "#000000"
    },
    Area_cancel: {
        height:50,
        width:wp('100%'),
        justifyContent: 'center',
        alignItems: 'center',
    },
    txt_cancel: {
        fontSize: 18,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: -0.57,
        textAlign: "center",
        color: "#999999"
    },
});
