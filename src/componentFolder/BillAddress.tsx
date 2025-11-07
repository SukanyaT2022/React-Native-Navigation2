import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import InputBox from './InputBoxPractice';
import {myColor} from '../constant/color';
import InputboxDropdownMenuComp from './InputboxDropdownMenuComp';
//below bring datat from redux
import {useSelector} from 'react-redux';

//step 2 bring datat from redux
const BillAddress = () => {
  const {sameDriverAddress,
     address, 
     country, 
     state, 
     city} = useSelector(
    (state: any) => state.address,
  );
  return (
    <View style={styles.mainBox}>
      <Text style={styles.title}>Billing Address</Text>

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
