import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

interface ButtonProp{
buttonText:string,
onPressProp:()=>void,

}
const ButttonComp = ({buttonText, onPressProp, }:ButtonProp) => {

  return (
    <TouchableOpacity style={styles.buttonStyle} onPress={onPressProp} >
      <Icon name="plus" size={17} color="white" />
      {/* <Image source={iconBtnCompProp}/> */}
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
borderRadius:25,
flexDirection:'row',
gap:10,
justifyContent:'center',


  },
  buttonTextStyle:{
color:'white',
fontWeight:'bold',
fontSize:16,
  },
})