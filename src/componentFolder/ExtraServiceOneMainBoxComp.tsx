import { View, Text, StyleSheet, Image, ImageSourcePropType } from 'react-native'
import React from 'react'
import ButttonComp from './ButttonComp'
import iconOne from '../asset/imagesFolder/cat1.png'
interface OneMainBoxProp{
title: string,
smallImg: ImageSourcePropType,
onPressXtraProp: ()=>void
iconProp: ImageSourcePropType,
message:string,

}
const ExtraServiceOneMainBoxComp = ({title,smallImg, iconProp, message, onPressXtraProp }:OneMainBoxProp) => {
  return (
    <View style = {styles.main} >
      <Text>ExtraServiceScreen</Text>
<Text>{title}</Text>
<Image source={smallImg}/>

<View style = {styles.iconMessageStyle}>
<Image source={iconProp}/>
<Text>{message}</Text>
</View>
<ButttonComp onPressProp={onPressXtraProp}  iconBtnCompProp = {iconOne} buttonText='Add' />
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
})