import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import { SocialIcon } from 'react-native-elements'
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize'
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
import Footer from './Footer'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-gesture-handler';
import IconFont from 'react-native-vector-icons/FontAwesome';

export default function P_SharePage() {
    const navigation = useNavigation();
    return (
        <View style={styles.mainView}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ alignItems: "center", marginTop: RFValue(50) }}>
                    <Image source={require('../../assets/tibLogoPng.png')}
                        style={{ width: RFValue(200), height: RFValue(100) }} />
                </View >
                <Text style={{ fontSize: RFValue(18), textAlign: "center" }}>
                    Connecting HealthCare
                </Text>
                <Text style={{ fontSize: RFValue(24), marginVertical: 30, paddingHorizontal: 10 }}>
                    Share Tibb App</Text>
                <View ></View>
                <Text style={styles.TextStyle} >Share the love by inviting with your{'\n'} family and friends. </Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-evenly', paddingHorizontal: 30}}>
                <SocialIcon type='facebook' iconSize={34} />
                <SocialIcon type='twitter' iconSize={34} />
                <SocialIcon type='google-plus-official' iconSize={39} />
                </View>
                <IconFont name='whatsapp' color="white" size={34} />
                
            </ScrollView>
            <View>
            <IconFont name="arrow-circle-left" size={50} color="#2c97c9"
                    onPress={() => { navigation.goBack() }}
                />
                <Footer />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        height: "100%",
        width: "100%",
        paddingHorizontal: RFValue(30),
        paddingTop: RFValue(40),
        backgroundColor: "white",
        justifyContent: "space-between"
    },
    SubmitButtonStyle: {
        width: '60%',
        alignSelf: 'center',
        marginTop: 10,
        paddingVertical: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#4789F4'
    },
    btnTextStyle: {
        color: 'black',
        textAlign: 'center',
        fontSize: 18,
    },
    textWrapper: {
        height: hp('93%'), // 70% of height device screen
        width: wp('90%')   // 80% of width device screen
    },
    TextStyle: {
        textAlign: "justify",
        marginVertical: 10,
        paddingHorizontal: 10,
        fontSize: 18
    }
});
