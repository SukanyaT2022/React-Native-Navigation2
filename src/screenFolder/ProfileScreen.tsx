import {Image, StyleSheet, Text, View} from 'react-native';
import React, { useState } from 'react';
import ButttonComp from '../componentFolder/ButttonComp';
import {profileScreen} from '../navigatorFolder/ProfileNavigatorLayout';
import ProfileComp from '../componentFolder/ProfileComp';
import UserIcon from 'react-native-vector-icons/AntDesign';
import CarIcon from 'react-native-vector-icons/AntDesign';
import PaymentIcon from 'react-native-vector-icons/MaterialIcons';
import HelpIcon from 'react-native-vector-icons/MaterialIcons';
import { myColor } from '../constant/color';
import BottomSheetTest from '../componentFolder/BottomSheetTest';
const ProfileScreen = ({navigation}: any) => {
  const [showEditProfileBtnSheet, setShowEditProfileBtnSheet] = useState<boolean>(false)
  return (
    <View style={styles.main}>
      {/* <Text>Profile</Text> */}
      <View style={{alignItems: 'center', gap: 10}}>
        <Image
          source={require('../../assets/imagesFolder/dog1.png')}
          style={styles.imgStyle}
        />
        <Text>First name: Last name:</Text>
        <Text>@cuteDoggy</Text>
      </View>

      <View>
        <ProfileComp
          iconProp={<UserIcon name="user" style={styles.iconStyle} />}
          textProp="Edit Profile" 
          onclickProp={()=>setShowEditProfileBtnSheet(true)}
        />
        <ProfileComp
          iconProp={<CarIcon name="car" style={styles.iconStyle} />}
          textProp="My Rentals"
        />
        <ProfileComp
          iconProp={<PaymentIcon name="payment" style={styles.iconStyle} />}
          textProp="Payment & Security"
        />
        <ProfileComp
          iconProp={<HelpIcon name="contact-support" style={styles.iconStyle} />}
          textProp="Help & Support"
        />
      </View>
      {/* <ButttonComp
        buttonText="Edit Profile"
        onPressProp={() => navigation.navigate(profileScreen.editProfile)}
      /> */}
      {
        showEditProfileBtnSheet && <BottomSheetTest/>
      }
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingHorizontal: 20,
    
  },
  imgStyle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginHorizontal: 'auto',
    marginVertical: 20,
  },
  iconStyle: {
    fontSize: 30,
    color: myColor.greenColor,

  },
});
