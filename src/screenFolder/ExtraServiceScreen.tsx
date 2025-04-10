import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ExtraServiceOneMainBoxComp from '../componentFolder/ExtraServiceOneMainBoxComp';
import gaspump from '../asset/imagesFolder/gaspumpimg2.jpg';
import Icon from 'react-native-vector-icons/FontAwesome';


const ExtraServiceScreen = () => {
  return (
    <View>
      {/* <Text>ExtraServiceScreen</Text> */}
      <ExtraServiceOneMainBoxComp
   
        title="Skip the Pump and Save Time"
        smallImg={gaspump as any}
        message="Save time, Return wihout refueling"
        iconProp={<Icon name="shield" size={30} color="green" />}
   shieldMessage={['Comparable to local fuel prices', 'Avoid $9.99 for not refueling']}
priceText='$50.99/ rental'
      />
    </View>
  );
};

export default ExtraServiceScreen;

const styles = StyleSheet.create({

});
