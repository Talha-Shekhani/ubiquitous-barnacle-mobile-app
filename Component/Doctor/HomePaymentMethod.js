import React from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity, Dimensions, Image,ScrollView } from 'react-native';
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


export default function HomePaymentMethod(){
    const navigation = useNavigation();

    return(
        <View style={styles.mainView}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Header/>
                <View style={{paddingHorizontal: 20}}>

                <Text style={{ fontSize: RFValue(23), marginVertical: 10, }} >
                    Payment Mehod</Text>
                <TouchableOpacity style={styles.buttonStylelarge} activeOpacity={.5}
                    onPress={() => { navigation.navigate("bank") }}>
                    <Text style={styles.TextStyle2}> Bank </Text>
                    <IconFont name='angle-right' size={40} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStylelarge} activeOpacity={.5}
                    onPress={() => { navigation.navigate("paypal") }}>
                    <Text style={styles.TextStyle2}> Paypal </Text>
                    <IconFont name='angle-right' size={40} />
                </TouchableOpacity>
                </View>
            </ScrollView>
            
            <View style={{ paddingHorizontal: 20 }}>
                <IconFont name="arrow-circle-left" size={50} color="#2c97c9"
                    onPress={() => { navigation.goBack() }}
                />
            </View>
        </View>


    )
}

const styles = StyleSheet.create({

   mainView:{
    height: "100%",
    width: "100%",
    // paddingHorizontal: RFValue(30),
    paddingTop: RFValue(40),
    backgroundColor: "white",
    justifyContent: "space-between"
   },
   logo: {
    height: RFValue(30),
    width: RFValue(100)
},
logo2: {
    height: RFValue(100),
    width: RFValue(100)
},
   signUp: {
    alignSelf: 'flex-end',
    },
    connect: {
        fontSize: RFValue(25),
        marginVertical: 10,
        marginBottom: 30
    },
    row: {
        flexDirection: "row",
        
    },
    rowView: {
        width: '30%',
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: RFValue(15)
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
        textAlign: "center",
        fontSize: 16
    },
    yellow: {
        borderColor: 'yellow',
        borderBottomWidth: RFValue(5),
        width: '23%',
        marginRight: RFValue(10)
    },
    green: {
        borderColor: 'green',
        borderBottomWidth: RFValue(5),
        width: '23%',
        marginRight: RFValue(10)
    },
    blue: {
        borderColor: 'blue',
        borderBottomWidth: RFValue(5),
        width: '23%',
        marginRight: RFValue(10)
    },
    red: {
        borderColor: 'red',
        borderBottomWidth: RFValue(5),
        width: '23%',
        marginRight: RFValue(10)
    },buttonStylelarge:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        // paddingVertical: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#4789F4',
        marginVertical: 5,
        shadowColor: '#17A05D',
        shadowOpacity: 1,
        shadowOffset: {height: 2, width: 2},
        elevation: 5,
        shadowRadius: 2,
        marginTop: 10
    },
    TextStyle2: {
        color: 'black',
        alignSelf: 'center',
        fontSize: 18,
    },
    buttonStyleSmall: {
        paddingHorizontal: 40,
        paddingVertical: 10,
        backgroundColor: 'white',
        borderRadius: 3,
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