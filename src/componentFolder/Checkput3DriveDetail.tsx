import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import InputBox from './InputBox';
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
    const [loading, setLoading] = useState<boolean>(true);
  
useEffect(() => {
 
  //callmethod countryfrom lone 50 const fetchCountries = async()=>{
  fetchCountries()
    //callmethod state from lone 50 const fetchCountries = async()=>{
  fetchState()
}, [countries, states]);
//above inside [] comefrom line 40 41 states and countries
const fetchCountries = async()=>{
  setLoading(true)
  const countryData = await getCountries()
  //getCountries() is from helper.ts
  setCountries(countryData)
  setLoading(false)
 
}

const fetchState = async()=>{
  setLoading(true)
  const stateData = await getStatesByCountry('TH')
  //getStatebyCountries() is from helper.ts
  setStates(stateData)
  setLoading(false)
 
}

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
            {/* //data state comefrom state line 40 */}
            <InputboxDropdownMenuComp dataProp = {states} placeholderProp='State'  onchangeFuncProp={()=>{}}/>
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
