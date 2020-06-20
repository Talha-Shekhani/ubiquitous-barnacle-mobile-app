import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize'
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
import Footer from './Footer'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default function FrontPage(){
    const navigation = useNavigation();
    return(
        <View style={{ flex: 1, backgroundColor: "white", paddingHorizontal: RFValue(20)}}>
        <View style={styles.textWrapper}>
        
            <View style={{ alignItems: "center", marginTop: RFValue(80) }}>
                <Image source={require('../../assets/tibLogoPng.png')}
                    style={{ width: RFValue(200), height: RFValue(200) }} />
                <Text style={{ fontSize: RFValue(20), fontWeight: "bold", marginTop: RFValue(-50) }}>Connecting HealthCare</Text>
            </View >
            
            <View style={{ marginTop: RFValue(30) }}>
                <TouchableOpacity
                    style={styles.SubmitButtonStyle}
                    activeOpacity={.5}
                    onPress={() => { alert("Doctor side")}}
                >
                    <Text style={styles.TextStyle}> Healthcare Professional </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.SubmitButtonStyle}
                    activeOpacity={.5}
                    onPress={() => { navigation.navigate("SignPage") }}
                >
                    <Text style={styles.TextStyle}> Members </Text>
                </TouchableOpacity>
            </View>

            <View style={{ marginTop: RFValue(220), alignItems: "center",  }}>
                <Text style={{ fontSize: RFValue(20), fontWeight: "bold", marginTop: RFValue(-40) }}>Copyright {'\u00A9'}2020 Tib Doctor App</Text>
            </View>
            </View>
            <View style={{ marginTop: RFValue(10)}}>
                <Footer />
            </View>
            </View>
    )
}


const styles = StyleSheet.create({
    
    textWrapper: {
        height: hp('100%'), // 70% of height device screen
        width: wp('100%')   // 80% of width device screen
      },
    
      SubmitButtonStyle: {
     
        marginTop:RFValue(10),
        paddingTop:RFValue(15),
        paddingBottom:RFValue(15),
        backgroundColor:'white',
        borderRadius:RFValue(10),
        borderWidth: RFValue(5),
        borderColor: 'lightblue',
        
      },
     
      TextStyle:{
          color:'black',
          textAlign:'center',
          fontSize: 18,
          fontWeight: "bold"
      },
      container: { flex: 1 },
      textWrapper: {
        height: hp('93%'), // 70% of height device screen
        width: wp('90%')   // 80% of width device screen
      },
     
    });
