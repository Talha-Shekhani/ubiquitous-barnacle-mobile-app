import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import IconMaterial from 'react-native-vector-icons/MaterialIcons'; 
import IconFont from 'react-native-vector-icons/FontAwesome'; 
import { useNavigation, useTheme } from '@react-navigation/native'
export default function TermsCondition(){

    const navigation = useNavigation();
    return(


        <View style={styles.MainContainer}>
            <View style={{flexDirection: "row",}}>
            <Image source={require('../../assets/tibLogoPng.png')}  
            style={{width: 150, height:100, }}/>
                <Text style={{ fontSize: 20, marginTop: 30, marginLeft: 10 }}>
                Hi{"\n"}
                Welcome Here
                </Text>
                <View style={{marginTop: 25, marginLeft: 40}}>
                <IconMaterial name="notifications-none" size={35} color="black" />       
                </View>
        </View>
        <View>
            <View style={styles.childView}> 
            </View>

            <View style={{flexDirection: "row",}}>
            <IconMaterial name="account-circle" size={100} color="blue" />       
            <Text style={{ fontSize: 20, marginTop: 30, marginLeft: 10, margin: 40 }}>
                Member's Name    
            </Text>
            </View>

            <View style={styles.childView}> 
            </View>

            <Text style={{ fontSize: 30, fontWeight: "bold", marginTop: 30, marginLeft: 10, margin: 40 }}>
                Terms & Conditions 
            </Text>


            <View style={{ flexDirection: "row", justifyContent: "space-between",marginTop: 200 }}>
                <View style={{marginLeft: 30, marginTop:20 }}>
                <IconFont name="arrow-circle-left" size={50} color="#2c97c9" 
                    onPress={() => { navigation.navigate("password") }}
            />
            </View>
            <TouchableOpacity
                    style={styles.SubmitButtonStyle}
                    activeOpacity={.5}
                    onPress={()=>{navigation.navigate("FrontPage")}}
                >

                    <Text style={styles.TextStyle}> Agree </Text>

            </TouchableOpacity>    
            </View>

            
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
 
    MainContainer :{
        
        flex:1,
        backgroundColor: "white"
    },
   
    childView: {
    
      width: 500,
      borderBottomWidth :3,
      borderBottomColor: "black"
   
    },
    SubmitButtonStyle: {
 
        marginTop:10,
        paddingTop:15,
        paddingBottom:15,
        marginLeft:30,
        marginRight:30,
        backgroundColor:'white',
        borderRadius:10,
        borderWidth: 3,
        borderColor: 'green',
        padding: 30
      },
     
      TextStyle:{
          color:'black',
          textAlign:'center',
          fontSize: 18,
          fontWeight: "bold"
      }
})