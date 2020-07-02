import React, { useState, useRef, Component, useEffect } from 'react';
import { StyleSheet, Text, CheckBox, View, Image, TouchableOpacity, KeyboardAvoidingView, TextInput, Dimensions, ScrollView, Alert } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native'
import IconFont from 'react-native-vector-icons/FontAwesome';
// import { Header } from 'react-navigation-stack';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { RFValue } from 'react-native-responsive-fontsize'
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
import Header1 from '../Header'
// import Footer from './Footer'
import { useForm } from 'react-hook-form'
import { p_signUpPage } from '../../redux/ActionCreators';
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'react-native-paper';

export default function DrMyAccount(props) {
    const navigation = useNavigation()
    return (
        <View style={{backgroundColor: "#FFFFFF"}}>
        <ScrollView>
            <View style={styles.headContainer}>
                <View style={styles.upperheader} >
                    <View style={styles.myaccount}>
                        <View style={styles.rowView}>
                            <View style={styles.yellow}></View>
                            <View style={styles.green}></View>
                            <View style={styles.blue}></View>
                            <View style={styles.red}></View>
                        </View>
                        <Text style={{ fontSize: RFValue(23), marginVertical: 10, }} >My Account</Text>
                        <View style={styles.memberDetail}>
                            <Text style={{ fontSize: 20 }} >HCP's Title & Name</Text>
                            <Text style={{ fontSize: 20 }} >Email Address</Text>
                        </View>
                    </View>
                    <View style={{ alignSelf: 'flex-start', paddingVertical: 20 }} >
                        <IconFont name='bell-o' size={26} style={{ fontWeight: 'bold', flexDirection: 'row', alignSelf: 'flex-end' }} />
                        <Text style={{ fontSize: 20, marginTop: 30 }}
                            onPress={() => {
                                Alert.alert('SignOut', 'Are you sure want to sign out?', [
                                    {
                                        text: 'Cancel',
                                        style: 'destructive'
                                    },
                                    {
                                        text: 'OK',
                                        style: 'default',
                                        onPress: () => navigation.navigate('SignPage')
                                    }
                                ],
                                    { cancelable: true })
                            }}>Sign Out</Text>
                    </View>
                </View>
            </View>
            
            <View style={styles.container}>
            <Text style={styles.upperText } >
                APPOINTMENTS</Text>
                <View style={styles.btnGroup}>
                    <TouchableOpacity style={styles.buttonStyle} activeOpacity={.5}
                        onPress={() => { navigation.navigate("drAppinmentLog") }}>
                        <Text style={styles.TextStyle}> Appointments Log </Text>
                        <IconFont name='angle-right' size={40} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.upperText} >
                    CHAT</Text>
                <View style={styles.btnGroup}>
                    <TouchableOpacity style={styles.buttonStyle} activeOpacity={.5}
                        onPress={() => { navigation.navigate("drChatLog") }}>
                        <Text style={styles.TextStyle}> Chat Log </Text>
                        <IconFont name='angle-right' size={40} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.upperText} >
                    FEEDBACK</Text>
                <View style={styles.btnGroup}>
                    <TouchableOpacity style={styles.buttonStyle} activeOpacity={.5}
                        onPress={() => { navigation.navigate("drMemberFeedback") }}>
                        <Text style={styles.TextStyle}> Member's Feedback </Text>
                        <IconFont name='angle-right' size={40} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.upperText} >
                    PAYMENT</Text>
                <View style={styles.btnGroup}>
                    <TouchableOpacity style={styles.buttonStyle} activeOpacity={.5}
                        onPress={() => { navigation.navigate("drPayment") }}>
                        <Text style={styles.TextStyle}> Payment Records </Text>
                        <IconFont name='angle-right' size={40} />
                    </TouchableOpacity>
                </View>
                <Text style={{ margin: 10, marginVertical: 10, marginTop: 40, fontSize: 20 }} >UPDATE PROFILE</Text>
                <View style={styles.btnGroup}>
                    <TouchableOpacity style={styles.buttonStyle} activeOpacity={.5}
                        onPress={() => { navigation.navigate("rewiewpage") }}>
                        <Text style={styles.TextStyle}> Account Information </Text>
                        <IconFont name='angle-right' size={40} />
                    </TouchableOpacity>
                </View>
                <View style={styles.btnGroup}>
                    <TouchableOpacity style={styles.buttonStyle} activeOpacity={.5}
                        onPress={() => { navigation.navigate("DchangePassword") }}>
                        <Text style={styles.TextStyle}> Change Password </Text>
                        <IconFont name='angle-right' size={40} />
                    </TouchableOpacity>
                </View>
                <View style={styles.btnGroup}>
                    <TouchableOpacity style={styles.buttonStyle} activeOpacity={.5}
                        onPress={() => { navigation.navigate("DchangePin") }}>
                        <Text style={styles.TextStyle}> Change Pin </Text>
                        <IconFont name='angle-right' size={40} />
                    </TouchableOpacity>
                </View>
                <View style={styles.btnGroup}>
                    <TouchableOpacity style={styles.buttonStyle} activeOpacity={.5}
                        onPress={() => { navigation.navigate("DrCounsultant") }}>
                        <Text style={styles.TextStyle}> Consultant Fee </Text>
                        <IconFont name='angle-right' size={40} />
                    </TouchableOpacity>
                </View>
                <View style={styles.btnGroup}>
                    <TouchableOpacity style={styles.buttonStyle} activeOpacity={.5}
                        onPress={() => { navigation.navigate("deactivate") }}>
                        <Text style={styles.TextStyle}> Deactivate Account </Text>
                        <IconFont name='angle-right' size={40} />
                    </TouchableOpacity>
                </View>

                <Text style={{ margin: 10, marginVertical: 10, marginTop: 40, fontSize: 20 }} >GET IN TOUCH</Text>
                <View style={styles.btnGroup}>
                    <TouchableOpacity style={styles.buttonStyle} activeOpacity={.5}
                        onPress={() => { navigation.navigate("P_TechnicalSupport") }}>
                        <Text style={styles.TextStyle}> Technical Support & Contact </Text>
                        <IconFont name='angle-right' size={40} />
                    </TouchableOpacity>
                </View>
                <View style={styles.btnGroup}>
                    <TouchableOpacity style={styles.buttonStyle} activeOpacity={.5}
                        onPress={() => { navigation.navigate("share") }}>
                        <Text style={styles.TextStyle}> Share Tib App </Text>
                        <IconFont name='angle-right' size={40} />
                    </TouchableOpacity>
                </View>
                <View style={styles.btnGroup}>
                    <TouchableOpacity style={styles.buttonStyle} activeOpacity={.5}
                        onPress={() => { navigation.navigate("Myaccount") }}>
                        <Text style={styles.TextStyle}> Send Feedback </Text>
                        <IconFont name='angle-right' size={40} />
                    </TouchableOpacity>
                </View>
                <View style={styles.btnGroup}>
                    <TouchableOpacity style={styles.buttonStyle} activeOpacity={.5}
                        onPress={() => { navigation.navigate("Myaccount") }}>
                        <Text style={styles.TextStyle}> Rate the App </Text>
                        <IconFont name='angle-right' size={40} />
                    </TouchableOpacity>
                </View>

                <Text style={{ margin: 10, marginVertical: 10, marginTop: 40, fontSize: 20 }} >PRIVACY AND LEGAL</Text>
                <View style={styles.btnGroup}>
                    <TouchableOpacity style={styles.buttonStyle} activeOpacity={.5}
                        onPress={() => { navigation.navigate("Myaccount") }}>
                        <Text style={styles.TextStyle}> Privacy Policy </Text>
                        <IconFont name='angle-right' size={40} />
                    </TouchableOpacity>
                </View>
                <View style={styles.btnGroup}>
                <TouchableOpacity style={styles.buttonStyle} activeOpacity={.5}
                        onPress={() => { navigation.navigate("Myaccount") }}>
                        <Text style={styles.TextStyle}> Terms & Conditions </Text>
                        <IconFont name='angle-right' size={40} />
                    </TouchableOpacity>
                </View>
                <View style={styles.btnGroup}>
                    <TouchableOpacity style={styles.buttonStyle} activeOpacity={.5}
                        onPress={() => { navigation.navigate("Myaccount") }}>
                        <Text style={styles.TextStyle}> Regulatory </Text>
                        <IconFont name='angle-right' size={40} />
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
        </View>

    )
}

const styles = StyleSheet.create({
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
    },
    TextStyle: {
        color: 'black',
        alignSelf: 'center',
        fontSize: 18,
    },
    btnGroup: {
    }
})