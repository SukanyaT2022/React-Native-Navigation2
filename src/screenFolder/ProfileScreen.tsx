import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ButttonComp from '../componentFolder/ButttonComp'
import { profileScreen } from '../navigatorFolder/ProfileNavigatorLayout'
import ProfileComp from '../componentFolder/ProfileComp'
import UserIcon from 'react-native-vector-icons/AntDesign';
const ProfileScreen = ({navigation}:any) => {
  return (
    <View style={styles.main}>
      {/* <Text>Profile</Text> */}
      <View style={{alignItems:'center', gap:10}}>
        <Image source={require('../../assets/imagesFolder/dog1.png')} style={styles.imgStyle}/>
      <Text>First name: Last name:</Text>
      <Text>@cuteDoggy</Text>
      </View>

    
      <View>
        <ProfileComp iconProp={<UserIcon name = "user" style={styles.iconStyle}/>} textProp='Edit Profile'/>
        <ProfileComp iconProp={<UserIcon name = "user" style={styles.iconStyle}/>} textProp='Edit Profile'/>
        <ProfileComp iconProp={<UserIcon name = "user" style={styles.iconStyle}/>} textProp='Edit Profile'/>
        <ProfileComp iconProp={<UserIcon name = "user" style={styles.iconStyle}/>} textProp='Edit Profile'/>
      </View>
      {/* <ButttonComp
        buttonText="Edit Profile"
        onPressProp={() => navigation.navigate(profileScreen.editProfile)}
      /> */}
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  main:{
flex:1,
paddingHorizontal:20,
  
  },
imgStyle:{
  width:200,
  height:200,
  borderRadius:100,
  marginHorizontal:'auto',
  marginVertical:20,
},
iconStyle:{
  fontSize:30,
  color:'gray',
},
})