import React from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity } from 'react-native';
import HeaderAfter from '../HeaderAfterSignIn'
import IconAnt from 'react-native-vector-icons/AntDesign'; 
import { useNavigation, useTheme } from '@react-navigation/native'

export default function UpcomingAppoinment(){
    const navigation = useNavigation();

    return(
        <View style={{backgroundColor: "white", flex:1}}>
            <HeaderAfter/>
            <Text style={{  marginTop: -29,fontSize: 30,fontWeight: "bold", marginLeft: 10 }}>
                What are you looking for?
                </Text>
                
                <TextInput
                    placeholder="Search by speciality or"
                    underlineColorAndroid='transparent'
                    style={styles.TextInputStyleClass}
                />

                <View style={styles.childView}>
                <View style={{ flexDirection: "row", }}>
                    <View style={{margin: 10}}>
                    <Text style={{  fontSize: 25, fontWeight: "bold", marginLeft: 10 }}>
                        Upcoming Appoinment
                     </Text>
                     </View>
                     <View style={{marginLeft: 40, marginTop:10}}>
                     <IconAnt  name="calendar" size={35} color="#1da1f2" />
                     </View>
                </View>
                <View style={{marginLeft: 50,}}>
                    <Text style={{  fontSize: 18 }}>
                        HCP's Title & Name
                    </Text>
                </View>

                <View style={{flexDirection: "row", margin: 10}}>
                    <View style={{ }}>
                        <IconAnt  name="clockcircleo" size={25} color="green" />
                    </View>
                    <View style={{marginLeft: 10}}>
                    <Text style={{  fontSize: 18 }}>
                        june 04 2020 at 4:30 pm (PST)
                    </Text>
                    </View>
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
 
        marginTop:10,
        marginLeft:80,
        marginRight:80,
        backgroundColor:'white',
        borderRadius:40,
        borderWidth: 3,
        borderColor: 'green',
        padding: 10
      },
     
      TextStyle:{
          color:'black',
          textAlign:'center',
          fontSize: 18,
          fontWeight: "bold"
      },
    childView: {
        margin:10,
        width: 390,
        height: 200,
        borderWidth: 3,
        borderRadius: 20,
        borderColor: 'lightblue',
    },
    TextInputStyleClass: {

        textAlign: "center",
        height: 50,
        borderWidth: 3,
        margin: 10,
        borderColor: 'lightblue',
        borderRadius: 20,
        backgroundColor: "#FFFFFF"

    }
    
    });