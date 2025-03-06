import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {myColor} from '../constant/color';
import Icon from 'react-native-vector-icons/FontAwesome';
interface FilterItemProp {
  label: string;
  isSelected: boolean;
  onPress: () => void;
}

//below create only one box and we use a box to map
const FilterItemComp = ({label, isSelected, onPress}: FilterItemProp) => {
  return (
    <TouchableOpacity style={[styles.mainBox, isSelected ? styles.afterSelected: '']}
    //isSelected ? styles.afterSelected: '' and isSelected && styles.afterSelected is the same
    //isSelected && styles.afterSelected -- if user seleted is true
    // // and it excecute it change color style to green
    //if front condition isselected is true and then after && excute style
    onPress={onPress}>
      <Text style={isSelected ? styles.chageColorLabelAfterClick: ''}>{label}</Text>
      {/* //only box is seleted it show icon x */}
      {isSelected && <Icon name="close" size={15} color={myColor.greenColor} />}
    </TouchableOpacity>
  );
};
const FilterTypeCarComp = () => {
  const [selectedValue, setSelectedValue] = useState<string>('');
  const carTypeArray: string[] = ['SUVs', 'Trucks', 'Cars', 'Vans', 'Bikes'];
  const selectedFunc = (item: string) => {
    setSelectedValue(item);
  };
  console.log(selectedValue)
  return (
    //map te box
    <View style={styles.wrapper}>
      {carTypeArray.map((item, index) => {
        return (
          <FilterItemComp
            key={index}
            label={item}
            isSelected={selectedValue === item}
            //boolean if user click/selected is boolean it create bordercolor to green--above
            onPress={() => selectedFunc(item)}
          />
        );
      })}
      {/* <View style={styles.mainBox}>
        <Text>SUVs</Text>
      </View>
      <View style={styles.mainBox}>
        <Text>Trucks</Text>
      </View>
      <View style={styles.mainBox}>
        <Text>Cars</Text>
      </View>
      <View style={styles.mainBox}>
        <Text>Vans</Text>
      </View>
      <View style={styles.mainBox}>
        <Text>Bikes</Text>
      </View> */}
    </View>
  );
};

export default FilterTypeCarComp;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mainBox: {
    borderColor: myColor.lightGray,
    borderWidth: 1,
    padding: 10,
    alignItems: 'center',
    borderRadius: 10,
    flexDirection:'row',
    gap:2,
  },
  afterSelected:{
    borderColor:myColor.greenColor,
  },
  chageColorLabelAfterClick:{
    color:myColor.greenColor,
  }

});
// greenColor: "#0DB184",
// lightgreenClolor:"#EBF9F5"
