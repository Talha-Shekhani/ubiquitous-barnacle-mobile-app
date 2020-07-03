import React from 'react';
import { StyleSheet, Text, View,FlatList, TextInput,TouchableOpacity,Alert, Dimensions, Image,ScrollView } from 'react-native';
import Header from './DrHomeHeader'
import IconAnt from 'react-native-vector-icons/AntDesign'; 
import { useNavigation, useTheme } from '@react-navigation/native'
import { RFValue } from 'react-native-responsive-fontsize'
import IconIon from 'react-native-vector-icons/Ionicons'; 
import IconFont from 'react-native-vector-icons/FontAwesome';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import IconSimple from 'react-native-vector-icons/SimpleLineIcons';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

    

export default function DrUpcomingAppoinments(){
    const navigation = useNavigation();

    
    return(
        <View style={styles.mainView}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Header/>
                <View style={{paddingHorizontal: 30}}>
                <Text style={{ fontSize: RFValue(23), marginVertical: 10, }} >
                   Patient Details </Text>
                </View>

                <View style={styles.viewStyles}>
                    <Text style={styles.TextStyle} >First & Last NAme </Text>
                </View>
                <View style={styles.viewStyles}>
                    <Text style={styles.TextStyle} >Date of Birth </Text>
                </View>
                <View style={styles.viewStyles}>
                    <Text style={styles.TextStyle} >Gender </Text>
                </View>
                <View style={styles.viewStyles}>
                    <Text style={styles.TextStyle} >Date and Time </Text>
                </View><View style={styles.viewStyles}>
                    <Text style={styles.TextStyle} >Records </Text>
                </View>
            </ScrollView>
            
        </View>


    )
}

const styles = StyleSheet.create({
    viewStyles:{
        paddingHorizontal: 10,
        borderBottomWidth: 0.5,
        borderColor: 'grey',
        marginTop: 10
    },
   mainView:{
    height: "100%",
    width: "100%",
    // paddingHorizontal: RFValue(30),
    paddingTop: RFValue(40),
    backgroundColor: "white",
    justifyContent: "space-between"
   },
  
    connect: {
        fontSize: RFValue(25),
        marginVertical: 10,
        marginBottom: 30
    },
    row: {
        flexDirection: "row",
        
    },
    buttonStyle: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: 'white',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#4789F4',
        marginVertical: 10,
        shadowColor: '#17A05D',
        shadowOpacity: 1,
        shadowOffset: {height: 2, width: 2},
        elevation: 5,
        shadowRadius: 2,
        width: "60%"
    },TextStyle:{
        // textAlign: "center",
        fontSize: 16,
        // marginTop: 10,
        marginBottom : 10
    },
    TextStyle2: {
        
        fontSize: 12,
    },
    buttonStyleSmall: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: 'white',
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#4789F4',
        marginVertical: 10,
        
        shadowColor: '#17A05D',
        shadowOpacity: 1,
        shadowOffset: {height: 2, width: 2},
        elevation: 5,
        shadowRadius: 2,
        
    }
})