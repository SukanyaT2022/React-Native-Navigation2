import {StyleSheet, Text, View, Image, ImageSourcePropType} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';
import check from 'react-native-vector-icons/FontAwesome';

//but not send datat back to the store use useDispatch--so we use only selector when get data from redux
import {useSelector} from 'react-redux';
import moment from 'moment';
import {myCardBorder, myColor} from '../constant/color';
import IconCheck from 'react-native-vector-icons/FontAwesome';
const FinalScreen = () => {
  //below we bring redux data from store
  const {
    // var we bring from summary slice line4 to 11
    pickupLocation,
    pickupDate,
    pickupTime,
    returnDate,
    returnTime,
    carSize,
    carType,
    carBrand,
    carImage,
  } = useSelector((state: any) => state.summary);

  const {
    userOver25,
    billingAddress,
    billAddressCountry,
    billAddressState,
    billAddressCity,
    billingZipCode,
  } = useSelector((state: any) => state.address);

  const formattedDate = moment(pickupDate).format('ddd, MMM D, YYYY');

  const formattedDateReturn = moment(returnDate).format('ddd, MMM D, YYYY');

  return (

    <View style={styles.main}>
      <View style={styles.checkMarkStyle}>
<IconCheck name="check-square-o" size={50} color={myColor.greenColor} />
 </View>
      <Text style={styles.headerStyle}>Thanks for your booking with Roam!</Text>
      <Text>We have emailed your confirmation to : </Text>
      <Text style={styles.confirmtext}>
        Confirmation number:{' '}
        <Text style={styles.confirmationNumber}>L0999964</Text>
      </Text>
      {/* <Text style={styles.confirmationNumber}>A renter is over 25. {userOver25 ? 'Yes' : 'No'}</Text> */}

      {/* car typee and picture */}
     <View>
         <Image
                 // source={{
                 //   uri: imageUrl,
                 // }}
                 source={carImage as ImageSourcePropType} 
                 style={styles.imageStyle}
               />
        </View>

      <View style={styles.MainCarType}>
        <View style={styles.wrapCarSizeType}>
          <Text>Car Type: {carType}</Text>
          <Text>Passenger: {carSize}</Text>
          <Text>Car Brand: {carBrand}</Text>
        </View>
       
      </View>

      {/* start location time view */}
      <View style={styles.mainlocationTime}></View>
      {/* end main view */}
    </View>
  );
};

export default FinalScreen;

const styles = StyleSheet.create({
  checkMarkStyle: {
  margin:'auto',

   
  },
  main: {
    padding: 20,
    justifyContent: 'space-between',
    marginVertical: 10,
    gap: 2,
    // backgroundColor: 'pink',
  },
  headerStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  confirmationNumber: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  confirmtext: {
    marginVertical: 10,
  },
  imageStyle: {
    width: '100%', 
    height: 200,
    borderRadius: 10,
    marginVertical: 10,
  }
    ,

  MainCarType: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: myColor.greenColor,
    marginTop: 10,
    borderRadius: 10,
  },
  wrapCarSizeType: {
    gap: 5,
    justifyContent: 'center',
    padding: 15,
  },
  mainlocationTime: {
    gap: 20,
    marginTop: 10,
    // backgroundColor: 'lightblue',
    flexDirection: 'row',
  },
  wrapPickupLocationTime: {
    gap: 5,
  },
});
