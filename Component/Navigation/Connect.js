import React, { useState, useEffect } from 'react';
import { StyleSheet, Text,TextInput, View,Picker, Image,datepi, ClippingRectangle } from 'react-native';
 import { useNavigation, useTheme } from '@react-navigation/native'
import DatePicker from 'react-native-datepicker'
import { useForm } from 'react-hook-form'
import Header from "../HeaderConnect"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {useDispatch,useSelector  } from "react-redux"
import { p_appointmentDetailsOfOther } from '../../redux/ActionCreators';
import Footer from './Footer';
import {RFValue } from "react-native-responsive-fontsize"
import IconFont from "react-native-vector-icons/FontAwesome"
import { ScrollView, State } from 'react-native-gesture-handler';

export default function Connect() {

    const navigation = useNavigation();
    const dispatch = useDispatch();
    const patient =useSelector(state => state.patient)

    const { handleSubmit, register, errors,setValue } = useForm(); 
    const [form, setForm] = useState({
        FirstName: '',
        LastName: '',
         gender: '',
        date:'',
        relation:''
       

    })

    useEffect(()=>{
        register('first_name')
        register('last_name')
         register('gender')
         register('p_dob')
         register('relation')
         register('patient_id')
         setValue('patient_id',1)
    },[register])

    const onSubmit =data=>{
        dispatch(p_appointmentDetailsOfOther(data))
        console.log(data);
        console.log( 'Data '+ JSON.stringify(patient))
        navigation.navigate("ConnectSearch")
    }

    return(
       
            <View style={styles.mainView}>
                 <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <Header />
                    <Text style={styles.text}>
                        Appoinment for Someone else
            </Text>
                    <TextInput
                        placeholder="First Name"
                        placeholderTextColor="black"
                        style={styles.textInputStyle}
                        onChangeText={(text) => {
                            setForm({ ...form, FirstName: text });
                            setValue('first_name', text)
                        }}
                    // value={form.FirstName}
                    />
                    <TextInput
                        placeholder="Last Name"
                        placeholderTextColor="black"
                        style={styles.textInputStyle}
                        onChangeText={(text) => {
                            setForm({ ...form, LastName: text })
                            setValue('last_name', text)
                        }}
                    // value={form.LastName}
                    />
                    <Picker style={styles.picker}
                    selectedValue={form.gender}
                        onValueChange={(itemValue) => { setForm({ ...form, gender: itemValue }); setValue('gender', itemValue) }}
                    >
                        <Picker.Item label="Gender" value="Gender" />
                        <Picker.Item label="Male" value="Male" />
                        <Picker.Item label="Female" value="Female" />
                    </Picker>
                    <View style={styles.childView} ></View>

                    <DatePicker
                        style={{ width: "100%", marginTop: RFValue(25) }}
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

                            }
                        }}
                        onDateChange={(date) => { setForm({ ...form, date: date }); setValue('p_dob', date) }}
                    />
                    <View style={styles.childView} ></View>

                    <Picker style={styles.picker}
                      selectedValue={form.relation}
                        onValueChange={(itemValue) => { setForm({ ...form, relation: itemValue }); setValue('relation', itemValue) }}
                    >
                        <Picker.Item label="Relationship" value="Relationship" />
                        <Picker.Item label="Cousin" value="Cousin" />
                        <Picker.Item label="Father/Mother" value="Father/Mother" />

                    </Picker>
                    <View style={styles.childView} ></View>
                </View>
           
            </ScrollView>

            <View style={{ flexDirection: "row", justifyContent: "space-between", margin: 10 }}>
                <IconFont name="arrow-circle-left" size={50} color="#2c97c9"
                // onPress={() => { navigation.navigate("ConnectSearch")} }
                />
                <IconFont name="arrow-circle-right" size={50} color="#2c97c9"
                    onPress={handleSubmit(onSubmit)}
                />

            </View>

            <Footer />
            </View>
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
    textInputStyle:{
        borderBottomColor: "grey",
        borderBottomWidth: RFValue(1),
        fontSize: RFValue(14),
        color: "black",
        marginTop: RFValue(25)
        
    },
    text:{
       
        fontSize:RFValue(22),
        textAlign:"left",      
        marginTop: RFValue(25)
    },
    picker:{
       
        fontSize: RFValue(14),
        color: "black",
       marginTop:RFValue(20)
    },
    childView:{
        borderBottomColor: "grey",
        borderBottomWidth: RFValue(1),
    }
    
 });

// import React from 'react';
// import { StyleSheet, Text, View, TextInput,TouchableOpacity, Dimensions } from 'react-native';
// import HeaderConnect from '../HeaderConnect'
// import IconAnt from 'react-native-vector-icons/AntDesign'; 
// import { useNavigation, useTheme } from '@react-navigation/native'
// import { RFValue } from 'react-native-responsive-fontsize'
// import IconFont from 'react-native-vector-icons/FontAwesome'; 
// import { ScrollView } from 'react-native-gesture-handler';
// const WIDTH = Dimensions.get('window').width;
// const HEIGHT = Dimensions.get('window').height;


// export default function Contact(){
//     const navigation = useNavigation();

//     return(
//         <View style={styles.mainView}>
//             <ScrollView showsVerticalScrollIndicator = {false}>
//                 <HeaderConnect/>
//             </ScrollView>
//             {/* <View style={{ flexDirection: "row",alignItems:'center' }}>
//                 <View style={{ width: RFValue(20), borderBottomWidth: 5, borderBottomColor: "yellow" }}>
//                 </View>
//                 <View style={{ width: RFValue(20), borderBottomWidth: 5, borderBottomColor: "blue", marginLeft: RFValue(8) }}>
//                 </View>
//                 <View style={{ width: RFValue(20), borderBottomWidth: 5, borderBottomColor: "green", marginLeft: RFValue(8) }}>
//                 </View>
//                 <View style={{ width: RFValue(20), borderBottomWidth: 5, borderBottomColor: "red", marginLeft: RFValue(8) }}>
//                 </View>
//             </View>

//             <Text style={{ fontSize: RFValue(28),fontWeight: "bold", margin : RFValue(10) }}>
//                 Connect
//             </Text>
//                 <View style={styles.childView}>
//                     <Text style={{  fontSize: RFValue(25) }}

//                     >
//                         Myself
//                      </Text>
//                 </View>
//                 <View style={styles.childView}>
//                     <Text style={{  fontSize: RFValue(25) }}
//                     onPress={() => { navigation.navigate("childAppoinment") }}
//                     >
//                       My Child
//                      </Text>
//                 </View>    

//                 <View style={styles.childView}>
//                     <Text style={{  fontSize: RFValue(25)}}
//                     onPress={() => { navigation.navigate("AppoinmentSomeone") }}
//                     >
//                         Someone else
//                      </Text>
//                 </View>    
                
                
//                 <View style={{ marginTop: RFValue(180) }}>
//                 <IconFont name="arrow-circle-left" size={50} color="#2c97c9" 
//                     onPress={() => { navigation.navigate("RouteHome") }}
//             />
//             </View> */}
//           </View>


//     )
// }
