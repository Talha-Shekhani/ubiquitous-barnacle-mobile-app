import React, { Component } from 'react'
import { Text, View, Dimensions, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default function DrHeaderSignIn(){
    const navigation = useNavigation();
   
        return (
            <View style={styles.mainView}>
                <Text
                    onPress={() => { navigation.navigate("drsignin") }}
                    style={styles.signUp}> 
                    Sign In 
                </Text>
                <Image source={require('../../assets/tibLogoPng.png')}
                    style={styles.logo} />
            </View>
        )
    
}

const styles = StyleSheet.create({
    mainView: {
        //  flex: 1
    },
    logo: {
        height: RFValue(30),
        width: RFValue(100)
    },
    signUp: {
        alignSelf: 'flex-end',
        fontSize: RFValue(18),
    }
})

// import React from 'react';
// import { StyleSheet, Text, View, Image } from 'react-native';
// import { useNavigation, useTheme } from '@react-navigation/native'


// export default function DrHeaderSignUp() {

//   const navigation = useNavigation();
//   return (
    
//             <View style={{flexDirection: "row",  justifyContent: "space-between", margin: 10}}>
//             <Image source={require('../../assets/tibLogoPng.png')}  style={{width: "30%", height:"200%", marginTop: -10}}/>
//                 <Text style={{fontSize: 20,fontWeight: "bold", marginTop: 10  }}
//                 onPress={() => { navigation.navigate("drsignin") }}
//                 >Sign In</Text>
//             </View>
//   );
// }
