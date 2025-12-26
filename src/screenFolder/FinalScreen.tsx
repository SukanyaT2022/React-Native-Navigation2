import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';

//but not send datat back to the store use useDispatch--so we use only selector when get data from redux
import {useSelector} from 'react-redux';
import moment from 'moment';
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

} = useSelector((state:any) => state.summary);

const formattedDate = moment(pickupDate).format('ddd, MMM D, YYYY');

const formattedDateReturn = moment(returnDate).format('ddd, MMM D, YYYY');

  return (

    <View style={styles.main}>
    
        <Text style={styles.headerStyle}>
          Thanks for your booking with Roam!
        </Text>
        <Text>We have emailed your confirmation to : </Text>
        <Text style={styles.confirmtext}>
          Confirmation number:{' '}
          <Text style={styles.confirmationNumber}>L0999964</Text>
        </Text>

        {/* car typee and picture */}

        <View style={styles.MainCarType}>
          <View style={styles.wrapCarSizeType}>
            <Text>Car Type: {carType}</Text>
            <Text>Passenger: {carSize}</Text>
               <Text>Car Brand: {carBrand}</Text>
          </View>
          <View>
            <Image
              source={require('../../assets/imagesFolder/gaspumpimg2.jpg')}
              style={styles.imageStyle}
            />
          </View>
        </View>

        {/* start location time view */}
        <View style={styles.mainlocationTime}>
          <View>
            <Icon name="location-dot" size={20} color="#000" />
          </View>
          <View style={styles.wrapPickupLocationTime}>
            <Text>Pick up Location: {pickupLocation}</Text>
            <Text>Pick up Date: {formattedDate}</Text>
            <Text>Pick up Time: {pickupTime}</Text>
             <Text>Return Date: {formattedDateReturn}</Text>
            <Text>Return Time: {returnTime}</Text>
          </View>
        </View>
      {/* end main view */}
      </View>
  
  );
};

export default FinalScreen;

const styles = StyleSheet.create({
  main: {
    padding: 20,
    justifyContent: 'space-between',
    marginVertical: 10,
    backgroundColor: 'pink',
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
  imageStyle: {width: 100, height: 100},

  MainCarType: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor:'lightgreen',
marginTop:10,

  },
  wrapCarSizeType: {  
   gap: 5,
justifyContent:'center',    
paddingLeft:10,

    },
    mainlocationTime: {
      gap: 20,
      marginTop: 10,
      backgroundColor: 'lightblue',
      flexDirection: 'row',
    },
    wrapPickupLocationTime: {
gap:5,
    },
});
