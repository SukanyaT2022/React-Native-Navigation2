import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ProductItemComp from '../componentFolder/ProductItemComp'
import FilterTypeCarComp from '../componentFolder/FilterTypeCarComp'
import { screen } from '../../App'
import { ScrollView } from 'react-native-gesture-handler'

const ProductScreen = ({navigation}:any) => {
  return (
    <ScrollView>
    <View style={styles.mainBox}>
      <FilterTypeCarComp/>

      <TouchableOpacity onPress={()=>navigation.navigate(screen.insuranceScreen)}>
     <ProductItemComp/>
     </TouchableOpacity>

     <ProductItemComp/>
    </View>
    </ScrollView>
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
 
