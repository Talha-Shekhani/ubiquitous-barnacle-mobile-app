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
import Footer from './Footer'
import { useForm } from 'react-hook-form'
import { p_signUpPage } from '../../redux/ActionCreators';
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'react-native-paper';
import Header from '../Header';

export default function P_TechnicalSupport(props) {
    const navigation = useNavigation()
    return (
        <View style={styles.mainView}>
            <ScrollView showsVerticalScrollIndicator={false} >
                {console.disableYellowBox = true}
                <Header name='Sign In' nav='signin' />
                <Text style={{ fontSize: RFValue(22), marginVertical: 30  }}>
                Technical Support & Contact</Text>
                <View >
                    <View style={styles.btnGroup}>
                        <TouchableOpacity style={styles.buttonStyle} activeOpacity={.5}
                            onPress={() => { navigation.navigate("P_AccountInfo") }}>
                            <View style={{flexDirection: 'column'}} >
                            <Text style={styles.TextStyle}> Get Help Quiclkly </Text>
                            <Text style={styles.TextStylebtm}> Browse our FAQs </Text>
                            </View>
                            <IconFont style={styles.iconStyle}  name='angle-right' size={40} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.btnGroup}>
                        <TouchableOpacity style={styles.buttonStyle} activeOpacity={.5}
                            onPress={() => { navigation.navigate("P_messageSupport") }}>
                            <View style={{flexDirection: 'column'}} >
                            <Text style={styles.TextStyle}> Message Support </Text>
                            <Text style={styles.TextStylebtm}> Send us a secure message </Text>
                            </View>
                            <IconFont style={styles.iconStyle}  name='angle-right' size={40} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.btnGroup}>
                        <TouchableOpacity style={styles.buttonStyle} activeOpacity={.5}
                            onPress={() => { navigation.navigate("P_AccountInfo") }}>
                            <View style={{flexDirection: 'column'}} >
                            <Text style={styles.TextStyle}> Call Support </Text>
                            <Text style={styles.TextStylebtm}> +44-7574818222,{'\n'}+1-2166338498 </Text>
                            </View>
                            <IconFont style={styles.iconStyle}  name='angle-right' size={40} />
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            <View>
                <IconFont name="arrow-circle-left" size={50} color="#2c97c9"
                    onPress={() => { navigation.navigate("Myaccount") }}
                />
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
    buttonStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#4789F4',
        marginVertical: 5,
        shadowColor: '#17A05D',
        shadowOpacity: 1,
        shadowOffset: { height: 2, width: 2 },
        elevation: 5,
        shadowRadius: 2,
    },
    TextStyle: {
        color: 'black',
        fontSize: 18,
    },
    TextStylebtm: {
        color: 'black',
        marginVertical: 5,
        fontSize: 16,
    },
    btnGroup: {
        marginVertical: 10
    },
    iconStyle: {
        alignSelf: 'center'
    }
})