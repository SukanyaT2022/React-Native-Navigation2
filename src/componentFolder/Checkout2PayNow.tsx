import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

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
    <View>
      <Text style={styles.titleSelectUrPrice}>Select your price</Text>
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
      <View style={styles.wrapTitleprice}>
          <Text style={styles.title}>Total + taxes 7%</Text>
          <Text style={styles.price}>${pricePlusTax}</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginBottom: 12,
    alignItems: 'flex-start',
  },
  selectedCard: {
    borderColor: '#0077b6',
    backgroundColor: '#e0f7fa',
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#0077b6',
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
    fontSize: 16,
  },
  price: {
    fontSize: 16,
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
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#0077b6',
    marginVertical: 30,
  },
});

export default Checkout2PayNow;
