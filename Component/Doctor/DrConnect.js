import React from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity, Dimensions } from 'react-native';
import HeaderConnect from './DrHomeHeader'
import IconAnt from 'react-native-vector-icons/AntDesign'; 
import { useNavigation, useTheme } from '@react-navigation/native'
import { RFValue } from 'react-native-responsive-fontsize'
import IconIon from 'react-native-vector-icons/Ionicons'; 
import IconFont from 'react-native-vector-icons/FontAwesome'; 
import { ScrollView } from 'react-native-gesture-handler';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
import Footer from '../Patient/Footer'

export default function Contact(){
    const navigation = useNavigation();

    return(
        <View style={styles.mainView}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <HeaderConnect />
                <View style={{ paddingHorizontal: 30 }}>
                    <Text style={{ fontSize: RFValue(20), marginTop: 22 }} >
                        Connect
                     </Text>
                    <View style={styles.search}>
                        <IconFont style={[styles.text, { marginLeft: RFValue(10), marginTop: RFValue(14) }]} name="search" color="#000" />
                        <TextInput placeholder='Search ny HCP Name'
                        />
                    </View>
                    <View style={[styles.childView, { marginTop: RFValue(10) }]}>
                        <View style={ styles.row }>
                            <IconIon name="md-person-add" color="#1b963c" size={40} />
                            <Text style={{ fontSize: RFValue(16) }} >
                                Upcoming Appoinment {"\n"}Member Name {"\n"}Date {"\n"}Time
                            </Text>
                        </View>
                    </View>
                    <View style={styles.childView}>
                        <Text style={{ fontSize: RFValue(20) }}
                            onPress={() => { navigation.navigate("childAppoinment") }}
                        >
                            My Appoinments
                     </Text>
                    </View>

                    <View style={styles.childView}>
                        <Text style={{ fontSize: RFValue(20) }}
                            onPress={() => { navigation.navigate("AppoinmentSomeone") }}>
                            Connect with Tib Doctor's
                        </Text>
                        <Text style={styles.textmsg}>Message to fellow Doctor</Text>

                    </View>
                </View>
            </ScrollView>

        </View>


    )
}

const styles = StyleSheet.create({
    
    mainView:{
        height: '100%',
        width: '100%',
        // paddingHorizontal: RFValue(30),
        paddingTop: RFValue(30),
        backgroundColor: 'white',
        justifyContent: 'space-between'
    },  
    childView: {
        width:'100%',
        borderWidth: RFValue(3),
        borderRadius: RFValue(5),
        borderColor: '#4789F4',
        backgroundColor:'white',
        paddingHorizontal:RFValue(20),
        paddingVertical:RFValue(10),
        marginTop: RFValue(12),
        shadowColor: "#000",
        borderStartColor: "green"
    },
    search: {
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 25,
        flexDirection: "row",
        marginTop: RFValue(20),
        // height: "19%",
        marginBottom: RFValue(10)
    }, text: {
        color: '#3498DB',
        textAlign: 'center',
        fontSize: 18,
        marginLeft: RFValue(5),
        marginRight: RFValue(5),
        marginBottom: RFValue(4)

    }, row:{
        flexDirection: "row",
        justifyContent: "space-between"
    }, textmsg:{
        textAlign: "center",
        fontSize: 16
    }
});