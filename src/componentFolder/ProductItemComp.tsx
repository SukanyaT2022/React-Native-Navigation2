import {Image, ImageSourcePropType, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {myColor} from '../constant/color';

interface ProductItemCompProps {
  carType: string;
  carBrand: string;
  imageUrl: string;
  pricePerDay: number;
  totalPricePerWeek: number;
 capacity: number;
}
const ProductItemComp = ({
  carType,
  carBrand,
  imageUrl,
  pricePerDay,
  totalPricePerWeek,
 capacity,
}: ProductItemCompProps) => {
  return (
    <View style={styles.mainBoxProductItem}>
      <Text style={styles.textStyle}>Type of Car:{carType}</Text>
      <Text style={styles.textStyle}>Brand of Car:{carBrand}</Text>
      <Image
        // source={{
        //   uri: imageUrl,
        // }}
        source={imageUrl as ImageSourcePropType} 
        style={styles.imgaeStyle}
      />

      {/* icon section */}
      <View>
        <View>
          {/* <Icon name="user" size={30} color="#900" /> */}
          <Text style={[styles.textStyle, {fontWeight: 'bold'}]}>
            Best Price
          </Text>
          <Text style={styles.textStyle}>${pricePerDay}/ day</Text>
          <Text style={styles.textStyle}>${totalPricePerWeek} est total per week</Text>
          <Text style={styles.textStyle}>{capacity} passenger</Text>
        </View>
        <View></View>
      </View>
    </View>
  );
};

export default ProductItemComp;

const styles = StyleSheet.create({
  mainBoxProductItem: {
    borderColor: myColor.primaryColor,
    borderTopWidth: 5,
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
    // shadowColor:'rgba(0, 0, 0, 0.24) 0px 3px 8px'
    borderRadius: 8,
    shadowColor: '#636363', // Close to rgba(99, 99, 99, 0.2)
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4, // For Android
  },
  imgaeStyle: {
    width: 250,
    height: 150,
    objectFit: 'contain',
    marginVertical:10,
  },
  textStyle: {
    textAlign: 'center',
    paddingVertical: 2,
  },
  title: {},
  subtitle: {},
  shadow: {
    shadowColor: 'gray',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 5,
  },
});
