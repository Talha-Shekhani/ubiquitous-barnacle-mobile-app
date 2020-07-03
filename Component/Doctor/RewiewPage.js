import React, { useState, useRef, Component, useEffect } from 'react';
import { StyleSheet, Text, View, Picker, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native'
import IconAnt from 'react-native-vector-icons/AntDesign';
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



export default function RewiewPage(props) {

    const { handleSubmit, register, errors,setValue, getValues } = useForm();
    const navigation = useNavigation();

    const onSubmit = () => {
        var Demoraphicdata = props.route.params.Demoraphicdata;
        var qulificationData = props.route.params.qulificationData
        var specialityDetail = props.route.params.specialityDetail
        console.log("Demographics")
        console.log(Demoraphicdata)
        console.log("Qualification Detail")
        console.log(qulificationData)
        console.log("Speciality Detail")
        console.log(specialityDetail)

        // var val = Object.assign(data, values)
        navigation.navigate('DrTerms', {Demoraphicdata: Demoraphicdata, qulificationData: qulificationData,
        specialityDetail: specialityDetail
        })
        
    }  
    // const onSubmit = (values) => {
        

    //     var data = props.route.params.data
    //     var val = Object.assign(data, values)
    //     console.log("reveiw page")
    //     console.log(val)
    //     // dispatch(d_signUpPage(val))
    //     navigation.navigate('DrTerms', {data: val})
    // }
    


    return (
            <View style={styles.mainView}>
                
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <Header/>
                            <View style={[styles.btnGroup,{marginTop: 50} ]}>
                                <TouchableOpacity style={styles.buttonStyle} activeOpacity={.5}
                                    onPress={() => { navigation.navigate("drsignup") }}
                                >
                                    <Text style={styles.TextStyle}> Demographics </Text>
                                    <IconFont name='angle-right' size={40} />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.buttonStyle} activeOpacity={.5}
                                    onPress={() => { navigation.navigate("drqualification") }}
                                >
                                    <Text style={styles.TextStyle}>Qualification Details </Text>
                                    <IconFont name='angle-right' size={40} />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.buttonStyle} activeOpacity={.5}
                                    onPress={() => { navigation.navigate("specialitydetail") }}
                                >
                                    <Text style={styles.TextStyle}> Speciality Detail </Text>
                                    <IconFont name='angle-right' size={40} />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.buttonStyle} activeOpacity={.5}
                                    onPress={() => { navigation.navigate("specialitydetail") }}
                                >
                                    <Text style={styles.TextStyle}> Sub Speciality </Text>
                                    <IconFont name='angle-right' size={40} />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.buttonStyle} activeOpacity={.5}
                                     onPress={() => { navigation.navigate("specialitydetail") }}
                                >
                                    <Text style={styles.TextStyle}> Other Interest </Text>
                                    <IconFont name='angle-right' size={40} />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.buttonStyle} activeOpacity={.5}
                                    onPress={() => { navigation.navigate("uploadpitures") }}
                                >
                                    <Text style={styles.TextStyle}> Picture </Text>
                                    <IconFont name='angle-right' size={40} />
                                </TouchableOpacity>
                            </View>
                    </ScrollView>
                    <View>
                        <View style={styles.arrow}>
                        <IconFont name="arrow-circle-right" size={50} color="#2c97c9"
                            // onPress={() => { navigation.navigate("DrTerms") }}
                        onPress={handleSubmit(onSubmit)}

                        />
                        </View>
                       <Footer/>
                    </View>
            </View> 
    );
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
    buttonStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        backgroundColor: 'white',
        borderRadius: 6,
        borderWidth: 2,
        borderColor: '#4789F4',
        marginVertical: 10,
        },
    TextStyle: {
        color: 'black',
        alignSelf: 'center',
        fontSize: 18,
    },    
    arrow: {
        alignSelf: 'flex-end',
        marginRight: 0,
        fontSize: RFValue(16),
        
    }
});
