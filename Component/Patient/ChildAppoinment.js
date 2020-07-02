import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput,Picker, Dimensions } from 'react-native';
import HeaderAfter from '../HeaderAfterSignIn'
import IconAnt from 'react-native-vector-icons/AntDesign'; 
import { useNavigation, useTheme } from '@react-navigation/native'
import { RFValue } from 'react-native-responsive-fontsize'
import DatePicker from 'react-native-datepicker'
import IconFont from 'react-native-vector-icons/FontAwesome'; 
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;


export default function ChildAppoinment(){
    const navigation = useNavigation();
    const [selectedValueGender, setSelectedValueGender] = useState("Gender");
    const [setDate,setDataValue] = useState("")

    return(
        <View style={{width:WIDTH, backgroundColor: "white",flex:1,display: 'flex',paddingHorizontal: RFValue(20)}}>
            <HeaderAfter/>
            <View style={{ flexDirection: "row",alignItems:'center' }}>
                <View style={{ width: RFValue(20), borderBottomWidth: 5, borderBottomColor: "yellow" }}>
                </View>
                <View style={{ width: RFValue(20), borderBottomWidth: 5, borderBottomColor: "blue", marginLeft: RFValue(8) }}>
                </View>
                <View style={{ width: RFValue(20), borderBottomWidth: 5, borderBottomColor: "green", marginLeft: RFValue(8) }}>
                </View>
                <View style={{ width: RFValue(20), borderBottomWidth: 5, borderBottomColor: "red", marginLeft: RFValue(8) }}>
                </View>
            </View>

            <Text style={{ fontSize: RFValue(28), fontWeight: "bold", margin: RFValue(10) }}>
                Connect
            </Text>

            <Text style={{ fontSize: RFValue(28), fontWeight: "bold", margin: RFValue(10) }}>
                Appoinment for My Child
            </Text>

            <TextInput style={styles.textInput}
                onChangeText={(text) => console.log(text)}
                placeholder={"First Name"}
            />

            <TextInput style={styles.textInput}
                onChangeText={(text) => console.log(text)}
                placeholder={"Last Name"}
            />

            
            <Picker
                selectedValue={selectedValueGender}
                onValueChange={(itemValue, itemIndex) => setSelectedValueGender(itemValue)}
            >
                <Picker.Item label="Select a Gender" value="Select a Gender" />
                <Picker.Item label="Male" value="Male" />
                <Picker.Item label="Female" value="Female" />
                <Picker.Item label="Do not wish to disclose" value="Do not wish to disclose" />

            </Picker>
            
            <View style={{ width: RFValue(390), borderBottomWidth: RFValue(2), borderBottomColor: "black", marginBottom: RFValue(10) }}>
            </View>
            
            <DatePicker
                        style={{ width: RFValue(360), height: RFValue(50) }}
                        date={setDate}
                        mode="date"
                        placeholder="Date of Birth"
                        format="YYYY-MM-DD"
                        minDate="1960-05-01"
                        maxDate="2020-06-01"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        androidMode="spinner"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: RFValue(0),
                                top: RFValue(4),
                                marginLeft: RFValue(0)
                            },
                            dateInput: {
                                marginLeft: RFValue(36)
                            }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => { setDataValue(date)  }}
      />

        <View style={{ width: RFValue(390), borderBottomWidth: RFValue(2), borderBottomColor: "black", marginBottom: RFValue(10) }}>
        </View>
            
            
                
        <View style={{ flexDirection: "row",alignItems:'center',justifyContent:'space-between', marginTop: RFValue(80) }}>
            <IconFont name="arrow-circle-left" size={50} color="#2c97c9" 
                onPress={() => { navigation.navigate("Contact") }}
        />
            <IconFont name="arrow-circle-right" size={50} color="#2c97c9" 
                onPress={() => { navigation.navigate("password") }}
        />
        </View>
          </View>
    )
}

const styles = StyleSheet.create({

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
    textInput: {
        borderColor: 'black', 
        borderBottomWidth: RFValue(2), 
        marginBottom: RFValue(15)
    }
});