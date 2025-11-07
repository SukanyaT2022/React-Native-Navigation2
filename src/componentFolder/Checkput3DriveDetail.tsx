import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import InputBox from './InputBoxPractice';
// import CountryCodePickerComp from './CountryCodePickerComp'
import NewCountryCodePicker from './NewCountryCodePicker';
import NewCountryCode2 from './NewCountryCode2';
import {myColor} from '../constant/color';
import InputboxDropdownMenuComp from './InputboxDropdownMenuComp';
import axios from 'axios';
import {
  getCountries,
  getStatesByCountry,
  getCitiesByState,
} from '../utils/helpers';
import CheckBox from './CheckBox';
// import reux 2 thing useDispatch, useSelector
import {useDispatch, useSelector} from 'react-redux';
import {
  updateCity,
  updateCountry,
  updateEmail,
  updateFname,
  updateLname,
  updatePhone,
  updateSameAddress,
  updateState,
} from '../store/slices/addressSlice';

// this is the skeleton of the driver user info.
// this is the structur of the driverData in the useState of line 24
interface DriverDataProp {
  fName: string;
  lName: string;
  email: string;
  phone: string;
  countryCode: string;
  address: string;
}

// Defining the properties that this component shoult take,
// This is the defined properties for the Checkput3DriveDetail component.

// diffrent than line 10
// interface Checkput3DriveDetailProps {
//  firstName:string
// }

const Checkput3DriveDetail = () => {
  const [driverData, setDriverData] = React.useState<DriverDataProp>({
    fName: '',
    lName: '',
    email: '',
    phone: '',
    countryCode: '',
    address: '',
  });

  //below redux part 2
  const dispatch = useDispatch() as any; // to dispatch action to redux store
  const {fname, lname, phone, email, address, country, state, city} =
    useSelector((state: any) => state.address);
  console.log(
    'redux state data',
    fname,
    lname,
    phone,
    email,
    address,
    country,
    state,
    city,
  );
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

  const handleInputChange = (field: keyof DriverDataProp, value: string) => {
    console.log('FIELD AND VALUE', field, value);
    setDriverData(prevState => ({
      ...prevState,
      [field]: value,
    }));
  };
  // console.log('THE DRIVER DATA', driverData);
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={{fontSize: 16, fontWeight: 600}}>Driver Details</Text>

        {/* //option1 part 2 */}
        {/* <InputBox placeholderAr='First Name' onchangeFuncProp={(text)=>setFirstName(text)}  />
 <InputBox placeholderAr='Last Name' onchangeFuncProp={(text)=>setLastName(text)}  />
 <InputBox placeholderAr='Email address' onchangeFuncProp={(text)=>setEmail(text)}  />
 <InputBox placeholderAr='Phone Number' onchangeFuncProp={(text)=>setCountryCode(text)}  /> */}

        <InputBox
          placeholderAr="First Name"
          onchangeFuncProp={text => {
            handleInputChange('fName', text);
            dispatch(updateFname(text));
          }}
          value={driverData.fName}
        />
        <InputBox
          placeholderAr="Last Name"
          onchangeFuncProp={text => {
            handleInputChange('lName', text);
            dispatch(updateLname(text));
          }}
          value={driverData.lName}
        />
        <InputBox
          placeholderAr="Email address"
          onchangeFuncProp={text => {
            handleInputChange('email', text);
            dispatch(updateEmail(text));
          }}
          value={driverData.email}
        />
        <InputBox
          placeholderAr="Phone Number"
          onchangeFuncProp={text => {
            handleInputChange('phone', text);
            dispatch(updatePhone(text));
          }}
          value={driverData.phone}
        />
        <InputBox
          placeholderAr="Address"
          onchangeFuncProp={text => {
            handleInputChange('address', text);
            dispatch(updatePhone(text));
          }}
          value={driverData.address}
        />
        <InputboxDropdownMenuComp
          dataProp={countries}
          placeholderProp="Select Country"
          onchangeFuncProp={handleCountryChange}
          onSelectFuncProp={(itemCountry: any) => {
            // Handle country selection here
            console.log('Selected country:', itemCountry);
            //  setSelectedCountry(itemCountry.iso2); // Assuming itemCountry has an iso2 property
            setSelectedCountryCode(itemCountry.iso2);
            dispatch(updateCountry(itemCountry.name));
          }}
        />
        {/* //data state comefrom state line 40 */}

        <InputboxDropdownMenuComp
          dataProp={states}
          placeholderProp="Select State"
          onchangeFuncProp={handleStateChange}
          onSelectFuncProp={(itemState: any) => {
            setSelectedStateCode(itemState.iso2);
            dispatch(updateState(itemState.name));
          }}
        />
        <InputboxDropdownMenuComp
          dataProp={cities}
          placeholderProp="Select City"
          onchangeFuncProp={handleCityChange}
          onSelectFuncProp={(itemCity: any) => {
            setSelectedCityCode(itemCity.iso2);
            dispatch(updateCity(itemCity.name));
          }}
        />
      </View>
      <View style={{marginTop: 20}}>
        {/* check if the same address as bill address */}
        <CheckBox
          item="Same as Driver's Address?"
          oncheckProp={val => dispatch(updateSameAddress(val))}
        />
      </View>
    </View>
  );
};

export default Checkput3DriveDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
  },
  wrapper: {
    gap: 10,
  },
});
