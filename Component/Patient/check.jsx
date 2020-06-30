import React, { useState, useEffect } from 'react';
import Header from '../Header'
import { View, Picker, StyleSheet, CheckBox, TextInput, Image, KeyboardAvoidingView, TouchableOpacity, Text, Button, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import IconFont from 'react-native-vector-icons/FontAwesome';
import IconEnt from 'react-native-vector-icons/Entypo';
import DatePicker from 'react-native-datepicker'
import Footer from './Footer'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize'
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
import { useForm } from "react-hook-form";


export default function SignUp() {

    const { handleSubmit, register, errors,setValue } = useForm();
    
    const navigation = useNavigation();

    const onSubmit = values => {
        console.log(values)
        navigation.navigate('password', {data: values})
    }
    
    const [form, setForm] = useState({
        title: '',
        firstName: '',
        lastName: '',
        country: '',
        state: '',
        city: '',
        email: '',
        code: '',
        phone: '',
        gender: '',
        date: ''

    })

    // const [text, setText] = useState("")
    // const [text2, setText2] = useState("")
    // const [text3, setText3] = useState("")
    // const [text4, setText4] = useState("")
    // const [text5, setText5] = useState("")
    // const [text6, setText6] = useState("")
    // const [selectedValue, setSelectedValue] = useState("Select a country");
    // const [selectedValue2, setSelectedValue2] = useState("Select a city");
    // const [selectedValueStates, setSelectedValueStates] = useState("Select a State");
    // const [selectedValueGender, setSelectedValueGender] = useState("Gender");
    // const [selectedValueTitle, setSelectedValueTitle] = useState("Title");
    // const [setDate, setDataValue] = useState("")

    useEffect(() => {
        console.log(form)
        register('title')
        register('firstname')
        register('lastname')
        register('country')
        register('state')
        register('city')
        register('email')
        register('code')
        register('phone')
        register('gender')
        register('date')
    }, [register])

    return (
        <KeyboardAwareScrollView style={{ backgroundColor: "white" }} >
            <View style={{ width: WIDTH, backgroundColor: "white", flex: 1, display: 'flex', paddingHorizontal: RFValue(20) }}>
                <View style={styles.textWrapper}>
                    {console.disableYellowBox = true}
                    <Header />
                    <Text style={{ fontSize: RFValue(23), fontWeight: "bold", }}>
                        Account Information</Text>
                    <View >

                        <Picker
                            selectedValue={form.title}
                            onValueChange={(itemValue) => {setForm({title: itemValue}); setValue('title', itemValue)}}
                        >
                            <Picker.Item label="Title" value="Title" />
                            <Picker.Item label="Mr" value="Mr" />
                            <Picker.Item label="Mrs" value="Mrs" />
                            <Picker.Item label="Ms" value="Ms" />

                        </Picker>

                        <View style={{ width: "100%", borderBottomWidth: RFValue(2), borderBottomColor: "black" }}>
                        </View>

                        <TextInput style={styles.textInput}
                            value={form.firstName}
                            // name='firstname'
                            // ref={register({minLength: 3, maxLength: 15, required: true})}
                            onChangeText={(text) => {setForm({ ...form, firstName: text }); setValue('firstname', text)}}
                            placeholder={"First Name"}
                        />

                        <TextInput style={styles.textInput}
                            value={form.lastName}
                            onChangeText={(text) => {setForm({ ...form, lastName: text }), setValue('lastname', text)}}
                            placeholder={"Last Name"}
                        />

                        <Picker
                            selectedValue={form.country}
                            onValueChange={(itemValue) => {setForm({ ...form, country: itemValue }); setValue('country', itemValue)}}
                        >
                            <Picker.Item label="Select a country" value="Select a country" />
                            <Picker.Item label="Pakistan" value="Pakistan" />
                            <Picker.Item label="UK" value="UK" />
                            <Picker.Item label="Chaina" value="Chaina" />

                        </Picker>

                        <View style={{ width: "100%", borderBottomWidth: RFValue(2), borderBottomColor: "black" }}>
                        </View>

                        <Picker
                            selectedValue={form.state}
                            onValueChange={(itemValue) => {setForm({ ...form, state: itemValue }); setValue('state', itemValue)}}
                        >
                            <Picker.Item label="Select a State" value="Select a State" />
                            <Picker.Item label="Sindh" value="Sindh" />
                            <Picker.Item label="Balochistan" value="Balohistan" />
                            <Picker.Item label="KPK" value="KPK" />
                            <Picker.Item label="Punjab" value="Punjab" />

                        </Picker>

                        <View style={{ width: "100%", borderBottomWidth: RFValue(2), borderBottomColor: "black", marginBottom: RFValue(5) }}>
                        </View>

                        <Picker
                            selectedValue={form.city}
                            onValueChange={(itemValue) => {setForm({ ...form, city: itemValue }); setValue('city', itemValue)}}
                        >
                            <Picker.Item label="Select a city" value="Select a city" />
                            <Picker.Item label="Karachi" value="Karachi" />
                            <Picker.Item label="Lahore" value="Lahore" />
                            <Picker.Item label="Multan" value="Multan" />

                        </Picker>

                        <View style={{ width: "100%", borderBottomWidth: RFValue(2), borderBottomColor: "black", marginBottom: RFValue(5) }}>
                        </View>

                        <TextInput style={styles.textInput}
                            value={form.email}
                            onChangeText={(text) => {setForm({ ...form, email: text }); setValue('email', text)}}
                            placeholder={"Email Address"}
                        />
                        <View style={{ marginTop: RFValue(5) }}>
                        </View>
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
                        <View style={{ marginTop: RFValue(5) }}>
                        </View>


                        <DatePicker
                            style={{ width: RFValue(400) }}
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
                                    marginRight: RFValue(20)
                                }
                                // ... You can check the source to find the other keys.
                            }}
                            onDateChange={(date) => {setForm({ ...form, date: date }); setValue('date', date)}}

                        />


                        <Picker
                            selectedValue={form.gender}
                            onValueChange={(itemValue) => {setForm({ ...form, gender: itemValue}); setValue('date', itemValue)}}
                        >
                            <Picker.Item label="Select a Gender" value="Select a Gender" />
                            <Picker.Item label="Male" value="Male" />
                            <Picker.Item label="Female" value="Female" />
                            <Picker.Item label="Do not wish to disclose" value="Do not wish to disclose" />

                        </Picker>

                        <View style={{ width: "100%", borderBottomWidth: RFValue(2), borderBottomColor: "black", marginBottom: RFValue(10) }}>
                        </View>

                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", }}>

                        <IconFont name="arrow-circle-left" size={50} color="#2c97c9"
                            onPress={() => { navigation.navigate("SignPage") }}
                        />
                        <IconFont name="arrow-circle-right" size={50} color="#2c97c9"
                            onPress={handleSubmit(onSubmit)}
                        />
                    </View>
                    <View style={{ marginTop: 15 }}></View>
                    <Footer />
                </View>
            </View>

        </KeyboardAwareScrollView>

    )
}
const styles = StyleSheet.create({


    textInput: {
        borderBottomColor: 'black',
        borderBottomWidth: RFValue(2),

    },
    container: { flex: 1 },
    textWrapper: {
        height: hp('100%'), // 70% of height device screen
        width: wp('90%')   // 80% of width device screen
    },
});