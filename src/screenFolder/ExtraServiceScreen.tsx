import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, { useState } from 'react';
import ExtraServiceOneMainBoxComp from '../componentFolder/ExtraServiceOneMainBoxComp';
import gaspump from '../asset/imagesFolder/gaspumpimg2.jpg';
import truck from '../asset/imagesFolder/cat1.png';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView } from 'react-native-gesture-handler';
import {extraServiceData} from '../constant/extraServiceData'
const ExtraServiceScreen = () => {
  const [selectedItem, setSelectedItem] = useState<string[]>([])
console.log(selectedItem, "this is for test selected id")
  //
  const handleSelectBox = (id:string)=>{
    //if click again the green border chnage to gray as original color
    var checkIfAlreadyCkick = selectedItem.includes(id);
    if (checkIfAlreadyCkick){
      setSelectedItem((prevState)=>prevState.filter((item)=>item !== id));
    }else{
      setSelectedItem((pervState)=>[...pervState, id])
    }


  }
  return (
    <View style = {styles.main}>
      <Text style={styles.header}>Coverages & Improve your trip</Text>
     <FlatList
     contentContainerStyle={{gap:15, paddingBottom:50, paddingTop:20 }}
     data = {extraServiceData}
     keyExtractor={(item)=>item.id}
     renderItem={({item})=><ExtraServiceOneMainBoxComp
     recommendationTag = {item?.recommendedTag as any }// leave it like that it's a boolean
        title={item.title}
        smallImg={item.image as any}
        message={item.subtitle}
        iconProp={<Icon name="shield" size={30} color="green" />}
        shieldMessage={item.text}
        priceText={item.price}
     selected ={selectedItem.includes(item.id)}
     onPressXtraProp={()=>handleSelectBox(item.id)}
     />}
     
     
     
     
     />
     {/* if not use flat list do like below code */}
      {/* <ScrollView contentContainerStyle={{gap:15, paddingBottom:50, paddingTop:20}}> */}
      {/* <Text>ExtraServiceScreen</Text> */}
      
      {/* <ExtraServiceOneMainBoxComp
      recommendationTag = {true}// leave it like that it's a boolean
        title="Skip the Pump and Save Time"
        smallImg={gaspump as any}
        message="Save time, Return wihout refueling"
        iconProp={<Icon name="shield" size={30} color="green" />}
        shieldMessage={[
          'Comparable to local fuel prices',
          'Avoid $9.99 for not refueling',
        ]}
        priceText="$50.99/ rental"
      />
        <ExtraServiceOneMainBoxComp
      recommendationTag = {true}// leave it like that it's a boolean
        title="Emergency & Roadside Assistant"
        smallImg={truck as any}
        message="For unexpected situations"
        iconProp={<Icon name="shield" size={30} color="green" />}
        shieldMessage={[
          'Flat tires or spare installation',
          'Lost car keys or locked out',
          'Run out of fuel or tow',
        ]}
        priceText="$9.99/ rental"
      />
        <ExtraServiceOneMainBoxComp
      recommendationTag = {true}// leave it like that it's a boolean
        title="Toll-free travel made easy"
        smallImg={gaspump as any}
        message="Save time, Return wihout refueling"
        iconProp={<Icon name="shield" size={30} color="green" />}
        shieldMessage={[
          'Unlimited toll usage 24/7',
          'Fixed daily rate',
          'No waiting in toll lanes',
        ]}
        priceText="$19.99/ rental"
      /> */}
      {/* </ScrollView> */}
    </View>
  );
};

export default ExtraServiceScreen;

const styles = StyleSheet.create({
  main:{
    padding:10,
  },
  header:{
    fontSize:18,
    fontWeight:'bold',
    paddingVertical:10,
    alignSelf:'center',
  }
});
