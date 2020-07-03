import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import Footer from './Footer'
import { RFValue } from 'react-native-responsive-fontsize'
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-gesture-handler';

export default function SignPage(){
    const navigation = useNavigation();
    return(
         <View style={styles.mainView}>
                <ScrollView showsVerticalScrollIndicator={false}>
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
                
                </ScrollView>
                <View>
                    <Text style={{ fontSize: 16, fontWeight: "bold", textAlign: "center" }}>Copyright {'\u00A9'}2020 Tib Doctor App</Text>
                <Footer />
            </View>
        </View>

    )
}


const styles = StyleSheet.create({
    
     mainView: {
        width: "100%",
        height: "100%",
        paddingTop: RFValue(20),
        paddingHorizontal: RFValue(30),
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
      }
     
    });