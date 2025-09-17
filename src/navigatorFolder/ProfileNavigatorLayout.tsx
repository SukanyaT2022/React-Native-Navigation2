import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import EditProfileScreen from '../screenFolder/EditProfileScreen';
import ProfileScreen from '../screenFolder/ProfileScreen';
const Stack = createStackNavigator();
// step 2
export const profileScreen = {
   profile: 'Profile',
   editProfile: 'EditProfile',

  };
const ProfileNavigatorLayout = () => {
  return (
    <Stack.Navigator>
       <Stack.Screen name={profileScreen.profile} component={ProfileScreen} />
       <Stack.Screen name={profileScreen.editProfile} component={EditProfileScreen} />
    </Stack.Navigator>
  )
}

export default ProfileNavigatorLayout

const styles = StyleSheet.create({})