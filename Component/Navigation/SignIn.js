import React, { useState, useEffect } from 'react';
import HeaderSignin from '../HeaderSignIn'
import { View, Picker, Image, StyleSheet, TextInput, KeyboardAvoidingView, Dimensions, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import IconFont from 'react-native-vector-icons/FontAwesome';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize'
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
import Footer from './Footer'
import { useForm } from 'react-hook-form'
import Password from './Password';

export default function SignUp() {

    const navigation = useNavigation();

    const [text, setText] = useState("")
    const [text2, setText2] = useState("")
    const [text3, setText3] = useState("")

    const onsubmit = data => {
        console.log(data)
    }
    const [register, handleSubmit, setValue] = useForm();

    useEffect(() => {
        register("Email")
        Password("Password")
    }, [register])

    return (
        <View style={{ backgroundColor: "white", flex: 1, paddingHorizontal: 20, flexDirection: "column", justifyContent: "space-between" }}>
            <HeaderSignin />

            <View style={styles.textWrapper}>
                <View style={{ marginTop: RFValue(80) }}></View>
                <TextInput style={styles.textInput}
                    placeholder={"Email Address"}
                />
                <View style={{ marginTop: RFValue(20) }}></View>
                <TextInput style={styles.textInput}

                    onChangeText={(text) => {
                        setValue('Password', text)
                    }}
                    secureTextEntry={true}
                    placeholder={"Password"}
                />
                <Text style={{ fontSize: 15, fontWeight: "bold", }}
                    onPress={() => { navigation.navigate("forgetPassword") }}
                >I forgot my Password</Text>

                <View style={{ marginTop: RFValue(20) }}></View>

                <TextInput style={styles.textInput}
                    onChangeText={(text) => {
                        setValue('Pin', text)
                    }}
                    placeholder={"Enter Pin Code"}
                />
                <Text style={{ fontSize: 15, fontWeight: "bold", }}
                    onPress={() => {
                        handleSubmit(onsubmit)
                        navigation.navigate("forgetPin")
                    }}
                >I forgot my Pin code</Text>

                <TouchableOpacity
                    style={styles.SubmitButtonStyle}
                    activeOpacity={.5}
                    onPress={() => { navigation.navigate("RouteHome") }}
                >
                    <Text style={styles.TextStyle}> Sing In </Text>
                </TouchableOpacity>

                <View style={{ marginTop: 80, }}>
                    <IconFont name="arrow-circle-left" size={50} color="#2c97c9"
                        onPress={() => { navigation.navigate("SignPage") }}
                    />
                </View>

                <Footer />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    textInput: {
        borderBottomColor: 'black',
        borderBottomWidth: RFValue(2),
        width: "100%"

    },
    container: { flex: 1 },
    textWrapper: {
        height: hp('100%'), // 70% of height device screen
        width: wp('90%')   // 80% of width device screen
    },
    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
    },

    SubmitButtonStyle: {
        marginTop: 10,
        paddingTop: 15,
        paddingBottom: 15,
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 5,
        borderColor: 'lightblue',
        marginTop: 60,
        width: "100%"
    },

    TextStyle: {
        color: 'black',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: "bold"
    }

});