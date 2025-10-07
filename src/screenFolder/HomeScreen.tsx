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
import dogImg from '../../assets/imagesFolder/dog1.png'

const HomeScreen = ({navigation}: any) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.mainContainer}>
      <Image source={dogImg} style={styles.imgStyle}/>
      {/* <Text style={{ fontFamily: 'Monoton-Regular', fontSize: 20 }}>
       RentCars
      </Text> */}
      <Text style={{fontWeight: 'bold'}}>
        FIND YOUR BEST CAR RENTAL WITH ROAM
      </Text>
      <CheckBox item="Pick-up and Return to same location" />
      <InputBox placeholderAr="Enter your pick-up location or zip code" />
      <InputBox placeholderAr="Enter your return location or zip code" />
      <View style={styles.wrapDateTime}>
        <View style={styles.oneBox}>
          <PickupInputBox message={'Pick-up Date'} />
        </View>
        <View style={styles.oneBox}>
          <PickupTime messageTime="Pick-up Time" />
        </View>
      </View>

      <View style={styles.wrapDateTime}>
        <View style={styles.oneBox}>
          <PickupInputBox message={'Return Date'} />
        </View>
        <View style={styles.oneBox}>
          <PickupTime messageTime="Drop-off Time" />
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
