import React, { useState, useEffect } from 'react';
import Header from '../Header'
import { View, Picker, StyleSheet, CheckBox, TextInput, Image, KeyboardAvoidingView, TouchableOpacity, Text, Button, Dimensions, Alert } from 'react-native';
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
import { ScrollView } from 'react-native-gesture-handler';

export default function P_AccountInfo(props) {

    const navigation = useNavigation();

    return (
        <View style={styles.mainView}>
            <ScrollView showsVerticalScrollIndicator={false} >
                {console.disableYellowBox = true}
                <View style={{ flexDirection: "row", justifyContent: "space-between"}}>
                    <Image source={require('../../assets/tibLogoPng.png')} style={{ width: 100, height: 100, marginTop: -10}} />
                    <View>
                        <IconFont name='bell-o' size={26} style={{ fontWeight: 'bold', flexDirection: 'row', alignSelf: 'flex-end' }} />
                        <Text style={{ fontSize: 22, marginTop: 20 }}
                            onPress={() => {
                                Alert.alert('SignOut', 'Re you sure want to sign out?', [
                                    {
                                        text: 'Cancel',
                                        style: 'cancel'
                                    },
                                    {
                                        text: 'OK',
                                        onPress: () => props.navigation.navigate('SignPage')
                                    }
                                ],
                                    { cancelable: true })
                            }}>Sign Out</Text>
                    </View>
                </View>
                <Text style={{ fontSize: RFValue(23), fontWeight: "bold", marginTop: 10}}>
                    Account Information</Text>
                <View >
                    <TextInput style={styles.textInput} editable={false}
                        placeholder={"Title"}
                        placeholderTextColor="black" />
                    <TextInput style={styles.textInput} editable={false}
                        onChangeText={(text) => { setValue('p_first_name', text) }}
                        placeholder={"First Name"}
                        placeholderTextColor="black" />
                    <TextInput style={styles.textInput} editable={false}
                        placeholder={"Last Name"}
                        placeholderTextColor="black" />
                    <TextInput style={styles.textInput} editable={false}
                        placeholder={"Country"}
                        placeholderTextColor="black" />
                    <TextInput style={styles.textInput} editable={false}
                        placeholder={"State"}
                        placeholderTextColor="black" />
                    <TextInput style={styles.textInput} editable={false}
                        placeholder={"City"}
                        placeholderTextColor="black" />
                    <TextInput style={styles.textInput} editable={false}
                        placeholder={"Phone Number"}
                        placeholderTextColor="black" />
                    <TextInput style={styles.textInput} editable={false}
                        placeholder={"Email Address"}
                        placeholderTextColor="black" />
                    <TextInput style={styles.textInput} editable={false}
                        placeholder={"Date Of Birth"}
                        placeholderTextColor="black" />
                    <TextInput style={styles.textInput} editable={false}
                        placeholder={"Gender"}
                        placeholderTextColor="black" />
                </View>
            </ScrollView>
            <View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", }}>
                    <IconFont name="arrow-circle-left" size={50} color="#2c97c9"
                        onPress={() => { navigation.navigate('Myaccount') }}
                    />
                </View>
                <Footer />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({

    mainView: {
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
        fontSize: 18,
        paddingLeft: 10,
        marginVertical: 3

    },
    container: { flex: 1 },
    textWrapper: {
        height: hp('100%'), // 70% of height device screen
        width: wp('90%')   // 80% of width device screen
    },
});