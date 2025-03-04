import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { myColor } from '../constant/color';

const FilterTypeCarComp = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.mainBox}>
        <Text>SUVs</Text>
      </View>
      <View style={styles.mainBox}>
        <Text>Trucks</Text>
      </View>
      <View style={styles.mainBox}>
        <Text>Cars</Text>
      </View>
      <View style={styles.mainBox}>
        <Text>Vans</Text>
      </View>
      <View style={styles.mainBox}>
        <Text>Bikes</Text>
      </View>
    </View>
  );
};

export default FilterTypeCarComp;

const styles = StyleSheet.create({
  wrapper:{
flexDirection:'row',
justifyContent:'space-between',
  },
    mainBox:{
     borderColor:myColor.lightGray,
     borderWidth:1,
     padding:5,
     alignItems:'center',
    }
});
   // greenColor: "#0DB184",
    // lightgreenClolor:"#EBF9F5"