import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

interface ButtonProp{
buttonText:string,
onPressProp:()=>void,
iconBtnCompProp : ImageSourcePropType
}
const ButttonComp = ({buttonText, onPressProp, iconBtnCompProp}:ButtonProp) => {

  return (
    <TouchableOpacity style={styles.buttonStyle} onPress={onPressProp}>
      <Image source={iconBtnCompProp}/>
      <Text style={styles.buttonTextStyle}>{buttonText}</Text>
    </TouchableOpacity>
  )
}

export default ButttonComp

const styles = StyleSheet.create({
  buttonStyle:{
backgroundColor:'black',
alignItems:'center',
padding:15,
borderRadius:5,

  },
  buttonTextStyle:{
color:'white',
fontWeight:'bold',
  },
})