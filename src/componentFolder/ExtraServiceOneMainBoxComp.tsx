import {View, Text, StyleSheet, Image, ImageSourcePropType} from 'react-native';
import React, {ReactNode} from 'react';
import ButttonComp from './ButttonComp';
import {Directions} from 'react-native-gesture-handler';

interface OneMainBoxProp {
  title: string;
  smallImg: ImageSourcePropType;
  onPressXtraProp: () => void;
  iconProp: ReactNode; // this is icon
  message: string;
  shieldMessage: string[];
}
const ExtraServiceOneMainBoxComp = ({
  title,
  smallImg,
  iconProp,
  message,
  onPressXtraProp,
  shieldMessage,
}: OneMainBoxProp) => {
  return (
    <View style={styles.main}>
      {/* text and gas pump  */}
  <View style={styles.wrapTextImg}>
      <Text>{title}</Text>
      <Image source={smallImg} style={styles.smallimgStyle} />
      </View>

      <View style={styles.iconMessageStyle}>
        <Text style={styles.subMessage}>{message}</Text>

        {/* map shiled icon and message */}
        {shieldMessage.map((item, index) => {
          return (
            <View key={index} style={styles.mapSheildMesaageStyle}>
              {/* //metal sheild icon */}
              {iconProp}
              <Text>{item}</Text>
            </View>
          );
        })}
      </View>
      <ButttonComp onPressProp={onPressXtraProp} buttonText="Add" />
    </View>
  );
};

export default ExtraServiceOneMainBoxComp;
const styles = StyleSheet.create({
  main: {
    borderColor: 'gray',
    borderWidth: 2,
    padding: 5,
    gap:10,
    alignItems:'center',
    backgroundColor:'red'
  },
  wrapTextImg:{
flexDirection:'row',
justifyContent:'space-between',
  backgroundColor:'green'
  },
  iconMessageStyle: {},
  imageStyle: {
    width: 40,
    height: 40,
    objectFit: 'contain',
  },
  // icon sheild
  smallimgStyle: {
    width: 50,
    height: 50,
    objectFit: 'contain',
  },
  mapSheildMesaageStyle: {
    flexDirection: 'row',
    // alignItems: 'center',
    gap: 10,
  },
  subMessage:{
    fontSize:20,
  }
});
