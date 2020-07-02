import React, { useState } from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity, Dimensions, TextInput } from 'react-native';
import { useNavigation,  } from '@react-navigation/native'
import IconFont from 'react-native-vector-icons/FontAwesome'; 
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize'
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
import Footer from '../Patient/Footer'
import { ScrollView } from 'react-native-gesture-handler';

export default function ForgetPassword() {

  const navigation = useNavigation();
  const [text, setText] = useState("")

  return (
    <View style={styles.mainView}>
            
              <ScrollView showsVerticalScrollIndicator={false}>
            <Image source={require('../../assets/tibLogoPng.png')}  style={{width: 200, height:200, }}/>
            <View style={{marginBottom: 10}}>
                <Text style={{fontSize: 22 }}>
                  Forgot My Password </Text>
                </View>
              
                <TextInput style={styles.textInput}
                onChangeText={(text) => setForm({ ...form, lastName: text })}
                placeholder={"Enter Your Email Address"}
                placeholderTextColor="black"
                />
                
                <View style={{marginTop: RFValue(20)}}></View>
                <Text  numberOfLines={2} ellipsizeMode= 'middle'
                style={{fontSize: 16, textAlign: "center" }}>
                    We will send you a link to change 
                </Text>
                <Text
                style={{ fontSize: 16, textAlign: "center" }}>
                   Your Password
                </Text>

                <TouchableOpacity
                style={styles.SubmitButtonStyle}
                activeOpacity={.5}
                onPress={() => { alert("Submitted") }}
            >
                <Text style={styles.TextStyle}> SUBMIT </Text>
            </TouchableOpacity>
            </ScrollView>
            
              <View>
                <IconFont name="arrow-circle-left" size={50} color="#2c97c9"
                  onPress={() => { navigation.navigate("signin") }}
                />

                <Footer />
              </View>
            </View>
  );
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

  },
    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
      },
     
      SubmitButtonStyle: {
        marginTop:RFValue(10),
        paddingTop:RFValue(15),
        paddingBottom:RFValue(15),
        alignItems: "center",
        marginLeft: RFValue(50),
        marginRight: RFValue(50),
        backgroundColor:'white',
        borderRadius:RFValue(7),
        borderWidth: RFValue(3),
        borderColor: 'green',
        marginTop: RFValue(60)
        // marginTop:8,
        // paddingTop:15,
        // paddingBottom:15,
        // marginLeft:80,
        // marginRight:80,
        // backgroundColor:'white',
        // borderRadius:3,
        // borderWidth: 3,
        // borderColor: 'green',
        // marginTop: 60
      },
     
      TextStyle:{
          color:'black',
          textAlign:'center',
          fontSize: 16,
      }
     
});
