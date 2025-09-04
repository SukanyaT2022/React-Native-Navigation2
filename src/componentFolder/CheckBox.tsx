import React, { FC } from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { myCardBorder, myColor } from '../constant/color';

//ex 2 for typescript
interface CheckboxProp{
  item:string
}
//ex 2 for typescript
const CheckBox = ({item}:CheckboxProp) => {
  //example3
  // const CheckBox:FC<CheckboxProp> = ({item}) => {
  
  //ex1 for type script
// const CheckBox = ({item}:{item:string}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.checkBox}>
      <Icon style={styles.checkIcon} name="check" size={30} color={myColor.iconColor} />
      </TouchableOpacity>
      <Text>{item}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
container:{
flexDirection:'row',
gap:12,
alignItems:'center',

},
  checkBox: {
  width: 30,
  height: 30,
borderColor:myColor.borderColor,
borderRadius: myCardBorder,
  borderWidth: 2,
  alignItems: 'center',
  justifyContent: 'center',

  },
  checkIcon:{
    fontSize:20,
  }
});
export default CheckBox;
