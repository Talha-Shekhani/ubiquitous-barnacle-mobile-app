import React, { useState, useRef, Component, useEffect } from 'react';
import { StyleSheet, Text, CheckBox, View, Image, TouchableOpacity, KeyboardAvoidingView, TextInput, Dimensions, ScrollView, Alert } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native'
import IconFont from 'react-native-vector-icons/FontAwesome';
// import { Header } from 'react-navigation-stack';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { RFValue } from 'react-native-responsive-fontsize'
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
import Header1 from '../Header'
import Footer from './Footer'
import { useForm } from 'react-hook-form'
import { p_signUpPage } from '../../redux/ActionCreators';
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'react-native-paper';
import Header from '../Header';

export default function P_messageSupport(props) {
    const navigation = useNavigation()
    const [count, setCount] = useState(0)
    return (
        <View style={styles.mainView}>
            <ScrollView showsVerticalScrollIndicator={false} >
                {console.disableYellowBox = true}
                <Header name='Sign In' nav='signin' />
                <Text style={{ fontSize: RFValue(22), marginVertical: 30 }}>
                    Message Support</Text>
                <View >
                    <TextInput style={styles.textInput}
                        // value={form.lastName}
                        // onChangeText={(text) => { setValue('p_last_name', text) }}
                        placeholder={"Reason"} />
                    <TextInput style={styles.textInput}
                    maxLength={400}
                        // value={form.lastName}
                        onChangeText={(text) => { 
                            // setValue('p_last_name', text);
                         setCount(text.length) }}
                        placeholder={"e.g. I need an excuse not"} />
                        <Text style={styles.counting} >{count}/400</Text>
                    <TouchableOpacity
                        style={styles.SubmitButtonStyle}
                        activeOpacity={.5} >
                        <Text style={styles.btnTextStyle}> SUBMIT </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <View>
                <IconFont name="arrow-circle-left" size={50} color="#2c97c9"
                    onPress={() => { navigation.goBack() }}
                />
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
    SubmitButtonStyle: {
        width: '60%',
        alignSelf: 'center',
        marginTop: 30,
        paddingVertical: 10,
        backgroundColor: 'white',
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#17A05D',
    },
    btnTextStyle: {
        color: 'black',
        textAlign: 'center',
        fontSize: 18,
    },
    textInput: {
        borderBottomColor: 'grey',
        borderBottomWidth: RFValue(2),
        fontSize: 18,
        paddingLeft: 10,
        marginVertical: 10

    },
    counting: {
        alignSelf: 'flex-end', 
        fontSize: 16
    }
})