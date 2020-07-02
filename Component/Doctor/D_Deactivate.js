import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Dimensions, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import Header from '../Header'
import { useForm } from 'react-hook-form'
import { RFValue } from 'react-native-responsive-fontsize'
import { useNavigation } from '@react-navigation/native'
import Footer from '../Patient/Footer'
import axios from 'axios'
import IconFont from 'react-native-vector-icons/FontAwesome'
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
import { p_deactivate } from '../../redux/ActionCreators';
import SecureStorage, { ACCESS_CONTROL, ACCESSIBLE, AUTHENTICATION_TYPE } from 'react-native-secure-storage'
import { useDispatch, useSelector } from 'react-redux'

export default function D_Deactivate() {
    const dispatch = useDispatch()
    const patient = useSelector(state => state)
    const { handleSubmit, register, errors, setValue, getValues } = useForm();
    const navigation = useNavigation();

    const [form, setForm] = useState({
        oldPass: '',
        NewPass: '',
        cnfmPass: '',
    })
    useEffect(() => {
        register('feedback', {required: true, minLength: 3})
        register('p_email')
        async function getData() {
            const config = {
                accessControl: ACCESS_CONTROL.BIOMETRY_ANY_OR_DEVICE_PASSCODE,
                accessible: ACCESSIBLE.WHEN_UNLOCKED,
                authenticationPrompt: 'auth with yourself',
                service: 'example',
                authenticateType: AUTHENTICATION_TYPE.BIOMETRICS,
            }
            let val = await SecureStorage.getItem('patientdata', config)
                console.log('got val:' + JSON.stringify(val))
                let mail = JSON.parse(val)
                console.log('email: '+  mail.p_email)
                setValue('p_email', mail.p_email)
        }
        getData().catch(err => console.log(err))
        // {required: true, minLength: 3}
        // if (patient.patient.data.success === 0) {
        //     navigation.navigate("RouteHome")
        // }
        // else if (patient.patient.errMess) {
        //     alert('Error : ' + patient.patient.errMess)
        // }
        // else if (patient.patient.data.success === 1) {
        //     console.log("success : " + patient.patient.data)
        // }
        // else console.log("err : " + JSON.stringify(patient.patient.data))
        // return () => { patient.patient.errMess = null; patient.patient.data = [] }
    }, [register])

    const onSubmit = data => {
        console.log(data)
        let email = getValues('p_email')
        // dispatch(p_deactivate(email))
        navigation.navigate("DrThanks")
    }

    return (

        <View style={styles.mainView}>
            {console.disableYellowBox = true}
            <ScrollView showsVerticalScrollIndicator={false}>
            <Header name='Sign Out' nav='SignPage'  />
                <Text style={styles.headText} >Deactivate Account</Text>
                <Text style={styles.TextStyle}>
                    We are sorry to see you go and would love to have you back in the future.
                    If you would like to reactivate your account, get in {'\n'}touch with us at support@tibhealthcare.com.
                </Text>
                <Text style={[styles.TextStyle, {marginVertical: 20}]}>
                    Please drop a feew lines about reason for leaving us and how we can make your experience better in the future.
                </Text>
                
                <TextInput
                    multiline={true}
                    numberOfLines={6}
                    // placeholderTextColor="black"
                    placeholder='Feedback'
                    onChangeText={(text) => {
                        setValue('feedback', text)
                    }}
                    style={styles.textInputStyle}
                />
                <Text style={styles.errorText}  >
                    {errors.feedback && errors.feedback.type === 'minLength' && 'Feedback should be greater than 3 characters'}
                {errors.feedback && errors.feedback.type === 'required' && 'Feedback Required'}</Text>
                <TouchableOpacity style={styles.button}
                    onPress={handleSubmit(onSubmit)} >
                    <Text style={styles.btnText}> Deactivate </Text>
                </TouchableOpacity>
            </ScrollView>
            <View style={{margin: 0, padding: 0}}>
                <IconFont name="arrow-circle-left" size={50} color="#2c97c9"
                    onPress={() => { navigation.goBack() }} />
                <Footer />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    leftArrow: {
        height: RFValue(20),
        width: RFValue(20)
    },
    mainView: {
        height: '100%',
        width: '100%',
        paddingHorizontal: RFValue(30),
        paddingTop: RFValue(20),
        backgroundColor: 'white',
        justifyContent: 'space-between',
    },
    textInputStyle: {
        borderColor: "black",
        borderWidth: RFValue(1),
        fontSize: 16,
        color: "black",
        marginTop: RFValue(15),
        textAlignVertical: "top",
        marginHorizontal: 30,
    },
    button: {
        marginTop: RFValue(20),
        paddingTop: RFValue(15),
        paddingBottom: RFValue(15),
        alignItems: "center",
        backgroundColor: '#4789F4',
        borderRadius: RFValue(50),
    },
    btnText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: "bold"
    },
    errorText: {
        color: 'red'
    },
    headText: {
        fontSize: 24,
        marginTop: 40,
        marginBottom: 20
    },
    TextStyle: {
        paddingHorizontal: 55,
        lineHeight: 20,
        fontSize: 15,

    }
})