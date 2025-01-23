import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import  Icon  from 'react-native-vector-icons/AntDesign'
import DatePicker from 'react-native-date-picker'
import moment from 'moment';

interface PickupProp{
    message:string,
}

const PickupInputBox = ({message}:PickupProp) => {
     const [date, setDate] = useState(new Date())
     console.log(date.toISOString())
     const [open, setOpen] = useState(false) 

    //  const formatDate = (dateToFormat: Date) => {
    //   const dt = dateToFormat.toISOString().slice(0, 10);  // get only date from the Date object
    //   console.log('DATE STARTED: ', dt);
    //   let splittedDate = dt.split('-');
    //   let format = splittedDate.reverse().join();
    //   console.log('format: ', format);
    //   let newD= format.replaceAll(',', '/');
    //  let myr = newD.split('/');
    //  [myr[0], myr[1]] = [myr[1], myr[0]];
    //  return myr.join('/');
    
    //  }

    const popUpFunc =()=>{
setOpen(true)
    }
  return (
    <TouchableOpacity
    style ={styles.container}
    onPress={popUpFunc}
    >
      <View style={styles.dateStyle}>
      <Text>{message}</Text>
      <Text>{moment(date).format('MM/DD/YYYY')}</Text>
   </View>
 
    {/* toISOString() -- convert object --date  to string*/}
      <DatePicker
              modal
              open={open}
              date={date}
              onConfirm={(date) => {
                setOpen(false)
                setDate(date)
              }}
              onCancel={() => {
                setOpen(false)
              }}
            />
      <Icon name="calendar" size={30} color="#900" />

    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
container:{
borderWidth:2,
borderColor:'gray',
padding:10,
flexDirection:'row',
alignItems:'center',
justifyContent:'space-between'
},
dateStyle:{
gap:6,

},
})
export default PickupInputBox

