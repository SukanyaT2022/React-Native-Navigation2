import {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {Button} from 'react-native';
import DatePicker from 'react-native-date-picker';
import CheckBox from '../componentFolder/CheckBox';
import InputBox from '../componentFolder/InputBox';
import PickupInputBox from '../componentFolder/PickupInputBox';
import PickupTime from '../componentFolder/PickupTime';

const HomeScreen = ({navigation}: any) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  return (
    <View style={styles.mainContainer}>
      <Text>Make A Reservation</Text>
      <CheckBox item="Pick-up and Return to same location" />
      <InputBox placeholderAr="Enter your pick-up location or zip code" />
      <View style={styles.wrapDateTime}>
        <View style={styles.oneBox}>
          <PickupInputBox message={'Pick-up Date'} />
        </View>

        <PickupTime messageTime="Pick-up Time" />
      </View>

      <View>
        <PickupInputBox message={'Return Date'} />
        <PickupTime messageTime="Drop-off Time" />
      </View>

      <CheckBox item="Renter's age is 25 or over" />

      <Button title="Open" onPress={() => setOpen(true)} />
      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={date => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
      <Text>{date.toString()}</Text>
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
