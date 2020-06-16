import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native'
import IconMaterial from 'react-native-vector-icons/MaterialIcons'; 


export default function HeaderAfterSignin() {

  const navigation = useNavigation();
  return (
    
            <View style={{flexDirection: "row", margin: 10}}>
            <Image source={require('../assets/tibLogoPng.png')}
              style={{width: 150, height:100,}}/>
                
                <Text style={{fontSize: 20, marginTop: 25, marginLeft: 10  }}
                onPress={() => { navigation.navigate("signin") }}
                >Member Name {"\n"} Welcome Here</Text>
                <View style={{marginTop: 10, marginLeft: 40}}>
                    <IconMaterial name="notifications-none" size={35} color="black" />       
                </View>
            </View>
  );
}
