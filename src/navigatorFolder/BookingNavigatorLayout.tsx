import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
// step one create stack navigator
const Stack = createStackNavigator();
// step 2
export const profileScreen = {
    home: 'Home',
    details: 'Details',
    register: 'Register',
    login: 'Login',
    confirm: 'Confirm',
    productscreen: 'ProductScreen',
    insuranceScreen: 'InsuranceProtectionScreen',
    extraServiceScreen: 'ExtraServiceScreen',
    checkout: 'CheckoutScreen',
    backScreen1: 'BackScreen1',
    backScreen2: 'BackScreen2',
  };


const BookingNavigatorLayout = () => {
  return (
    <View>
      <Text>BookingNavigatorLayout</Text>
    </View>
  )
}

export default BookingNavigatorLayout

const styles = StyleSheet.create({})