import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



export default function TermsCondition(){
    return(
        <View style={styles.MainContainer}>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <View style={styles.childView}> 
        </View>
        
        <View style={styles.childView1}> 
        </View>
        <View style={styles.childView2}> 
        </View>
        
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
 
    MainContainer :{
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        marginTop: 530,
        margin: 5
    
    },
   
    childView: {
    
      width: 100,
      height: 100,
      borderBottomWidth :5,
      borderBottomColor: "red"
   
    },
   
    childView1: {
    
      width: 100,
      height: 100,
      borderBottomWidth :5,
      borderBottomColor: "blue"
   
    },
   
    childView2: {
    
      width: 100,
      height: 100,
      borderBottomWidth :5,
      borderBottomColor: "green"
   
    }
})