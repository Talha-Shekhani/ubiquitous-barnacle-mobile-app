import React from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity, Dimensions, Image,ScrollView } from 'react-native';
import HeaderAfter from '../HeaderAfterSignIn'
import IconAnt from 'react-native-vector-icons/AntDesign'; 
import { useNavigation, useTheme } from '@react-navigation/native'
import { RFValue } from 'react-native-responsive-fontsize'
import IconIon from 'react-native-vector-icons/Ionicons'; 
import IconFont from 'react-native-vector-icons/FontAwesome';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import IconSimple from 'react-native-vector-icons/SimpleLineIcons';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;


export default function DrHomeHeader(){
    const navigation = useNavigation();

    return(
        <View style={styles.mainView}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{paddingHorizontal: 30, marginBottom: 10 }}>
                <View style={[styles.row, {justifyContent: "space-between"}]}>
                    <View style={styles.row}>
                    <Image source={require('../../assets/tibLogoPng.png')}
                        style={styles.logo} />
                    <Text style={{ marginLeft: RFValue(10), }}>
                        {/* style={styles.signUp} */}
                    Member Name {"\n"} Welcome Here
                </Text>
                </View>
                <IconMaterial name="notifications-none" size={30} color="black" style={styles.signUp} />
                </View>
                </View>
                <View style={[styles.rowStyle,{paddingHorizontal: 30}]}>
                <View style={[styles.row ]}>
                    <Image source={require('../../assets/Group37.png')}
                        style={styles.logo2 } />
                    <Text style={styles.TextStyle2}>
                        Title {"\n"} HCP's Name
                    </Text>
                </View>
                </View>
                <View style={styles.rowView}>
                    <View style={styles.yellow}></View>
                    <View style={styles.green}></View>
                    <View style={styles.blue}></View>
                    <View style={styles.red}></View>
                </View>
               
            </ScrollView>
        </View>


    )
}

const styles = StyleSheet.create({

   mainView:{
    
    // paddingHorizontal: RFValue(30),
    // paddingTop: RFValue(40),
    backgroundColor: "white",
    // justifyContent: "space-between"
   },
   rowStyle:{
        borderColor: "#4789F4",
        borderWidth: 2, 
        padding: 15,
   },
   logo: {
    height: RFValue(30),
    width: RFValue(100)
},
logo2: {
    
},
   signUp: {
       marginTop: -5
    // alignSelf: 'flex-end',
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
        width: '40%',
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: RFValue(15),
        paddingHorizontal: 30
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
        
        alignSelf: 'center',
        fontSize: 16,
        marginLeft: 10
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