import {useState} from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import {Button} from 'react-native';
import DatePicker from 'react-native-date-picker';
import CheckBox from '../componentFolder/CheckBox';
import InputBox from '../componentFolder/InputBoxPractice';
import PickupInputBox from '../componentFolder/PickupInputBox';
import PickupTime from '../componentFolder/PickupTime';
import DropDownBox from '../componentFolder/DropDownBox';
import ButttonComp from '../componentFolder/ButttonComp';
import {ScrollView} from 'react-native-gesture-handler';
import {myCardBorder, myColor} from '../constant/color';
import { screen } from '../navigatorFolder/HomeNavigatorLayout';
import headerImg from '../../assets/imagesFolder/dog1.png';
//bring redux- we already
// if send data to the store use  distpatch - on driverdetail3 screencomp

//  but home screen we just want to show data 
//but not send datat back to the store use duspatch--so we use only selector when get data from redux
//brin redux below 
import {  useDispatch, useSelector } from 'react-redux';

//below we sent data to the store 
import { updatePickupDate, updatePickupTime, updateReturnDate, updateReturnTime } from '../store/slices/summarySlice';

const HomeScreen = ({navigation}: any) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
//use redux so we use dispatch to send data to store
  const dispatch = useDispatch();

    //below redux part 2 -- we donot use dispatch here-coz we not send data back

    // below just for check if data come

// const {
// fname,
// lname,      
// phone,
// email,
// address,
// country,
// state,
// city,

//  } = useSelector((state: any) => state.address);


  return (

    <ScrollView contentContainerStyle={styles.mainContainer}>


       {/* from redux below */}
     {/* <Text style={{fontSize:24, fontWeight:'bold', textAlign:'center', marginBottom:10}}>{fname}</Text> */}
      
     
      {/* <Text style={{ fontFamily: 'Monoton-Regular', fontSize: 20 }}>
       RentCars
      </Text> */}
      <Image source={headerImg} style={{width:'100%', height:150, objectFit:'cover'}}/>
      <Text style={{fontWeight: 'bold'}}>
        FIND YOUR BEST CAR RENTAL WITH ROAM
      </Text>
      <CheckBox item="Pick-up and Return to same location" />
      <InputBox placeholderAr="Enter your pick-up location or zip code" />
      <InputBox placeholderAr="Enter your return location or zip code" />
      <View style={styles.wrapDateTime}>
        <View style={styles.oneBox}>
          <PickupInputBox message={'Pick-up Date'} onselectDate={(date)=>dispatch(updatePickupDate(date.toString()))}/>
        </View>
        <View style={styles.oneBox}>
          <PickupTime messageTime="Pick-up Time" onselectedTime={(selectedTime)=>dispatch(updatePickupTime(selectedTime.toString()))}/>
        </View>
      </View>

      <View style={styles.wrapDateTime}>
        <View style={styles.oneBox}>
          <PickupInputBox message={'Return Date'} onselectDate={(date)=>dispatch(updateReturnDate(date.toString()))} />
        </View>
        <View style={styles.oneBox}>
          <PickupTime messageTime="Drop-off Time" onselectedTime={(selectedTime)=>dispatch(updateReturnTime(selectedTime))  } />
        </View>
      </View>

      <CheckBox item="Renter's age is 25 or over" />
      <DropDownBox onSelect={item => console.log(item)} />

      <ButttonComp
        buttonText="Select My Car"
        onPressProp={() => navigation.navigate(screen.productscreen)}
      />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  imgStyle:{
width:'100%',
objectFit:'cover',
height:150,
marginBottom:10,
  },
  inputBox: {
    width: '80%',
    padding: 10,
    borderColor: myColor.borderColor,
    borderRadius: myCardBorder,
    borderWidth: 2,
    marginVertical: 10,
  },
  mainContainer: {
    paddingTop: 20,
    gap: 12,
    paddingHorizontal: 10,
  },
  wrapDateTime: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  oneBox: {
    width: '49%',
  },
});
export default HomeScreen;
