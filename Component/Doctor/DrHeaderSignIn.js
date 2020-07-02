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
                    onPress={() => { navigation.navigate("drsignup") }}
                    style={styles.signUp}> 
                    Sign Up 
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
        marginRight: 0,
        fontSize: RFValue(18),
    }
})
