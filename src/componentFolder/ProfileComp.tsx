import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import ArrowIcon from 'react-native-vector-icons/Feather';
import {myColor} from '../constant/color';
interface ProfileCompProps {
  iconProp?: React.ReactNode;
  textProp?: string;
  onclickProp?: () => void;
}
const ProfileComp = ({iconProp, textProp, onclickProp}: ProfileCompProps) => {
  return (
    <TouchableOpacity style={styles.main}>
      {iconProp}
      <Text>{textProp}</Text>
      <View style={styles.circleWrapArrowIcon}>
        <ArrowIcon name="arrow-up-right" size={20} color={myColor.greenColor} />
      </View>
    </TouchableOpacity>
  );
};

export default ProfileComp;

const styles = StyleSheet.create({
  main: {
  
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    borderWidth: 1,
    borderColor: myColor.borderColor,
    borderRadius: 20,
    padding: 10,
  },
  circleWrapArrowIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderColor: myColor.greenColor,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {},
  arrowIconStyle: {},
});
