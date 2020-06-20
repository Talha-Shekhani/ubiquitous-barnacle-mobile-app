import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import Footer from './Footer'
import { RFValue } from 'react-native-responsive-fontsize'
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function SignPage(){
    const navigation = useNavigation();
    return(

            <View style={{ width: WIDTH, backgroundColor: "white", flex: 1, display: 'flex', paddingHorizontal: RFValue(20) }}>
                <View style={styles.textWrapper}>
    
                <View style={{ alignItems: "center", marginTop: 80, }}>
                    <Image source={require('../../assets/tibLogoPng.png')}
                        style={{ width: RFValue(200), height: RFValue(200) }} />
                    <Text style={{ fontSize: RFValue(20), fontWeight: "bold", marginTop: -40 }}>Connecting HealthCare</Text>
                </View>
                <TouchableOpacity
                    style={styles.SubmitButtonStyle}
                    activeOpacity={.5}
                    onPress={() => { navigation.navigate("signin") }}
                >
                    <Text style={styles.TextStyle}> Sign In </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.SubmitButtonStyle}
                    activeOpacity={.5}
                    onPress={() => { navigation.navigate("signUp") }}
                >
                    <Text style={styles.TextStyle}> Sign Up </Text>
                </TouchableOpacity>

                <View style={{ marginTop: 190, alignItems: "center" }}>
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>Copyright {'\u00A9'}2020 Tib Doctor App</Text>
                </View>
            </View>
            <View style={{marginTop: 16}}>
                <Footer />
            </View>
        </View>

    )
}


const styles = StyleSheet.create({
    
     
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
      }
     
    });