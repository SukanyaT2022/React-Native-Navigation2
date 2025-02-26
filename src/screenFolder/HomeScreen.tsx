import {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {Button} from 'react-native';
import DatePicker from 'react-native-date-picker';
import CheckBox from '../componentFolder/CheckBox';
import InputBox from '../componentFolder/InputBox';
import PickupInputBox from '../componentFolder/PickupInputBox';
import PickupTime from '../componentFolder/PickupTime';
import DropDownBox from '../componentFolder/DropDownBox';
import ButttonComp from '../componentFolder/ButttonComp';



const HomeScreen = ({navigation}: any) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  return (
    <View style={styles.mainContainer}>
      <Text>Make A Reservation</Text>
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
<DropDownBox onSelect={(item)=>console.log(item)}  />
 
 <ButttonComp buttonText='Select My Car'/> 
    </View>
  );
};
const styles = StyleSheet.create({
  inputBox: {
    width: '80%',
    padding: 10,
    borderColor: 'green',
    borderWidth: 2,
    marginVertical: 10,
  },
  mainContainer: {
    gap: 20,
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
