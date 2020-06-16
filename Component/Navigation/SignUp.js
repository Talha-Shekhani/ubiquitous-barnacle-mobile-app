import React, { useState } from 'react';
import { TextInput, Checkbox } from 'react-native-paper';
import Header from '../Header'
import { View, Picker, Image, KeyboardAvoidingView, TouchableOpacity, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import IconFont from 'react-native-vector-icons/FontAwesome'; 
import DatePicker from 'react-native-datepicker'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
// import DateTimePickerModal from "react-native-modal-datetime-picker";
// import PickerCheckBox from 'react-native-picker-checkbox';

export default function SignUp() {

    const navigation = useNavigation();

    const [text, setText] = useState("")
    const [text2, setText2] = useState("")
    const [text3, setText3] = useState("")
    const [text4, setText4] = useState("")
    const [text5, setText5] = useState("")
    const [text6, setText6] = useState("")
    const [selectedValue, setSelectedValue] = useState("Select a country");
    const [selectedValue2, setSelectedValue2] = useState("Select a city");
    const [selectedValueGender, setSelectedValueGender] = useState("Gender");
    const [selectedValueTitle, setSelectedValueTitle] = useState("Gender");
    const [setDate,setDataValue] = useState("")

    return (
        <KeyboardAwareScrollView>
        
        <View style={{backgroundColor: "white", flex:1}}>
    {console.disableYellowBox = true}
            <Header />
            <Text style={{fontSize: 23,fontWeight: "bold", marginLeft: 5  }}>
                Account Information</Text>
            <View >
            <Picker
                selectedValue={selectedValueTitle}
                onValueChange={(itemValue, itemIndex) => setSelectedValueTitle(itemValue)}
            >
                <Picker.Item label="Title" value="Title" />
                <Picker.Item label="Mr" value="Mr" />
                <Picker.Item label="Mrs" value="Mrs" />
                <Picker.Item label="Ms" value="Ms" />

            </Picker>

            <TextInput
                style={{ margin: 10 }}
                label='First Name'
                value={text2}
                onChangeText={text => setText2(text)}
            /><TextInput
                style={{ margin: 10 }}
                label='Last Name'
                value={text3}
                onChangeText={text => setText3(text)}
            />
            {/* <PickerCheckBox
                data={items}
                headerComponent={<Text style={{ fontSize: 25 }} >Select a City</Text>}
                OnConfirm={(pItems) => handleConfirm(pItems)}
                ConfirmButtonTitle='OK'
                DescriptionField='itemDescription'
                KeyField='itemKey'
                placeholder='Select a City'
                arrowColor='#FFD740'
                arrowSize={3}
                placeholderSelectedItems='itemDescription'
                
            /> */}

            <Picker
                selectedValue={selectedValue}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                <Picker.Item label="Select a country" value="Select a country" />
                <Picker.Item label="Pakistan" value="Pakistan" />
                <Picker.Item label="UK" value="UK" />
                <Picker.Item label="Chaina" value="Chaina" />

            </Picker>
            <Picker
                selectedValue={selectedValue2}
                onValueChange={(itemValue, itemIndex2) => setSelectedValue2(itemValue)}
            >
                <Picker.Item label="Select a city" value="Select a city" />
                <Picker.Item label="Karachi" value="Karachi" />
                <Picker.Item label="Lahore" value="Lahore" />
                <Picker.Item label="Multan" value="Multan" />

            </Picker>
            
            <TextInput
                style={{ margin: 10 }}
                label='Email Address'
                value={text4}
                onChangeText={text => setText4(text)}
            />

             <DatePicker
            style={{width: 400}}
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
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => { setDataValue(date)  }}

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
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-around", }}>
            
                <IconFont name="arrow-circle-left" size={50} color="#2c97c9" 
                    onPress={() => { navigation.navigate("SignPage") }}
            />
                <IconFont name="arrow-circle-right" size={50} color="#2c97c9" 
                    onPress={() => { navigation.navigate("password") }}
            />
            </View>
        </View>
        </KeyboardAwareScrollView>
        
    )
}
