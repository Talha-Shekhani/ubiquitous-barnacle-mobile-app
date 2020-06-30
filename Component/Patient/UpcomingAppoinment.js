import React from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity,Dimensions } from 'react-native';
import HeaderAfter from '../HeaderAfterSignIn'
import IconAnt from 'react-native-vector-icons/AntDesign'; 
import { useNavigation, useTheme } from '@react-navigation/native'
import { RFValue } from 'react-native-responsive-fontsize'
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default function UpcomingAppoinment(){
    const navigation = useNavigation();

    return(
        <View style={{width:WIDTH, backgroundColor: "white",flex:1,display: 'flex',paddingHorizontal: RFValue(20)}}>
            <HeaderAfter/>
            <Text style={{  marginTop: RFValue(-29),fontSize: RFValue(30),fontWeight: "bold", }}>
                What are you looking for?
                </Text>
                
                <TextInput
                    placeholder="Search by speciality or"
                    underlineColorAndroid='transparent'
                    style={styles.TextInputStyleClass}
                />

                <View style={styles.childView}>
                <View style={{ flexDirection: "row",alignItems:'center',justifyContent:'space-between' }}>
                    
                    <Text style={{  fontSize: RFValue(25), fontWeight: "bold", }}>
                        Upcoming Appoinment
                     </Text>
                     
                     <IconAnt  name="calendar" size={35} color="#1da1f2"  style={{ marginLeft : RFValue(30)}}  />
                </View>

                <View style={styles.textImgView}>
                        <IconAnt  name="clockcircleo" size={25} color="green" />
                    <Text style={{  fontSize: RFValue(18),marginLeft:RFValue(18) }}>
                        HCP's title and name
                    </Text>
                </View>
                <View style={styles.textImgView}>
                        <IconAnt  name="clockcircleo" size={25} color="green" />
                    <Text style={{  fontSize: RFValue(18),marginLeft:RFValue(18) }}>
                        june 04 2020 at 4:30 pm (PST)
                    </Text>
                </View>

                <TouchableOpacity
                    style={styles.SubmitButtonStyle}
                    activeOpacity={.5}
                    onPress={()=>{navigation.navigate("BookingAppoinment")}}
                >

                    <Text style={styles.TextStyle}> View Appoinment</Text>

            </TouchableOpacity>  
                </View>    


                
                
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