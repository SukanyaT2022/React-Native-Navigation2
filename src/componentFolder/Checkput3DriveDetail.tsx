import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import InputBox from './InputBox'
// import CountryCodePickerComp from './CountryCodePickerComp'
import NewCountryCodePicker from './NewCountryCodePicker'
import NewCountryCode2 from './NewCountryCode2'

const Checkput3DriveDetail = () => {
  return (
   <View style={styles.container}>
    <View style={styles.wrapper}>
      <Text>Driver Details</Text>
 <InputBox placeholderAr='First Name' />
 <InputBox placeholderAr='Last Name' />
 <InputBox placeholderAr='Email address' />
 <InputBox placeholderAr='Phone Number' />
    </View>
        <View>
   <NewCountryCode2/>

  
      </View>
      </View>
  )
}

export default Checkput3DriveDetail

const styles = StyleSheet.create({
container:{
  flex:1,
borderColor:'green',
borderWidth:1,
padding:10,
borderRadius:10,
marginTop:30,
  
},
wrapper:{
marginVertical:20,
gap:5,

},


})