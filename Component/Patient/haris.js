import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HEader from '.'


export default function Shop(){
    return(
        <View style={styles.mainView} >
            <View>
                
            </View>
            <View>

            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    
    mainView: {
        height: '100%',
        width: '100%',
        paddingHorizontal: RFValue(30),
        paddingTop: RFValue(20),
        backgroundColor: 'white',
        justifyContent: 'space-between'
    }
})