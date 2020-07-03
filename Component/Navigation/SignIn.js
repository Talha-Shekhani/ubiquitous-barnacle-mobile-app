import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Dimensions , Image, TextInput, TouchableOpacity, ScrollView} from 'react-native'
import Header from '../HeaderSignIn'
import { useForm } from 'react-hook-form'
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';
import HamzaFooter from './Footer';
import axios from 'axios'
import IconFont from 'react-native-vector-icons/FontAwesome'; 
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
import { p_signin, p_signPage, p_signInPage } from '../../redux/ActionCreators';
import { useDispatch, useSelector } from 'react-redux'

export default function Signin(){
    const dispatch = useDispatch()
    const patient = useSelector(state => state)

    const { handleSubmit, register, errors,setValue } = useForm();
    
    const navigation = useNavigation();
    
    const [form, setForm] = useState({
        Email: '',
        Password: '',
    })
    useEffect(() => {
        register('p_email')
        register('p_password')
        
    }, [register])

    const onSubmit = data => {
        navigation.navigate("RouteHome")
        // console.log(data)
        // dispatch(p_signInPage(data))
        // if(patient.patient.data.success === 0 )
        // {
        //     console.log("data pass : " + patient.patient.data)

        //     navigation.navigate("RouteHome")

        // }
        // else{
        //     console.log("error data : " + patient.patient.data)
        //     alert("Your username or password incorrect")
        // }
        // // console.log('data:'+ patient.patient.data.message)
        
        // console.log('err' + patient.patient.errMess)
        //     // console.log("Form Data", data)
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
                    <TextInput 
                        placeholder="Email"
                        placeholderTextColor="black"
                        
                        // ref={register({required: true})}
                        onChangeText={(text) => {setForm({ ...form, Email: text }); 
                        setValue('p_email', text)}}
                        value={form.Email}
                        style={[styles.textInputStyle, { marginTop: RFValue(100) }]}
                    />
                    {/* {errors.email && errors.email.message} */}
                    <TextInput placeholder="Password"
                        secureTextEntry={true}
                        placeholderTextColor="black"
                        value={form.Password}
                        // ref={register({required: true})}
                        onChangeText={(text) => {setForm({ ...form, Password: text }); 
                        setValue('p_password', text)}}
                        style={styles.textInputStyle}
                    />
                    
                    <Text style={styles.forgotText}
                    onPress={() => { navigation.navigate("forgetPassword") }}
                    >I Forgot My Password</Text>
                    
                    <TouchableOpacity style={styles.button}
                    onPress={  handleSubmit(onSubmit)}
                    
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
    }
})



// import React, { useState, useEffect } from 'react';
// import HeaderSignin from '../HeaderSignIn'
// import { View, Picker, Image, StyleSheet,TextInput , KeyboardAvoidingView, Dimensions ,TouchableOpacity, Text, Alert } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import IconFont from 'react-native-vector-icons/FontAwesome'; 
// import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
// import { RFValue } from 'react-native-responsive-fontsize'
// const WIDTH = Dimensions.get('window').width;
// const HEIGHT = Dimensions.get('window').height;
// import Footer from './Footer'
// import { useForm } from 'react-hook-form'
// import Password from './Password';
// import axios from 'axios'
// export default function SignIn() {

//     const navigation = useNavigation();

//     const [text, setText] = useState("")
//     const [text2, setText2] = useState("")
//     const [text3, setText3] = useState("")
    
//     const onsubmit = data => {
//         console.log("Form Data", data)
//         axios.post('http://192.168.1.107:5000/api/patient/login',{
//             p_email: data.Email,
//         })
//         .then(response => {
//             console.log(response.data);
//             navigation.navigate("RouteHome")
            
//         })
//         .catch(error => {
//             console.log(error);
//         })
//     }
//     // const {register ,handleSubmit, setValue }= useForm();
//     const { register, errors, handleSubmit } = useForm();
  
//     // useEffect(() => {
//     //     register("Email")
//     //     register("Password")
//     //     register("Pin")        
//     // },[register])

//     return (
//         <View style={{backgroundColor: "white", flex: 1, paddingHorizontal: 20, flexDirection: "column", justifyContent: "space-between"}}>
//             <HeaderSignin />

//             <View style={styles.textWrapper}>     
//             <View style={{marginTop: RFValue(80)}}></View>       
//             <TextInput style={styles.textInput}
//                 ref={register({ required: true, maxLength: 50 })}
//                     // onChangeText={(text) => {
//                     //     setValue('Email', text)
//                     // }}
//                     placeholder={"Email Address"}
//                 />
//             <View style={{marginTop: RFValue(20)}}></View>   
//                 <TextInput style={styles.textInput}
//                     onChangeText={(text) => {
//                         setValue('Password', text)
//                     }}
//                     secureTextEntry={true}
//                     placeholder={"Password"}
//                 />

//                 {errors.multipleErrorInput?.type === "required" &&
//                     "Your input is required"}
//                 {errors.multipleErrorInput?.type === "maxLength" &&
//                     "Your input exceed maxLength"}
        
        
                    
//             <Text style={{fontSize: 15,fontWeight: "bold",  }}
//             onPress={() => { navigation.navigate("forgetPassword") }}
//             >I forgot my Password</Text>

//             <View style={{marginTop: RFValue(20)}}></View>             
            
//             <TextInput style={styles.textInput}
//                 onChangeText={(text) => {
//                     setValue('Pin', text)
//                 }}
//                 placeholder={"Enter Pin Code"}
//             />
//             <Text style={{fontSize: 15,fontWeight: "bold",  }}
//                 onPress={() => { 
                    
//                     navigation.navigate("forgetPin") }}
//             >I forgot my Pin code</Text>

//             <TouchableOpacity
//                 style={styles.SubmitButtonStyle}
//                 activeOpacity={.5}
//                 onPress={  handleSubmit(onsubmit) }
//                     // navigation.navigate("RouteHome")
//                 //  onPressIn={ () => {
//                 //     navigation.navigate("RouteHome")
//                 //  } }

//             >
//                 <Text style={styles.TextStyle}> Sing In </Text>
//             </TouchableOpacity>
             
//             <View style={{ marginTop: 80,  }}>
//                 <IconFont name="arrow-circle-left" size={50} color="#2c97c9" 
//                     onPress={() => { navigation.navigate("SignPage") }}
//             />
//             </View>
                
//                 <Footer/>
//                 </View>
//             </View>
//     )
// }


// const styles = StyleSheet.create({
//     textInput: {
//         borderBottomColor: 'black', 
//         borderBottomWidth: RFValue(2), 
//         width: "100%"
            
//     },
//     container: { flex: 1 },
//     textWrapper: {
//         height: hp('100%'), // 70% of height device screen
//         width: wp('90%')   // 80% of width device screen
//     },
//     MainContainer: {
//         flex: 1,
//         justifyContent: 'center',
//         backgroundColor: '#F5FCFF',
//       },
     
//       SubmitButtonStyle: {
//         marginTop:10,
//         paddingTop:15,
//         paddingBottom:15,
//         backgroundColor:'white',
//         borderRadius:10,
//         borderWidth: 5,
//         borderColor: 'lightblue',
//         marginTop: 60,
//         width: "100%"
//       },
     
//       TextStyle:{
//           color:'black',
//           textAlign:'center',
//           fontSize: 18,
//           fontWeight: "bold"
//       }
     
//     });