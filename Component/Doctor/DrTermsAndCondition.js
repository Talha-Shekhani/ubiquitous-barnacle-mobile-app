import React, { useState, useRef, Component, useEffect } from 'react';
import { StyleSheet, Text, View, Picker, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native'
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconFont from 'react-native-vector-icons/FontAwesome';
import { RFValue } from 'react-native-responsive-fontsize'
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
import Header from './DrHeaderSignUp'
import Footer from '../Patient/Footer'
import { useForm } from 'react-hook-form'
import { d_signUpPage } from '../../redux/ActionCreators';
import { useDispatch, useSelector } from 'react-redux'
import { ScrollView } from 'react-native-gesture-handler';
// import { Button } from 'react-native-paper';


function TermsAndCondition(props) {
    const navigation = useNavigation();
    const { handleSubmit, register, errors,setValue, getValues } = useForm();
   
    // const onSubmit = values => {
        
    //     var data = props.route.params.data
    //     var val = Object.assign(data, values)
    //     console.log("terms and condition")
    //     console.log(val)
    //     // dispatch(d_signUpPage(val))
    //     navigation.navigate('drpassword', {data: val})
    // }

    const onSubmit = values => {
        var Demoraphicdata = props.route.params.Demoraphicdata;
        var qulificationData = props.route.params.qulificationData
        var specialityDetail = props.route.params.specialityDetail
        console.log("Demographics")
        console.log(Demoraphicdata)
        console.log("Qualification Detail")
        console.log(qulificationData)
        console.log("Speciality Detail")
        console.log(specialityDetail)
        // var val = Object.assign(data, values)
        navigation.navigate('drpassword', {Demoraphicdata: Demoraphicdata, qulificationData: qulificationData,
        specialityDetail: specialityDetail
        })
    }
    return (
            <View style={styles.mainView}>
                
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <Header/>
                        <Text style={[styles.TextStyle, {marginTop: RFValue(20) }]}>
                            Terms & Condition
                    </Text>
                    <Text style={ styles.smallText  }>
                        hamza dfklg l sfkl klf lkfjlkfjl jgjaflwe kdf hfkrio fhkjryu fha kjhrh jkfRHohajkhutkjkfjkla hi at atiotjl ntioath;klgnk;tawh tk jtia jlj
                    </Text>
                    </ScrollView>
                    <View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", }}>

                    <IconFont name="arrow-circle-left" size={50} color="#2c97c9"
                        onPress={() =>{ navigation.goBack()}}
                    />
                    <View style={styles.passwordContainer}>
                    <TouchableOpacity
                        style={styles.SubmitButtonStyle}
                        activeOpacity={.5}
                        onPress={handleSubmit(onSubmit)}
                        // onPress={() =>{ navigation.navigate("drpassword")}}


                    >

                        <Text style={{fontSize: RFValue(22), textAlign: "center"}}> 
                    AGREE </Text>

                    </TouchableOpacity>
                    <IconFont name="arrow-circle-right" size={40} color="#2c97c9"
                        style={{ marginRight: RFValue(10) }}
                        // onPress={() =>{ navigation.navigate("drpassword")}}
                        onPress={handleSubmit(onSubmit)}
                    />
                    </View>
                </View>
                        <Footer/>
                    </View>
                    
            </View> 
    );
}

const styles = StyleSheet.create({

    mainView: {
        width: "100%",
        height: "100%",
        paddingHorizontal: RFValue(20),
        paddingTop: RFValue(20),
        backgroundColor: 'white',
        justifyContent: 'space-between',
    },
    TextStyle: {
        fontSize: 25,
    },
    smallText:{
        fontSize: 16,
        marginTop: RFValue(30), 
        marginBottom: RFValue(7),
    },
    SubmitButtonStyle: {

        marginTop: RFValue(6),
        marginLeft: RFValue(20),
        marginRight: RFValue(10),
        backgroundColor: 'white',
    },
    passwordContainer: {
        flexDirection: 'row',
        borderColor: 'black',
        borderRadius: RFValue(4),
        borderWidth: RFValue(3),
        borderColor: '#17A05D',
        
       
      },
});

export default TermsAndCondition


