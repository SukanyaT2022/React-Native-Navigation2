import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ExtraServiceOneMainBoxComp from '../componentFolder/ExtraServiceOneMainBoxComp';
import gaspump from '../asset/imagesFolder/gaspumpimg2.jpg';
import Icon from 'react-native-vector-icons/FontAwesome';
const ExtraServiceScreen = () => {
  return (
    <View>
      <Text>ExtraServiceScreen</Text>
      <ExtraServiceOneMainBoxComp
        title="Skip the Pump and Save Time"
        smallImg={gaspump as any}
        message="Save time, Return wihout refueling"
        iconProp={<Icon name="rocket" size={30} color="#900" />}
      />
    </View>
  );
};

export default ExtraServiceScreen;

const styles = StyleSheet.create({});
