import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { screen } from '../../App'

const BackScreen1 = ({navigation}:any) => {
  return (
    <View>
      <Text>BackScreen1</Text>
      <TouchableOpacity onPress={()=>navigation.navigate(screen.backScreen2)}><Text>Go to back screen 2</Text></TouchableOpacity>
    </View>
  )
}

export default BackScreen1

const styles = StyleSheet.create({})