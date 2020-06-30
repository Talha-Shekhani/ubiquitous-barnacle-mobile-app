import React from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity, Dimensions } from 'react-native';
import HeaderConnect from '../HeaderConnect'
import IconAnt from 'react-native-vector-icons/AntDesign'; 
import { useNavigation, useTheme } from '@react-navigation/native'
import { RFValue } from 'react-native-responsive-fontsize'
import IconFont from 'react-native-vector-icons/FontAwesome'; 
import { ScrollView } from 'react-native-gesture-handler';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;


export default function Contact(){
    const navigation = useNavigation();

    return(
        <View style={styles.mainView}>
            <ScrollView showsVerticalScrollIndicator = {false}>
                <HeaderConnect/>
            </ScrollView>
            {/* <View style={{ flexDirection: "row",alignItems:'center' }}>
                <View style={{ width: RFValue(20), borderBottomWidth: 5, borderBottomColor: "yellow" }}>
                </View>
                <View style={{ width: RFValue(20), borderBottomWidth: 5, borderBottomColor: "blue", marginLeft: RFValue(8) }}>
                </View>
                <View style={{ width: RFValue(20), borderBottomWidth: 5, borderBottomColor: "green", marginLeft: RFValue(8) }}>
                </View>
                <View style={{ width: RFValue(20), borderBottomWidth: 5, borderBottomColor: "red", marginLeft: RFValue(8) }}>
                </View>
            </View>

            <Text style={{ fontSize: RFValue(28),fontWeight: "bold", margin : RFValue(10) }}>
                Connect
            </Text>
                <View style={styles.childView}>
                    <Text style={{  fontSize: RFValue(25) }}

                    >
                        Myself
                     </Text>
                </View>
                <View style={styles.childView}>
                    <Text style={{  fontSize: RFValue(25) }}
                    onPress={() => { navigation.navigate("childAppoinment") }}
                    >
                      My Child
                     </Text>
                </View>    

                <View style={styles.childView}>
                    <Text style={{  fontSize: RFValue(25)}}
                    onPress={() => { navigation.navigate("AppoinmentSomeone") }}
                    >
                        Someone else
                     </Text>
                </View>    
                
                
                <View style={{ marginTop: RFValue(180) }}>
                <IconFont name="arrow-circle-left" size={50} color="#2c97c9" 
                    onPress={() => { navigation.navigate("RouteHome") }}
            />
            </View> */}
          </View>


    )
}

const styles = StyleSheet.create({

    mainView:{
        height: '100%',
        width: '100%',
        paddingHorizontal: RFValue(30),
        paddingTop: RFValue(20),
        backgroundColor: 'white',
        justifyContent: 'space-between'
    },  
    childView: {
        width:'100%',
        borderWidth: RFValue(3),
        borderRadius: RFValue(10),
        borderColor: 'lightblue',
        backgroundColor:'white',
        paddingHorizontal:RFValue(20),
        paddingVertical:RFValue(10),
        marginBottom: RFValue(12)
       
    },
   
});