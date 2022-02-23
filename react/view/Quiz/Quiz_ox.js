import * as React from 'react';
import {View, StyleSheet,  Text, Image} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export default function Quiz_ox({isShow,isCorrect,heartZero}) {
    if(!isShow){
        return null
    }else if(isShow&&isCorrect){
        return (
            <View style={styles.dim}>
                <View style={styles.Area_alert}>
                    <Image
                        style={styles.img_correct}
                        source={require('../../../assets/images/imgCorrect.png')}
                        resizeMode={'contain'}
                    />
                    <Text style={styles.txt_correct}>정답!</Text>
                </View>
            </View>
        );
    } else if(isShow&&!isCorrect&&!heartZero){
        console.log(heartZero);
        return (
            <View style={styles.dim}>
                <View style={styles.Area_alert}>
                    <Image
                        style={styles.img_correct}
                        source={require('../../../assets/images/imgIncorrect.png')}
                        resizeMode={'contain'}
                    />
                    <Text style={styles.txt_correct}>다시 풀어봐요!</Text>
                </View>
            </View>
        );
    }else if(isShow&&!isCorrect&&heartZero){
        return (
            <View style={styles.dim}>
                <View style={styles.Area_alert}>
                    <Text style={styles.txt_correct}>하트가 부족해요</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    dim: {
        flex:1,
        backgroundColor: '#00000088',
        justifyContent:'center',
        alignItems:'center'
    },
    Area_alert: {
        width: wp('60%'),
        height: wp('60%'),
        borderTopRightRadius: 16,
        borderTopLeftRadius: 16,
        borderBottomRightRadius:16,
        borderBottomLeftRadius:16,
        backgroundColor: "#ffffff",
        alignItems:'center',
        justifyContent:'center',

    },
    img_correct: {
        marginBottom:20
    },
    txt_correct: {
        fontSize: 25,
        fontWeight: '500',
        fontStyle: 'normal',
        color: '#000000',
    },
});
