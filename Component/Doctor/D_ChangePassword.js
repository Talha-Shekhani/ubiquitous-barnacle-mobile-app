import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Dimensions, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import Header from './DrAccountHeader'
import { useForm } from 'react-hook-form'
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';
import Footer from '../Patient/Footer';
import axios from 'axios'
import IconFont from 'react-native-vector-icons/FontAwesome';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
import { p_change_password, p_getPatientDetails } from '../../redux/ActionCreators';
import SecureStorage, { ACCESS_CONTROL, ACCESSIBLE, AUTHENTICATION_TYPE } from 'react-native-secure-storage'
import { useDispatch, useSelector } from 'react-redux'
import { set } from 'react-native-reanimated';

export default function P_ChangePassword() {
    const dispatch = useDispatch()
    const patient = useSelector(state => state.patient)
    const { handleSubmit, register, errors, setValue, getValues } = useForm();
    const navigation = useNavigation()
    const [err, setErr] = useState('')
    const [succ, setSucc] = useState('')

    const [form, setForm] = useState({
        oldPass: '',
        NewPass: '',
        cnfmPass: '',
    })
    useEffect(() => {
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
        register('p_oldPass', {required: true, minLength: 6, maxLength: 15})
        // {required: true, minLength: 3}
        register('p_newPass', {required: true, minLength: 6, maxLength: 15})
        // { required: true, minLength: 6}
        register('p_password', {required: true, minLength: 6, maxLength: 15})
        register('p_email')
    }, [])

    const onSubmit = data => {
        if (getValues('p_newPass') === getValues('p_password') )
                if (patient.errMess) {
                    setErr(patient.errMess)
                }
                else
                    {dispatch(p_change_password(data))
                    setErr(''); setForm({NewPass: '', oldPass: '', cnfmPass: ''})
                    setSucc('Your Password is Successfully Changed!')
                setTimeout(() => {
                    navigation.goBack()
                }, 2000);}
            // else setErr('Old Password must be Correct!')
        else setErr('Confirm Password is Incorrect!')
    }
    return (
        <View style={styles.mainView}>
            {console.disableYellowBox = true}
            <ScrollView showsVerticalScrollIndicator={false}>
                <Header name='Sign Out' nav='SignPage'  />
                <Text style={styles.headText} >Chnage Password</Text>
                <TextInput
                    placeholder="Old Password"
                    placeholderTextColor="black"
                    secureTextEntry={true}
                    onChangeText={(text) => {
                        setForm({ ...form, oldPass: text });
                        setValue('p_oldPass', text)
                    }}
                    value={form.oldPass}
                    style={[styles.textInputStyle]}
                />
                <Text style={styles.errorText}  >{errors.p_oldPass && errors.p_oldPass.type === 'minLength' && 'Password should be greater than 8 characters'}
                {errors.p_oldPass && errors.p_oldPass.type === 'required' && 'Required old Password'}
                {errors.p_oldPass && errors.p_oldPass.type === 'maxLength' && 'Password should be less than 15 characters '}
                </Text>
                <TextInput placeholder="New Password"
                    secureTextEntry={true}
                    placeholderTextColor="black"
                    onChangeText={(text) => {
                        setForm({ ...form, NewPass: text });
                        setValue('p_newPass', text)
                    }}
                    value={form.NewPass}
                    style={styles.textInputStyle}
                />
                <Text style={styles.errorText}  >{errors.p_newPass && errors.p_newPass.type === 'minLength' && 'Password should be greater than 8 characters'}
                {errors.p_newPass && errors.p_newPass.type === 'required' && 'Required new Password'}
                {errors.p_newPass && errors.p_newPass.type === 'maxLength' && 'Password should be less than 15 characters '}
                </Text>
                <TextInput placeholder="Confirm Password"
                    secureTextEntry={true}
                    placeholderTextColor="black"
                    onChangeText={(text) => {
                        setForm({ ...form, cnfmPass: text });
                        setValue('p_password', text)
                    }}
                    value={form.cnfmPass}
                    style={styles.textInputStyle}
                />
                <Text style={styles.errorText}  >{errors.p_password && errors.p_password.type === 'minLength' && 'Password should be greater than 8 characters'}
                {errors.p_password && errors.p_password.type === 'required' && 'Required confirm Password'}
                {errors.p_password && errors.p_password.type === 'maxLength' && 'Password should be less than 15 characters '}
                </Text>
                <Text style={styles.errorText} >{err}</Text>
                <Text style={styles.succText} >{succ}</Text>
                <TouchableOpacity style={styles.button}
                    onPress={handleSubmit(onSubmit)}

                >
                    <Text style={styles.TextStyle}>Change Password</Text>
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
    },
    succText: {
        color: 'green'
    },
    headText: {
        fontSize: 24,
        marginTop: 40,
    }
})