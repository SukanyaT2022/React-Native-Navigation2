import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import InputBox from './InputBoxPractice';
import { myColor } from '../constant/color';
import CreditCardComp from './CreditCardComp';
const paymentProps = {
    cardNumber: '',
    cardHolderName: '',
    expiryDate: '',
    securityCode: '',
};
const PaymentComp = () => {
    const [cardNum, setCardNum] = React.useState<string>('');
    const [cardHolderName, setCardHolderName] = React.useState<string>('');
    const [expiryDate, setExpiryDate] = React.useState<string>('');
    const [securityCode, setSecurityCode] = React.useState<string>('');
  return (
    <View style={styles.mainBox}> 
      <Text style={styles.title}>Payment Details</Text>
  
     
      <CreditCardComp 
        value={cardNum}
        onChangeText={(text) => setCardNum(text)}
      />
      
      <InputBox 
        placeholderAr='Card Holder Name' 
        value={cardHolderName}   
        onchangeFuncProp={(text) => {setCardHolderName(text)}}
        inputType='text'
        keyboardType='default'
      />

      <InputBox 
        placeholderAr='Card Expiration Date (MM/YY)' 
        value={expiryDate} 
        onchangeFuncProp={(text) => {setExpiryDate(text)}}
        inputType='number'
        keyboardType='number-pad'
        maxLength={5}
      />

      <InputBox 
        placeholderAr='Security Code (CVV)' 
        value={securityCode} 
        onchangeFuncProp={(text) => {setSecurityCode(text)}}
        inputType='number'
        keyboardType='number-pad'
        maxLength={4}
      />

    </View>
  )
}

export default PaymentComp

const styles = StyleSheet.create({
  mainBox:{ 
gap:10,

    },
    title: {
  fontSize: 16,
    fontWeight: 'bold',
    borderColor: myColor.greenColor,

    },

})