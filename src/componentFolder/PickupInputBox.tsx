import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import {myCardBorder, myColor} from '../constant/color';

interface PickupProp {
  message: string;
  onselectDate: (date: Date) => void;
  getMinimumDateProp: Date;
}

const PickupInputBox = ({message, onselectDate, getMinimumDateProp}: PickupProp) => {
  const [date, setDate] = useState(new Date());
  console.log(date.toISOString());
  const [open, setOpen] = useState(false);

  const popUpFunc = () => {
    setOpen(true);
  };
  return (
    <TouchableOpacity style={styles.container} onPress={popUpFunc}>
      <View style={styles.dateStyle}>
        <Text>{message}</Text>
        <Text>{moment(date).format('MM/DD/YYYY')}</Text>
      </View>

      {/* toISOString() -- convert object --date  to string*/}
      <DatePicker
      //mode is make date picker show only date - hide time
      mode='date'
        modal
        open={open}
        date={date}
        onConfirm={date => {
          setOpen(false);
          setDate(date);
          onselectDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
        minimumDate={getMinimumDateProp}
      />
      <Icon name="calendar" size={30} color={myColor.iconColor} />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: myColor.borderColor,
    borderRadius: myCardBorder,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dateStyle: {
    gap: 6,
  },
});
export default PickupInputBox;
