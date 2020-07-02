import React, { useState, useRef, Component, useEffect } from 'react';
import { StyleSheet, Text, View, Picker, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native'
import IconAnt from 'react-native-vector-icons/AntDesign';
import { RFValue } from 'react-native-responsive-fontsize'
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
import Header from './DrHeaderSignUp'
import Footer from '../Patient/Footer'
import { useForm } from 'react-hook-form'
import { d_signUpPage } from '../../redux/ActionCreators';
import { useDispatch, useSelector } from 'react-redux'
import { ScrollView } from 'react-native-gesture-handler';
// import { Button } from 'react-native-paper';


function SpecialityDetail(props) {
    // const dispatch = useDispatch()
    // const doctor = useSelector(state => state.doctor)

    const { handleSubmit, register, errors,setValue, getValues } = useForm();
    const navigation = useNavigation();


    const onSubmit = values => {
        var data = props.route.params.data
        var val = Object.assign(data, values)
        console.log(val)
        // dispatch(d_signUpPage(val))
        navigation.navigate('rewiewpage', {data: val})
    }
    const [form, setForm] = useState({
        Speciality: '',
        SubSpeciality: '',
        Interest: ''
    })

    useEffect(() => {
        register('d_primary_speciality')
        register('d_subspeciality')
        register('d_about')
        register('d_interest')
    }, [register])


    return (
            <View style={styles.mainView}>
                
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <Header/>
                        <Text style={[styles.TextStyle, {marginTop: RFValue(20) }]}>
                            Speciality Details
                    </Text>
                    <Text style={styles.smallText}>
                            Primary Speciality:
                    </Text>

                    <View style={styles.picker}>
                    <Picker style={styles.Insidepicker}
                        selectedValue={form.Speciality}
                        onValueChange={(itemValue) => {setForm({...form, Speciality: itemValue}); 
                        setValue('d_primary_speciality', itemValue)}}    
                        >
                            <Picker.Item label="Seleact One" value="Seleact One" />
                            <Picker.Item label="Neurologist" value="Neurologist" />
                            <Picker.Item label="Gynaecologist" value="Gynaecologist" />
                            <Picker.Item label="Internal Medical Physician " value="Gynaecologist" />
                    </Picker>
                    </View>

                    <Text style={styles.smallText}>
                            Subspeciality interest:
                    </Text>
                    <View style={styles.picker}>
                    <Picker style={styles.Insidepicker}
                        selectedValue={form.SubSpeciality}
                        onValueChange={(itemValue) => {setForm({...form, SubSpeciality: itemValue}); 
                        setValue('d_subspeciality', itemValue)}}    
                        >
                            <Picker.Item label="Seleact One" value="Seleact One" />
                            <Picker.Item label="Additional psychiatry" value="Additional psychiatry" />
                            <Picker.Item label="Advanced heart failure" value="Advanced heart failure" />
                            <Picker.Item label="Automatic pathalogy" value="Automatic pathalogy" />
                    </Picker>
                    </View>
                    <Text style={styles.smallText}>
                            About You:
                    </Text>
                    <View style={styles.passwordContainer}>

                        <TextInput
                            onChangeText={(text) => setValue('d_about', text)}
                            style={styles.About}
                            style={styles.inputStyle}

                        />

                        <IconAnt name="right" size={30} color="black"
                            onPress={() => { navigation.navigate("aboutyou") }}
                        />
                    </View>
                    <Text style={styles.smallText}>
                        Any Other interest:
                    </Text>
                    
                    <TextInput
                            onChangeText={(text) => setValue('d_interest', text)}
                            style={styles.About}
                            
                    /> 
                    <TextInput
                            onChangeText={(text) => setValue('d_interest', text)}
                            style={styles.About}
                           
                    /> 
                    <TextInput
                            onChangeText={(text) => setValue('d_interest', text)}
                            style={styles.About}
                            
                    /> 

                    <TouchableOpacity
                        style={styles.SubmitButtonStyle}
                        activeOpacity={.5}
                        onPress={handleSubmit(onSubmit)}

                    >

                        <Text style={{fontSize: RFValue(16), textAlign: "center"}}> 
                    SUBMIT </Text>

                    </TouchableOpacity>
                    </ScrollView>
                    <View>
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
    
    About: {
        backgroundColor: "white",
         alignContent: "center", 
         justifyContent: "center",
         fontWeight: "300",
          fontSize: 16, 
          height: 40, 
          width: "100%",  
          borderWidth: 1, 
          borderColor: "black", 
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

        marginTop: RFValue(20),
        paddingTop: RFValue(15),
        paddingBottom: RFValue(10),
        marginLeft: RFValue(70),
        marginRight: RFValue(70),
        backgroundColor: 'white',
        borderRadius: RFValue(10),
        borderWidth: RFValue(2),
        borderColor: '#17A05D'
    },
    passwordContainer: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'black',
        height: "5%"
      },
      inputStyle: {
        flex: 1,
      },
});

export default SpecialityDetail


