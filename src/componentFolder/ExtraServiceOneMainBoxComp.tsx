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
  priceText: string;
}
const ExtraServiceOneMainBoxComp = ({
  title,
  smallImg,
  iconProp,
  message,
  onPressXtraProp,
  shieldMessage,
  priceText,
}: OneMainBoxProp) => {
  return (
    <View style={styles.main}>
      {/* text and gas pump  */}
      <View style={styles.wrapTextImg}>
        <Text style={styles.headerStyle}>{title}</Text>
        <Image source={smallImg} style={styles.smallimgStyle} />
      </View>
      <Text style={styles.subMessage}>{message}</Text>

      <View style={styles.iconMessageStyle}>
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

      <View style={styles.wrapPriceAddBtn}>
        <Text style={styles.priceStyle}>{priceText}</Text>
        <ButttonComp  onPressProp={onPressXtraProp} buttonText="Add" />
      </View>
    </View>
  );
};

export default ExtraServiceOneMainBoxComp;
const styles = StyleSheet.create({
  main: {
    borderColor: 'blue',
    borderWidth: 2,
    padding: 20,
    gap: 10,
    // alignItems:'center',
    backgroundColor: 'red',
  },
  wrapTextImg: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'green',
    width: '100%',
  },
  headerStyle: {
    fontSize: 20,
    fontWeight: 500,
    width: '70%',
    lineHeight: 28,
  },
  iconMessageStyle: {},
  imageStyle: {
    width: 40,
    height: 40,
    objectFit: 'contain',
  },
  // image coner
  smallimgStyle: {
    width: 80,
    height: 80,
    objectFit: 'contain',
  },
  // shieldicon and text
  mapSheildMesaageStyle: {
    flexDirection: 'row',
    // gap: 10,
    backgroundColor: 'pink',
    width: '100%',
  },
  subMessage: {
    fontSize: 18,
  },
  wrapPriceAddBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'purple',
    width: '100%',
  },
  priceStyle: {
    fontSize: 20,
    width:'50%',
    backgroundColor:'blue'
  },

});
