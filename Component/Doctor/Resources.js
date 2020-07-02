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


export default function Recources(){
    const navigation = useNavigation();

    return(
        <View style={styles.mainView}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Header/>
                <View style={{paddingHorizontal: 20}}>

                <Text style={{ fontSize: RFValue(23), marginVertical: 5, }} >
                    Resources</Text>

                    <TextInput style={styles.textInput}
                            placeholder={"Link"}
                            onChangeText={(text) => setValue('d_phone_no', text)}
                    />
                    
                    <TextInput style={styles.textInput}
                            placeholder={"Link"}
                            onChangeText={(text) => setValue('d_phone_no', text)}
                    />
                    <TextInput style={styles.textInput}
                            placeholder={"Link"}
                            onChangeText={(text) => setValue('d_phone_no', text)}
                    />
                    <TextInput style={styles.textInput}
                            placeholder={"Link"}
                            onChangeText={(text) => setValue('d_phone_no', text)}
                    />
                </View>

                <Text style={styles.textstyle}>Share Resources</Text>
                <Text style={styles.textstyle}>Share link to patient</Text>
                <Image source={require('../../assets/book.png')}
                        style={styles.logo} />
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
    logo: {
        alignSelf: "center",
        marginTop: 10
    },
    mainView: {
        height: "100%",
        width: "100%",
        paddingTop: RFValue(40),
        backgroundColor: "white",
        justifyContent: "space-between"
    }, textInput: {
        borderBottomColor: 'grey',
        borderBottomWidth: RFValue(1),
    }, textstyle: {
        fontSize: 16,
        textAlign: "center",
        marginTop: 5
    }
})