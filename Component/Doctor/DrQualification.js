import React, { useState, useRef, Component, useEffect } from 'react';
import { StyleSheet, Text, View, Picker, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native'
import IconFont from 'react-native-vector-icons/FontAwesome';
import { RFValue } from 'react-native-responsive-fontsize'
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
import Header from './DrHeaderSignUp'
import Footer from '../Patient/Footer'
import { useForm } from 'react-hook-form'
import { p_signin, p_signPage } from '../../redux/ActionCreators';
import { useDispatch, useSelector } from 'react-redux'
import { ScrollView } from 'react-native-gesture-handler';
// import { Button } from 'react-native-paper';


function DrQualification(props) {

    const { handleSubmit, register, errors,setValue, getValues } = useForm();
    const navigation = useNavigation();

    const onSubmit = values => {
        var data = props.route.params.data;
        var val = Object.assign(data, values)
        console.log(val)
        navigation.navigate('specialitydetail', {data: val})
        
    }
    const [form, setForm] = useState({
        primary: '',
        yearly: '',
        country: ''
    })

    useEffect(() => {
        register('d_primary')
        register('d_yearly')
        register('d_country')
        register('d_higher_degree')
        register('d_country_name')
        register('d_license_name')
        register('d_license_no')
    }, [register])


    return (
            <View style={styles.mainView}>
                
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Header/>
                    <Text style={[styles.TextStyle, {marginTop: RFValue(20) }]}>
                            Qualification Details
                    </Text>
                    <Text style={styles.smallText}>
                            Primary Qualification:
                    </Text>

                    <View style={styles.picker}>
                    <Picker style={styles.Insidepicker}
                        selectedValue={form.primary}
                        onValueChange={(itemValue) => {setForm({...form, primary: itemValue}); 
                        setValue('d_primary', itemValue)}}    
                        >
                            <Picker.Item label="Seleact One" value="Seleact One" />
                            <Picker.Item label="MBBS" value="MBBS" />
                            <Picker.Item label="MBMS" value="MBMS" />
                            <Picker.Item label="MBChB" value="MBChB" />
                            <Picker.Item label="MBBCh" value="MBBCh" />
                            <Picker.Item label="MD" value="MD" />
                            <Picker.Item label="Dr.MuD" value="Dr.MuD" />
                            <Picker.Item label="Dr.MeD" value="Dr.MeD" />
                            <Picker.Item label="MD" value="MD" />
                            <Picker.Item label="Dr.MUD" value="Dr.MUD" />
                            <Picker.Item label="Other" value="Other" />
                    </Picker>
                    </View>

                    <Text style={styles.smallText}>
                            Year of Primary Qualification:
                    </Text>
                    <View style={styles.picker}>
                    <Picker style={styles.Insidepicker}
                        selectedValue={form.yearly}
                        onValueChange={(itemValue) => {setForm({...form, yearly: itemValue}); 
                        setValue('d_yearly', itemValue)}}    
                        >
                            <Picker.Item label="Seleact One" value="Seleact One" />
                            <Picker.Item label="MBBS" value="MBBS" />
                            <Picker.Item label="MBMS" value="MBMS" />
                            <Picker.Item label="MBChB" value="MBChB" />
                            <Picker.Item label="MBBCh" value="MBBCh" />
                            <Picker.Item label="MD" value="MD" />
                            <Picker.Item label="Dr.MuD" value="Dr.MuD" />
                            <Picker.Item label="Dr.MeD" value="Dr.MeD" />
                            <Picker.Item label="MD" value="MD" />
                            <Picker.Item label="Dr.MUD" value="Dr.MUD" />
                            <Picker.Item label="Other" value="Other" />
                   </Picker>
                    </View>
                    <Text style={styles.smallText}>
                            Country of Primary Qualification:
                    </Text>
                    <View style={styles.picker}>
                    <Picker style={styles.Insidepicker}
                        selectedValue={form.country}
                        onValueChange={(itemValue) => {setForm({...form, country: itemValue}); 
                        setValue('d_country', itemValue)}}    
                        >
                          <Picker.Item label="Seleact One" value="Seleact One" />
                            <Picker.Item label="Pakistan" value="Pakistan" />
                            <Picker.Item label="Afghanistan" value="MBMS" />
                    </Picker>
                    </View>
                    <Text style={styles.smallText}>
                            Higher Degrees:
                    </Text>
                    <TextInput
                            onChangeText={(text) => setValue('d_higher_degree', text)}
                            style={styles.language}
                    />  
                    <TouchableOpacity
                        style={styles.SubmitButtonStyle}
                        
                        // onPress={() => { navigation.navigate("drsignpage") }}
                    >
                        <Text style={{fontSize: RFValue(16)}}> + ADD </Text>
                    </TouchableOpacity>


                    <Text style={{fontSize: RFValue(18), marginTop: RFValue(20)}}>
                        Registration and licensing details:
                    </Text>
                    
                    <Text>
                        (country Name, License Name & Number)
                    </Text>
                    <View style={styles.sameLine}>
                         <TextInput 
                         placeholder="Country Name"
                         placeholderTextColor="black"
                         style={styles.LicenceTextBox} 
                         onChangeText={(text) => setValue('d_country_name', text)}
                         />
                        <TextInput 
                        placeholder="License Name"
                        placeholderTextColor="black"
                        style={styles.LicenceTextBox} 
                        onChangeText={(text) => setValue('d_license_name', text)}
                        />
                        <TextInput 
                        placeholder="License No."
                        placeholderTextColor="black"
                        style={styles.LicenceTextBox} 
                        onChangeText={(text) => setValue('d_license_no', text)}
                        />
                    </View>

                </ScrollView>


                <View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", }}>

                        <IconFont name="arrow-circle-left" size={50} color="#2c97c9"
                            onPress={() => { navigation.navigate("drsignup") }}
                        />
                        <IconFont name="arrow-circle-right" size={50} color="#2c97c9"
                            onPress={handleSubmit(onSubmit)}
                        />
                    </View>
                        <Footer/>
                    </View>
            </View> 
    );
}

const styles = StyleSheet.create({

    mainView: {
        width: "100%",
        height: "100%",
        paddingHorizontal: RFValue(20),
        paddingTop: RFValue(20),
        backgroundColor: 'white',
        justifyContent: 'space-between',
    },
    TextStyle: {
        fontSize: 25,
    },
    smallText:{
        fontSize: 16,
        marginTop: RFValue(20), 
        marginBottom: RFValue(7),
    },
    picker: {
        borderWidth: 1,
        borderColor: "black",
    },
    Insidepicker: {
        marginVertical: -10
    },
    inputPicker: {
        borderBottomColor: 'black',
        borderBottomWidth: RFValue(5),
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
    LicenceTextBox:{
          backgroundColor: "white",
          fontSize: 12, 
          height: 35, 
          width: "30%",  
          borderWidth: 1, 
          borderColor: "black", 
          marginTop: RFValue(10),
          textAlign: "center"
    },
    sameLine: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    SubmitButtonStyle: {
        
        marginTop: RFValue(10),
        paddingBottom: RFValue(8),
        backgroundColor:'white',
        width: "23%",
        alignSelf: "flex-end",
        borderWidth: 1,
        borderColor: 'black',
        
      },
});

export default DrQualification


