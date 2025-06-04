import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ImageSource } from 'react-native-vector-icons/Icon';
interface CheckoutCarDateCompProps {
    title: string;
    carType: string;
    carBrand: string;
    image: ImageSource;
    unlimitedmileage?: boolean;
    location: string;
    checkInDate: string;
    checkOutDate: string;
    checkInTime: string;
    checkOutTime: string
    
}
const CheckoutCarDateComp = ({
    title,
    carType,
    carBrand,
    image,
    unlimitedmileage,
    location,
    checkInDate,
    checkOutDate,
    checkInTime,
    checkOutTime,


}:CheckoutCarDateCompProps) => {
  return (
    <View style={styles.main}>
        <View style={styles.wrapTextImg}>    
        <View style={styles.wrapText}>        
      <Text>{title}</Text>
      <Text>{carType}</Text>
      <Text>{carBrand}</Text>
      <Text>{unlimitedmileage ? 'Unlimited Mileage' : 'Limited Mileage'}</Text>
      </View>
          {/* end div textwrap */}
      <View style={styles.wrapImg}>  
    <Image source={image} style={styles.imagestyle}/>
    </View>
    {/* end div imagewrap */}
    {/* <Image source={{uri:image}}/> */}
    </View>
        {/* end div text and imagewrap */}

<View style={styles.wrapLocationDateTime}>
        <Text>Location: {location}</Text>
        <Text>Check In: {checkInDate} at {checkInTime}</Text>
        <Text>Check Out: {checkOutDate} at {checkOutTime}</Text>
        </View>
        {/* end view  location check in out */}
    </View>
  )
}

export default CheckoutCarDateComp

const styles = StyleSheet.create({
main:{
    padding: 10, 
    borderWidth: 1, 
    borderColor: '#ccc', 
    borderRadius: 10, 
    marginBottom: 10
    },
    wrapTextImg:{
flexDirection: 'row',
justifyContent: 'space-between',
    },

    imagestyle:{
        width: 80,
        height:80,
        borderRadius: 10
    },
    wrapText:{
    },
    wrapImg:{
        marginLeft: 10,
    },
    wrapLocationDateTime:{
        marginTop: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
    }


})