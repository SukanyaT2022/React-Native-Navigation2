import {Image, StyleSheet, Text, View} from 'react-native';
import React, { useRef } from 'react';
import ProfileComp from '../componentFolder/ProfileComp';
import UserIcon from 'react-native-vector-icons/AntDesign';
import CarIcon from 'react-native-vector-icons/AntDesign';
import PaymentIcon from 'react-native-vector-icons/MaterialIcons';
import HelpIcon from 'react-native-vector-icons/MaterialIcons';
import { myColor } from '../constant/color';
import EditProfileBottomShiftComp from '../componentFolder/EditProfileBottomShiftComp';
import { useSelector } from 'react-redux';
const ProfileScreen = ({navigation}: any) => {
  const bottomSheetRef = useRef(null) as any;
  
  // redux step 1 below
  const {imageProfile} = useSelector((state: any) => state.address);

  const handleOpenPress = () => {
    // Use setTimeout to ensure the component is mounted before calling expand
    setTimeout(() => {
      bottomSheetRef.current?.expand();
    }, 100);
  };
  return (
    <View style={styles.main}>

      {/* <Text>Profile</Text> */}
      <View style={{alignItems: 'center', gap: 10}}>
        <Image
          source={imageProfile ? {uri: imageProfile} : require('../../assets/imagesFolder/dog1.png')}
          // source={require('../../assets/imagesFolder/dog1.png')}
          style={styles.imgStyle}
        />
        <Text>First name: Last name:</Text>
        <Text>@cuteDoggy</Text>
      </View>

      <View>
        <ProfileComp
          iconProp={<UserIcon name="user" style={styles.iconStyle} />}
          textProp="Edit Profile" 
          onclickProp={()=>handleOpenPress()}
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
      
      <EditProfileBottomShiftComp 
        bottomSheetRefprop={bottomSheetRef}
      />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  imgStyle: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginHorizontal: 'auto',
    marginVertical: 20,
    borderWidth: 3,
    borderColor: myColor.greenColor,
  },
  iconStyle: {
    fontSize: 30,
    color: myColor.greenColor,
  },
});
