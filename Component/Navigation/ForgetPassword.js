import React, { useState } from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native';
import { useNavigation,  } from '@react-navigation/native'
import { TextInput, Checkbox } from 'react-native-paper';
import IconFont from 'react-native-vector-icons/FontAwesome'; 


export default function ForgetPassword() {

  const navigation = useNavigation();
  const [text, setText] = useState("")

  return (
            <View style={{backgroundColor: "white", flex:1}}>
            <Image source={require('../../assets/tibLogoPng.png')}  style={{width: 200, height:200, }}/>
                <View style={{marginLeft: 20}}>
                <Text style={{fontSize: 25,fontWeight: "bold"  }}>
                  Forgot My Password </Text>
                </View>
              
                <TextInput
                style={{ margin: 10 }}
                label='Enter your email address'
                value={text}
                onChangeText={text => setText(text)}
               />

                <Text  style={{width : "80%", fontSize: 20, marginLeft: 50, fontWeight: "bold" }}>
                    We will send you a link to change 
                </Text>

                <Text  style={{width : "50%", fontSize: 20, marginLeft: 130, fontWeight: "bold" }}>
                    your password
                </Text>

                <TouchableOpacity
                style={styles.SubmitButtonStyle}
                activeOpacity={.5}
                onPress={() => { alert("Submitted") }}
            >
                <Text style={styles.TextStyle}> SUBMIT </Text>
            </TouchableOpacity>

            <View style={{ marginTop: 80, marginLeft: 30 }}>
                <IconFont name="arrow-circle-left" size={50} color="#2c97c9" 
                    onPress={() => { navigation.navigate("signin") }}
            />
            </View>

            </View>
  );
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
        marginLeft:100,
        marginRight:100,
        backgroundColor:'white',
        borderRadius:10,
        borderWidth: 3,
        borderColor: 'green',
        marginTop: 60
      },
     
      TextStyle:{
          color:'black',
          textAlign:'center',
          fontSize: 18,
          fontWeight: "bold"
      }
     
});
