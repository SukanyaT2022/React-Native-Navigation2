import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ScrollView} from 'react-native-gesture-handler';

const NewCountryCode2 = () => {
  const [countries, setCountries] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [showCountries, setShowCountries] = useState<boolean>(false);
  //below for search and select functionality
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [searchCountryParam, setSearchCountryParam] = useState<string>('');

  // this function store country user select and it closes the dropdown
  const handleCountrySelect = (country: string) => {
    setSelectedCountry(country);//select country
    setShowCountries(false);// close dropdown
    //   setSearchCountryParam(country);
  };

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
        setCountries(formatted);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      <TouchableOpacity
        onPress={() => setShowCountries(!showCountries)}
        style={styles.container}>
   
        {selectedCountry ? (
          <Text>{selectedCountry}</Text>
        ) : (
          <Text style={{color: 'gray'}}>Select a country</Text>
        )}
        <Icon name="chevron-down" size={20} color="gray" />
      </TouchableOpacity>
      {showCountries && (
        <ScrollView style={styles.dropdown}>
          {countries.map((country, index) => (
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
});
