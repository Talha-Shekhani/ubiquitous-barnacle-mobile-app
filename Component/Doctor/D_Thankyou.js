import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize'
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
import Footer from '../Patient/Footer'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-gesture-handler';


export default function P_Thankyou(){
    const navigation = useNavigation();
    return(
        <View style={styles.mainView}>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ alignItems: "center", marginTop: RFValue(50) }}>
                <Image source={require('../../assets/tibLogoPng.png')}
                    style={{ width: RFValue(200), height: RFValue(100) }} />
                </View >
                <Text style={{ fontSize: RFValue(18), textAlign: "center" }}>
                    Connecting HealthCare
                </Text>
            
            <Text style={[styles.TextStyle, {marginVertical: 30}]} >Dear HCP's Name</Text>
            <Text style={styles.TextStyle}>"Your account has been{'\n'} successfully deactivated."</Text>
            <Text style={styles.TextStyle} >We wish to see you again as a Healthcare Professional at Tib</Text>
            <View style={{ marginTop: RFValue(70) }}>

                <TouchableOpacity
                    style={styles.SubmitButtonStyle}
                    activeOpacity={.5}
                    onPress={() => { navigation.navigate("SignPage") }}
                >
                    <Text style={styles.btnTextStyle}> Thank you </Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
            <View>
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
        marginTop:10,
        paddingVertical: 10,
        backgroundColor:'white',
        borderRadius:10,
        borderWidth: 2,
        borderColor: '#4789F4'
      },
      btnTextStyle:{
          color:'black',
          textAlign:'center',
          fontSize: 18,
      },
     
      container: { flex: 1 },
      textWrapper: {
        height: hp('93%'), // 70% of height device screen
        width: wp('90%')   // 80% of width device screen
      },
     TextStyle: {
         textAlign: 'center',
         marginVertical: 10,
         fontSize: 15
     }
    });
