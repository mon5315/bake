import * as React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, StatusBar, TouchableOpacity, View, ScrollView} from 'react-native';
import * as StorageUtils from '../../utils/StorageUtils';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export default function Quiz_heart({heartNum}) {
        switch (heartNum) {
            default:
            case 1:
                return (
                    <View style={styles.area_heart}>
                        <Image
                            style={styles.img_heart}
                            source={require('../../../assets/images/heartOn.png')}
                            resizeMode={'contain'}
                        />
                        <Image
                            style={styles.img_heart}
                            source={require('../../../assets/images/heartOff.png')}
                            resizeMode={'contain'}
                        />
                        <Image
                            style={styles.img_heart}
                            source={require('../../../assets/images/heartOff.png')}
                            resizeMode={'contain'}
                        />
                        <Image
                            style={styles.img_heart}
                            source={require('../../../assets/images/heartOff.png')}
                            resizeMode={'contain'}
                        />
                        <Image
                            style={styles.img_heart}
                            source={require('../../../assets/images/heartOff.png')}
                            resizeMode={'contain'}
                        />
                    </View>
                );
            case 2:
                return (
                    <View style={styles.area_heart}>
                        <Image
                            style={styles.img_heart}
                            source={require('../../../assets/images/heartOn.png')}
                            resizeMode={'contain'}
                        />
                        <Image
                            style={styles.img_heart}
                            source={require('../../../assets/images/heartOn.png')}
                            resizeMode={'contain'}
                        />
                        <Image
                            style={styles.img_heart}
                            source={require('../../../assets/images/heartOff.png')}
                            resizeMode={'contain'}
                        />
                        <Image
                            style={styles.img_heart}
                            source={require('../../../assets/images/heartOff.png')}
                            resizeMode={'contain'}
                        />
                        <Image
                            style={styles.img_heart}
                            source={require('../../../assets/images/heartOff.png')}
                            resizeMode={'contain'}
                        />
                    </View>
                );
            case 3:
                return (
                    <View style={styles.area_heart}>
                        <Image
                            style={styles.img_heart}
                            source={require('../../../assets/images/heartOn.png')}
                            resizeMode={'contain'}
                        />
                        <Image
                            style={styles.img_heart}
                            source={require('../../../assets/images/heartOn.png')}
                            resizeMode={'contain'}
                        />
                        <Image
                            style={styles.img_heart}
                            source={require('../../../assets/images/heartOn.png')}
                            resizeMode={'contain'}
                        />
                        <Image
                            style={styles.img_heart}
                            source={require('../../../assets/images/heartOff.png')}
                            resizeMode={'contain'}
                        />
                        <Image
                            style={styles.img_heart}
                            source={require('../../../assets/images/heartOff.png')}
                            resizeMode={'contain'}
                        />
                    </View>
                );
            case 4:
                return (
                    <View style={styles.area_heart}>
                        <Image
                            style={styles.img_heart}
                            source={require('../../../assets/images/heartOn.png')}
                            resizeMode={'contain'}
                        />
                        <Image
                            style={styles.img_heart}
                            source={require('../../../assets/images/heartOn.png')}
                            resizeMode={'contain'}
                        />
                        <Image
                            style={styles.img_heart}
                            source={require('../../../assets/images/heartOn.png')}
                            resizeMode={'contain'}
                        />
                        <Image
                            style={styles.img_heart}
                            source={require('../../../assets/images/heartOn.png')}
                            resizeMode={'contain'}
                        />
                        <Image
                            style={styles.img_heart}
                            source={require('../../../assets/images/heartOff.png')}
                            resizeMode={'contain'}
                        />
                    </View>
                );
            case 5:
                return (
                    <View style={styles.area_heart}>
                        <Image
                            style={styles.img_heart}
                            source={require('../../../assets/images/heartOn.png')}
                            resizeMode={'contain'}
                        />
                        <Image
                            style={styles.img_heart}
                            source={require('../../../assets/images/heartOn.png')}
                            resizeMode={'contain'}
                        />
                        <Image
                            style={styles.img_heart}
                            source={require('../../../assets/images/heartOn.png')}
                            resizeMode={'contain'}
                        />
                        <Image
                            style={styles.img_heart}
                            source={require('../../../assets/images/heartOn.png')}
                            resizeMode={'contain'}
                        />
                        <Image
                            style={styles.img_heart}
                            source={require('../../../assets/images/heartOn.png')}
                            resizeMode={'contain'}
                        />
                    </View>
                );
        }
}

const styles = StyleSheet.create({
    area_heart: {
        position:'absolute',
        top:40,
        left:20,
        flex:1,
        backgroundColor: '#ffffff',
        flexDirection: 'row',
    },
    img_heart: {
        marginLeft: 10,
    },
});
