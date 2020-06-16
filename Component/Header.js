import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native'


export default function Header() {

  const navigation = useNavigation();
  return (
    
            <View style={{flexDirection: "row",  justifyContent: "space-between", margin: 10}}>
            <Image source={require('../assets/tibLogoPng.png')}  style={{width: "30%", height:"200%", marginTop: -10}}/>
                <Text style={{fontSize: 20,fontWeight: "bold", marginTop: 10  }}
                onPress={() => { navigation.navigate("signin") }}
                >Sign In</Text>
            </View>
  );
}
