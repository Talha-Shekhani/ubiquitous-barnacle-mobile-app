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


export default function PaymentBank(){
    const navigation = useNavigation();

    return(
        <View style={styles.mainView}>
            <ScrollView  showsVerticalScrollIndicator={false}>
                <Header/>
                <View style={{paddingHorizontal: 20}}>
                <Text style={{ fontSize: RFValue(23), marginVertical: 10,textAlign: "center" }} >
                    Payment Method By Bank</Text>
                <Text style={styles.TextStyle}>
                Account Name:</Text>
                <TextInput style={styles.textInput}
                            placeholder={"xxxxx xxxxxx"}
                            placeholderTextColor="black"
                            onChangeText={(text) => setValue('d_phone_no', text)}
                            />
                <Text style={styles.TextStyle}>
                Account Number:</Text> 
                <TextInput style={styles.textInput}
                            placeholder={"xxxxx-xxxxxx-xx-x"}
                            placeholderTextColor="black"
                            onChangeText={(text) => setValue('d_phone_no', text)}
                            />
                <Text style={styles.TextStyle}>
                IBAN:</Text> 
                <TextInput style={styles.textInput}
                            placeholder={"xxxxx-xxxxxx-xx-x"}
                            placeholderTextColor="black"
                            onChangeText={(text) => setValue('d_phone_no', text)}
                            />
                <Text style={styles.TextStyle}>
                Bank Name:</Text> 
                
                <TextInput style={styles.textInput}
                            placeholder={"xxxxx-xxxxxx-xx-x"}
                            placeholderTextColor="black"
                            onChangeText={(text) => setValue('d_phone_no', text)}
                            />
                <TouchableOpacity style={styles.buttonStyleSmall} activeOpacity={.5}>
                    <Text style={styles.TextStyle2}>Submit</Text>
                </TouchableOpacity>
                            </View>
            </ScrollView>
            <View style={{paddingHorizontal: 30}}>
                <IconFont name="arrow-circle-left" size={50} color="#2c97c9"
                    onPress={() => { navigation.goBack() }}
                />
            </View>
           
        </View>
    )
}

const styles = StyleSheet.create({

    mainView: {
        height: "100%",
        width: "100%",
        // paddingHorizontal: RFValue(30),
        paddingTop: RFValue(40),
        backgroundColor: "white",
        justifyContent: "space-between"
    },textInput: {
        borderColor: '#4789F4',
        borderWidth: RFValue(2),
        marginTop: RFValue(7),
        height: "7%"
    },buttonStyle: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: 'white',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#4789F4',
        marginVertical: 10,
        shadowColor: '#17A05D',
        shadowOpacity: 1,
        shadowOffset: { height: 2, width: 2 },
        elevation: 5,
        shadowRadius: 2,
        width: "60%"
    },TextStyle: {
        marginTop: 20,
        fontSize: 16,
    },
    TextStyle2: {
        textAlign: "center",
        fontSize: 20,
    },
    buttonStyleSmall: {
        paddingHorizontal: 10,
        paddingVertical: 16,
        backgroundColor: 'white',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#17A05D',
        marginVertical: 10,
        marginLeft: 70,
        marginRight: 70,
        shadowColor: '#17A05D',
        shadowOpacity: 1,
        shadowOffset: {height: 2, width: 2},
        elevation: 5,
        shadowRadius: 2,
        
    }
})