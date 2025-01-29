import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

var countryList =
  'https://countryapi.io/api/all?apikey=U84lmsMTELUagtHqL9VRIBm00db4w0mRAYuqWr6p';

const DropDownBox = () => {
  const [selectCountry, setSelectCountry] = useState('NY');
  const [data, setData] = useState({}) as any;
const [showCountryModal, setShowCountryModal] = useState(false)
  
  
  useEffect(() => {
    fetch(countryList) // Replace with your API URL
      .then(response => response.json())
      .then(result => {
        const formattedData = Object.keys(result).map(key => ({
          name: result[key].name,
          code: result[key].alpha2Code,
          callingCode: result[key].callingCode
        }));
        setData(formattedData);
      })
      .catch(err => console.error('Error:', err));
  }, []);
  console.log(data);
  

  return (
    <View>
    <View style={styles.wrapperInput}>
      <View style={styles.wrapText}>
        <Text>I live in</Text>
        <Text style={styles.countryText}>{selectCountry}</Text>
      </View>

      <View>
        <Icon name="down" size={25} color="#900" />
      </View>
    </View>
    </View>
  );
};

export default DropDownBox;

const styles = StyleSheet.create({
  wrapText: {
    gap: 3,
  },
  countryText: {
    fontWeight: 'semibold',
  },
  wrapperInput: {
    borderWidth: 2,
    borderColor: 'black',
    padding: 10,
    // borderStyle:'dashed',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
