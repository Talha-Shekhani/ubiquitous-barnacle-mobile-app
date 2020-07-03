import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity,FlatList, ScrollViewComponent } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native'
import Footer from './Footer';
import { useForm } from 'react-hook-form'
import Header from "../HeaderAfterSignIn"
import { RFValue } from "react-native-responsive-fontsize"
import {Rating} from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';
import IconFont from "react-native-vector-icons/FontAwesome"
import { d_doctor_details } from '../../redux/ActionCreators';
import { useSelector, useDispatch } from 'react-redux';
import IconMaterial from "react-native-vector-icons/MaterialCommunityIcons"




export default function ViewProfile(props){
const id =props.route.params.id
const name = props.route.params.name
const { register, errors,setValue } = useForm();
const doctordetails = useSelector(state => state.patient)
    const dispatch = useDispatch();
   const navigation = useNavigation();
   let naame;
   
   useEffect(()=>{
    
    dispatch(d_doctor_details(id))
    // console.log("Janiiiiii " +  JSON.stringify(doctordetails))
   }, [])
   useEffect(()=>{
    console.log("Janiiiiiiyyasuid " +  JSON.stringify(doctordetails.data))
   }, [doctordetails])

   const render_Doctor = ({item,index}) =>{
    naame=item.sub_speciality_name
    console.log(naame)
   }

return(
  ///console.log("sadas"+doctordetails.data[0].sub_speciality_name),
//   console.log("jsob"+doctordetails.sub_speciality_name),
  
   

   <View style={styles.mainView}>
 
       

       <Header/>
      


  <ScrollView>
<Text style={styles.heading}>{name}</Text>
     
       <Text style={[styles.text,{textAlign:"left"}]}>Country</Text>
<Text style={[styles.text,{textAlign:"left"}]}>aExperience</Text>
       <Text style={[styles.text,{textAlign:"left"}]}>About</Text>
       <TextInput underlineColorAndroid="black"/>
       <TextInput underlineColorAndroid="black"/>
       <TextInput underlineColorAndroid="black"/>
       
<Text style={[styles.text,{textAlign:"left"}]}>{doctordetails.data}Speciality Details</Text>
       <TextInput style={styles.search} underlineColorAndroid="white"/>
       <Text style={[styles.text,{textAlign:"left"}]}>Sub Speciality Details</Text>
       <TextInput style={styles.search} underlineColorAndroid="white"/>
       <Text style={[styles.text,{textAlign:"left"}]}>Qualification Details</Text>
       <TextInput style={styles.search} underlineColorAndroid="white"/>
       <View style={{ flexDirection: "row", justifyContent: "space-between", margin: 10 }}>
       <Text style={[styles.text,{textAlign:"left"}]}>Ratings</Text>
      
      <Rating style={{alignItems: 'space-between'}} imageSize={25} readonly startingValue={1} />
      
      </View>

      <Text style={[styles.text,{textAlign:"left"}]}>HCP's Reviews</Text>

        <TouchableOpacity style={styles.button}>

                        <Text style={[styles.text,{color:'white'}]}>Book Appointment</Text>                   
                    </TouchableOpacity>
      </ScrollView>
 
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
         <IconFont name="arrow-circle-left" size={50} color="#3498DB"
                        onPress={() => { navigation.goBack() }}
                    />       
             </View>  
            

         <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        
                    
             <Footer/>
             </View>     
   </View>
)

}




const styles = StyleSheet.create({

    mainView: {
        height: '100%',
        width: '100%',
        paddingHorizontal: RFValue(30),
        paddingTop: RFValue(20),
        backgroundColor: 'white',

       // justifyContent: 'space-between'
    },
    m:{
        marginTop: RFValue(10),

    },

    childView: {

        alignItems: "center",
        backgroundColor: 'white',
        borderRadius: RFValue(25),
        borderWidth: RFValue(3),
        borderColor: 'green',
        marginTop: RFValue(10),
        width: '40%',

        alignSelf: 'flex-end',
        right: 0,

    },
    drview: {

        backgroundColor: 'white',
        borderRadius: RFValue(6),
        borderWidth: RFValue(3),
        borderColor: 'lightblue',
        marginTop: RFValue(10),
        marginBottom: RFValue(15)

    },
    viewBtn: {


        backgroundColor: 'white',
        borderRadius: RFValue(25),
        borderWidth: RFValue(3),
        borderColor: 'green',
        marginTop: RFValue(10),
        marginBottom: RFValue(12),
        width: '40%',
        // height:'16%',
        alignSelf: 'center',


    },
    heading: {
        color: 'black',
        textAlign: 'left',
        fontSize: 25,

        marginTop: RFValue(10),
        marginBottom: RFValue(10)

    },
    button: {

        paddingTop: RFValue(7),
        paddingBottom: RFValue(15),
        alignItems: "center",
        backgroundColor: '#3498DB',
        borderRadius: RFValue(50),
        borderWidth: RFValue(3),
        borderColor: 'lightblue',
        marginTop: RFValue(18),
        height:"7%"
        

    },
    text: {
        color: 'black',
        textAlign: 'center',
        fontSize: 18,
        marginLeft: RFValue(5),
        marginRight: RFValue(5),
      
        marginBottom: RFValue(4)

    },
    search: {
        borderStyle: 'solid',
        borderColor: '#3498DB',
        height: '5%',
        borderWidth: 2,
        borderRadius: 30
        
    },
    picture: {
        fontSize: 100
    }


})