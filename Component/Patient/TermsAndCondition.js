import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, ProgressBarAndroidComponent } from 'react-native';
import IconMaterial from 'react-native-vector-icons/MaterialIcons'; 
import IconFont from 'react-native-vector-icons/FontAwesome'; 
import { useNavigation, useTheme } from '@react-navigation/native'
import { RFValue } from 'react-native-responsive-fontsize'
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
import { useForm } from "react-hook-form";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Footer from './Footer'

export default function TermsCondition(){

    const navigation = useNavigation();
    return(
        <View style={{ flex: 1, backgroundColor: "white", paddingHorizontal: RFValue(20)}}>
        <View style={styles.textWrapper}>
            <View style={{flexDirection: "row",}}>
            <Image source={require('../../assets/tibLogoPng.png')}  
            style={{width: "40%", height:"110%", }}/>
                <Text style={{ fontSize: 20, marginTop: 30,  }}>
                Hi{"\n"}
                Welcome Here
                </Text>
                <View style={{marginTop: 25, marginLeft: 40}}>
                <IconMaterial name="notifications-none" size={35} color="black" />       
                </View>
        </View>
            <View style={{marginTop: 20}}>     
            <View style={styles.childView}> 
            </View>
            </View>
            <View style={{flexDirection: "row",}}>
            <IconMaterial name="account-circle" size={100} color="blue" />       
            <Text style={{ fontSize: 20, marginTop: 30, marginLeft: 10, margin: 40 }}>
                Member's Name    
            </Text>
            </View>

            <View style={styles.childView}> 
            </View>

            <Text style={{ fontSize: 25, marginTop: 30,  margin: 40 }}>
                Terms & Conditions 
            </Text>


            <View style={{ flexDirection: "row", justifyContent: "space-between",marginTop: 200 }}>
                <View style={{ marginTop:20 }}>
                <IconFont name="arrow-circle-left" size={50} color="#2c97c9" 
                    onPress={() => { navigation.navigate("password") }}
            />
            </View>
            <TouchableOpacity
                    style={styles.SubmitButtonStyle}
                    activeOpacity={.5}
                    onPress={()=>{navigation.navigate("FrontPage")}}
                >

                    <Text style={styles.TextStyle}> Agree </Text>

            </TouchableOpacity>    
            </View>
            
        
        <View style={{marginTop: RFValue(60)}}>
            <Footer/>
            </View>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    
    container: { 
        flex: 1,
        paddingHorizontal: RFValue(10),
        backgroundColor: "white"
        
    },
    textWrapper: {
        height: hp('100%'), // 70% of height device screen
        width: wp('90%')   // 80% of width device screen
      },
   
    childView: {
    
      width: "100%",
      borderBottomWidth :3,
      borderBottomColor: "black",
      
   
    },
    SubmitButtonStyle: {
 
        marginTop:10,
        paddingTop:15,
        paddingBottom:15,
        
        backgroundColor:'white',
        borderRadius:10,
        borderWidth: 3,
        borderColor: 'green',
        padding: 30
      },
     
      TextStyle:{
          color:'black',
          textAlign:'center',
          fontSize: 18,
          fontWeight: "bold"
      }
})