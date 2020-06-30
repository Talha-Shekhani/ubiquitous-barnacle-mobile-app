import React, { Component } from 'react'
import { Text, View, Dimensions, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default function footer(){

    
        return (
                <View style={styles.rowView}>
                    <View style={styles.yellow}></View>
                    <View style={styles.green}></View>
                    <View style={styles.blue}></View>
                    <View style={styles.red}></View>
                </View>
        )
    
}

const styles = StyleSheet.create({
    leftArrow: {
        height: RFValue(20),
        width: RFValue(20)
    },
    rowView: {
        width: '100%',
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: RFValue(25)
    },
    yellow: {
        borderColor: 'yellow',
        borderBottomWidth: RFValue(8),
        width: '23%',
        marginRight: RFValue(10)
    },
    red: {
        borderColor: 'red',
        borderBottomWidth: RFValue(8),
        width: '23%',
        marginLeft: RFValue(10)
    },
    blue: {
        borderColor: 'blue',
        borderBottomWidth: RFValue(8),
        width: '23%',
    },
    green: {
        borderColor: 'green',
        borderBottomWidth: RFValue(8),
        width: '23%',
        marginRight: RFValue(10)
    }
})

// import React from 'react';
// import { StyleSheet, Text, View, Dimensions } from 'react-native';
// import { RFValue } from 'react-native-responsive-fontsize'
// const WIDTH = Dimensions.get('window').width;
// const HEIGHT = Dimensions.get('window').height;
// import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


// export default function Footer(){
//     return(
//       <View style={styles.container}>
//        {/* <View style={{width:WIDTH, backgroundColor: "white",flex:1,display: 'flex', }}> */}
//         {/* <View style={styles.textWrapper}> */}
//         <View style={{ flexDirection: "row",alignItems:'center', justifyContent: "space-between", }}>
//                 <View style={{ width: "20%", borderBottomWidth: RFValue(5), borderBottomColor: "yellow",  }}>
//                 </View>
//                 <View style={{ width: "20%", borderBottomWidth: RFValue(5), borderBottomColor: "blue",  }}>
//                 </View>
//                 <View style={{ width: "20%", borderBottomWidth: RFValue(5), borderBottomColor: "green",  }}>
//                 </View>
//                 <View style={{ width: "20%", borderBottomWidth: RFValue(5), borderBottomColor: "red" }}>
//           </View>
//         {/* </View> */}
//         </View>
//       </View>
//     )
// }

// const styles = StyleSheet.create({
//   container: { flex: 1 },
//   textWrapper: {
//     height: hp('10%'), // 70% of height device screen
//     width: wp('90%')   // 80% of width device screen
//   },
//   myText: {
//     fontSize: hp('5%') // End result looks like the provided UI mockup
//   }
// });