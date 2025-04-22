import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ExtraServiceOneMainBoxComp from '../componentFolder/ExtraServiceOneMainBoxComp';
import gaspump from '../asset/imagesFolder/gaspumpimg2.jpg';
import truck from '../asset/imagesFolder/cat1.png';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView } from 'react-native-gesture-handler';
import {extraServiceData} from '../constant/extraServiceData'
const ExtraServiceScreen = () => {
  return (
    <View style = {styles.main}>
      <Text style={styles.header}>Coverages & Improve your trip</Text>
     
      <ScrollView contentContainerStyle={{gap:15, paddingBottom:50, paddingTop:20}}>
      {/* <Text>ExtraServiceScreen</Text> */}
      
      <ExtraServiceOneMainBoxComp
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
      />
      </ScrollView>
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
