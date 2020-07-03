import React, { useState, useEffect } from 'react';
import { StyleSheet, Text,TextInput, View,TouchableOpacity, _ScrollView } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native'

import Footer from './Footer';
import Header from "../HeaderAfterSignIn"
import {RFValue } from "react-native-responsive-fontsize"
import IconFont from "react-native-vector-icons/FontAwesome"

import { ScrollView } from 'react-native-gesture-handler';


export default function SearchBySpeciality(){

    const navigation = useNavigation();
    return (
    
            <View style={styles.mainView}>
                <ScrollView showsVerticalScrollIndicator={false}>
                <Header />
                <Text style={styles.heading}> Search by Speciality</Text>
                <View style={[styles.search, { flexDirection: "row" }]}>
                    <IconFont style={[styles.text, { marginTop: RFValue(8) }]} name="search" color="#000" />
                    <TextInput marginTop={RFValue(1)} placeholder='Search by Name' underlineColorAndroid='white'
                    />
                </View>

                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.text}>Allergy and {"\n"} Immunology</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.text}>Anaesthetist</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.text}>Chiropractor {"\n"}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.text}>Counsellor</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.text}>Dental nurse {"\n"}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.text}>Dentist</Text>
                    </TouchableOpacity>
                </View>
             
                </ScrollView>
           
     
            <View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", margin: 10 }}>

                    <IconFont name="arrow-circle-left" size={50} color="#2c97c9"
                        onPress={() => { navigation.navigate("ConnectSearch") }}
                    />
                    <IconFont name="arrow-circle-right" size={50} color="#2c97c9"
                    //  onPress={handleSubmit(onSubmit)}
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
        justifyContent:'space-between'
    },
    heading:{
        color:'black',
        textAlign:'left',
        fontSize: 25,
       
        marginTop:RFValue(10),
        marginBottom:RFValue(10)
    
    },
    button:{
         
        paddingTop:RFValue(15),
        paddingBottom:RFValue(15),
        alignItems: "center",
        backgroundColor:'white',
        borderRadius:RFValue(10),
        borderWidth: RFValue(3),
        borderColor: 'lightblue',
        marginTop: RFValue(30),
        width:'45%'
        
    },
    text:{
        color:'black',
        textAlign:'center',
        fontSize: 18,
        fontWeight: "bold",
        marginLeft:RFValue(5),
        marginRight:RFValue(5)
  
    },
    search:{
         borderStyle: 'solid',
         borderColor: 'black',
         height:'7%',
          borderWidth: 2,
           borderRadius: 30
        }
  
   
})