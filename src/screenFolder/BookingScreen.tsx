import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ButttonComp from '../componentFolder/ButttonComp'
import { bookingScreen } from '../navigatorFolder/BookingNavigatorLayout'

const BookingScreen = ({navigation}:any) => {
  return (
    <View>
      <Text>BookingScreen</Text>
      <ButttonComp onPressProp={()=>navigation.navigate(bookingScreen.editBooking)} buttonText='Edit Booking'/>
    </View>
  )
}

export default BookingScreen

const styles = StyleSheet.create({})