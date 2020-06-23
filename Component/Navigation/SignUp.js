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

    useEffect(() => {
        console.log(form)
        register('p_title')
        register('p_first_name')
        register('p_last_name')
        register('p_country_id')
        register('p_state_id')
        register('p_city_id')
        register('p_email')
        register('p_pin_code')
        register('p_phone_no')
        register('p_gender')
        register('p_dob')
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
                            onValueChange={(itemValue) => {setForm({title: itemValue}); setValue('p_title', itemValue)}}
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
                            onChangeText={(text) => {setForm({ ...form, firstName: text }); setValue('p_first_name', text)}}
                            placeholder={"First Name"}
                        />

                        <TextInput style={styles.textInput}
                            value={form.lastName}
                            onChangeText={(text) => {setForm({ ...form, lastName: text }), setValue('p_last_name', text)}}
                            placeholder={"Last Name"}
                        />

                        <Picker
                            selectedValue={form.country}
                            onValueChange={(itemValue) => {setForm({ ...form, country: itemValue }); setValue('p_country_id', itemValue)}}
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
                            onValueChange={(itemValue) => {
                                setForm({ ...form, state: itemValue }); setValue('p_state_id', itemValue)}}
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
                            onValueChange={(itemValue) => {setForm({ ...form, city: itemValue }); setValue('p_city_id', itemValue)}}
                        >
                            <Picker.Item label="Select a city" value="Select a city" />
                            <Picker.Item label="Karachi" value="Karachi" />
                            <Picker.Item label="Lahore" value="Lahore" />
                            <Picker.Item label="Multan" value="Multan" />

                        </Picker>

                        <View style={{ width: "100%", borderBottomWidth: RFValue(2), borderBottomColor: "black", marginBottom: RFValue(5) }}>
                        </View>
                        <TextInput style={styles.textInput}
                            value={form.phone}
                            onChangeText={(text) => {setForm({ ...form, phone: text }); setValue('p_phone_no', text)}}
                            placeholder={"Phone Number"}
                        />
                        <View style={{ marginTop: RFValue(5) }}></View>
                        <TextInput style={styles.textInput}
                            value={form.email}
                            onChangeText={(text) => {setForm({ ...form, email: text }); setValue('p_email', text)}}
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
                            onDateChange={(date) => {setForm({ ...form, date: date }); setValue('p_dob', date)}}

                        />


                        <Picker
                            selectedValue={form.gender}
                            onValueChange={(itemValue) => {setForm({ ...form, gender: itemValue}); setValue('p_gender', itemValue)}}
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



// import React, { useState, useEffect } from 'react';
// import Header from '../Header'
// import { View, Picker, StyleSheet, CheckBox, TextInput,Image, KeyboardAvoidingView, TouchableOpacity, Text, Button, Dimensions } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import IconFont from 'react-native-vector-icons/FontAwesome';
// import IconEnt from 'react-native-vector-icons/Entypo'; 
// import DatePicker from 'react-native-datepicker'
// import Footer from './Footer'
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
// import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
// import { RFValue } from 'react-native-responsive-fontsize'
// const WIDTH = Dimensions.get('window').width;
// const HEIGHT = Dimensions.get('window').height;
// import { useForm } from "react-hook-form";

// export default function SignUp() {

//     // const onSubmit = values => console.log(values);
//     const onsubmit = data => {
//         console.log("Form Data", data)
//     }
//     const { handleSubmit, register, errors } = useForm();

//     useEffect(() => {
//         register("Title")
//         register("First Name")
//         register("Last Name")
//         register("Select a country")        
//         register("Select a State")        
//         register("Select a City")        
//         register("Email Address")        
//         register("Date OF Birth")        
//         register("Select A Gender")        
//     },[register])

//     const navigation = useNavigation();
//     // const [form,setForm]= useState({
//     //     lastName: '',
//     //     firstName: ''
//     // })
    
//     const [text, setText] = useState("")
//     const [text2, setText2] = useState("")
//     const [text3, setText3] = useState("")
//     const [text4, setText4] = useState("")
//     const [text5, setText5] = useState("")
//     const [text6, setText6] = useState("")
//     const [selectedValue, setSelectedValue] = useState("Select a country");
//     const [selectedValue2, setSelectedValue2] = useState("Select a city");
//     const [selectedValueStates, setSelectedValueStates] = useState("Select a State");
//     const [selectedValueGender, setSelectedValueGender] = useState("Gender");
//     const [selectedValueTitle, setSelectedValueTitle] = useState("Gender");
//     const [setDate,setDataValue] = useState("")
   
//     // useEffect(() => {
//     //     console.log(form)
//     // },[form])

//     return (
//         <KeyboardAwareScrollView style={{backgroundColor: "white"}} >
//         <View style={{ width: WIDTH, backgroundColor: "white", flex: 1, display: 'flex', paddingHorizontal: RFValue(20) }}>
//         <View style={styles.textWrapper}>
//             {console.disableYellowBox = true}
//             <Header />
//             <Text style={{ fontSize: RFValue(23), fontWeight: "bold", }}>
//                 Account Information</Text>
//             <View >

//                 <Picker
//                     selectedValue={selectedValueTitle}
//                     onValueChange={(itemValue, itemIndex) => setSelectedValueTitle(itemValue)}
//                 >
//                     <Picker.Item label="Title" value="Title" />
//                     <Picker.Item label="Mr" value="Mr" />
//                     <Picker.Item label="Mrs" value="Mrs" />
//                     <Picker.Item label="Ms" value="Ms" />

//                 </Picker>

//                 <View style={{ width: "100%", borderBottomWidth: RFValue(2), borderBottomColor: "black" }}>
//                 </View>

//                 <TextInput style={styles.textInput}
//                     onChangeText={(text) => {
//                         onChangeText('First Name', text)
//                     }}
//                     placeholder={"First Name"}
//                 />

//                 <TextInput style={styles.textInput}
//                     onChangeText={(text) => {
//                         onChangeText('Last Name', text)
//                     }}
//                     placeholder={"Last Name"}
//                 />

//                 <Picker
//                     selectedValue={selectedValue}
//                     onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
//                 >
//                     <Picker.Item label="Select a country" value="Select a country" />
//                     <Picker.Item label="Pakistan" value="Pakistan" />
//                     <Picker.Item label="UK" value="UK" />
//                     <Picker.Item label="Chaina" value="Chaina" />

//                 </Picker>

//                 <View style={{ width: "100%", borderBottomWidth: RFValue(2), borderBottomColor: "black" }}>
//                 </View>

//                 <Picker
//                     selectedValue={selectedValueStates}
//                     onValueChange={(itemValue, itemIndex2) => setSelectedValueStates(itemValue)}
//                 >
//                     <Picker.Item label="Select a State" value="Select a State" />
//                     <Picker.Item label="Sindh" value="Sindh" />
//                     <Picker.Item label="Balochistan" value="Balohistan" />
//                     <Picker.Item label="KPK" value="KPK" />
//                     <Picker.Item label="Punjab" value="Punjab" />

//                 </Picker>

//                 <View style={{ width: "100%", borderBottomWidth: RFValue(2), borderBottomColor: "black", marginBottom: RFValue(5) }}>
//                 </View>

//                 <Picker
//                     selectedValue={selectedValue2}
//                     onValueChange={(itemValue, itemIndex2) => setSelectedValue2(itemValue)}
//                 >
//                     <Picker.Item label="Select a city" value="Select a city" />
//                     <Picker.Item label="Karachi" value="Karachi" />
//                     <Picker.Item label="Lahore" value="Lahore" />
//                     <Picker.Item label="Multan" value="Multan" />

//                 </Picker>

//                 <View style={{ width: "100%", borderBottomWidth: RFValue(2), borderBottomColor: "black", marginBottom: RFValue(5) }}>
//                 </View>

//                 <TextInput style={styles.textInput}
//                     onChangeText={(text) => {
//                         onChangeText('Email Address', text)
//                     }}
//                     placeholder={"Email Address"}
//                 />
//                 <View style={{marginTop: RFValue(5)}}>
//                 </View>
//                     {/* <Text style={{ fontSize: RFValue(20),  }}>
//                         Phone Number
//                     </Text>
//                      */}
//                     {/* <View style={{ flexDirection: "row",alignItems:'center',justifyContent:'space-around' }}>
//                     <IconEnt name="plus" size={30} color="black"
//                     />
//                     <TextInput
//                         style={{ backgroundColor: "#f5f4f2",alignContent : "center" ,justifyContent: "center" , fontWeight: "500", fontSize: RFValue(15), height: RFValue(40), width: "20%", borderWidth: RFValue(1), borderColor: "grey",  }}
//                     />
//                         <TextInput
//                         style={{ backgroundColor: "#f5f4f2",alignContent : "center" ,justifyContent: "center" , fontWeight: "500", fontSize: RFValue(15), height: RFValue(40), width: "60%", borderWidth: RFValue(1), borderColor: "grey",  }}
                        
//                     />
//                     </View> */}
//                 <View style={{marginTop: RFValue(5)}}>
//                 </View>
                 
                
//                 <DatePicker
//                     style={{ width: RFValue(400) }}
//                     date={setDate}
//                     mode="date"
//                     placeholder="Date of Birth"
//                     format="YYYY-MM-DD"
//                     minDate="1960-05-01"
//                     maxDate="2020-06-01"
//                     confirmBtnText="Confirm"
//                     cancelBtnText="Cancel"
//                     androidMode="spinner"
//                     customStyles={{
//                         dateIcon: {
//                             position: 'absolute',
//                             left: RFValue(0),
//                             top: RFValue(4),
//                         },
//                         dateInput: {
//                             marginRight: RFValue(20)
//                         }
//                         // ... You can check the source to find the other keys.
//                     }}
//                     onDateChange={(date) => { setDataValue(date) }}

//                 />


//                 <Picker
//                     selectedValue={selectedValueGender}
//                     onValueChange={(itemValue, itemIndex) => setSelectedValueGender(itemValue)}
//                 >
//                     <Picker.Item label="Select a Gender" value="Select a Gender" />
//                     <Picker.Item label="Male" value="Male" />
//                     <Picker.Item label="Female" value="Female" />
//                     <Picker.Item label="Do not wish to disclose" value="Do not wish to disclose" />

//                 </Picker>

//                 <View style={{ width: "100%", borderBottomWidth: RFValue(2), borderBottomColor: "black", marginBottom: RFValue(10) }}>
//                 </View>

//             </View>
//             <View style={{ flexDirection: "row", justifyContent: "space-between", }}>

//                 <IconFont name="arrow-circle-left" size={50} color="#2c97c9"
//                     onPress={() => { navigation.navigate("SignPage") }}
//                 />
//                 <IconFont name="arrow-circle-right" size={50} color="#2c97c9"
//                     onPress={() => { navigation.navigate("password") }}
//                 />
//             </View>
//             <View style={{marginTop: 15}}></View>
//             <Footer/>
//             </View>
//         </View>
        
//          </KeyboardAwareScrollView>
        
//     )
// }
// const styles = StyleSheet.create({

    
//     textInput: {
//         borderBottomColor: 'black', 
//         borderBottomWidth: RFValue(2), 
            
//     },
//     container: { flex: 1 },
//   textWrapper: {
//     height: hp('100%'), // 70% of height device screen
//     width: wp('90%')   // 80% of width device screen
//   },
// });
