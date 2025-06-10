import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

export default function NewCountryCodePicker() {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {label: 'Apple', value: 'apple'},
        {label: 'Banana', value: 'banana'},
        {label: 'Pear', value: 'pear'},
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
        return <Text>Loading...</Text>;
    }
    return (
        <View style={{flex: 1}}>
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingHorizontal: 15,
                }}>
                <DropDownPicker
                    open={open}
                    value={value}
                    items={countries}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    placeholder={'Select a country'}
                />
            </View>

            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text>Select Country: {value === null ? 'none' : value}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    zIndex: 1000, // Important to avoid overlap issues
  },
//   label: {
//     fontSize: 16,
//     marginBottom: 10,
//   },
//   dropdown: {
//     borderColor: '#ccc',
//     borderRadius: 8,
//   },
//   dropdownContainer: {
//     borderColor: '#ccc',
//   },
//   selectedText: {
//     marginTop: 16,
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
});