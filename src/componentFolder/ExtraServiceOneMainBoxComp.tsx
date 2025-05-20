import {View, Text, StyleSheet, Image, ImageSourcePropType} from 'react-native';
import React, {ReactNode} from 'react';
import ButttonComp from './ButttonComp';
import {Directions, ScrollView} from 'react-native-gesture-handler';
import {myColor} from '../constant/color';
import InfoCircleIcon from 'react-native-vector-icons/FontAwesome';

interface OneMainBoxProp {
  title: string;
  smallImg: ImageSourcePropType;
  onPressXtraProp: () => void;
  iconProp: ReactNode; // this is icon
  message: string;
  shieldMessage: string[];
  priceText: string;
  recommendationTag?: boolean;
  selected?: boolean;
}
const ExtraServiceOneMainBoxComp = ({
  title,
  smallImg,
  iconProp,
  message,
  onPressXtraProp,
  shieldMessage,
  priceText,
  recommendationTag,
  selected,
}: OneMainBoxProp) => {
  return (
    <View style={[styles.main,selected && {borderColor:myColor.greenColor} ]}>
      {/* //recommend tag condition put {} */}
      <View
        style={[
          {width: '100%'},
          recommendationTag
            ? {flexDirection: 'row', justifyContent: 'space-between'}
            : {},
        ]}>
        {recommendationTag && (
          <View style={styles.recommendTagStyle}>
            <Text style={styles.textRecommend}>Recommended</Text>
          </View>
        )}

        <View style={styles.infoIconStyle}>
          <InfoCircleIcon
            name="info-circle"
            size={20}
            color={myColor.greenColor}
          />
        </View>
      </View>
      <View style={styles.wrapHeaderToAll}>
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
                <Text style={styles.textNextIcon}>{item}</Text>
              </View>
            );
          })}
        </View>

        <View style={styles.wrapPriceAddBtn}>
          <Text style={styles.priceStyle}>${priceText}</Text>
          <View style={styles.targetOnlyBtn}><ButttonComp onPressProp={onPressXtraProp} selectedProp = {selected} buttonText="Add"/></View>
        </View>
      </View>
    </View>
  );
};

export default ExtraServiceOneMainBoxComp;
const styles = StyleSheet.create({
  main: {
    borderColor: myColor.verylightGray,
    borderWidth: 2,
    gap: 10,
    borderRadius: 15,
    // alignItems:'center',
  },
  // wrap subtitle to add btn
  wrapHeaderToAll: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    gap: 10,
  },
  recommendTagStyle: {
    backgroundColor: myColor.greenColor,
    padding: 10,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 40,
    width: '40%',
  },
  infoIconStyle: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingTop: 10,
    paddingRight: 10,
  },
  wrapTextImg: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  textRecommend: {
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 12,
    color: 'white',
  },
  // skippump
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
  // image corner
  smallimgStyle: {
    width: 80,
    height: 80,
    objectFit: 'contain',
  },
  // shieldicon and text
  mapSheildMesaageStyle: {
    flexDirection: 'row',
    width: '100%',
  },
  // save time subtitle
  subMessage: {
    fontSize: 18,
    marginBottom: 10,
    marginTop: -20,
  },
  wrapPriceAddBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
targetOnlyBtn:{
    width: '40%',
  },
  priceStyle: {
    fontSize: 20,
    fontWeight: 500,
    width: '50%',
  },
  textNextIcon: {
    paddingLeft: 10,
  },
});
