import React, { useState, useRef, Component, useEffect } from 'react';
import { StyleSheet, Text, Picker, View, Image, TouchableOpacity, KeyboardAvoidingView, TextInput, Dimensions, ScrollView, Alert } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native'
import IconFont from 'react-native-vector-icons/FontAwesome';
// import { Header } from 'react-navigation-stack';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { RFValue } from 'react-native-responsive-fontsize'
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
import Footer from '../Patient/Footer'
import Header from './DrAccountHeader'
// import Footer from './Footer'
import { useForm } from 'react-hook-form'
import { p_signUpPage } from '../../redux/ActionCreators';
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'react-native-paper';

export default function DrConsultant(props) {
    const navigation = useNavigation()
    return (
        
        <View style={styles.mainView}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Header/>
                <Text style={styles.TextStylee}>
                    Consultation Fee
                        </Text>
                    
                        
                    <TouchableOpacity style={styles.buttonStyle2} activeOpacity={.5}
                        >
                        <Text style={styles.TextStyle}> Consultation Fee </Text>
                        {/* <IconFont name='angle-right' size={40} /> */}
                        <Text style={styles.TextStyle}> PKR 200 </Text>
                    </TouchableOpacity>
              

                
                    <TouchableOpacity style={styles.buttonStyle} activeOpacity={.5}
                        onPress={() => { navigation.navigate("changeConsultant") }}>
                        <Text style={styles.TextStyle}> Change conusltation Fee </Text>
                        <IconFont name='angle-right' size={40} />
                    </TouchableOpacity>
                
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
    TextStylee:{
        fontSize: 22,
        marginTop: RFValue(20)
    },
    headContainer: {
        width: '100%',
        paddingHorizontal: 30,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        borderStyle: 'solid'
    },
    container: {
        width: '100%',
        height: '100%',
        paddingHorizontal: 30,
        paddingBottom: '10%',
    },
    upperText:{
         margin: 5,  
         marginTop: 30,
        fontSize: 20
    },
    rowView: {
        width: '40%',
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: RFValue(15)
    },
    yellow: {
        borderColor: 'yellow',
        borderBottomWidth: RFValue(5),
        width: '23%',
        marginRight: RFValue(10)
    },
    green: {
        borderColor: 'green',
        borderBottomWidth: RFValue(5),
        width: '23%',
        marginRight: RFValue(10)
    },
    blue: {
        borderColor: 'blue',
        borderBottomWidth: RFValue(5),
        width: '23%',
        marginRight: RFValue(10)
    },
    red: {
        borderColor: 'red',
        borderBottomWidth: RFValue(5),
        width: '23%',
        marginRight: RFValue(10)
    },
    myaccount: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignContent: 'center',
        margin: 5,
        marginBottom: 0
    },
    upperheader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 0
    },
    memberDetail: {
        margin: 10,
        marginTop: 15
    },
    buttonStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        // paddingVertical: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#4789F4',
        marginVertical: 5,
        shadowColor: '#17A05D',
        shadowOpacity: 1,
        shadowOffset: {height: 2, width: 2},
        elevation: 5,
        shadowRadius: 2,
        marginTop: RFValue(10)
    },
    buttonStyle2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 8,
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#4789F4',
        marginVertical: 5,
        shadowColor: '#17A05D',
        shadowOpacity: 1,
        shadowOffset: {height: 2, width: 2},
        elevation: 5,
        shadowRadius: 2,
    },
    TextStyle: {
        color: 'black',
        alignSelf: 'center',
        fontSize: 18,
    },
    btnGroup: {
    }
})