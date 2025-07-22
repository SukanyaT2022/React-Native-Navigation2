import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ScrollView} from 'react-native-gesture-handler';
import InputBox from './InputBox';

// The interfaces defined the types and the properties your component is going to take, for example
interface NewCountryProp {
  onCountrySelection: (val: string) => void ; // The onCountrySelection is a method the will pass down the country value selected to the parent. e.g (when you select Thailan, the Thailand value will be passed down from this component to the parent component where this component is rendered)
}

const NewCountryCode2 = ({onCountrySelection}: NewCountryProp) => {
  // This states holds our country list.
  const [countries, setCountries] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [showCountries, setShowCountries] = useState<boolean>(false);
  //below for search and select functionality
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [searchCountryParam, setSearchCountryParam] = useState<string>('');
  const [holdFilter, setHoldFilter] = useState<any[]>([]);

  // this function store country user select and it closes the dropdown
  const handleCountrySelect = (country: string) => {
    onCountrySelection(country); // We call the method here to make sure when the country is selected we have the value to pass down to the parent.
    setSelectedCountry(country); //select country
    setShowCountries(false); // close dropdown
    setSearchCountryParam(country);
  };

  // This useEffect fetch the list of countries from the api.
  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all?fields=name,idd,cca2')
      .then(response => {
        const formatted = response.data
          .filter((c: any) => c.idd?.root)
          .map((c: any) => ({
            label: `${c.name.common} (${c.idd.root}${
              c.idd.suffixes?.[0] || ''
            })`,
            value: `${c.idd.root}${c.idd.suffixes?.[0] || ''}`,
          }))
          .sort((a, b) => a.label.localeCompare(b.label));
        setCountries(formatted); // This stored the fetched and formated countries on the country state above.
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  }
// We will use this useEffect to search for a country on typing in the input box.
// It will filter the countries based on the search paremater the user selects or types.


  // Function to handle changes in the search input country
  const handleSearch = (text:string) => {
    setSearchCountryParam(text); // Update the search query state
  
  if (text) {
  // Filter the original 'countries' array based on the search text
  const newData = countries.filter(item => {
  // Convert both the country name and search text to uppercase for case-insensitive comparison
  const itemData = item.label ? item.label.toUpperCase() : ''.toUpperCase();
  const textData = text.toUpperCase();
  // Check if the country name includes the search text
  return itemData.includes(textData); // Using .includes() for better readability
  });
  setHoldFilter(newData); // Update the filtered list
  } else {
  // If the search text is empty, display all countries
  setHoldFilter(countries);
  }
  };


  return (
    <View>
      <TouchableOpacity
        onPress={() => setShowCountries(!showCountries)}
        style={styles.container}>
        <View style={styles.inputSelectCountry}>
          <InputBox
            placeholderAr="Select your country"
            onchangeFuncProp={text => handleSearch(text)}
value={searchCountryParam}
          />
        </View>

        {/* {selectedCountry ? (
          <Text>{selectedCountry}</Text>
        ) : (
          <Text style={{color: 'gray'}}>Select a country</Text>
        )} */}
        <Icon name="chevron-down" size={20} color="gray" />
      </TouchableOpacity>
      {showCountries && (
        <ScrollView style={styles.dropdown}>
          {holdFilter.map((country, index) => (
            <TouchableOpacity
              key={index}
              style={{paddingVertical: 5}}
              onPress={() => handleCountrySelect(country.label)}>
              <Text>{country.label}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default NewCountryCode2;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    height: 300,
    // overflow: 'scroll',
  },
  countryItem: {
    paddingVertical: 5,
  },
  inputSelectCountry: {
    width: '90%',
  },
});
