import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import BoxProtectionScreenComp, { ArrayItemType } from '../componentFolder/BoxProtectionScreenComp'
import { ScrollView } from 'react-native-gesture-handler';
import ButttonComp from '../componentFolder/ButttonComp';
import { screen } from '../../App';
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
const InsuranceProtectionScreen = ({navigation}:any) => {
const [selectedBtn, setSelected] = useState<boolean>(false)
const [selectedBtn2, setSelected2] = useState<boolean>(false)
const [selectedBtn3, setSelected3] = useState<boolean>(false)
  return (
    <View style={styles.mainView}>
      <Text>Choose your coverage</Text>
    <ScrollView contentContainerStyle={styles.scrollViewWrapper}>
      {/* checkTextDetailArray={checkTextDetailArray} come from interface BoxprotectionScreenComp-- front is parperty and { value} */}
     <BoxProtectionScreenComp checkTextDetailArray={checkTextDetailArray} priceProp="32.47" titleProp="Complete Protection" recommendTagProp='Recommended' disabled = {selectedBtn2 || selectedBtn3} selected = {selectedBtn} onpressProp={()=>setSelected(!selectedBtn)}/>

     <BoxProtectionScreenComp checkTextDetailArray={checkTextDetailArrayStandard} priceProp="29.50" titleProp="Standard Protection" disabled = {selectedBtn || selectedBtn3} selected = {selectedBtn2}  onpressProp={()=>setSelected2(!selectedBtn2)}/>

     <BoxProtectionScreenComp checkTextDetailArray={checkTextDetailArrayBasic} priceProp="18.50" titleProp="Basic Protection" disabled = {selectedBtn || selectedBtn2} selected = {selectedBtn3}  onpressProp={()=>setSelected2(!selectedBtn3)}/>
    <View style={{paddingHorizontal:10}}>
    <ButttonComp 
    buttonText = "Continue"
    selectedProp = {false}
 onPressProp = {()=>navigation.navigate(screen.home)}
    />
</View>
    </ScrollView>
    </View>
  )
}

export default InsuranceProtectionScreen

const styles = StyleSheet.create({
  mainView:{
gap:20,
paddingHorizontal:10,
paddingBottom:100,


  },
  scrollViewWrapper:{
    gap:20
    
  }
})