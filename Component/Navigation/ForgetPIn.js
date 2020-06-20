import React, { useState } from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity, Dimensions, TextInput } from 'react-native';
import { useNavigation,  } from '@react-navigation/native'
import IconFont from 'react-native-vector-icons/FontAwesome'; 
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize'
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
import Footer from './Footer'

export default function ForgetPassword() {

  const navigation = useNavigation();
  const [text, setText] = useState("")

  return (
    <View style={{backgroundColor: "white", flex: 1, paddingHorizontal: 20}}>
              <View style={styles.textWrapper}>     
    
            <Image source={require('../../assets/tibLogoPng.png')}  style={{width: 200, height:200, }}/>
                <View style={{marginBottom: 10}}>
                <Text style={{fontSize: 25, }}>
                  Forgot My PIN </Text>
                  </View>
              
                <TextInput style={styles.textInput}
                onChangeText={(text) => setForm({ ...form, lastName: text })}
                placeholder={"Enter Your Email Address"}
                />
                <View style={{marginTop: RFValue(20)}}></View>
                <Text  numberOfLines={2} ellipsizeMode= 'middle'
                style={{fontSize: 20, textAlign: "center" }}>
                    We will send you a link to change 
                </Text>
                <Text
                style={{fontSize: 20,  textAlign: "center" }}>
                   Your Pin
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
            <View style={{marginTop: RFValue(40)}}></View>
              <Footer/>
            </View>
            </View>
  );
}


const styles = StyleSheet.create({
  textInput: {
    borderBottomColor: 'black',
    borderBottomWidth: RFValue(2),

  },
  container: { flex: 1 },
  textWrapper: {
    height: hp('90%'), // 70% of height device screen
    width: wp('90%')   // 80% of width device screen
  },
    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
      },
     
      SubmitButtonStyle: {
        marginTop:10,
        paddingTop:15,
        paddingBottom:15,
        marginLeft:80,
        marginRight:80,
        backgroundColor:'white',
        borderRadius:2,
        borderWidth: 2,
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
