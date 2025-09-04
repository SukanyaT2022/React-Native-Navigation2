import {Platform, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import moment from 'moment';
import Icon from 'react-native-vector-icons/AntDesign';
import DateTimePicker from '@react-native-community/datetimepicker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {myCardBorder, myColor} from '../constant/color';

// time third party
// https://www.npmjs.com/package/@react-native-community/datetimepicker
//1install npm install @react-native-community/datetimepicker --save
//2 import on top   import DateTimePicker from '@react-native-community/datetimepicker';

interface PickupTimeProp {
  messageTime: string;
}
const PickupTime = ({messageTime}: PickupTimeProp) => {
  const [time, setTime] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const handleTimeChange = (event: any, selectedTime?: Date) => {
    setShowPicker(false); // Hide the picker
    if (selectedTime) {
      setTime(selectedTime);
    }
  };

  return (
    <View>
      <View style={styles.containerTime}>
        <View style={styles.dateStyle}>
          <Text>{messageTime}</Text>
          <Text>{moment(time).format('hh:mm A')}</Text>
        </View>
        <Icon
          name="clockcircleo"
          size={30}
          color= {myColor.iconColor}
          onPress={() => setShowPicker(true)}
        />
      </View>
      <DateTimePickerModal
        isVisible={showPicker}
        mode="time"
        onConfirm={selectedTime => {
          setTime(selectedTime);
          setShowPicker(false); // Automatically close after selection
        }}
        onCancel={() => setShowPicker(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerTime: {
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
export default PickupTime;
