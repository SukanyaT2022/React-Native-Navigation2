import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ButttonComp from '../componentFolder/ButttonComp'
import { profileScreen } from '../navigatorFolder/ProfileNavigatorLayout'

const ProfileScreen = ({navigation}:any) => {
  return (
    <View>
      <Text>ProfileScreen</Text>
      <ButttonComp
        buttonText="Edit Profile"
        onPressProp={() => navigation.navigate(profileScreen.editProfile)}
      />
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})