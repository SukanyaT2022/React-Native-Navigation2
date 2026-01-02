import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  Platform,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useRoute} from '@react-navigation/native';
import {carData} from '../constant/carData';
import CheckoutCarDateComp from '../componentFolder/CheckoutCarDateComp';
import Checkout2PayNow from '../componentFolder/Checkout2PayNow';
import Checkput3DriveDetail from '../componentFolder/Checkput3DriveDetail';
import NewCountryCode2 from '../componentFolder/NewCountryCode2';
import {screen} from '../navigatorFolder/HomeNavigatorLayout';
import PaymentComp from '../componentFolder/PaymentComp';
import BillAddress from '../componentFolder/BillAddress';
//bring redux below
import {useSelector} from 'react-redux';
import ButttonComp from '../componentFolder/ButttonComp';
import {bookingScreen} from '../navigatorFolder/BookingNavigatorLayout';
import { useMemo } from 'react';

const DetailsScreen = ({navigation}: any) => {
  const route = useRoute();
  const {params} = route;
  const {id} = params || {}; // Extract id from params, default to undefined if not present
  console.log('DetailsScreen id:', id); // Log the id to verify it's being passed correctly

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
  //end of function
  const findItemBasedOnId = carData.find(item => item.id === id);
  // find((item) => item.id === id); method help to find item
  // that match id 1 that sent from product screen
  const goBackHomeFunc = () => {
    // function go back to home back homescreen
    navigation.navigate(screen.home);
    // home come from apptsx line15
    //<Stack.Navigator initialRouteName="Home">
  };
  const totalPrice = findItemBasedOnId?.price_per_day || 0; // Default to 0 if price_per_day is undefined
  let discount = 20;
  let discountAmount = (totalPrice * discount) / 100; // Calculate the discount amount
  let discountedPrice = totalPrice - discountAmount; // Calculate the discounted price

  let storePayNowPayLater = [
    {
      id: 1,
      name: 'Pay Now and Save 20%',
      price: discountedPrice,
      desciption: `Cancel for free : Discount $${discountAmount}`,
    },
    {
      id: 2,
      name: 'Pay Later',
      price: totalPrice,
      desciption: 'Pay at your time for rent',
    },
  ];

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
          {/* <Text>Details Screen</Text> */}
          <Text style={{fontSize: 20, fontWeight: 600, marginBottom: 5}}>
            {findItemBasedOnId?.type}
          </Text>
          <Text>{findItemBasedOnId?.brand}</Text>
          <Image style={styles.imgStyle} source={findItemBasedOnId?.image} />

          <CheckoutCarDateComp
            title={'Checkout'}
            carType={findItemBasedOnId?.type || ''}
            carBrand={findItemBasedOnId?.brand || ''}
            image={findItemBasedOnId?.image || ''}
            unlimitedmileage={true}
            location={'Bangkok'}
            checkInDate={'03.10.2025'}
            checkOutDate={'10.18.2025'}
            checkInTime={'3PM'}
            checkOutTime={'3PM'}
          />

          <Checkout2PayNow
            title={`Pay Now for ${findItemBasedOnId?.brand || ''}`}
            description={`Pay Now for ${findItemBasedOnId?.brand || ''}`}
            price={`Pay Now for ${findItemBasedOnId?.brand || ''}`}
            selected={true} // Assuming you want to show this option as selected
            onSelect={() => console.log('Pay Now selected')}
            dataProp={storePayNowPayLater}
          />
          <PaymentComp />

          <Checkput3DriveDetail />
          {/* <Button
          title="Go back to HomeScreen"
          onPress={() => goBackHomeFunc()}
        /> */}

          {/* //below if not same address true show bill address component- if not hide it */}
          {!sameDriverAddress && <BillAddress />}
          <ButttonComp
            buttonText="Continue"
            onPressProp={() => navigation.navigate(bookingScreen.finalKey)}
            selectedProp={true}
            disableProp={!sameAddressPaymentCheckIfnotemptyFunc}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  ); //close return
};

export default DetailsScreen;

const styles = StyleSheet.create({
  imgStyle: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginVertical: 20,
  },
  mainBox: {
    flex: 1,
    padding: 20,
    gap: 30,
  },
});
