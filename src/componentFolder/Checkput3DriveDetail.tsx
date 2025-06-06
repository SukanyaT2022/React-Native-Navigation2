import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import InputBox from './InputBox'
import CountryCodePickerComp from './CountryCodePickerComp'

const Checkput3DriveDetail = () => {
  return (
   <View>
    <View>
      <Text>Driver Details</Text>
 <InputBox placeholderAr='First Name' />
 <InputBox placeholderAr='Last Name' />
 <InputBox placeholderAr='Email address' />
    </View>
        <View>
    {/* <InputBox placeholderAr='Country' /> */}
    <CountryCodePickerComp />
   <InputBox placeholderAr='Phone Number' />
 
      </View>
      </View>
  )
}

export default Checkput3DriveDetail

const styles = StyleSheet.create({})