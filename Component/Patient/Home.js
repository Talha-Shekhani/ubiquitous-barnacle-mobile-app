import React from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity, Dimensions } from 'react-native';
import HeaderAfter from '../HeaderAfterSignIn'
import IconAnt from 'react-native-vector-icons/AntDesign'; 
import { useNavigation, useTheme } from '@react-navigation/native'
import { RFValue } from 'react-native-responsive-fontsize'
import IconFont from 'react-native-vector-icons/FontAwesome'; 
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;


export default function Home(){
    const navigation = useNavigation();

    return(
        <View style={{width:WIDTH, backgroundColor: "white",flex:1,display: 'flex',paddingHorizontal: RFValue(20)}}>
            <Text>
                Home screen
            </Text>
            {/* <HeaderAfter/>
            <Text 
            style={{ fontSize: RFValue(28),fontWeight: "bold", margin : RFValue(10) }}
            >
                
                    About Video consultation
                </Text>
                <View style={styles.childView}>
                    <Text style={{  fontSize: RFValue(25) }}
                    onPress={() => { navigation.navigate("Connect") }}
                    >
                        1. What to expect from a video consultation 
                     </Text>
                </View>

                <View style={styles.childView}>
                    <Text style={{  fontSize: RFValue(25) }}>
                      2. How to Prepare before video consultant 
                     </Text>
                </View>    

                <View style={styles.childView}>
                    <Text style={{  fontSize: RFValue(25)}}>
                        3. FAQs
                     </Text>
                </View>    
                <View style={{ marginTop: RFValue(150) }}>
                <IconFont name="arrow-circle-left" size={50} color="#2c97c9" 
                    onPress={() => { navigation.navigate("BookingAppoinment") }}
            />
            </View> */}
          </View>


    )
}

const styles = StyleSheet.create({

    childView: {
        width:'100%',
        borderWidth: RFValue(3),
        borderRadius: RFValue(10),
        borderColor: 'lightblue',
        backgroundColor:'white',
        paddingHorizontal:RFValue(20),
        paddingVertical:RFValue(10),
        marginBottom: RFValue(8)
       
    },
});