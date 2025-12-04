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
    <TouchableOpacity style={[styles.buttonStyle, selectedProp && {backgroundColor:'white'}]} onPress={onPressProp} >
      <Icon name="check-circle" size={24} color="green" />
      {/* <Image source={iconBtnCompProp}/> */}
      <Text style={styles.buttonTextStyle}>{buttonText}</Text>
    </TouchableOpacity>
  )
}

export default ButttonComp

const styles = StyleSheet.create({
buttonStyle:{
// backgroundColor:myColor.verylightGray,
// backgroundColor:'#fff',
borderWidth:1.5,
borderColor:'green',
alignItems:'center',
padding:10,
borderRadius:25,
flexDirection:'row',
gap:10,
justifyContent:'center',
// width:'35%'

  },
  buttonTextStyle:{
color:'green',
fontWeight:'500',
fontSize:16,
  },
})