import {StyleSheet, Text, View} from 'react-native';
import React, { useEffect, useState } from 'react';
import InputBox from './InputBoxPractice';
import {myColor} from '../constant/color';
import InputboxDropdownMenuComp from './InputboxDropdownMenuComp';
//below bring datat from redux
import {useDispatch, useSelector} from 'react-redux';
import {updateBillAddress, updateBillAddressCity, updateBillAddressCountry, updateBillAddressState, updateBillingZipCode,} from '../store/slices/addressSlice';
import { getCitiesByState, getCountries, getStatesByCountry } from '../utils/helpers';

//step 2 bring datat from redux

const BillAddress = () => {

  const dispatch = useDispatch();

  const {sameDriverAddress,
     address, 
     country, 
     state, 
     city} = useSelector(
    (state: any) => state.address,
  );
  // start call api
//fetch data below

  const [states, setStates] = useState<any[]>([]);
  const [countries, setCountries] = useState<any[]>([]);
  const [cities, setCities] = useState<any[]>([]);
  const [selectedCityCode, setSelectedCityCode] = useState<string>('');

  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const [selectedState, setSelectedState] = useState<string>('');
  const [selectedCountryCode, setSelectedCountryCode] = useState<string>('');
  const [selectedStateCode, setSelectedStateCode] = useState<string>(''); // select state code to get a city
  const [loading, setLoading] = useState<boolean>(true);

  // same address or not at detailscreen
  const [sameAddress, setSameAddress] = useState<boolean>(false);

  useEffect(() => {
    //callmethod countryfrom lone 50 const fetchCountries = async()=>{
    fetchCountries();
  }, []);
  //above inside [] comefrom line 40 41 states and countries
  const fetchCountries = async () => {
    setLoading(true);
    const countryData = await getCountries();
    //getCountries() is from helper.ts
    setCountries(countryData);
    setLoading(false);
  };

  const fetchStatesByCountry = async (countryCode: string) => {
    setLoading(true);
    const stateData = await getStatesByCountry(countryCode);

    //getStatebyCountries() is from helper.ts
    setStates(stateData);
    setLoading(false);
  };
  console.log('test select cities', selectedStateCode);
  console.log('test select state', selectedCountryCode);

  //fech cities by state and country
  const fetchCitiesByStates = async (
    countryCode: string,
    stateCode: string,
  ) => {
    setLoading(true);
    const citiesData = await getCitiesByState(countryCode, stateCode);
    console.log('citiesData', citiesData);
    //getStatebyCountries() is from helper.ts
    setCities(citiesData);
    setLoading(false);
  };

  // Fetch states when country is selected====
  useEffect(() => {
    if (selectedCountryCode) {
      fetchStatesByCountry(selectedCountryCode);
      setSelectedState(''); // Reset selected state when country changes
      setCities([]); // Reset cities when country changes
    }
  }, [selectedCountryCode]);

  // Fetch cities when country and state are selected
  useEffect(() => {
    if (selectedCountryCode && selectedStateCode) {
      fetchCitiesByStates(selectedCountryCode, selectedStateCode);
      setSelectedState(''); // Reset selected state when country changes
    }
  }, [selectedCountryCode, selectedStateCode]);

  // Handle country selection
  const handleCountryChange = (countryCode: string) => {
    setSelectedCountry(countryCode);
  };

  // Handle state selection
  const handleStateChange = (stateCode: string) => {
    setSelectedState(stateCode); //give value of that state

    // Here you can add logic to fetch cities based on selected state
    // For now, we'll just clear cities
  };
  // Handle cities selection
  const handleCityChange = (cityCode: string) => {
    setSelectedState(cityCode);
  };
  // end call api
  return (
    <View style={styles.mainBox}>
      <Text style={styles.title}>Billing Address</Text>

      <InputBox placeholderAr="Street Address"
        onchangeFuncProp={(text) => dispatch(updateBillAddress(text))}
      />
      <Text style={styles.text}>+ Add Suite/ Apartment etc</Text>
      {/* <InputboxDropdownMenuComp
        dataProp={[]}
        placeholderProp="Select Country"
        onchangeFuncProp={(text) => dispatch(updateBillAddressCountry(text))}

       
      /> */}

 <InputboxDropdownMenuComp
          dataProp={countries}
          placeholderProp="Select Country"
          onchangeFuncProp={handleCountryChange}
          onSelectFuncProp={(itemCountry: any) => {
            // Handle country selection here
            console.log('Selected country:', itemCountry);
            //  setSelectedCountry(itemCountry.iso2); // Assuming itemCountry has an iso2 property
            setSelectedCountryCode(itemCountry.iso2);
            dispatch(updateBillAddressCountry(itemCountry.name));
          }}
        />


      {/* <InputboxDropdownMenuComp
        dataProp={[]}
        placeholderProp="State"
        onchangeFuncProp={(text) => dispatch(updateBillAddressState(text))}

      /> */}

 <InputboxDropdownMenuComp
          dataProp={states}
          placeholderProp="Select State"
          onchangeFuncProp={handleStateChange}
          onSelectFuncProp={(itemState: any) => {
            setSelectedStateCode(itemState.iso2);
            dispatch(updateBillAddressState(itemState.name));
          }}
        />


      {/* <InputboxDropdownMenuComp
        dataProp={[]}
        placeholderProp="City"
        onchangeFuncProp={(text) => dispatch(updateBillAddressCity(text))}

      /> */}

 <InputboxDropdownMenuComp
          dataProp={cities}
          placeholderProp="Select City"
          onchangeFuncProp={handleCityChange}
          onSelectFuncProp={(itemCity: any) => {
            setSelectedCityCode(itemCity.iso2);
            dispatch(updateBillAddressCity(itemCity.name));
          }}
        />



      <InputboxDropdownMenuComp
        dataProp={[]}
        placeholderProp="ZipCode"
        onchangeFuncProp={(text) => dispatch(updateBillingZipCode(text))}
      />
    </View>
  );
};

export default BillAddress;

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 600,
  },
  mainBox: {
    gap: 10,
  },
  text: {
    color: myColor.greenColor,
  },
});
