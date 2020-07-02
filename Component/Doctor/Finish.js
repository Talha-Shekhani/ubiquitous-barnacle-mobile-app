import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize'
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
import Footer from '../Patient/Footer'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-gesture-handler';


export default function FrontPage(){
    const navigation = useNavigation();
    return(
        <View style={styles.mainView}>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ alignItems: "center", marginTop: RFValue(50) }}>
                <Image source={require('../../assets/tibLogoPng.png')}
                    style={{ width: RFValue(150), height: RFValue(100) }} />
                </View >
                <Text style={{ fontSize: RFValue(16), textAlign: "center" }}>
                     Connecting HealthCare
                </Text>

                <Text style={ styles.Dhcp }>
                    Dear HCP's Name
                </Text>
                <Text style={ styles.Dhcp }>
                        Thank you very much for {"\n"}  talking out the time for register with us a {"\n"} healthCare professional
                </Text>
                <Text style={ styles.Dhcp }>
                        We will send you a confirmation {"\n"} email with a link to confirm {"\n"} registration with Tib
                </Text>
                <TouchableOpacity
                    style={styles.SubmitButtonStyle}
                    activeOpacity={.5}
                    onPress={() => { navigation.navigate("drsignpage") }}
                >
                <Text style={{ fontSize: RFValue(22), textAlign: "center" }}>
                    Finish </Text>

                </TouchableOpacity>
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
        paddingTop: RFValue(20),
        backgroundColor: "white",
        justifyContent: "space-between"
    },
    
      SubmitButtonStyle: {
     
        marginTop:50,
        backgroundColor:'white',
        borderRadius:5,
        marginLeft: RFValue(60),
        marginRight: RFValue(60),
        borderWidth: 2,
        borderColor: '#4789F4'
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
      Dhcp:{
          textAlign: "center",
          fontSize: RFValue(16),
          marginTop: RFValue(50)
      }
    });
