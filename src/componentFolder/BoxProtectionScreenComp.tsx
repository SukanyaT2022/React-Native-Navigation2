import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {myColor} from '../constant/color';

const BoxProtectionScreenComp = () => {
  return (
    <View style={styles.mainBox}>
         {/* start small box wrapper */} 
      <View style={styles.wrapperSmallBox}>
        <View style={styles.smallBox}><Text>Recommend</Text></View>
        <View style={styles.smallBox}><Text>Online only discount</Text></View>
      </View>
      {/* end small box wrapper */}

      <Text></Text>
    </View>
  );
};

export default BoxProtectionScreenComp;

const styles = StyleSheet.create({
  mainBox: {
    borderColor: myColor.greenColor,
  },
  wrapperSmallBox: {

  },
  smallBox:{

  }
});
