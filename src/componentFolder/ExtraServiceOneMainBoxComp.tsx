import { View, Text, StyleSheet, Image, ImageSourcePropType } from 'react-native'
import React, { ReactNode } from 'react'
import ButttonComp from './ButttonComp'

interface OneMainBoxProp{
title: string,
smallImg: ImageSourcePropType,
onPressXtraProp: ()=>void
iconProp: ReactNode,// this is icon
message:string,

}
const ExtraServiceOneMainBoxComp = ({title,smallImg, iconProp, message, onPressXtraProp }:OneMainBoxProp) => {
  return (
    <View style = {styles.main} >
      <Text>ExtraServiceScreen</Text>
<Text>{title}</Text>
<Image source={smallImg} />

<View style = {styles.iconMessageStyle}>

{/* //metal sheild icon */}
{iconProp}
<Text>{message}</Text>
</View>
<ButttonComp onPressProp={onPressXtraProp} 
 buttonText='Add' />
    </View>
  )
}

export default ExtraServiceOneMainBoxComp
const styles = StyleSheet.create({
main:{
    borderColor:'gray',
    borderWidth:2,
    padding:5,
},
iconMessageStyle:{

},
imageStyle:{
  width:40,
  height:40,
  objectFit:'contain',
}
})