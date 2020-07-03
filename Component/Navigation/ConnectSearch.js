import React, { useState, useEffect } from 'react';
import { StyleSheet, Text,TextInput, View,Picker, Image,TouchableOpacity } from 'react-native';
 import { useNavigation, useTheme } from '@react-navigation/native'
 import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Footer from './Footer';

import Header from "../HeaderConnect"
import {RFValue } from "react-native-responsive-fontsize"
import IconFont from "react-native-vector-icons/FontAwesome"
import { color } from 'react-native-reanimated';


export default function ConnectSearch(){
    const navigation = useNavigation();

    return (
        // <KeyboardAwareScrollView style={{ backgroundColor: "white" }} >
        <View style={styles.mainView}>
                <View>
                    <Header />

                    <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate("SearchBySpeciality") }}
                    >
                        <Text style={styles.text}>Search by Speciality</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate("SearchByHealth") }}>
                        <Text style={styles.text}>Search by Healthcare Professional</Text>
                    </TouchableOpacity>

                    <Text style={styles.paraText}>"If you are not sure about who to contact or the appropriate speciality, please click on My Record
             and send us a message. {"\n"} We will get back to you as soon as possible"

            </Text>
                    
                </View>
                
                <View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: RFValue(60) }}>
                        <IconFont name="arrow-circle-left" size={50} color="#2c97c9"
                            onPress={() => { navigation.navigate("Connect") }}
                        />
                    </View>
                    <Footer />
                </View>
            </View>
     
    )
}


const styles = StyleSheet.create({

    mainView:{
        height: '100%',
        width: '100%',
        paddingHorizontal: RFValue(30),
        paddingTop: RFValue(20),
        backgroundColor: 'white',
       
     justifyContent: 'space-between'
    },
    button:{
       
        paddingTop:RFValue(19),
        paddingBottom:RFValue(15),
        alignItems: "center",
        backgroundColor:'white',
        borderRadius:RFValue(10),
        borderWidth: RFValue(3),
        borderColor: 'lightblue',
        marginTop: RFValue(40)
    },
    text:{
        color:'black',
        textAlign:'center',
        fontSize: 18,
        fontWeight: "bold"
    
    },
    paraText:{
        color:'grey',
        textAlign:'center',
        fontSize: 16,
        marginTop:RFValue(40)
   
    }
})