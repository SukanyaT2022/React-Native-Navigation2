import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { myColor } from '../constant/color';

interface PriceOptionProps {
  title: string;
  description: string;
  price: string;
  selected: boolean;
  onSelect: () => void;
  dataProp: any[];
}

const Checkout2PayNow = ({
  title,
  description,
  price,
  selected,
  onSelect,
  dataProp,
}: PriceOptionProps) => {
  const [storeTotalPrice, SetStoreTotalPrice] = useState<number>(0);
  const [activeIndex, SetActiveIndex] = useState<number>();
  const [pricePlusTax, SetPricePlusTax] = useState<number>(0);
  console.log(activeIndex, 'activeIndex');
  const tax = 7; 
  return (
    <View style={styles.mainBox}>
      <Text style={styles.titleSelectUrPrice}>Select your options</Text>
      {dataProp.map((item, index) => {
        const isSelected = activeIndex === index;
       
        return (
          <TouchableOpacity
            key={index}
            onPress={() => {
              SetStoreTotalPrice(item.price);
              SetActiveIndex(index);
              const calculatedTax = (item.price * tax) / 100;
              SetPricePlusTax(item.price + calculatedTax);
            }}
            style={[styles.card, isSelected && styles.selectedCard]}>
            <View style={styles.radioCircle}>
              {isSelected && <View style={styles.selectedDot} />}
            </View>
            <View style={styles.textContainer}>
              <View style={styles.wrapTitleprice}>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.price}>${item.price}</Text>
              </View>
              <Text style={styles.description}>{item.desciption}</Text>
            </View>
          </TouchableOpacity>
        );
      })}

      {/* total price brfore select pay now or pay later */}
      <TouchableOpacity
        onPress={onSelect}
        style={[styles.card, selected && styles.selectedCard]}>
        <View style={styles.wrapTitleprice}>
          <Text style={styles.title}>Total</Text>
          <Text style={styles.price}>${storeTotalPrice}</Text>
        </View>
      
      </TouchableOpacity>
      <View  style={[styles.card, selected && styles.selectedCard]}>
      <View style={styles.wrapTitleprice}>
          <Text style={styles.title}>Total + Taxes 7%</Text>
          <Text style={styles.price}>${pricePlusTax}</Text>
        </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainBox:{
gap:10,
  },
  card: {
    flexDirection: 'row',
    padding: 16,
    borderWidth: 1,
    borderColor: myColor.darkGray,
    borderRadius: 10,
    alignItems: 'flex-start',
  },
  selectedCard: {
    // borderColor: '#0077b6',
    // backgroundColor:  myColor.verylightGreen,
    borderColor: myColor.greenColor,
    borderWidth: 1.5,
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: myColor.greenColor,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    marginRight: 12,
  },
  selectedDot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#0077b6',
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  price: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
  },
  wrapTitleprice: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  description: {
    color: '#555',
    marginTop: 4,
  },
  titleSelectUrPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    borderColor: myColor.greenColor,
 
  },
});

export default Checkout2PayNow;
