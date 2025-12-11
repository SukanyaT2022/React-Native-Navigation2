import { Image, StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native'
import React from 'react'
import { myColor } from '../constant/color'
import { inputBoxHeight } from '../constant/inputBoxHeight'

interface CreditCardCompProps {
  value?: string;
  onChangeText?: (text: string) => void;
}

const CreditCardComp = ({value, onChangeText}: CreditCardCompProps) => {
  const [cardNumber, setCardNumber] = React.useState<string>('');

  const handleCardNumberChange = (text: string) => {
    // Only allow numbers
    const numbersOnly = text.replace(/[^0-9]/g, '');
    
    // Format card number with spaces (XXXX XXXX XXXX XXXX)
    let formatted = numbersOnly.replace(/(\d{4})/g, '$1 ').trim();
    
    setCardNumber(formatted);
    if (onChangeText) {
      onChangeText(numbersOnly); // Send unformatted to parent
    }
  };

  return (
    <View>
      {/* touchable opacity is the border around card number */}
     <View style={styles.opacityStyle}>
      <TextInput
        placeholder="Card Number"
        value={value ? value.replace(/(\d{4})/g, '$1 ').trim() : cardNumber}
        onChangeText={handleCardNumberChange}
        style={styles.cardInput}
        keyboardType="number-pad"
        maxLength={19} // 16 digits + 3 spaces
      />
    <View style={styles.container}>   
      <Image 
        source={require('../../assets/imagesFolder/amexCrad.png')} 
        style={styles.cardImage} 
      />
      
      <Image 
        source={require('../../assets/imagesFolder/visaCardInput.png')} 
        style={styles.cardImage} 
      />
      
      <Image 
        source={require('../../assets/imagesFolder/masterCard.png')} 
        style={styles.cardImage} 
      />
    </View>
    </View>
    </View>
  )
}

export default CreditCardComp

const styles = StyleSheet.create({
  opacityStyle:{
    borderWidth:1,
    borderColor:myColor.borderColor,
    borderRadius:8,
    height: inputBoxHeight,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:10,
    backgroundColor: 'white',
  }, 
  cardInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  // main container of 3 card image 
  container: {
    flexDirection: 'row',
    gap: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
    color: '#333',
  },
  cardImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
})