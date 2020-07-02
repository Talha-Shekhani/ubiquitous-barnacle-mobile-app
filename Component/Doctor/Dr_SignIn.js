import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Dimensions , Image, TextInput, TouchableOpacity, ScrollView} from 'react-native'
import Header from './DrHeaderSignIn'
import { useForm } from 'react-hook-form'
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';
import Footer from '../Patient/Footer';
import axios from 'axios'
import IconFont from 'react-native-vector-icons/FontAwesome';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
import { p_signin, p_signPage, p_signInPage } from '../../redux/ActionCreators';
import { useDispatch, useSelector } from 'react-redux'

export default function Signin(){
    const dispatch = useDispatch()
    const patient = useSelector(state => state)

    const { handleSubmit, register, errors, setValue, getValues } = useForm();
    
    const navigation = useNavigation();
    
    const [form, setForm] = useState({
        Email: '',
        Password: '',
    })
    useEffect(() => {
        register('p_email', {required: true, minLength: 3})
        register('p_password', { required: true, minLength: 6})
        if(patient.patient.data.success === 0 )
        {
            // navigation.navigate("RouteHome")

        }
        else if (patient.patient.errMess){
            alert('Error : ' + patient.patient.errMess)
        }
        else if (patient.patient.data.success === 1 ){
            console.log("success : " + patient.patient.data)
        }
        return () => {patient.patient.errMess = null; patient.patient.data = []}
    }, [register, patient])

    const onSubmit = data => {
        dispatch(p_signInPage(data))
        // if(patient.patient.data.success === 0 )
        // {
        //     console.log("data pass : " + patient.patient.data)
        //     navigation.navigate("RouteHome")

        // }
        // else if (patient.patient.errMess){
        //     console.log('Error : ' + patient.patient.errMess)
        // }
        // else{
        //     console.log("error data : " + patient.patient.data)
        //     console.log(patient.patient.data.message)
        // }
        // console.log('data:'+ patient.patient.data.message)
        
        
            // console.log("Form Data", data)
            // navigation.navigate("RouteHome")
                // axios.post('http://192.168.1.112:5000/api/patient/login',
                // data
                // // {
                // //     p_email: data.p_email,
                // //     p_password: data.p_password
                // // }
                // )
                // .then(response => {
                //     console.log(response.data);
                //     navigation.navigate("RouteHome")
                // })
                // .catch(error => {
                //     console.log(error);
                // })
            }
            
           
        
        return (
            
            <View style={styles.mainView}>
                {console.disableYellowBox = true}
                <View></View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Header />
                    <Text style={{ fontSize: RFValue(23), fontWeight: "bold", }}>
                           Doctor page</Text>
                    <TextInput 
                        placeholder="Email"
                        placeholderTextColor="black"
                        
                        // ref={register({required: true})}
                        onChangeText={(text) => {setForm({ ...form, Email: text }); 
                        setValue('p_email', text)}}
                        // value={getValues('p_email')}
                        style={[styles.textInputStyle, { marginTop: RFValue(100) }]}
                    />
                    <Text style={styles.errorText}  >{errors.p_email && errors.p_email.type === 'minLength' && 'greter'}
                    {errors.p_email && errors.p_email.type === 'required' && 'Required Email'}</Text>
                    {/* {errors.email && errors.email.message} */}
                    <TextInput placeholder="Password"
                        secureTextEntry={true}
                        placeholderTextColor="black"
                        // value={getValues('p_password')}
                        // ref={register({required: true})}
                        onChangeText={(text) => {setForm({ ...form, Password: text }); 
                        setValue('p_password', text)}}
                        style={styles.textInputStyle}
                    />
                    <Text style={styles.errorText}>
                        {errors.p_password && errors.p_password.type === 'minLength' && 'Password should be greater than 6 digits'}
                        {errors.p_password && errors.p_password.type === 'required' && 'Required Password'}</Text>
                    
                    <Text style={styles.forgotText}
                    onPress={() => { navigation.navigate("forgetPassword") }}
                    >I Forgot My Password</Text>
                    {/* <Text style={styles.errorText}  >{patient.patient.errMess}</Text> */}
                    <TouchableOpacity style={styles.button}
                    // onPress={ handleSubmit(onSubmit)}
                    onPress={() => { navigation.navigate("drRootHome") }}
                    
                    >
                        <Text style={styles.TextStyle}>Sign In</Text>
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
    forgotText: {
        marginTop: RFValue(5),
        fontSize: RFValue(14)
    },
    button: {
        marginTop:RFValue(10),
        paddingTop:RFValue(15),
        paddingBottom:RFValue(15),
        alignItems: "center",
        backgroundColor:'white',
        borderRadius:RFValue(10),
        borderWidth: RFValue(3),
        borderColor: 'lightblue',
        marginTop: RFValue(60)
    },
   
    TextStyle:{
        color:'black',
        textAlign:'center',
        fontSize: 18,
        fontWeight: "bold"
    },
    errorText: {
        color: 'red'
    }
})


