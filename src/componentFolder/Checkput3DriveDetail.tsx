import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import InputBox from './InputBoxPractice';
// import CountryCodePickerComp from './CountryCodePickerComp'
import NewCountryCodePicker from './NewCountryCodePicker';
import NewCountryCode2 from './NewCountryCode2';
import { myColor } from '../constant/color';
import InputboxDropdownMenuComp from './InputboxDropdownMenuComp';
import axios from 'axios';
import { getCountries, getStatesByCountry } from '../utils/helpers';

// this is the skeleton of the driver user info.
// this is the structur of the driverData in the useState of line 24
interface DriverDataProp {
  fName: string;
  lName: string;
  email: string;
  phone: string;
  countryCode: string;
}

// Defining the properties that this component shoult take,
// This is the defined properties for the Checkput3DriveDetail component.

// diffrent than line 10
// interface Checkput3DriveDetailProps {
//  firstName:string
// }

const  Checkput3DriveDetail = () => {
  const [driverData, setDriverData] = React.useState<DriverDataProp>({
    fName: '',
    lName: '',
    email: '',
    phone: '',
    countryCode: '',
  });

  //fetch data below
  const [states, setStates] = useState<any[]>([]);
  const [countries, setCountries] = useState<any[]>([]);
  const [cities, setCities] = useState<any[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const [selectedState, setSelectedState] = useState<string>('');
  const [selectedCountryCode, setSelectedCountryCode] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  
useEffect(() => {
  //callmethod countryfrom lone 50 const fetchCountries = async()=>{
  fetchCountries()
}, []);
//above inside [] comefrom line 40 41 states and countries
const fetchCountries = async()=>{
  setLoading(true)
  const countryData = await getCountries()
  //getCountries() is from helper.ts
  setCountries(countryData)
  setLoading(false)
 
}

const fetchStatesByCountry = async(countryCode: string)=>{
  setLoading(true)
  const stateData = await getStatesByCountry(countryCode)
  //getStatebyCountries() is from helper.ts
  setStates(stateData)
  setLoading(false)
}
console.log('test select country',selectedCountry);
console.log('test select state',selectedCountryCode);
// Fetch states when country is selected
useEffect(() => {
  if (selectedCountryCode) {
    fetchStatesByCountry(selectedCountryCode);
    setSelectedState(''); // Reset selected state when country changes
    setCities([]); // Reset cities when country changes
  }
}, [selectedCountryCode]);

// Handle country selection
const handleCountryChange = (countryCode: string) => {
  setSelectedCountry(countryCode);
};

// Handle state selection  
const handleStateChange = (stateCode: string) => {
  setSelectedState(stateCode);
  // Here you can add logic to fetch cities based on selected state
  // For now, we'll just clear cities
  setCities([]);
};

  const handleInputChange = (field: keyof DriverDataProp, value: string) => {
    setDriverData(prevState => ({
      ...prevState,
      [field]: value,
    }));
  }
  // console.log('THE DRIVER DATA', driverData);
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Text style={{fontSize:16, fontWeight:600}}>Driver Details</Text>

          {/* //option1 part 2 */}
          {/* <InputBox placeholderAr='First Name' onchangeFuncProp={(text)=>setFirstName(text)}  />
 <InputBox placeholderAr='Last Name' onchangeFuncProp={(text)=>setLastName(text)}  />
 <InputBox placeholderAr='Email address' onchangeFuncProp={(text)=>setEmail(text)}  />
 <InputBox placeholderAr='Phone Number' onchangeFuncProp={(text)=>setCountryCode(text)}  /> */}

          <InputBox
            placeholderAr="First Name"
            onchangeFuncProp={text => handleInputChange('fName', text)}
          />
          <InputBox
            placeholderAr="Last Name"
            onchangeFuncProp={text => handleInputChange('lName', text)}
          />
          <InputBox
            placeholderAr="Email address"
            onchangeFuncProp={text => handleInputChange('email', text)}
          />
          <InputBox
            placeholderAr="Phone Number"
            onchangeFuncProp={text => handleInputChange('phone', text)}
          />
             <InputboxDropdownMenuComp 
               dataProp={countries} 
               placeholderProp='Select Country' 
               onchangeFuncProp={handleCountryChange}
               onSelectFuncProp={(itemCountry: any) => {
                 // Handle country selection here
                 console.log('Selected country:', itemCountry);
                //  setSelectedCountry(itemCountry.iso2); // Assuming itemCountry has an iso2 property
               setSelectedCountryCode(itemCountry.iso2);
              }} 
            />
            {/* //data state comefrom state line 40 */}
          
            <InputboxDropdownMenuComp 
               dataProp={states} 
               placeholderProp='Select State'  
               onchangeFuncProp={handleStateChange}
            />
            <InputboxDropdownMenuComp 
               dataProp={cities} 
               placeholderProp='Select City'  
               onchangeFuncProp={(cityCode: string) => {
                 // Handle city selection here
                 console.log('Selected city:', cityCode);
               }}
            />
      
       
        </View>
        <View>
        
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
