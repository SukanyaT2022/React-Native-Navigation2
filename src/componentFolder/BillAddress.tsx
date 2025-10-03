import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import InputBox from './InputBoxPractice';
import {myColor} from '../constant/color';
import InputboxDropdownMenuComp from './InputboxDropdownMenuComp';
import CheckBox from './CheckBox';

const BillAddress = () => {
  return (
    <View style={styles.mainBox}>
      <Text style={styles.title}>Billing Address</Text>
      <CheckBox item="Same as Driver's Address?"/>
      <InputBox placeholderAr="Street Address" />
      <Text style={styles.text}>+ Add Suite/ Apartment etc</Text>
      <InputboxDropdownMenuComp
        dataProp={[]}
        placeholderProp="Select Country"
        onchangeFuncProp={() => {}}
      />
      <InputboxDropdownMenuComp
        dataProp={[]}
        placeholderProp="State"
        onchangeFuncProp={() => {}}
      />
      <InputboxDropdownMenuComp
        dataProp={[]}
        placeholderProp="City"
        onchangeFuncProp={() => {}}
      />
      <InputboxDropdownMenuComp
        dataProp={[]}
        placeholderProp="ZipCode"
        onchangeFuncProp={() => {}}
      />
    </View>
  );
};

export default BillAddress;

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 600,
  },
  mainBox: {
    gap: 10,
  },
  text: {
    color: myColor.greenColor,
  },
});
