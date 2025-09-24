import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import InputBox from './InputBox';
// import CountryCodePickerComp from './CountryCodePickerComp'
import NewCountryCodePicker from './NewCountryCodePicker';
import NewCountryCode2 from './NewCountryCode2';
import { myColor } from '../constant/color';
import InputboxDropdownMenuComp from './InputboxDropdownMenuComp';

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
            <InputboxDropdownMenuComp placeholderProp='State'  onchangeFuncProp={()=>{}}/>
    
         <InputboxDropdownMenuComp placeholderProp='Select Country' onchangeFuncProp={()=>{}}/>
       
        </View>
        <View>
          <NewCountryCode2
            onCountrySelection={val => {
              handleInputChange('phone', val)
              console.log('THE COUNTRY VALUE SELECTED', val)
            }
            }
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
