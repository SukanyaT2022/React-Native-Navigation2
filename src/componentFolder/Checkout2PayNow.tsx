import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type PriceOptionProps = {
  title: string;
  description: string;
  price: string;
  selected: boolean;
  onSelect: () => void;
};

const Checkout2PayNow
: React.FC<PriceOptionProps> = ({
  title,
  description,
  price,
  selected,
  onSelect
}) => {
  return (
    <TouchableOpacity onPress={onSelect} style={[styles.card, selected && styles.selectedCard]}>
      <View style={styles.radioCircle}>
        {selected && <View style={styles.selectedDot} />}
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title} <Text style={styles.price}>${price}</Text></Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </TouchableOpacity>
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
    alignItems: 'flex-start'
  },
  selectedCard: {
    borderColor: '#0077b6',
    backgroundColor: '#e0f7fa'
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
    marginRight: 12
  },
  selectedDot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#0077b6'
  },
  textContainer: {
    flex: 1
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16
  },
  price: {
    fontWeight: 'bold',
    color: '#000'
  },
  description: {
    color: '#555',
    marginTop: 4
  }
});

export default Checkout2PayNow
;
