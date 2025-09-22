import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import InputBox from './InputBox'
import { myColor } from '../constant/color'

const BillAddress = () => {
  return (
    <View style={styles.mainBox}>
      <Text style={styles.title}>Billing Address</Text>
<InputBox placeholderAr='Street Address'/>
<Text style={styles.text}>+ Add Suite/ Apartment etc</Text>
<InputBox placeholderAr='City'/>
<InputBox placeholderAr='State'/>
<InputBox placeholderAr='Zipcode'/>
<InputBox placeholderAr='Country'/>
    </View>
  )
}

export default BillAddress

const styles = StyleSheet.create({
    title: { 
        fontSize: 16,
        fontWeight: 600,
       },
       mainBox:{
    gap:10,
       },
       text:{
        color:myColor.greenColor,
       }


})