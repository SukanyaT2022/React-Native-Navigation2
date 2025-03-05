import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {myColor} from '../constant/color';
interface FilterItemProp {
  label: string;
  isSelected: boolean;
  onPress: () => void;
}

//below create only one box
const FilterItemComp = ({label, isSelected, onPress}: FilterItemProp) => {
  return (
    <TouchableOpacity style={styles.mainBox} onPress={onPress}>
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};
const FilterTypeCarComp = () => {
  const [selectedValue, setSelectedValue] = useState<string>('');
  const carTypeArray: string[] = ['SUVs', 'Trucks', 'Cars', 'Vans', 'Bikes'];
  const selectedFunc = (item: string) => {
    setSelectedValue(item);
  };
  return (
    //map te box
    <View style={styles.wrapper}>
      {carTypeArray.map((item, index) => {
        return (
          <FilterItemComp
            key={index}
            label={item}
            isSelected={selectedValue === item}
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
  },
});
// greenColor: "#0DB184",
// lightgreenClolor:"#EBF9F5"
