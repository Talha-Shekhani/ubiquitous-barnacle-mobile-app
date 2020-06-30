import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Dimensions, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import Header from '../Header'
import { useForm } from 'react-hook-form'
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';
import HamzaFooter from './Footer';
import axios from 'axios'
import IconFont from 'react-native-vector-icons/FontAwesome';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
import { p_change_pin, p_getPatientDetails } from '../../redux/ActionCreators';
import SecureStorage, { ACCESS_CONTROL, ACCESSIBLE, AUTHENTICATION_TYPE } from 'react-native-secure-storage'
import { useDispatch, useSelector } from 'react-redux'

export default function P_ChangePin() {
    const dispatch = useDispatch()
    const patient = useSelector(state => state.patient)
    const { handleSubmit, register, errors, setValue, getValues } = useForm();
    const navigation = useNavigation();
    const [err, setErr] = useState('')
    const [succ, setSucc] = useState('')
    const [form, setForm] = useState({
        oldPin: '',
        NewPin: '',
        cnfmPin: '',
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
        register('p_oldPin', { required: true, minLength: 4, maxLength: 4 })
        // {required: true, minLength: 3}
        register('p_newPin', { required: true, minLength: 4, maxLength: 4 })
        // { required: true, minLength: 6}
        register('p_pin_code', { required: true, minLength: 4, maxLength: 4 })
        return () => {
            if (patient.errMess) {
                setErr(patient.errMess)
            }
            else {
                setErr(''); setForm({ NewPin: '', oldPin: '', cnfmPin: '' })
                setSucc('Your PIN is Successfully Changed!')
                setTimeout(() => {
                    navigation.goBack()
                }, 2000);
            }
        }
    }, [])

    const onSubmit = data => {
        if (getValues('p_newPin') === getValues('p_pin_code')) {
            dispatch(p_change_pin(data))
        }
        // else setErr('Old Password must be Correct!')
        else setErr('Confirm PIN is Incorrect!')
    }

    return (

        <View style={styles.mainView}>
            {console.disableYellowBox = true}
            <ScrollView showsVerticalScrollIndicator={false}>
                <Header name='Sign Out' nav='SignPage' />
                <Text style={styles.headText} >Chnage PIN Code</Text>
                <TextInput
                    placeholder="Old Pin"
                    placeholderTextColor="black"
                    secureTextEntry={true}
                    onChangeText={(text) => {
                        setForm({ ...form, oldPin: text });
                        setValue('p_oldPin', text)
                    }}
                    value={form.oldPin}
                    style={[styles.textInputStyle]}
                />
                <Text style={styles.errorText}  >{errors.p_oldPin && errors.p_oldPin.type === 'minLength' && 'PIN should contain 4 digits'}
                    {errors.p_oldPin && errors.p_oldPin.type === 'required' && 'Required old PIN'}
                    {errors.p_oldPin && errors.p_oldPin.type === 'maxLength' && 'PIN should contain 4 digits'}
                </Text>
                <TextInput placeholder="New Pin"
                    secureTextEntry={true}
                    placeholderTextColor="black"
                    onChangeText={(text) => {
                        setForm({ ...form, NewPin: text });
                        setValue('p_newPin', text)
                    }}
                    value={form.NewPin}
                    style={styles.textInputStyle}
                />
                <Text style={styles.errorText}  >{errors.p_newPin && errors.p_newPin.type === 'minLength' && 'PIN should contain 4 digits'}
                    {errors.p_newPin && errors.p_newPin.type === 'required' && 'Required new PIN'}
                    {errors.p_newPin && errors.p_newPin.type === 'maxLength' && 'PIN should contain 4 digits'}
                </Text>
                <TextInput placeholder="Confirm Pin"
                    secureTextEntry={true}
                    placeholderTextColor="black"
                    onChangeText={(text) => {
                        setForm({ ...form, cnfmPin: text });
                        setValue('p_pin_code', text)
                    }}
                    value={form.cnfmPin}
                    style={styles.textInputStyle}
                />
                <Text style={styles.errorText}  >{errors.p_pin_code && errors.p_pin_code.type === 'minLength' && 'PIN should contain 4 digits'}
                    {errors.p_pin_code && errors.p_pin_code.type === 'required' && 'Required confirm PIN'}
                    {errors.p_pin_code && errors.p_pin_code.type === 'maxLength' && 'PIN should contain 4 digits'}
                </Text>
                <Text style={styles.errorText} >{err}</Text>
                <Text style={styles.succText} >{succ}</Text>
                <TouchableOpacity style={styles.button}
                    onPress={handleSubmit(onSubmit)}

                >
                    <Text style={styles.TextStyle}>Change PIN</Text>
                </TouchableOpacity>
            </ScrollView>
            <View>
                <IconFont name="arrow-circle-left" size={50} color="#2c97c9"
                    onPress={() => { navigation.navigate("Myaccount") }}
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