import { Button, Text, View } from "react-native";
import { screen } from "../../App";
const DetailsScreen = ({navigation}:any) => {
    const goBackHomeFunc =()=>{
      
      // function go back to home back homescreen
navigation.navigate(screen.home)
// home come from apptsx line15
//<Stack.Navigator initialRouteName="Home">
        
    }
    return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details Screen</Text>
      <Button title="Go back to HomeScreen" onPress={()=>goBackHomeFunc()}/>
    </View>
    )
}
  export default DetailsScreen