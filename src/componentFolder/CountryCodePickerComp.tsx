import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
// https://www.npmjs.com/package/react-native-dropdown-picker
const CountryCodePickerComp = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: '🇺🇸 USA (+1)', value: '+1' },
    { label: '🇬🇧 UK (+44)', value: '+44' },
    { label: '🇹🇭 Thailand (+66)', value: '+66' },
    { label: '🇮🇳 India (+91)', value: '+91' },
    { label: '🇨🇦 Canada (+1)', value: '+1-CA' },
  ]);

  const [countries, setCountries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all?fields=name,idd,cca2')
      .then((response) => {
        const formatted = response.data
          .filter((c: any) => c.idd?.root)
          .map((c: any) => ({
            label: `${c.name.common} (${c.idd.root}${c.idd.suffixes?.[0] || ''})`,
            value: `${c.idd.root}${c.idd.suffixes?.[0] || ''}`,
          }))
          .sort((a, b) => a.label.localeCompare(b.label));
        setCountries(formatted);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Select Country Code:</Text>
      <DropDownPicker
        open={open}
        value={value}
        items={countries}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        placeholder="Select a country"
        style={styles.dropdown}
        dropDownContainerStyle={styles.dropdownContainer}
      />
      {value && (
        <Text style={styles.selectedText}>Selected Code: {value}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    zIndex: 1000, // Important to avoid overlap issues
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  dropdown: {
    borderColor: '#ccc',
    borderRadius: 8,
  },
  dropdownContainer: {
    borderColor: '#ccc',
  },
  selectedText: {
    marginTop: 16,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CountryCodePickerComp;
