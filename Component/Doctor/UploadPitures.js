import React, { useState, useEffect } from 'react';
import Header from './DrHeaderSignUp'
import { View, Picker, StyleSheet, CheckBox, TextInput, Image, KeyboardAvoidingView, TouchableOpacity, Text, Button, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DatePicker from 'react-native-datepicker'
import Footer from '../Patient/Footer'
import IconFont from 'react-native-vector-icons/FontAwesome';
import { useForm } from 'react-hook-form'
import { RFValue } from 'react-native-responsive-fontsize'
import { ScrollView } from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-picker';


export default function UploadPitures() {

    

    const options = {
        title: 'Select Avatar',
        customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      };
      
      
      
        ImagePicker.showImagePicker(options, (response) => {
        console.log('Response = ', response);
      
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        } else {
          const source = { uri: response.uri };
        //   const avatarSource = useState(source)
        }
      });


    // ////
    const { handleSubmit, register, errors,setValue, getValues } = useForm();
    const navigation = useNavigation();

    const onSubmit = values => {
        console.log(values)
        navigation.navigate('drqualification', {data: values})
    }
    
    const [form, setForm] = useState({
        title: '',
        gender: '',
        date: ''

    })

    useEffect(() => {
        register('d_first_name')
        register('d_last_name')
        register('d_title')
        register('d_gender')
        register('d_languag')
        register('d_phone_no')
        register('d_dob')
        register('d_email')
    }, [register])

    return (
            <View style={styles.mainView}>
                <ScrollView showsVerticalScrollIndicator={false} >
                    {console.disableYellowBox = true}
                    <Header />
                        <Text style={{ fontSize: RFValue(23), marginTop: RFValue(20) }}>
                           Upload Your Piture
                        </Text>
                        <Text 
                        style={{ fontSize: RFValue(16), marginTop: RFValue(20), textAlign: "center" }}>
                           Uploading a piture is a mandatory step in the registration process. you can skip this step for now but piture will be mandotory to complete the registration process 
                        </Text>

                        <TouchableOpacity
                            style={styles.SubmitButtonStyle}
                            activeOpacity={.5}
                            onPress={() => { navigation.navigate("uploadpitures") }}
                        >
                            <Text style={{ fontSize: RFValue(16), textAlign: "center" }}>
                                UPLOAD </Text>
                        </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.SubmitButtonStyle}
                        activeOpacity={.5}
                        onPress={() => { navigation.navigate("uploadpitures") }}
                    >

                        <Text style={{fontSize: RFValue(16), textAlign: "center"}}>
                            CAMERA </Text>

                    </TouchableOpacity>
                    {/* <Image source={avatarSourcee} style={styles.uploadAvatar} /> */}
                </ScrollView>
                <View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", }}>

                    <IconFont name="arrow-circle-left" size={50} color="#2c97c9"
                        onPress={() => { navigation.navigate("specialitydetail") }}
                    />
                </View>
                    
                 <Footer />
                </View>
            </View>

        // </KeyboardAwareScrollView>

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
    textInput: {
        borderBottomColor: 'black',
        borderBottomWidth: RFValue(2),
        marginTop: RFValue(7)
    },borderPickerStyle:{
         width: "100%", 
         borderBottomWidth: RFValue(2), 
         borderBottomColor: "black"    ,
        //  marginTop: RFValue(10)
    },pickerTopMargin: {
        marginTop: RFValue(7)
    },
    language: {
        backgroundColor: "white",
         alignContent: "center", 
         justifyContent: "center",
         fontWeight: "300",
          fontSize: 16, 
          height: 40, 
          width: "100%",  
          borderWidth: 1, 
          borderColor: "black", 
          textAlign: "center",
          marginTop: RFValue(10)
        
    },
    SubmitButtonStyle: {

        marginTop: RFValue(20),
        paddingTop: RFValue(10),
        paddingBottom: RFValue(10),
        marginLeft: RFValue(70),
        marginRight: RFValue(70),
        backgroundColor: 'white',
        borderRadius: RFValue(6),
        borderWidth: RFValue(2),
        borderColor: '#4789F4'
    },
    textWord:{
        fontSize: RFValue(16),
        textAlign: "right"
    }
});

