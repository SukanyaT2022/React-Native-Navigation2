import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import moment from 'moment';
import Icon from 'react-native-vector-icons/AntDesign';

interface PickupTimeProp{
    messageTime:string,
}
const PickupTime = ({messageTime}:PickupTimeProp) => {
const [time,setTime] = useState(new Date())


  return (
    <View style={styles.containerTime}>
        <View style={styles.dateStyle}>
        <Text>{messageTime}</Text>
        <Text>{moment(time).format('hh:mm A')}</Text>
        </View>  
       <Icon name="clockcircleo" size={30} color="#900" />
    </View>
  )
}



const styles = StyleSheet.create({
    containerTime:{
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
export default PickupTime

