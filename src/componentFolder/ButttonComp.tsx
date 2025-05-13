import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { myColor } from '../constant/color';

interface ButtonProp{
buttonText:string,
onPressProp:()=>void,
selectedProp?: boolean,
}
const ButttonComp = ({buttonText, onPressProp,selectedProp }:ButtonProp) => {

  return (
    <TouchableOpacity style={[styles.buttonStyle, selectedProp && {backgroundColor:myColor.greenColor}]} onPress={onPressProp} >
      <Icon name="plus" size={17} color="white" />
      {/* <Image source={iconBtnCompProp}/> */}
      <Text style={styles.buttonTextStyle}>{buttonText}</Text>
    </TouchableOpacity>
  )
}

export default ButttonComp

const styles = StyleSheet.create({
buttonStyle:{
backgroundColor:myColor.verylightGray,
alignItems:'center',
padding:10,
borderRadius:25,
flexDirection:'row',
gap:10,
justifyContent:'center',
width:'35%'

  },
  buttonTextStyle:{
color:'white',
fontWeight:'bold',
fontSize:16,
  },
})