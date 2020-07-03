import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity,FlatList, ScrollViewComponent } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native'
import Footer from './Footer';
import Header from "../HeaderAfterSignIn"
import { RFValue } from "react-native-responsive-fontsize"
import { d_doctorInfo } from '../../redux/ActionCreators'
import IconEnt from "react-native-vector-icons/Entypo"
import IconFont from "react-native-vector-icons/FontAwesome"
import IconMaterial from "react-native-vector-icons/MaterialCommunityIcons"
import { ScrollView } from 'react-native-gesture-handler';
import { Value } from 'react-native-reanimated';
import { useSelector, useDispatch } from 'react-redux';


export default function SearchByHealth() {
    const navigation = useNavigation();
    const doctorInfo = useSelector(state => state.patient)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(d_doctorInfo(doctorInfo))
        console.log(JSON.stringify(doctorInfo))
    }, []);

    const render_Doctor = ({item,index}) =>{
        return(
            console.log(item),
            <View style={styles.drview} >

                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <View>
                            <Text style={[styles.heading, { marginLeft: RFValue(10) }]}>{item.d_first_name}</Text>
        <Text style={[styles.text, { textAlign: 'left', marginLeft: RFValue(13) }]}> {item.id}Dr's Speciality</Text>
                            <Text style={[styles.text, { textAlign: 'left', marginLeft: RFValue(13) }]}>Country</Text>
                            <Text style={[styles.text, { textAlign: 'left', marginLeft: RFValue(13) }]}>Experience</Text>
                        </View>
                        <IconMaterial style={[styles.picture, { marginTop: RFValue(25), marginRight: RFValue(25) }]} name="doctor" color="#000" />

                    </View>
                    <View style={styles.viewBtn}>
                        <TouchableOpacity onPress={()=>(navigation.navigate("ViewProfile",{id:item.id,name:item.d_first_name}))}>
                            <Text style={styles.text}>View Profile</Text>
                            
                        </TouchableOpacity>
                    </View>
                </View>
        )
    }
    return (

        <View style={styles.mainView}>
            <ScrollView showsVerticalScrollIndicator={false}>

                <Header />
                <Text style={styles.heading}>Search by Healthcare Professional</Text>
                <View style={[styles.search, { flexDirection: "row" }]}>
                    <IconFont style={[styles.text, { marginLeft:RFValue(10), marginTop: RFValue(12) }]} name="search" color="#000" />
                    <TextInput placeholder='   Search for HCPs' underlineColorAndroid='white'
                    />
                </View>

                <View style={styles.childView}>
                    <TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-between" }}>

                        <Text style={styles.text}>Filter   </Text>
                        <IconEnt style={[styles.text, { marginTop: RFValue(8) }]} name="menu" color="#000" />

                    </TouchableOpacity>
                </View>

                <FlatList
                data={doctorInfo.data.results}
                renderItem={render_Doctor}
                keyExtractor ={item=>item.id.toString()} />


            </ScrollView>
            <View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", margin: 10 }}>
                    <IconFont name="arrow-circle-left" size={50} color="#2c97c9"
                        onPress={() => { navigation.goBack() }}
                    />
                    <IconFont name="arrow-circle-right" size={50} color="#2c97c9"
                    //  onPress={handleSubmit(onSubmit)}
                    />
                </View>
                <Footer />
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

        justifyContent: 'space-between'
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

        paddingTop: RFValue(15),
        paddingBottom: RFValue(15),
        alignItems: "center",
        backgroundColor: 'white',
        borderRadius: RFValue(5),
        borderWidth: RFValue(3),
        borderColor: 'lightblue',
        marginTop: RFValue(18),
        width: '100%'

    },
    text: {
        color: 'black',
        textAlign: 'center',
        fontSize: 18,

        marginLeft: RFValue(5),
        marginRight: RFValue(5),
        marginTop: RFValue(6),
        marginBottom: RFValue(4)

    },
    search: {
        borderStyle: 'solid',
        borderColor: 'black',
        height: '6%',
        borderWidth: 2,
        borderRadius: 30
    },
    picture: {
        fontSize: 100
    }


})