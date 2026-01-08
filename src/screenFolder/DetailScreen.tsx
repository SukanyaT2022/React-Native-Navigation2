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

import {carData} from '../constant/carData';
import CheckoutCarDateComp from '../componentFolder/CheckoutCarDateComp';
import Checkout2PayNow from '../componentFolder/Checkout2PayNow';
import Checkput3DriveDetail from '../componentFolder/Checkput3DriveDetail';
import NewCountryCode2 from '../componentFolder/NewCountryCode2';
import {screen} from '../navigatorFolder/HomeNavigatorLayout';

import BillAddress from '../componentFolder/BillAddress';
//bring redux below
import {useSelector} from 'react-redux';
import ButttonComp from '../componentFolder/ButttonComp';
import {bookingScreen} from '../navigatorFolder/BookingNavigatorLayout';
import { useMemo } from 'react';
import { useRoute } from '@react-navigation/native';

const DetailsScreen = ({navigation}: any) => {
  const route = useRoute();
  const {params} = route;
  const {id} = params || {}; // Extract id from params, default to undefined if not present
  console.log('DetailsScreen id:', id); // Log the id to verify it's being passed correctly

  
 
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
          {/* from keybordavoidview can be reuse line 153 to 162*/}

          {/* <Text>Details Screen</Text> */}
          <Text style={{fontSize: 20, fontWeight: 600}}>
            Checkout
          </Text>
          {/* <Text style={{fontSize: 20, fontWeight: 600, marginBottom: 5}}>
            {findItemBasedOnId?.type}
          </Text>
       
          <Text>{findItemBasedOnId?.brand}</Text> */}
          <Image style={styles.imgStyle} source={findItemBasedOnId?.image} />

          <CheckoutCarDateComp
            // title={''}
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
     
   <ButttonComp
                   buttonText="Continue"
                   onPressProp={() => navigation.navigate(screen.paymentScreenKey)}
                   selectedProp={true}
                  //  disableProp={!sameAddressPaymentCheckIfnotemptyFunc}
                 />

           {/* from keybordavoidview close can be reuse line 207 to 209*/}
         
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  ); //close return
};

export default DetailsScreen;

const styles = StyleSheet.create({
  imgStyle: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginTop: -10,

  },
  mainBox: {
    flex: 1,
    padding: 20,
    gap: 30,
  },
});
