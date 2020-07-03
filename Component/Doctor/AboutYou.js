import React, { useState, useEffect } from 'react';
import Header from './DrHeaderSignUp'
import { View, Picker, StyleSheet, CheckBox, TextInput, Image, KeyboardAvoidingView, TouchableOpacity, Text, Button, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import IconFont from 'react-native-vector-icons/FontAwesome';
import IconEnt from 'react-native-vector-icons/Entypo';
import DatePicker from 'react-native-datepicker'
import Footer from '../Patient/Footer'
import { useForm } from 'react-hook-form'
import { RFValue } from 'react-native-responsive-fontsize'
import { ScrollView } from 'react-native-gesture-handler';

export default function DrSignUp() {

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
                           About You: </Text>
                        
                </ScrollView>
                <View>
                    <Text style={styles.textWord}>
                        Max 250 words
                    </Text>
                <TouchableOpacity
                        style={styles.SubmitButtonStyle}
                        activeOpacity={.5}
                        // onPress={() => {navigation.navigate("uploadpitures")} }
                    onPress={handleSubmit(onSubmit)}

                    >

                        <Text style={{fontSize: RFValue(16), textAlign: "center"}}> SUBMIT </Text>

                    </TouchableOpacity>
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

        marginTop: RFValue(10),
        paddingTop: RFValue(8),
        paddingBottom: RFValue(10),
        marginLeft: RFValue(190),
        alignContent: "flex-end",
        backgroundColor: 'white',
        borderRadius: RFValue(10),
        borderWidth: RFValue(2),
        borderColor: '#17A05D'
    },
    textWord:{
        fontSize: RFValue(16),
        textAlign: "right"
    }
});

