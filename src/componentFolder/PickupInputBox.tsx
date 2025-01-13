import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import  Icon  from 'react-native-vector-icons/AntDesign'
import DatePicker from 'react-native-date-picker'
interface PickupProp{
    message:string,
}

const PickupInputBox = ({message}:PickupProp) => {
     const [date, setDate] = useState(new Date())
     const [open, setOpen] = useState(false) 
    const popUpFunc =()=>{
setOpen(true)
    }
  return (
    <TouchableOpacity
    style ={styles.container}
    onPress={popUpFunc}
    >
      <Text>{message}</Text>
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
})
export default PickupInputBox

