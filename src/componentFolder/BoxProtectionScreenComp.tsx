import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {myColor} from '../constant/color';
import TowTruckIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import CarCrashIcon from 'react-native-vector-icons/FontAwesome6';
import LawIcon from 'react-native-vector-icons/Octicons';
import UmbrellaIcon from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DiscountTagIcon from 'react-native-vector-icons/Entypo';
import CrossIcon from 'react-native-vector-icons/Entypo';

//make component for smallbox

interface DiscountSmallBoxProp {
  message: string;
  bgColor: string;
  textColor: string;
  iconColor: string;
  icon: React.ReactNode;
}
const DiscountSmallBox = ({
  message,
  bgColor,
  textColor,
  iconColor,
  icon,
}: DiscountSmallBoxProp) => {
  return (
    <View style={[styles.smallBox, {backgroundColor: bgColor}]}>
      {icon}
      {/* <CarCrashIcon name="star" size={15} color={iconColor}  /> */}
      <Text style={{color: textColor}}>{message}</Text>
    </View>
  );
};
export interface ArrayItemType{
  title:string;
  check:boolean;//check if cross or check mark
}
interface MainProtectionType{
  checkTextDetailArray: ArrayItemType[]
}



const BoxProtectionScreenComp = ({checkTextDetailArray}:MainProtectionType) => {
  const iconColor = myColor.darkYellow;
  const iconSize = 40;
  // const checkTextDetailArray: ArrayItemType[]= [
  //   {title:'No deductible for vehicle loss or damage.', check:true},
  //   {title: '100% coverage for car damage.', check:true},
  //   {title:'24/7 Emergency Roadside Assistance.', check:true},
  //   {title: 'Liability coverage.', check:true},
  //   {title: 'Accidental injury/death or theft.', check:true},

  // ];
  return (
    <View style={styles.mainBox}>
      {/* start small box wrapper-- recommend and only discount button */}
      <View style={styles.wrapTwoRecommendBox}>
        <DiscountSmallBox
          message="Recommended"
          bgColor={myColor.greenColor}
          textColor="white"
          iconColor={myColor.darkYellow}
          icon={
            <CarCrashIcon name="star" size={15} color={myColor.darkYellow} />
          }
        />
        <DiscountSmallBox
          message="Online Only Discount "
          bgColor={myColor.lightYellow}
          textColor="black"
          iconColor={myColor.darkYellow}
          icon={
            <DiscountTagIcon
              name="price-tag"
              size={15}
              color={myColor.greenColor}
            />
          }
        />
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
        {checkTextDetailArray.map((item, index) => {
          return (
            <View style={styles.wrapperCheckText} key={index}>
             {item.check? <CarCrashIcon name={"check"} size={20} color={ myColor.greenColor} />:  <CrossIcon name = 'cross' size={20} color={myColor.red}/>} 
           
              <Text>{item.title}</Text>
              {/* style={styles.title} */}
            </View>
          );
        })}
      </View>
      {/* end check and text  */}
      {/* start price /day and select button */}
      <View style={styles.wrapPriceDaySelectBtn}>
        <Text style={styles.pricePerDayStyle}>$34.56/ Day</Text>
        <TouchableOpacity style={styles.selectBtnStyle}>
          <Text style={styles.selectTextStyle}>Select</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BoxProtectionScreenComp;

const styles = StyleSheet.create({
  mainBox: {
    borderColor: myColor.greenColor,
    borderWidth: 2,
    padding: 20,
    gap: 10,
  },

  smallBox: {
    backgroundColor: myColor.lightYellow,
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
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
  mainWrapperCheckText: {
    paddingHorizontal: 10,
  },
  wrapperCheckText: {
    flexDirection: 'row',
    gap: 20,
  },
  // wrap 2 small box recommend and discount online
  wrapTwoRecommendBox: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'flex-start',
  },
  wrapPriceDaySelectBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:10,
  },
  pricePerDayStyle: {
    fontSize:24,
    fontWeight:'semibold'
  },
  selectBtnStyle: {
padding:10,
width:'50%',
backgroundColor:'black',
alignItems:'center',
borderRadius:20,
  },
  selectTextStyle:{
color:'white',
fontWeight:'semibold',
  }
});
