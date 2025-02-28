import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

const ProductItemComp = () => {
  return (
    <View>
      <Image 
      source={{ uri: 'https://plus.unsplash.com/premium_photo-1683121313071-14132bf02e1c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmFufGVufDB8fDB8fHww' }} 
      style={styles.mainBoxProductItem} 
    />
      <Text style={styles.title}>Type of Car:</Text>
      <Text style={styles.subtitle}>Brand of Car:</Text>

      {/* icon section */}
      <View >
      <View>
      <Icon name="user" size={30} color="#900" />
</View>
<View>

</View>
      </View>
    </View>
  )
}

export default ProductItemComp

const styles = StyleSheet.create({
    mainBoxProductItem:{

    },
    title:{

    },
    subtitle:{

    },



})