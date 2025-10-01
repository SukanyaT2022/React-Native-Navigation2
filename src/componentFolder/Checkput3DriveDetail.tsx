import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import InputBox from './InputBox';
// import CountryCodePickerComp from './CountryCodePickerComp'
import NewCountryCodePicker from './NewCountryCodePicker';
import NewCountryCode2 from './NewCountryCode2';
import { myColor } from '../constant/color';
import InputboxDropdownMenuComp from './InputboxDropdownMenuComp';
import axios from 'axios';
import { getCountries } from '../utils/helpers';

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
  const [states, setstates] = useState<any[]>([]);
  const [countries, setCountries] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
  // This useEffect fetch the list of countries from the api.
  // useEffect(() => {
  //   axios
  //     .get('https://restcountries.com/v3.1/all?fields=name,idd,cca2')
  //     .then(response => {
  //       // console.log('THE FETCHED COUNTRIES', response.data);
  //       const formatted = response.data
  //         .filter((c: any) => c.idd?.root)
  //         .map((c: any) => ({
  //           label: `${c.name.common} (${c.idd.root}${
  //             c.idd.suffixes?.[0] || ''
  //           })`,
  //           value: `${c.idd.root}${c.idd.suffixes?.[0] || ''}`,
  //         }))
  //         .sort((a, b) => a.label.localeCompare(b.label));
  //       setCountries(formatted); // This stored the fetched and formated countries on the country state above.
  //     })
  //     .catch(console.error)
  //     .finally(() => setLoading(false));
  // }, []);

  // if (loading) {
  //   return <Text>Loading...</Text>;
  // }
// We will use this useEffect to search for a country on typing in the input box.
// It will filter the countries based on the search paremater the user selects or types.


//state
useEffect(() => {
  const fetchCountries = async()=>{await getCountries()
  
  };
  fetchCountries()
}, []);


// We will use this useEffect to search for a country on typing in the input box.
// It will filter the countries based on the search paremater the user selects or types.
  //option1 part 1
  // const [firstName, setFirstName] = useState<string>()
  // const [lastName, setLastName] = useState<string>()
  // const [email, setEmail] = useState<string>()
  // const [countryCode, setCountryCode] = useState<string>()
  // console.log('THE FIRST NAME', firstName, lastName,email,countryCode)

  const handleInputChange = (field: keyof DriverDataProp, value: string) => {
    setDriverData(prevState => ({
      ...prevState,
      [field]: value,
    }));
  }
  console.log('THE DRIVER DATA', driverData);
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
             <InputboxDropdownMenuComp dataProp = {countries} placeholderProp='Select Country' onchangeFuncProp={()=>{}}/>
            <InputboxDropdownMenuComp dataProp = {[]} placeholderProp='State'  onchangeFuncProp={()=>{}}/>
            <InputboxDropdownMenuComp dataProp = {[]} placeholderProp='City'  onchangeFuncProp={()=>{}}/>
      
       
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
