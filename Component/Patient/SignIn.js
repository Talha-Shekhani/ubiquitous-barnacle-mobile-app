import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Dimensions, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import Header from '../HeaderSignIn'
import { useForm } from 'react-hook-form'
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';
import HamzaFooter from './Footer';
import axios from 'axios'
import IconFont from 'react-native-vector-icons/FontAwesome';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
import { p_getPatientDetails, p_signInPage } from '../../redux/ActionCreators';
import { useDispatch, useSelector } from 'react-redux'
import SecureStorage, { ACCESS_CONTROL, ACCESSIBLE, AUTHENTICATION_TYPE } from 'react-native-secure-storage'

export default function Signin() {
    const dispatch = useDispatch()
    const patient = useSelector(state => state)

    const { handleSubmit, register, errors, setValue, getValues } = useForm();

    const navigation = useNavigation();

    const [form, setForm] = useState({
        Email: '',
        Password: '',
    })
    useEffect(() => {
        register('p_email')
        // {required: true, minLength: 3}
        register('p_password')
        // { required: true, minLength: 6}
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
    }, [register, patient])

    const onSubmit = data => {
        async function setData() {
            const config = {
                accessControl: ACCESS_CONTROL.BIOMETRY_ANY_OR_DEVICE_PASSCODE,
                accessible: ACCESSIBLE.WHEN_UNLOCKED,
                authenticationPrompt: 'auth with yourself',
                service: 'example',
                authenticateType: AUTHENTICATION_TYPE.BIOMETRICS,
            }
            let p_mail = getValues('p_email')
            dispatch(p_getPatientDetails(p_mail))
            console.log(patient.patient)
            await SecureStorage.setItem('patientdata', JSON.stringify({ p_email: data.p_email, p_password: data.p_password, p_first_name: 'any' }), config)
            .then(() => console.log('done'))
            .catch((err) => console.log('Could not save user info', err))
            let val = await SecureStorage.getItem('patientdata', config)
                console.log('got val:' + JSON.stringify(val))
                dispatch(p_signInPage(data))
                navigation.navigate("RouteHome")
        }
        setData().catch(err => console.log(err))
        // let mail = async () => await SecureStorage.getItem('patientdata').then(() => {
        //     console.log('mail'+ JSON.stringify(mail()))
        //     console.log('data'+ JSON.stringify(data))
        // })
        
        // async function getVal() {console.log(await SecureStorage.getItem('patientdata'))} 
        // getVal()
    }
    return (

        <View style={styles.mainView}>
            {console.disableYellowBox = true}
            <ScrollView showsVerticalScrollIndicator={false}>
                <Header />
                <TextInput
                    placeholder="Email"
                    placeholderTextColor="black"
                    onChangeText={(text) => {
                        setForm({ ...form, Email: text });
                        setValue('p_email', text)
                    }}
                    // value={getValues('p_email')}
                    style={[styles.textInputStyle, { marginTop: RFValue(50) }]}
                />
                <Text style={styles.errorText}  >{errors.p_email && errors.p_email.type === 'minLength' && 'greter'}{errors.p_email && errors.p_email.type === 'required' && 'Required Email'}</Text>
                {/* {errors.email && errors.email.message} */}
                <TextInput placeholder="Password"
                    secureTextEntry={true}
                    placeholderTextColor="black"
                    // value={getValues('p_password')}
                    // ref={register({required: true})}
                    onChangeText={(text) => {
                        setForm({ ...form, Password: text });
                        setValue('p_password', text)
                    }}
                    style={styles.textInputStyle}
                />
                <Text style={styles.errorText}  >{errors.p_password && errors.p_password.type === 'minLength' && 'Password should be greater than 6 digits'}{errors.p_password && errors.p_password.type === 'required' && 'Required Password'}</Text>

                <Text style={styles.forgotText}
                    onPress={() => { navigation.navigate("forgetPassword") }}
                >I Forgot My Password</Text>
                {/* <Text style={styles.errorText}  >{patient.patient.errMess}</Text> */}
                <TouchableOpacity style={styles.button}
                    onPress={handleSubmit(onSubmit)}

                >
                    <Text style={styles.TextStyle}>Sign In</Text>
                </TouchableOpacity>
            </ScrollView>
            <View>
                <IconFont name="arrow-circle-left" size={50} color="#2c97c9"
                    onPress={() => { navigation.navigate("SignPage") }}
                />
                <HamzaFooter />
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
        justifyContent: 'space-between'
    },
    textInputStyle: {
        borderBottomColor: "black",
        borderBottomWidth: RFValue(1),
        fontSize: RFValue(14),
        color: "black",
        marginTop: RFValue(15)
    },
    forgotText: {
        marginTop: RFValue(5),
        fontSize: RFValue(14)
    },
    button: {
        marginTop: RFValue(10),
        paddingTop: RFValue(15),
        paddingBottom: RFValue(15),
        alignItems: "center",
        backgroundColor: 'white',
        borderRadius: RFValue(10),
        borderWidth: RFValue(3),
        borderColor: 'lightblue',
        marginTop: RFValue(60)
    },

    TextStyle: {
        color: 'black',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: "bold"
    },
    errorText: {
        color: 'red'
    }
})
