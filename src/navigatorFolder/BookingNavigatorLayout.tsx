import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import BookingScreen from '../screenFolder/BookingScreen';
import EditBookingScreen from '../screenFolder/EditBookingScreen';
// step one create stack navigator
const Stack = createStackNavigator();
// step 2
export const bookingScreen = {
   booking: 'Booking',
   editBooking: 'EditBooking', 
  };


const BookingNavigatorLayout = () => {
  return (
    <Stack.Navigator>
    <Stack.Screen name={bookingScreen.booking} component={BookingScreen} />
    <Stack.Screen name={bookingScreen.editBooking} component={EditBookingScreen} />
 </Stack.Navigator>
  )
}

export default BookingNavigatorLayout

const styles = StyleSheet.create({})