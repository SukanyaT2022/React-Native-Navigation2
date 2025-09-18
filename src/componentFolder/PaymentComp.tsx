import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import InputBox from './InputBox';
import { myColor } from '../constant/color';
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
  
      <InputBox placeholderAr='Card Number' value={cardNum} onchangeFuncProp={(text)=>{setCardNum(text)}} />

      <InputBox placeholderAr='Card Holder Name' value={cardHolderName}   onchangeFuncProp={(text)=>{setCardHolderName(text)}} />

      <InputBox placeholderAr='Card Expiration Date' value={expiryDate} onchangeFuncProp={(text)=>{setExpiryDate(text)}} />

      <InputBox placeholderAr='Security Code' value={securityCode} onchangeFuncProp={(text)=>{setSecurityCode(text)}} />

    </View>
  )
}

export default PaymentComp

const styles = StyleSheet.create({
  mainBox:{ 
gap:10,
paddingTop:30
    },
    title: {
  fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    borderColor: myColor.greenColor,
    marginVertical: 30,
    },

})