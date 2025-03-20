import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {myColor} from '../constant/color';
import TowTruckIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import CarCrashIcon from 'react-native-vector-icons/FontAwesome6';
import LawIcon from 'react-native-vector-icons/Octicons';
import UmbrellaIcon from 'react-native-vector-icons/Feather';
//make component for smallbox

interface DiscountSmallBoxProp{
  message:string;
  bgColor:string;
  textColor:string;
  iconColor:string;
}
const DiscountSmallBox =({message, bgColor, textColor, iconColor}:DiscountSmallBoxProp)=>{
return(
  <View style={[styles.smallBox, {backgroundColor:bgColor}]}>
  <CarCrashIcon name="star" size={15} color={iconColor}  />
    <Text style={{color:textColor}}>{message}</Text>
  </View>
)
}

const BoxProtectionScreenComp = () => {
  const iconColor = myColor.darkYellow;
  const iconSize = 40;
  const checkTextDetailArray = [
    'No deductible for vehicle loss or damage.',
    '100% coverage for car damage.',
    '24/7 Emergency Roadside Assistance.',
    'Liability coverage.',
    'Accidental injury/death or theft.',
  ]
  return (
    <View style={styles.mainBox}>
      {/* start small box wrapper-- recommend and only discount button */}
      <View >
       <DiscountSmallBox message='Recommended' bgColor={myColor.greenColor} textColor='white' iconColor={myColor.darkYellow}/>
       <DiscountSmallBox message='Recommended' bgColor={myColor.greenColor} textColor='white' iconColor={myColor.darkYellow}/>
      </View>
    
         {/* end small box wrapper-- recommend and only discount button */}

      {/* start wrap title and icons */}
      <View>
        <Text style={styles.title}>Complete Protection</Text>
        {/* start wrap 4 icon */}
        <View style={styles.wrapIconStyle}>
          <CarCrashIcon name="car-burst" size={iconSize} color={iconColor} />
          <TowTruckIcon name="tow-truck" size={iconSize} color={iconColor} />
          <LawIcon name="law" size={iconSize} color={iconColor} />
          <UmbrellaIcon name="umbrella" size={iconSize} color={iconColor} />
        </View>
      </View>
      {/* end wrap title and icons */}

      {/* Check and text */}
      <View style={styles.mainWrapperCheckText}>
        {
          checkTextDetailArray.map((item, index)=>{
            return(
              <View style={styles.wrapperCheckText} key={index}>
              <CarCrashIcon name="check" size={20} color={myColor.greenColor} />
              <Text>{item}</Text>
              {/* style={styles.title} */}
            </View>
            )
          })
        }
       
      </View>
      {/* end check and text  */}
      <Text></Text>
    </View>
  );
};

export default BoxProtectionScreenComp;

const styles = StyleSheet.create({
  mainBox: {
    borderColor: myColor.greenColor,
    borderWidth: 2,
    padding: 20,
    gap: 15,
  },
 
  smallBox: {
    backgroundColor: myColor.lightYellow,
    flexDirection:'row',
    gap:5,
    alignItems:'center',
    padding:10,
    borderRadius:10,
  },
  title: {
    textAlign: 'center',
    padding: 15,
    fontSize: 18,
    fontWeight: 600,
  },
  wrapIconStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 50,
  },
  mainWrapperCheckText:{
paddingHorizontal:10
  }, 
  wrapperCheckText: {
    flexDirection: 'row',
    gap: 20,

  },
});
