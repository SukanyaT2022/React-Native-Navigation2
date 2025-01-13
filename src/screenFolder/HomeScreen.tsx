import {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {Button} from 'react-native';
import DatePicker from 'react-native-date-picker';
import CheckBox from '../componentFolder/CheckBox';
import InputBox from '../componentFolder/InputBox';
import PickupInputBox from '../componentFolder/PickupInputBox';

const HomeScreen = ({navigation}: any) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  return (
    <View style={styles.mainContainer}>
      <Text>Make A Reservation</Text>
      <CheckBox item="Pick-up and Return to same location" />
      <InputBox placeholderAr="Enter your pick-up location or zip code" />
      <PickupInputBox message={'Pick - up Date'} />
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
  mainContainer:{
gap:20,
paddingHorizontal:10
  },
});
export default HomeScreen;
