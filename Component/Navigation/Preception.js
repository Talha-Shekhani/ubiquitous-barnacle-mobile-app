import React from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity,Dimensions } from 'react-native';
import HeaderAfter from '../HeaderAfterSignIn'
import IconAnt from 'react-native-vector-icons/AntDesign'; 
import { useNavigation, useTheme } from '@react-navigation/native'
import HeaderTitle from '../HeaderTitle'
import { RFValue } from 'react-native-responsive-fontsize'
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default function UpcomingAppoinment(){
    const navigation = useNavigation();

    return(
        <View style={{width:WIDTH, backgroundColor: "white",flex:1,display: 'flex',paddingHorizontal: RFValue(20)}}>
            <HeaderAfter/>

            <View style={{ flexDirection: "row",alignItems:'center' }}>
                <View style={{ width: RFValue(20), borderBottomWidth: RFValue(5), borderBottomColor: "yellow" }}>
                </View>
                <View style={{ width: RFValue(20), borderBottomWidth: RFValue(5), borderBottomColor: "blue", marginLeft: RFValue(8) }}>
                </View>
                <View style={{ width: RFValue(20), borderBottomWidth: RFValue(5), borderBottomColor: "green", marginLeft: RFValue(8) }}>
                </View>
                <View style={{ width: RFValue(20), borderBottomWidth: RFValue(5), borderBottomColor: "red", marginLeft: RFValue(8) }}>
                </View>
            </View>
                
            <HeaderTitle/>
        </View>


    )
}

const styles = StyleSheet.create({

    SubmitButtonStyle: {
 
        marginTop:RFValue(10),
        backgroundColor:'white',
        borderRadius:RFValue(40),
        borderWidth: RFValue(3),
        borderColor: 'green',
        padding: RFValue(10),
        marginHorizontal:RFValue(20),
        marginTop:RFValue(25)
      },
     
      TextStyle:{
          color:'black',
          textAlign:'center',
          fontSize: RFValue(18),
          fontWeight: "bold"
      },
    childView: {
      //  margin: RFValue(20),
        width:'100%',
        borderWidth: RFValue(3),
        borderRadius: RFValue(20),
        borderColor: 'lightblue',
        backgroundColor:'white',
        paddingHorizontal:RFValue(40),
        paddingVertical:RFValue(20)
    },
    TextInputStyleClass: {

        textAlign: "center",
        height: RFValue(50),
        borderWidth: RFValue(3),
        borderColor: 'lightblue',
        borderRadius: RFValue(20),
        backgroundColor: "#FFFFFF",
        marginBottom:RFValue(20),
        marginTop:RFValue(20),
    },
    textImgView:{
        flexDirection: "row",
        alignItems:'center',
        marginTop:RFValue(15)
    }
    
    });