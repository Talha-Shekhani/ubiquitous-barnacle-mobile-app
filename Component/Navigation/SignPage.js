import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { DrawerActions, useNavigation } from '@react-navigation/native';

export default function SignPage(){
    const navigation = useNavigation();
    return(
        <View style={{backgroundColor: "white", flex:1}}>
            <View style={{ alignItems: "center", marginTop: 80, }}>
                <Image source={require('../../assets/tibLogoPng.png')}
                    style={{ width: 200, height: 200 }} />
                <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: -40 }}>Connecting HealthCare</Text>
            </View>
            <TouchableOpacity
                style={styles.SubmitButtonStyle}
                activeOpacity={.5}
                onPress={() => { navigation.navigate("signin") }}
            >
                <Text style={styles.TextStyle}> Sign In </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.SubmitButtonStyle}
                activeOpacity={.5}
                onPress={() => { navigation.navigate("signUp") }}
            >
                <Text style={styles.TextStyle}> Sign Up </Text>
            </TouchableOpacity>

            <View style={{marginTop: 250, alignItems: "center"}}>
            <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: -40 }}>Copyright {'\u00A9'}2020 Tib Doctor App</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    
     
      SubmitButtonStyle: {
     
        marginTop:10,
        paddingTop:15,
        paddingBottom:15,
        marginLeft:30,
        marginRight:30,
        backgroundColor:'white',
        borderRadius:10,
        borderWidth: 5,
        borderColor: 'lightblue'
      },
     
      TextStyle:{
          color:'black',
          textAlign:'center',
          fontSize: 18,
          fontWeight: "bold"
      }
     
    });