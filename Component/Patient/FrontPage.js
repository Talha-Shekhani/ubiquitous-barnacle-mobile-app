import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize'
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
import Footer from './Footer'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-gesture-handler';


export default function FrontPage(){
    const navigation = useNavigation();
    return(
        <View style={styles.mainView}>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ alignItems: "center", marginTop: RFValue(50) }}>
                <Image source={require('../../assets/tibLogoPng.png')}
                    style={{ width: RFValue(200), height: RFValue(100) }} />
                </View >
                <Text style={{ fontSize: RFValue(20), fontWeight: "bold", textAlign: "center" }}>
                     Tib ~ Connecting HealthCare
                </Text>
            
            
            <View style={{ marginTop: RFValue(70) }}>
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
            </ScrollView>
            <View>
                    <Text style={{ fontSize: RFValue(16), fontWeight: "bold", textAlign:"center" }}>
                        Copyright {'\u00A9'}2020 Tib Doctor App
                    </Text>
                
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
     
        marginTop:10,
        paddingTop:15,
        paddingBottom:15,
        backgroundColor:'white',
        borderRadius:10,
        borderWidth: 5,
        borderColor: 'lightblue'
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
