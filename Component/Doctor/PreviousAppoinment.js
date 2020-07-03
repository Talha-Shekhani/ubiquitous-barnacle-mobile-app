import React from 'react';
import { StyleSheet, Text, View,FlatList, TextInput,TouchableOpacity, Dimensions, Image,ScrollView } from 'react-native';
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

    

export default function PreviousAppoinment(){
    const navigation = useNavigation();

    
    const file = [
        {
            id: 1,
            Name: "Patient's Name",
            time: "Time slot"
        },
        {
            id: 2,
            Name: "Patient's Name",
            time: "Time slot"
        },
 ]
    const upcoming = ({item ,index}) => {
        console.log("upcoming items" + item)
        return(
            <View style={styles.viewStyles}>
                <View style={styles.row}>
                    <Image source={require('../../assets/CIRCLEE.png')}
                    />
                    <Text style={styles.TextStyle}>{item.Name}{"\n"}{item.time}</Text>
                </View>
                <View style={{ alignSelf: "flex-end"}}>
               
                <TouchableOpacity style={styles.buttonStyleSmall} activeOpacity={.5}>
        
                    <Text style={styles.TextStyle2}>Cencil Appoinment</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    return(
        <View style={styles.mainView}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Header/>
                <View style={{paddingHorizontal: 30}}>

                <Text style={{ fontSize: RFValue(23), marginVertical: 10, }} >
                   Previous Appoinments </Text>
                <FlatList 
                    data={file}
                    renderItem={upcoming}
                    keyExtractor={(item) => item.id.toString()}
                    
                    />
                    </View>
            </ScrollView>
            
            <View style={{ paddingHorizontal: 30,  }}>
            <View style={[styles.row, {justifyContent: "space-between"}]}>
                
                <IconFont name="arrow-circle-left" size={50} color="#2c97c9"
                    onPress={() => { navigation.goBack() }}
                />
                <IconFont name="arrow-circle-right" size={50} color="#2c97c9"
                    onPress={() => { navigation.goBack() }}
                />
                </View>
            </View>
        </View>


    )
}

const styles = StyleSheet.create({
    viewStyles:{
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#4789F4',
        marginBottom: 10
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
        marginTop: 10,
        marginLeft: 10
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