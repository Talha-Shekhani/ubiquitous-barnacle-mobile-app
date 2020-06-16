import React,{useState, useRef} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity , KeyboardAvoidingView} from 'react-native';
import { TextInput } from 'react-native-paper';
import { useNavigation, useTheme } from '@react-navigation/native'
import  IconFont  from 'react-native-vector-icons/FontAwesome';
// import { Header } from 'react-navigation-stack';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import  IconMaterial  from 'react-native-vector-icons/MaterialCommunityIcons'; 
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Header1 from '../Header'
// import Checking from './checking'

export default function Password() {
    
    const [text,setText] = useState("")
    const [textPhone,setTextPhone] = useState("")
    const [pin1,setpin1] = useState("")
    const [pin2,setpin2] = useState("")
    const [pin3,setpin3] = useState("")
    const [pin4,setpin4] = useState("")
    const ref_input2 = useRef();
    const ref_input3 = useRef();
    const ref_input4 = useRef();

    
     const navigation = useNavigation();
        return (
            <KeyboardAwareScrollView>
            <View style={{backgroundColor: "white", flex:1}} >
                
                <Header1 />
                <View style={{marginTop: 5}} >
                <TextInput
                    style={{ margin: 5, marginTop: -5 }}
                    secureTextEntry={true}
                    label='Password'
                    value={text}
                    onChangeText={text => setText(text)}
                />
                <TextInput
                    label='Enter Phone number'
                    value={textPhone}
                    onChangeText={text => setTextPhone(text)}
                />
                </View>
                <View style={{flexDirection: "row", margin: 10}}>
                    <Text style={{fontSize: 20,fontWeight: "bold", marginTop: 10  }}>Weak</Text>
                    <Text style={{fontSize: 20,fontWeight: "bold", marginTop: 10, marginLeft: 40  }}>Strong</Text>
                </View>
                <View style={{flexDirection: "row"}}>
                <IconFont name="circle" size={20} color="#7ff5f3" style={{margin: 4}}/>
                <IconFont name="circle" size={20} color="#7ff5f3"  style={{margin: 4}}/>
                <IconFont name="circle" size={20} color="#7ff5f3"  style={{margin: 4}}/>
                <IconFont name="circle" size={20} color="#7ff5f3"  style={{margin: 4}}/>

                <IconFont name="circle" size={20} color="#00a809" style={{margin: 4}}/>
                <IconFont name="circle" size={20} color="#00a809"  style={{margin: 4}}/>
                <IconFont name="circle" size={20} color="#00a809"  style={{margin: 4}}/>
                <IconFont name="circle" size={20} color="#00a809"  style={{margin: 4}}/>
                </View>

                <View style={{flexDirection: "row", margin: 10}}>
                <IconFont name="circle" size={20} color="#00a809"  />
                <Text style={{fontSize: 20, marginLeft: 8, marginTop: -4 }}>8 characters Minimum</Text>
                </View>

                
                <View style={{flexDirection: "row", margin: 10}}>
                <IconFont name="circle" size={20} color="#00a809"  />
                <Text style={{fontSize: 20, marginLeft: 8, marginTop: -4 }}>One number  </Text>
                </View>

                <Text style={{fontSize: 30,fontWeight: "bold", margin:10, marginTop: -5 }}>Security Pin  </Text>
                
                <View style={{flexDirection : "row", justifyContent: "space-evenly"}}>
                    <TextInput
                        // placeholder="Input1"
                        autoFocus={true}
                        returnKeyType="next"
                        onSubmitEditing={() => ref_input2.current.focus()}
                        onChangeText={(pin1) => setpin1(pin1)}
                        value={pin1}
                        maxLength={1}
                        style={{ backgroundColor: "#f5f4f2",alignContent : "center" ,justifyContent: "center" , fontWeight: "600", fontSize: 20, height: 55, width: "10%", borderRadius: 10, borderWidth: 0.5, borderColor: "grey", textAlign: "center" }}
                    />
                    <TextInput
                        // placeholder="Input2"
                        returnKeyType="next"
                        onSubmitEditing={() => ref_input3.current.focus()}
                        ref={ref_input2}
                        onChangeText={(pin2) => setpin2(pin2)}
                        value={pin2}
                        maxLength={1}
                        style={{ backgroundColor: "#f5f4f2",alignContent : "center" ,justifyContent: "center" , fontWeight: "600", fontSize: 20, height: 55, width: "10%", borderRadius: 10, borderWidth: 0.5, borderColor: "grey", textAlign: "center" }}
                    />
                    <TextInput
                        // placeholder="Input3"
                        returnKeyType="next"
                        onSubmitEditing={() => ref_input4.current.focus()}
                        ref={ref_input3}
                        onChangeText={(pin3) => setpin3(pin3)}
                        value={pin3}
                        maxLength={1}
                        style={{ backgroundColor: "#f5f4f2",alignContent : "center" ,justifyContent: "center" , fontWeight: "600", fontSize: 20, height: 55, width: "10%", borderRadius: 10, borderWidth: 0.5, borderColor: "grey", textAlign: "center" }}
                    />
                    <TextInput
                        // placeholder="Input4"
                        ref={ref_input4}
                        onChangeText={(pin4) => setpin4(pin4)}
                        value={pin4}
                        maxLength={1}
                        style={{ backgroundColor: "#f5f4f2",alignContent : "center" ,justifyContent: "center" , fontWeight: "600", fontSize: 20, height: 55, width: "10%", borderRadius: 10, borderWidth: 0.5, borderColor: "grey", textAlign: "center" }}
                    />
                </View>
                {/* <SmoothPinCodeInput
                    cellStyle={{
                        borderBottomWidth: 2,
                        borderColor: 'gray',
                    }}
                    cellStyleFocused={{
                        borderColor: 'black',
                    }}
                    value={this.state.code}
                    onChangeText={code => this.setState({ code })}
                /> */}

                <View style={{flexDirection: "row", margin: 10}}>
                <IconMaterial name="checkbox-blank-outline" size={24} color="black" />
                <Text style={{fontSize: 20, marginLeft: 8, marginTop: -4 }}> i agree to Tibb Doctor's Terms of use & informed Constent and privacy policy </Text>
                </View>

                <TouchableOpacity
                    style={styles.SubmitButtonStyle}
                    activeOpacity={.5}
                    onPress={()=>{navigation.navigate("termsCondition")}}
                >

                    <Text style={styles.TextStyle}> CREATE ACCOUNT </Text>

                </TouchableOpacity>
                <View style={{marginTop: 20, marginLeft: 30}}>
                <IconFont name="arrow-circle-left" size={50} color="#2c97c9" 
                    onPress={() => { navigation.navigate("signUp") }}
                />
                </View>
            </View>
            </KeyboardAwareScrollView>
  );}

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
    borderWidth: 3,
    borderColor: 'green'
  },
 
  TextStyle:{
      color:'black',
      textAlign:'center',
      fontSize: 18,
      fontWeight: "bold"
  },
  textWrapper: {
    height: hp('70%'), // 70% of height device screen
    width: wp('80%')   // 80% of width device screen
  },
  myText: {
    fontSize: hp('5%') // End result looks like the provided UI mockup
  }
 
});