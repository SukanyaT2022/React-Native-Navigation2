import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import moment from 'moment';

interface InputPracticeProp  {
message:string;
}

const JustPracticeInputBox = ({message}:InputPracticeProp) => {
    const date = new Date();
    return (
    <View style={styles.mainBox}>
      <Text>{message}</Text>
          <Text>{moment(date).format('MM/DD/YYYY')}</Text>
    </View>
  )
}

export default JustPracticeInputBox

const styles = StyleSheet.create({
mainBox:{
borderColor:'green',
borderWidth:2,
width:'50%',
padding:10,
gap:5
},



})