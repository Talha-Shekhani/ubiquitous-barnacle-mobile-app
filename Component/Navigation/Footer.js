import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize'
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default function Footer(){
    return(
      <View style={styles.container}>
       {/* <View style={{width:WIDTH, backgroundColor: "white",flex:1,display: 'flex', }}> */}
        {/* <View style={styles.textWrapper}> */}
        <View style={{ flexDirection: "row",alignItems:'center', justifyContent: "space-between", backgroundColor: "gold", height: 50 }}>
                <View style={{ width: "20%", borderBottomWidth: RFValue(5), borderBottomColor: "yellow",  }}>
                </View>
                <View style={{ width: "20%", borderBottomWidth: RFValue(5), borderBottomColor: "blue",  }}>
                </View>
                <View style={{ width: "20%", borderBottomWidth: RFValue(5), borderBottomColor: "green",  }}>
                </View>
                <View style={{ width: "20%", borderBottomWidth: RFValue(5), borderBottomColor: "red" }}>
          </View>
        {/* </View> */}
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  textWrapper: {
    height: hp('10%'), // 70% of height device screen
    width: wp('90%')   // 80% of width device screen
  },
  myText: {
    fontSize: hp('5%') // End result looks like the provided UI mockup
  }
});