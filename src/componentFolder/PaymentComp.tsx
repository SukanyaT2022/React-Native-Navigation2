import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import InputBox from './InputBox';
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
    <View >
      <Text>PaymentComp</Text>
      <InputBox placeholderAr='Card Number' value={cardNum} onchangeFuncProp={(text)=>{setCardNum(text)}} />

      <InputBox placeholderAr='Card Holder Name' value={paymentProps.cardHolderName}   onchangeFuncProp={()=>{}} />

      <InputBox placeholderAr='Card Number' value={paymentProps.cardNumber}   onchangeFuncProp={()=>{}} />
    </View>
  )
}

export default PaymentComp

const styles = StyleSheet.create({})