import { Button, Image, StyleSheet, Text, View } from "react-native";
import { screen } from "../../App";
import { useRoute } from "@react-navigation/native";
import {carData} from '../constant/carData'
import CheckoutCarDateComp from "../componentFolder/CheckoutCarDateComp";
import Checkout2PayNow from "../componentFolder/Checkout2PayNow";

const DetailsScreen = ({navigation}:any) => {
  const route = useRoute();
  const { params } = route;
  const { id } = params || {}; // Extract id from params, default to undefined if not present
  console.log("DetailsScreen id:", id); // Log the id to verify it's being passed correctly
const findItemBasedOnId = carData.find((item) => item.id === id);
// find((item) => item.id === id); method help to find item 
// that match id 1 that sent from product screen
  const goBackHomeFunc =()=>{

    
      // function go back to home back homescreen
navigation.navigate(screen.home)
// home come from apptsx line15
//<Stack.Navigator initialRouteName="Home">
        
    }
    return(
    <View style={styles.mainBox}>
      <Text>Details Screen</Text>
      <Text>{findItemBasedOnId?.type}</Text>
      <Text>{findItemBasedOnId?.brand}</Text>
      <Image style ={styles.imgStyle} source={findItemBasedOnId?.image}/>


<CheckoutCarDateComp 
 title = {"Checkout"}
 carType = {findItemBasedOnId?.type || ""}
 carBrand = {findItemBasedOnId?.brand || ""}
 image = {findItemBasedOnId?.image || ""}
 unlimitedmileage = {true}
 location = {"Bangkok"}
 checkInDate = {"03.10.2025"}
 checkOutDate = {"10.18.2025"}
 checkInTime = {"3 PM"}
 checkOutTime = {"3PM"}


/>

<Checkout2PayNow
title={`Pay Now for ${findItemBasedOnId?.brand || ""}`}
description={`Pay Now for ${findItemBasedOnId?.brand || ""}`}
price={`Pay Now for ${findItemBasedOnId?.brand || ""}`}
selected={true} // Assuming you want to show this option as selected
onSelect = {() => console.log("Pay Now selected")}

/>

      <Button title="Go back to HomeScreen" onPress={()=>goBackHomeFunc()}/>
    </View>
    )
}

  export default DetailsScreen

  const styles = StyleSheet.create({
  imgStyle: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginVertical: 20,
  },
  mainBox: {
    flex: 1,
padding:20,
  },

  })