import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ProductItemComp from '../componentFolder/ProductItemComp'
import FilterTypeCarComp from '../componentFolder/FilterTypeCarComp'
import { screen } from '../../App'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import {carData} from '../constant/carData'

const ProductScreen = ({navigation}:any) => {
  return (
    <ScrollView>
    <FlatList
      data={carData}
      keyExtractor={(item) => item.id}
      renderItem={({item})=>{
        return (
          <ProductItemComp
          carType = {item.type}
          carBrand = {item.brand}
          imageUrl = {item.image}
          pricePerDay ={item.price_per_day}
          totalPricePerWeek = {item.price_per_day * 7}
          capacity = {item.capacity}
          />
        )
      }
    
    
    
    
    
    }
      />

    {/* <View style={styles.mainBox}>

      <FilterTypeCarComp/>

      <TouchableOpacity onPress={()=>navigation.navigate(screen.insuranceScreen)}>
     <ProductItemComp/>
     </TouchableOpacity>

     <ProductItemComp/>


    </View> */}


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
 
