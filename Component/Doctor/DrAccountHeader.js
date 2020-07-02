import React, { Component } from 'react'
import { Text, View, Dimensions, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
import IconMaterial from 'react-native-vector-icons/MaterialIcons'; 

export default function HamzaHeader(){
    const navigation = useNavigation();
   
        return (
            <View style={styles.mainView}>
                <IconMaterial name="notifications-none" size={30} color="black" style={styles.signUp} />       
                <View style={styles.row}>
                    <Image source={require('../../assets/tibLogoPng.png')}
                        style={styles.logo} />
                </View>
                <View style={[styles.rowView, {marginTop: RFValue(60)} ]}>
                    <View style={styles.yellow}></View>
                    <View style={styles.green}></View>
                    <View style={styles.blue}></View>
                    <View style={styles.red}></View>
                </View>
            </View>
        )
    
}

const styles = StyleSheet.create({
    logo: {
        height: RFValue(30),
        width: RFValue(100)
    },
    signUp: {
        alignSelf: 'flex-end',
    },
    connect:{
        marginTop: RFValue(10),
        fontSize: RFValue(25)
    },  
    row: {
        flexDirection: "row",
        
    },
    rowView: {
        width: '100%',
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: RFValue(25)
    },
    yellow: {
        borderColor: 'yellow',
        borderBottomWidth: RFValue(5),
        width: '8%',
        marginRight: RFValue(8)
    },
    red: {
        borderColor: 'red',
        borderBottomWidth: RFValue(5),
        width: '8%',
        marginLeft: RFValue(8)
    },
    blue: {
        borderColor: 'blue',
        borderBottomWidth: RFValue(5),
        width: '8%',
    },
    green: {
        borderColor: 'green',
        borderBottomWidth: RFValue(5),
        width: '8%',
        marginRight: RFValue(8)
    }
})
