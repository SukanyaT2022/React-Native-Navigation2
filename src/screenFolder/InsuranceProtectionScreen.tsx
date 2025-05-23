import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import BoxProtectionScreenComp, { ArrayItemType } from '../componentFolder/BoxProtectionScreenComp'
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import ButttonComp from '../componentFolder/ButttonComp';
import { screen } from '../../App';
import { extraServiceData } from '../constant/extraServiceData';
import ExtraServiceOneMainBoxComp from '../componentFolder/ExtraServiceOneMainBoxComp';
// interface ProtectionDataType{
//   id:string;
//   data:
// }
const wrapGroupArray:{title:string, data:ArrayItemType[]}[] = [
{title:'data1', data:[
    {title:'No deductible for vehicle loss or damage.', check:true, id:'1'},
    {title: '100% coverage for car damage.', check:true id:'2'},
    {title:'24/7 Emergency Roadside Assistance.', check:true, id:'3'},
    {title: 'Liability coverage.', check:true, id:'4'},
    {title: 'Accidental injury/death or theft.', check:true, id:'5'},
  ]},
  {title:'data2', data:[
    {title:'No deductible for vehicle loss or damage.', check:true, id:'6'},
    {title: '100% coverage for car damage.', check:true, id:'7'},
    {title:'24/7 Emergency Roadside Assistance.', check:true, id:'8'},
    {title: 'Liability coverage.', check:true, id:'9'},
    {title: 'Accidental injury/death or theft.', check:false, id:'10'},
  ]},
  {title:'data3', data:[
    {title:'No deductible for vehicle loss or damage.', check:true, id:'11'},
    {title: '100% coverage for car damage.', check:true, id:'12'},
    {title:'24/7 Emergency Roadside Assistance.', check:true, id:'13'},
    {title: 'Accidental injury/death or theft.', check:false, id:'14'},

  ]},
]

// ]
const InsuranceProtectionScreen = ({navigation}:any) => {
const [selectedBtn, setSelected] = useState<boolean>(false)
const [selectedID, setSelectedID] = useState<string | null>(null)
// const [selectedBtn2, setSelected2] = useState<boolean>(false)
// const [selectedBtn3, setSelected3] = useState<boolean>(false)

const handleFunction = (id:string)=>{
setSelected(!selectedBtn)
setSelectedID(prev => prev === id ? null : id)
}
  return (
    <View style={styles.mainView}>
      <Text>Choose your coverage</Text>
 

<View style={styles.wrapFlatlistStyle}>
      <FlatList
        contentContainerStyle={{gap:15, paddingBottom:30, paddingTop:20 }}
        data={wrapGroupArray}
        keyExtractor={(item)=>item.title.toString()}
        // onScroll={handleScroll}
        scrollEventThrottle={16}
        renderItem={({item})=>
          <BoxProtectionScreenComp
            checkTextDetailArray={item.data}
            priceProp="32.47"
            titleProp={item.title}
            recommendTagProp='Recommended'
            // disabled = {selectedBtn2 || selectedBtn3}
            selected = {selectedBtn} 
            onpressProp={()=>handleFunction(item.id)}
          />
        }
      />


{/* disabled={selectedIndex !== null && selectedIndex !== index}
              selected={selectedIndex === index}
              onpressProp={() =>
                setSelectedIndex(selectedIndex === index ? null : index)
              } */}
      </View>
      {/* // close view flate list */}
      <View >
      {/* style={styles.submitBtnStyle} */}
           <ButttonComp 
            buttonText="Continue"
            selectedProp={false}
            onPressProp={()=>navigation.navigate(screen.checkout)}
          />
          </View>



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
    
  },
  wrapFlatlistStyle:{
    // backgroundColor:'red',
    // padding:10,
    // flex:1,
    height:'85%',
    // width:'100%',
  },
})



   {/* <ScrollView contentContainerStyle={styles.scrollViewWrapper}>
     
     <BoxProtectionScreenComp checkTextDetailArray={checkTextDetailArray} priceProp="32.47" titleProp="Complete Protection" recommendTagProp='Recommended' disabled = {selectedBtn2 || selectedBtn3} selected = {selectedBtn} onpressProp={()=>setSelected(!selectedBtn)}/>

     <BoxProtectionScreenComp checkTextDetailArray={checkTextDetailArrayStandard} priceProp="29.50" titleProp="Standard Protection" disabled = {selectedBtn || selectedBtn3} selected = {selectedBtn2}  onpressProp={()=>setSelected2(!selectedBtn2)}/>

     <BoxProtectionScreenComp checkTextDetailArray={checkTextDetailArrayBasic} priceProp="18.50" titleProp="Basic Protection" disabled = {selectedBtn || selectedBtn2} selected = {selectedBtn3}  onpressProp={()=>setSelected2(!selectedBtn3)}/>
    <View style={{paddingHorizontal:10}}>
    <ButttonComp 
    buttonText = "Continue"
    selectedProp = {false}
 onPressProp = {()=>navigation.navigate(screen.extraServiceScreen)}
    />
</View>
    </ScrollView> */}