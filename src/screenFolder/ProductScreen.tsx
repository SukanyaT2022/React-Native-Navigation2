import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ProductItemComp from '../componentFolder/ProductItemComp'
import FilterTypeCarComp from '../componentFolder/FilterTypeCarComp'
import { screen } from '../../App'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import {carData} from '../constant/carData'

const ProductScreen = ({navigation}:any) => {
  //step 1
  const [selectedCarType, setSelectedCarType] = React.useState<string>('');
  //step 2
  const [filterdCarTypeArray, setFilteredCarTypeArray] = React.useState<any[]>([]);
  // Our goal is to filter the products by the car type.
  // When we click on the car type, we display just the cars related to that car type.
  
  // First. we have a state that stores the selected car, in this 'selectedCarType' state.
  // Secondly. we will have another state that holds the products or the filtered products.
  // Thirdly, We right a filter method to filtered this products base on the select car type.
  // We use a useEffect hook to re-render this method when ever the selectedCarType state changes.
  
  //if '' show all cars if filter show only filtered car
  //step 3
  // const data = selectedCarType.split("")
  // const 
  const filterProductFunc=() => {
    if (selectedCarType === '') {
      setFilteredCarTypeArray(carData);
    } else {
      const filteredData = carData.filter((item) => item.type.toLowerCase() === selectedCarType.slice(0,-1).toLowerCase());
      //slice(0,-1) is used to remove the last character from the string
      setFilteredCarTypeArray(filteredData);
    }
  }
  //step 4
  React.useEffect(() => {
    filterProductFunc();
  }, [selectedCarType]);


  return (
 <View style={styles.mainBox}>
      <FilterTypeCarComp onPress={(val)=>setSelectedCarType(val)}/>
        
    <FlatList
      data={filterdCarTypeArray}
      keyExtractor={(item) => item.id.toString(

      )}
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
    // create the gap betwen small boc top and bottom vertical
    ItemSeparatorComponent={() => <View style={{height: 20}} />} // Add space between items
      />

    {/* <View style={styles.mainBox}>

  
      <TouchableOpacity onPress={()=>navigation.navigate(screen.insuranceScreen)}>
     <ProductItemComp/>
     </TouchableOpacity>

     <ProductItemComp/>


    </View> */}
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
 
