import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BoxProtectionScreenComp, { ArrayItemType } from '../componentFolder/BoxProtectionScreenComp'
import { ScrollView } from 'react-native-gesture-handler';
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
  const checkTextDetailArrayStandard: ArrayItemType[]= [
    {title:'No deductible for vehicle loss or damage.', check:true},
    {title: '100% coverage for car damage.', check:true},
    {title:'24/7 Emergency Roadside Assistance.', check:true},
    {title: 'Liability coverage.', check:true},
    {title: 'Accidental injury/death or theft.', check:false},

  ];
  const checkTextDetailArrayBasic: ArrayItemType[]= [
    {title:'No deductible for vehicle loss or damage.', check:true},
    {title: '100% coverage for car damage.', check:true},
    {title:'24/7 Emergency Roadside Assistance.', check:true},
    {title: 'Liability coverage.', check:false},
    {title: 'Accidental injury/death or theft.', check:false},

  ];
// ]
const InsuranceProtectionScreen = () => {
  return (
    <View style={styles.mainView}>
      <Text>Choose your coverage</Text>
    <ScrollView contentContainerStyle={styles.scrollViewWrapper}>
      {/* checkTextDetailArray={checkTextDetailArray} come from interface BoxprotectionScreenComp-- front is parperty and { value} */}
     <BoxProtectionScreenComp checkTextDetailArray={checkTextDetailArray} priceProp="32.47" titleProp="Complete Protection" recommendTagProp='Recommended'/>
     <BoxProtectionScreenComp checkTextDetailArray={checkTextDetailArrayStandard} priceProp="29.50" titleProp="Standard Protection"/>
     <BoxProtectionScreenComp checkTextDetailArray={checkTextDetailArrayBasic} priceProp="18.50" titleProp="Basic Protection"/>
    </ScrollView>
    </View>
  )
}

export default InsuranceProtectionScreen

const styles = StyleSheet.create({
  mainView:{
gap:20,
paddingHorizontal:10


  },
  scrollViewWrapper:{
    gap:20
    
  }
})