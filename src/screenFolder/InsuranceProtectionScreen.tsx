import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BoxProtectionScreenComp, { ArrayItemType } from '../componentFolder/BoxProtectionScreenComp'
// interface ProtectionDataType{
//   id:string;
//   data:
// }
// const protectionDataArray = [
   const checkTextDetailArray: ArrayItemType[]= [
    {title:'No deductible for vehicle loss or damage.', check:true},
    {title: '100% coverage for car damage.', check:true},
    {title:'24/7 Emergency Roadside Assistance.', check:true},
    {title: 'Liability coverage.', check:true},
    {title: 'Accidental injury/death or theft.', check:true},

  ];
// ]
const InsuranceProtectionScreen = () => {
  return (
    <View>
     <BoxProtectionScreenComp checkTextDetailArray={checkTextDetailArray}/>
    </View>
  )
}

export default InsuranceProtectionScreen

const styles = StyleSheet.create({
  
})