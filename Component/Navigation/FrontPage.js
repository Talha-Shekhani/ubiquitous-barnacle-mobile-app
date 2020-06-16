import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import Footer from './Footer'

export default function FrontPage(){
    const navigation = useNavigation();
    return(
        <View style={{backgroundColor: "white", flex:1}}>
            <View style={{ alignItems: "center", marginTop: 80 }}>
                <Image source={require('../../assets/tibLogoPng.png')}
                    style={{ width: 200, height: 200 }} />
                <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: -50 }}>Connecting HealthCare</Text>
            </View >
            <View style={{marginTop: 30}}>
            <TouchableOpacity
                style={styles.SubmitButtonStyle}
                activeOpacity={.5}
                onPress={() => { navigation.navigate("") }}
            >
                <Text style={styles.TextStyle}> Healthcare Professional </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.SubmitButtonStyle}
                activeOpacity={.5}
                onPress={() => { navigation.navigate("SignPage") }}
            >
                <Text style={styles.TextStyle}> Members </Text>
            </TouchableOpacity>
</View>
            <View style={{marginTop: 200, alignItems: "center"}}>
            <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: -40 }}>Copyright {'\u00A9'}2020 Tib Doctor App</Text>
            </View>
            <Footer/>
        </View>
    )
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
        marginLeft:30,
        marginRight:30,
        backgroundColor:'white',
        borderRadius:10,
        borderWidth: 5,
        borderColor: 'lightblue',
        
      },
     
      TextStyle:{
          color:'black',
          textAlign:'center',
          fontSize: 18,
          fontWeight: "bold"
      }
     
    });