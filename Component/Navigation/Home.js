import React from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native'
import IconFont from 'react-native-vector-icons/FontAwesome'; 


export default function Header() {

  const navigation = useNavigation();
  return (
    <View style={{backgroundColor: "white", flex:1}}>
            <View style={{flexDirection: "row",  justifyContent: "space-between", margin: 10}}>
            <Image source={require('../../assets/tibLogoPng.png')}  style={{width: "30%", height:"200%", marginTop: -10}}/>
                <Text style={{fontSize: 20,fontWeight: "bold", marginTop: 10  }}>Member Name Welcome</Text>
 

            </View>
            <Text style={{fontSize: 30,fontWeight: "bold", marginLeft: 10, marginTop: 20  }}>What are you Looking</Text>
            <View style={{margin: 10}}>
            <Image source={require('../../assets/photo1512069511692B82d787265cf.png')}
            style={{width: 330, height:400}}/>
            </View>
            <View style={{ flexDirection: "row", justifyContent:"space-between", margin: 10 }}>
            {/* <View style={{ marginTop: 80, marginLeft: 30 }}> */}
                <IconFont name="arrow-circle-left" size={50} color="#2c97c9" 
                    onPress={() => { navigation.navigate("signUp") }}
            />
                <IconFont name="arrow-circle-right" size={50} color="#2c97c9" 
                    onPress={() => { navigation.navigate("RouteHome") }}
            />
            </View>
                      
         </View>   

  );
}
