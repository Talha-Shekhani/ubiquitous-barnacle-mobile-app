import React from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity, Dimensions } from 'react-native';
import HeaderConnect from '../HeaderConnect'
import IconAnt from 'react-native-vector-icons/AntDesign'; 
import { useNavigation, useTheme } from '@react-navigation/native'
import { RFValue } from 'react-native-responsive-fontsize'
import IconFont from 'react-native-vector-icons/FontAwesome'; 
import { ScrollView } from 'react-native-gesture-handler';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
import Footer from './Footer'

export default function Contact(){
    const navigation = useNavigation();

    return(
        <View style={styles.mainView}>
            <ScrollView showsVerticalScrollIndicator = {false}>
                <HeaderConnect/>
            
                <View style={[styles.childView, {marginTop: RFValue(40)} ]}>
                    <Text style={{  fontSize: RFValue(20) }} >
                        Myself
                     </Text>
                </View>
                <View style={styles.childView}>
                    <Text style={{  fontSize: RFValue(20) }}
                    onPress={() => { navigation.navigate("childAppoinment") }}
                    >
                      My Child
                     </Text>
                </View>    

                <View style={styles.childView}>
                    <Text style={{  fontSize: RFValue(20)}}
                    onPress={() => { navigation.navigate("AppoinmentSomeone") }}
                    >
                        Someone else
                     </Text>
                     
                </View>    
                </ScrollView>   
                <View>
                    
                    <IconFont name="arrow-circle-left" size={50} color="#2c97c9" 
                        onPress={() => { navigation.navigate("RouteHome") }}
                    />
                    <Footer/>
                </View>
          </View>   


    )
}

const styles = StyleSheet.create({
    
    mainView:{
        height: '100%',
        width: '100%',
        paddingHorizontal: RFValue(30),
        paddingTop: RFValue(20),
        backgroundColor: 'white',
        justifyContent: 'space-between'
    },  
    childView: {
        width:'100%',
        borderWidth: RFValue(3),
        borderRadius: RFValue(5),
        borderColor: 'lightblue',
        backgroundColor:'white',
        paddingHorizontal:RFValue(20),
        paddingVertical:RFValue(10),
        marginTop: RFValue(12),
        shadowColor: "#000",
        borderStartColor: "green"
    },
});