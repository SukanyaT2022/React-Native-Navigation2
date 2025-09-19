import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { myColor } from '../constant/color'

const CreditCardComp = () => {
  return (
    <View>
      {/* touchable opcaity is the border around card number */}
     <TouchableOpacity style={styles.opacityStyle}>
      <Text>Card Number</Text>
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
    </TouchableOpacity>
    </View>
  )
}

export default CreditCardComp

const styles = StyleSheet.create({
  opacityStyle:{
    borderWidth:1,
    borderColor:myColor.borderColor,
    borderRadius:8,
    height:50,
    // padding:10,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:10,

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