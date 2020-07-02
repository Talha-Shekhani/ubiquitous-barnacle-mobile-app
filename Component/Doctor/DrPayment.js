import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Dimensions , Image, TextInput, TouchableOpacity, ScrollView} from 'react-native'
import { useForm } from 'react-hook-form'
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';
import Footer from '../Patient/Footer';
import axios from 'axios'
import IconFont from 'react-native-vector-icons/FontAwesome';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
import { p_signin, p_signPage, p_signInPage } from '../../redux/ActionCreators';
import { useDispatch, useSelector } from 'react-redux'
import Header from './DrAccountHeader'
import { FlatList } from 'react-native-gesture-handler';

    
export default function DrAppoinmentLog(){
    
    const file = [
    {
        id: 1,
        Date: "",
    
    },
    {
        id: 1,
        Date: "",
    
    },{
        id: 1,
        Date: "",
    
    },{
        id: 1,
        Date: "",
    
    },
]

    const MemberList = ( {item,index} ) => {
        console.log(item)
        return(
            <View>
                <View style={{flexDirection: "row", justifyContent: "center"}}>
                    
                    <Text style={ styles.memberText}>{item.id} )</Text>
                    <Text style={[ styles.memberText, {marginBottom: 20}] }> Date: {item.Date} {"\n"} payment Received</Text> 
                    
                </View>
                
            </View>
        )
    }
    const navigation = useNavigation();
        
        return (
            <View style={styles.mainView}>
                <ScrollView showsVerticalScrollIndicator={false}>
                
                <View style={{ paddingHorizontal: RFValue(20) }}>
                        <Header />
                        <Text style={styles.TextStyle}>
                            Payment Record
                        </Text>
                        <View style={styles.search}>
                            <IconFont style={[styles.text, { marginLeft: RFValue(10), marginTop: RFValue(12) }]} name="search" color="#000" />
                            <TextInput placeholder='Search' underlineColorAndroid='white'
                            />
                        </View>
                </View>

                 {/* <MemberList name="Member Name" Date="09 -june - 2020" Time="02:00" Duration="20 min 30 sec"/> */}
                 <FlatList 
                    data={file}
                    renderItem={MemberList}
                    keyExtractor={(item) => item.id.toString()}

                 />
                </ScrollView>
                <View>
                    <View style={{ flexDirection: "row", justifyContent: "space-around", }}>

                        <IconFont name="arrow-circle-left" size={50} color="#2c97c9"
                            onPress={() => { navigation.goBack() }}
                        />
                        <IconFont name="arrow-circle-right" size={50} color="#2c97c9"
                            onPress={() => { navigation.navigate("drsignpage") }}

                        />
                    </View>
                    <View style={styles.payment}>
                    <Text style={ styles.textPayment }>
                        Total Payment Received: PKR 000
                    </Text>
                    </View>
                </View>
              </View>


        )
}

const styles = StyleSheet.create({
    payment: {
        backgroundColor: "#2c97c9",
        borderRadius: RFValue(20),
        borderWidth: 2,
        borderColor: "blue",
        margin: RFValue(20),
        padding: 10
        // marginLeft: RFValue(10),
    },  
    textPayment:{
        textAlign: "center",
        color: "white"
    },  
    borderPickerStyle:{
        width: "100%", 
        borderBottomWidth: RFValue(2), 
        borderBottomColor: "black"    ,
        marginTop: RFValue(10)
   },
    memberFlat:{
        flexDirection: "row",
    },
    memberText:{
        fontSize: 16,
    },  
    leftArrow: {
        height: RFValue(20),
        width: RFValue(20)
    },
    text: {
        color: '#3498DB',
        textAlign: 'center',
        fontSize: 18,
        marginLeft: RFValue(5),
        marginRight: RFValue(5),
        marginBottom: RFValue(4)

    },
    mainView: {
        height: '100%',
        width: '100%',
        // paddingHorizontal: RFValue(30),
        paddingTop: RFValue(20),
        backgroundColor: 'white',
        // justifyContent: 'space-between'
    },
    textInputStyle: {
        borderBottomColor: "black",
        borderBottomWidth: RFValue(1),
        fontSize: RFValue(14),
        color: "black",
        marginTop: RFValue(15)
    },
    search: {
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 25,
        flexDirection: "row",
        marginTop: RFValue(20),
        // height: "19%",
        marginBottom: RFValue(10)
    },
    forgotText: {
        marginTop: RFValue(5),
        fontSize: RFValue(14)
    },
    button: {
        marginTop:RFValue(10),
        paddingTop:RFValue(15),
        paddingBottom:RFValue(15),
        alignItems: "center",
        backgroundColor:'white',
        borderRadius:RFValue(10),
        borderWidth: RFValue(3),
        borderColor: 'lightblue',
        marginTop: RFValue(60)
    },
   
    TextStyle:{
        fontSize: 18,
        marginTop: RFValue(20)
    },
    errorText: {
        color: 'red'
    }
})


