import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {myColor} from '../constant/color';

interface ButtonProp {
  buttonText: string;
  onPressProp: () => void;
  selectedProp?: boolean;
  disableProp?: boolean;
  buttonTextColor?: string;
  backgroundColorProp?: string;
  borderColorProp?: string;
}
const ButttonComp = ({
  buttonText,
  onPressProp,
  selectedProp,
  disableProp,
  buttonTextColor = 'green',
  backgroundColorProp = 'white',
  borderColorProp = 'green',
}: ButtonProp) => {
  return (
    <TouchableOpacity
      style={[styles.buttonStyle, {backgroundColor: backgroundColorProp, borderColor: borderColorProp}, selectedProp && {backgroundColor: 'white'}]}
      onPress={onPressProp}
      disabled={disableProp}>
      {/* <Icon name="check-circle" size={24} color="green" /> */}
      {/* <Image source={iconBtnCompProp}/> */}
      <Text style={[styles.buttonTextStyle, {color: buttonTextColor}]}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

export default ButttonComp;

const styles = StyleSheet.create({
  buttonStyle: {
    // backgroundColor:myColor.verylightGray,
    // backgroundColor:'#fff',
    borderWidth: 1.5,
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    // width:'35%'
  },
  buttonTextStyle: {
    color: 'green',
    fontWeight: '600',
    fontSize: 16,
  },
});
