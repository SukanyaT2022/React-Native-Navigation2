import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {myColor} from '../constant/color';
import TowTruckIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import CarCrashIcon  from 'react-native-vector-icons/FontAwesome6' ;
import LawIcon from 'react-native-vector-icons/Octicons';
import UmbrellaIcon from 'react-native-vector-icons/Feather';
const BoxProtectionScreenComp = () => {
const iconColor = myColor.darkYellow
const iconSize = 40
  return (
    <View style={styles.mainBox}>
         {/* start small box wrapper */} 
      <View style={styles.wrapperSmallBox}>
        <View style={styles.smallBox}><Text>Recommend</Text></View>
        <View style={styles.smallBox}><Text>Online only discount</Text></View>
        </View>

        {/* start wrap title and icons */}
<View >
        <Text>Complete Protection</Text>
{/* start wrap 4 icon */}
        <View style={styles.wrapIconStyle}>
       
        <CarCrashIcon name="car-burst" size={iconSize} color={iconColor} />
        <TowTruckIcon name="tow-truck" size={iconSize} color={iconColor} />
        <LawIcon name="law" size={iconSize} color={iconColor} /> 
        <UmbrellaIcon name="umbrella" size={iconSize} color={iconColor} />

        </View>
        </View>
        {/* end wrap title and icons */}
  
      {/* end small box wrapper */}

      <Text></Text>
    </View>
  );
};

export default BoxProtectionScreenComp;

const styles = StyleSheet.create({
  mainBox: {
    borderColor: myColor.greenColor,
    borderWidth:2
  },
  wrapperSmallBox: {
    backgroundColor: myColor.greenColor,
  },
  smallBox:{
   backgroundColor: myColor.lightYellow,
  },
  wrapIconStyle:{

  }

});
