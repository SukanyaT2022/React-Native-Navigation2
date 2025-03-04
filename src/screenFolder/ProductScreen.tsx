import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProductItemComp from '../componentFolder/ProductItemComp'
import FilterTypeCarComp from '../componentFolder/FilterTypeCarComp'

const ProductScreen = () => {
  return (
    <View style={styles.mainBox}>
      <FilterTypeCarComp/>
     <ProductItemComp/>
     <ProductItemComp/>
    </View>
  )
}

export default ProductScreen

const styles = StyleSheet.create({
  mainBox:{
   marginHorizontal:20,
   gap:20,
   marginTop:20,
  }
})
 
