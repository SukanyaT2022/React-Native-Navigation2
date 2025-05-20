import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { screen } from '../../App';

const BackScreen2 = ({navigation}:any) => {
  return (
    <View>
        {/* go back only one schreen */}
      <Text>BackScreen2</Text>
       <TouchableOpacity onPress={()=>navigation.goBack()}><Text>Go to back screen One</Text></TouchableOpacity>

{/* go back to home screen */}
        <Icon
            
               name={'eye'}
               size={30}
               color="black"
               onPress={() => navigation.navigate(screen.home)}
             />
             <Text>Move to home screen</Text>
    </View>
  )
}

export default BackScreen2

const styles = StyleSheet.create({})