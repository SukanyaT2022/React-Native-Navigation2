import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ButttonComp from '../componentFolder/ButttonComp'
import { profileScreen } from '../navigatorFolder/ProfileNavigatorLayout'

const ProfileScreen = ({navigation}:any) => {
  return (
    <View style={styles.main}>
      {/* <Text>Profile</Text> */}
      <View>
        <Image source={require('../../assets/imagesFolder/dog1.png')} style={styles.imgStyle}/>
      </View>
      <ButttonComp
        buttonText="Edit Profile"
        onPressProp={() => navigation.navigate(profileScreen.editProfile)}
      />
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  main:{
flex:1,
alignItems:'center',
  
  },
imgStyle:{
  width:100,
  height:100,
  borderRadius:50,
  marginVertical:20,
},
})