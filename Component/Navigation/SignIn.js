import React, { useState } from 'react';
import { TextInput, Checkbox } from 'react-native-paper';
import HeaderSignin from '../HeaderSignIn'
import { View, Picker, Image, StyleSheet, KeyboardAvoidingView, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import IconFont from 'react-native-vector-icons/FontAwesome'; 

export default function SignUp() {

    const navigation = useNavigation();

    const [text, setText] = useState("")
    const [text2, setText2] = useState("")
    const [text3, setText3] = useState("")
    

    return (
        <View style={{backgroundColor: "white", flex:1}}>
            <HeaderSignin />

            <TextInput
                style={{ margin: 10 }}
                label='Email Address'
                value={text}
                onChangeText={text => setText(text)}
            />
            <TextInput
                style={{ margin: 10 }}
                label='Password'
                value={text2}
                onChangeText={text => setText2(text)}
            />
            <Text style={{fontSize: 15,fontWeight: "bold", marginLeft: 10  }}
            onPress={() => { navigation.navigate("forgetPassword") }}
            >I forgot my Password</Text>

            
            <TextInput
                style={{ margin: 20 }}
                label='Enter Pin Code'
                value={text3}
                onChangeText={text => setText3(text)}
            />
            <Text style={{fontSize: 15,fontWeight: "bold", marginLeft: 10  }}
                onPress={() => { navigation.navigate("forgetPin") }}
            >I forgot my Pin code</Text>

            <TouchableOpacity
                style={styles.SubmitButtonStyle}
                activeOpacity={.5}
                onPress={() => { navigation.navigate("Upcoming") }}
            >
                <Text style={styles.TextStyle}> Sing In </Text>
            </TouchableOpacity>
             
            <View style={{ marginTop: 80, marginLeft: 30 }}>
                <IconFont name="arrow-circle-left" size={50} color="#2c97c9" 
                    onPress={() => { navigation.navigate("SignPage") }}
            />
            
                </View>
             
              </View>
    )
}


const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
      },
     
      SubmitButtonStyle: {
        marginTop:10,
        paddingTop:15,
        paddingBottom:15,
        marginLeft:30,
        marginRight:30,
        backgroundColor:'white',
        borderRadius:10,
        borderWidth: 5,
        borderColor: 'lightblue',
        marginTop: 60
      },
     
      TextStyle:{
          color:'black',
          textAlign:'center',
          fontSize: 18,
          fontWeight: "bold"
      }
     
    });