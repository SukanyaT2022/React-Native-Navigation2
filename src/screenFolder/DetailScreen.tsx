import { Button, Image, StyleSheet, Text, View } from "react-native";
import { screen } from "../../App";
import { useRoute } from "@react-navigation/native";
import {carData} from '../constant/carData'

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
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details Screen</Text>
      <Text>{findItemBasedOnId?.type}</Text>
      <Text>{findItemBasedOnId?.brand}</Text>
      <Image style ={styles.imgStyle} source={findItemBasedOnId?.image}/>
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


  })