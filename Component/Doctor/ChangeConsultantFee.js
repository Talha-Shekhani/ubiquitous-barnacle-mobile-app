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

export default function ChangeConsultant(props) {
    const navigation = useNavigation()
    return (
        
        <View style={styles.mainView}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Header/>
                <Text style={styles.TextStylee}>
                    Change Consultation Fee
                        </Text>
                <View style={styles.rowView}>
                    <View style={styles.picker}>
                        <Picker
                        // onValueChange={(itemValue) => {setForm({...form, title: itemValue}); 
                        // setValue('d_title', itemValue)}}    
                        >
                            <Picker.Item label="Currency" value="Currency" />
                            <Picker.Item label="PKR" value="PKR" />
                            <Picker.Item label="AED" value="AED" />
                        </Picker>
                    </View>
                    <View style={styles.picker} >
                    <TextInput
                    placeholder="Amount"
                    placeholderTextColor="black"
                    />
                    </View>
                </View>
                    <TouchableOpacity style={styles.buttonStyle} activeOpacity={.5}
                        onPress={() => { navigation.goBack() }}>
                        <Text style={styles.TextStyle}> Save Changes</Text>
                        
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
        marginTop: RFValue(20),
        textAlign: "center"
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
    },picker: {
        paddingVertical: 0,
        backgroundColor: 'white',
        borderRadius: 5,
        borderWidth: 2,
        height: "70%",
        // marginRight: 30,
        borderColor: '#4789F4',
        marginVertical: 5,
        elevation: 5,
        width: "45%",
        

    },
   
    rowView:{
        flexDirection: "row",
        width: "100%",
        justifyContent: 'space-between'
        // justifyContent:
    },  
    memberDetail: {
        margin: 10,
        marginTop: 15
    },
    buttonStyle: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: 'white',
        borderRadius: 5,
        borderWidth: 2,
        margin: 50,
        borderColor: '#4789F4',
        marginVertical: 5,
        shadowColor: '#17A05D',
        shadowOpacity: 1,
        shadowOffset: {height: 2, width: 2},
        elevation: 5,
        shadowRadius: 2,
        marginTop: 20
    },
    buttonStyle2: {
        width: "45%",
        paddingVertical: 8,
        backgroundColor: 'white',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#4789F4',
        // marginVertical: 5,
        elevation: 5,
        // shadowRadius: 2,
    },
    TextStyle: {
        color: 'black',
        alignSelf: 'center',
        fontSize: 18,
    },
    btnGroup: {
    }
})