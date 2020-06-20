import React from 'react';  
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native'
import IconFont from 'react-native-vector-icons/FontAwesome'; 
import IconMat from 'react-native-vector-icons/MaterialCommunityIcons'; 
import { RFValue } from 'react-native-responsive-fontsize'
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default function HeaderTitle() {

const navigation = useNavigation();
return (
    <View style={{ width: WIDTH, backgroundColor: "white", display: 'flex' }}>
        
        <View style={styles.childView}>
            <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: "space-around"  }}>

                <IconFont name="arrow-circle-left" size={32} color="#2c97c9"
                    onPress={() => { navigation.navigate("Contact") }}
                />
                <Image 
                    source={{ uri: 'https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?size=338&ext=jpg'}} 
                    style={{width: 60, height: 60, borderRadius: 400/ 2, borderWidth: 4, borderColor: 'green'}} 
                />
                <Text style={{ fontSize: RFValue(20), fontWeight: "bold", margin: RFValue(10) }}>
                    HCP's Name {"\n"} Title
                </Text>
                
                <IconFont name="volume-control-phone" size={30} color="grey"/>
                <IconMat name="video-vintage" size={30} color="grey"/>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({

    childView: {
        width:'90%',
        borderWidth: RFValue(5),
        borderColor: 'lightblue',
        backgroundColor:'white',
        paddingHorizontal:RFValue(20),
        paddingVertical:RFValue(10),
        marginBottom: RFValue(12),
        marginTop: RFValue(10)
    },
    textInput: {
        borderColor: 'black', 
        borderBottomWidth: RFValue(2), 
        marginBottom: RFValue(15)
    }
});
