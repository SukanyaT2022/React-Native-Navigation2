import { KeyboardAvoidingView, Platform, StyleSheet, Text, View } from 'react-native'
import React, { useMemo } from 'react'
import PaymentComp from '../componentFolder/PaymentComp';
import Checkput3DriveDetail from '../componentFolder/Checkput3DriveDetail';
import ButttonComp from '../componentFolder/ButttonComp';
import { NavigationContainer } from '@react-navigation/native';
import { bookingScreen } from '../navigatorFolder/BookingNavigatorLayout';
import BillAddress from '../componentFolder/BillAddress';
import { useSelector } from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';

const PaymentScreen = ({navigation}: any) => {

//redux part 2
  const {
    sameDriverAddress,
    user,
    fname,
    lname,
    phone,
    email,
    address,
    country,
    state,
    city,
    imageProfile,
    userOver25,
    billingAddress,
    billAddressCountry,
    billAddressState,
    billAddressCity,
    billingZipCode,
  } = useSelector((state: any) => state.address);

  const {paymentMethod, cardNumber, cardName, expiryDate, cvv} = useSelector(
    (state: any) => state.payment,
  );

//below to checkif all input filled
//function in able to click continue button- this function check if user click samde adress or not to validate if bill address shoukd be check
  const sameAddressPaymentCheckIfnotemptyFunc = useMemo( () => {
    //if it same address  if user check inputbox- true no need to checkbilling address
    if (sameDriverAddress) {
      return (
        fname.length > 0 &&
        lname.length > 0 &&
        phone.length > 0 &&
        email.length > 0 &&
        address.length > 0 &&
        country.length > 0 &&
        state.length > 0 &&
        city.length > 0 &&
        // paymentMethod.length > 0 &&
        cardNumber.length > 0 &&
        cardName.length > 0 &&
        expiryDate.length > 0 &&
        cvv.length > 0
      );
      //but if user donot click the inputbox is -false then we need billing address
    } else {
      return (
        fname.length > 0 &&
        lname.length > 0 &&
        phone.length > 0 &&
        email.length > 0 &&
        address.length > 0 &&
        country.length > 0 &&
        state.length > 0 &&
        city.length > 0 &&
        // paymentMethod.length > 0 &&
        cardNumber.length > 0 &&
        cardName.length > 0 &&
        expiryDate.length > 0 &&
        cvv.length > 0 &&
        billingAddress.length > 0 &&
        billAddressCountry.length > 0 &&
        billAddressState.length > 0 &&
        billAddressCity.length > 0 &&
        billingZipCode.length > 0
      );
    }
  },[
    sameDriverAddress,
    user,
    fname,
    lname,
    phone,
    email,
    address,
    country,
    state,
    city,
    imageProfile,
    userOver25,
    billingAddress,
    billAddressCountry,
    billAddressState,
    billAddressCity,
    billingZipCode,
    paymentMethod, cardNumber, cardName, expiryDate, cvv
  ]);
const check = sameAddressPaymentCheckIfnotemptyFunc;
console.log('check', check);

  return (
    <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{flex: 1}}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 150 : 0}>
        <ScrollView
          contentContainerStyle={{paddingBottom: 20}}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={true}
          nestedScrollEnabled={true}>
          <View style={styles.mainBox}>
       <PaymentComp />
       <Checkput3DriveDetail />
               
                 {/* //below if not same address true show bill address component- if not hide it */}
                 {!sameDriverAddress && <BillAddress/>}
                 <ButttonComp
                   buttonText="Continue"
                   onPressProp={() => navigation.navigate(bookingScreen.finalKey)}
                   selectedProp={true}
                   disableProp={!sameAddressPaymentCheckIfnotemptyFunc}
                 />
  </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default PaymentScreen

const styles = StyleSheet.create({
    mainBox: {
    flex: 1,
    padding: 20,
    gap: 30,
  },
})