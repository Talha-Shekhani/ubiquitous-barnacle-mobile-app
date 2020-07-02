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
        register('d_language')
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
                           Demographics </Text>
                        

                        <TextInput style={styles.textInput}
                            placeholder={"First Name"}
                            placeholderTextColor="black"
                            onChangeText={(text) => setValue('d_first_name', text)}
                        />

                        <TextInput style={styles.textInput}
                            placeholder={"Last Name"}
                            placeholderTextColor="black"
                            onChangeText={(text) => setValue('d_last_name', text)}
                        />
                        <View style={styles.pickerTopMargin}>
                        </View>

                        <Picker 
                        selectedValue={form.title}
                        onValueChange={(itemValue) => {setForm({...form, title: itemValue}); 
                        setValue('d_title', itemValue)}}    
                        >
                            <Picker.Item label="Title" value="Title" />
                            <Picker.Item label="Mr" value="Mr" />
                            <Picker.Item label="Mrs" value="Mrs" />
                            <Picker.Item label="Ms" value="Ms" />

                        </Picker>

                        <View style={styles.borderPickerStyle}>
                        </View>

                        <View style={styles.pickerTopMargin}>
                        </View>

                        <Picker
                             selectedValue={form.gender}
                             onValueChange={(itemValue) => {setForm({...form, gender: itemValue}); 
                             setValue('d_gender', itemValue)}}    
                        >
                            <Picker.Item label="Select a Gender" value="Select a Gender" />
                            <Picker.Item label="Male" value="Male" />
                            <Picker.Item label="Female" value="Female" />
                            <Picker.Item label="Do not wish to disclose" value="Do not wish to disclose" />

                        </Picker>

                        <View style={styles.borderPickerStyle}>
                        </View>

                        <View style={styles.pickerTopMargin}>
                        </View>

                        <Text style={{fontSize: RFValue(16), marginTop: RFValue(10)}}>
                            Language Spoken
                        </Text>

                        <TextInput
                            onChangeText={(text) => setValue('d_language', text)}
                            style={styles.language}
                        />                      
                        <TextInput style={styles.textInput}
                            placeholder={"Phone Number"}
                            placeholderTextColor="black"
                            onChangeText={(text) => setValue('d_phone_no', text)}
                        />
                        {/* <Text style={{ fontSize: RFValue(20),  }}>
                        Phone Number
                    </Text>
                     */}
                        {/* <View style={{ flexDirection: "row",alignItems:'center',justifyContent:'space-around' }}>
                    <IconEnt name="plus" size={30} color="black"
                    />
                    <TextInput
                        style={{ backgroundColor: "#f5f4f2",alignContent : "center" ,justifyContent: "center" , fontWeight: "500", fontSize: RFValue(15), height: RFValue(40), width: "20%", borderWidth: RFValue(1), borderColor: "grey",  }}
                    />
                        <TextInput
                        style={{ backgroundColor: "#f5f4f2",alignContent : "center" ,justifyContent: "center" , fontWeight: "500", fontSize: RFValue(15), height: RFValue(40), width: "60%", borderWidth: RFValue(1), borderColor: "grey",  }}
                        
                    />
                    </View> */}
                        
                        <View style={styles.pickerTopMargin}>
                        </View>

                        <DatePicker
                            style={{ width: "100%", marginTop: RFValue(10) }}
                            date={form.date}
                            mode="date"
                            placeholder="Date of Birth"
                            format="YYYY-MM-DD"
                            minDate="1960-05-01"
                            maxDate="2020-06-01"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            androidMode="spinner"
                            customStyles={{
                                dateIcon: {
                                    position: 'absolute',
                                    left: RFValue(0),
                                    top: RFValue(4),
                                },
                                dateInput: {
                                    // marginRight: RFValue(20)
                                }
                                // ... You can check the source to find the other keys.
                            }}
                            onDateChange={(date) => {setForm({ ...form, date: date }); 
                            setValue('d_dob', date)}}
    
                        />

                        <TextInput style={styles.textInput}
                            placeholder={"Email Address"}
                            placeholderTextColor="black"
                            onChangeText={(text) => setValue('d_email', text)}
                            
                        />
                        
                        

                </ScrollView>
                <View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", }}>

                        <IconFont name="arrow-circle-left" size={50} color="#2c97c9"
                            onPress={() => { navigation.navigate("drsignpage") }}
                        />
                        <IconFont name="arrow-circle-right" size={50} color="#2c97c9"
                            onPress={handleSubmit(onSubmit)}
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
        
    }
    
});

