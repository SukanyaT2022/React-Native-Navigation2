import { Button, Text, View } from "react-native";
const DetailsScreen = ({navigation}:any) => {
    const goBackHomeFunc =()=>{

        
    }
    return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details Screen</Text>
      <Button title="Go back to HomeScreen" onPress={()=>goBackHomeFunc()}/>
    </View>
    )
}
  export default DetailsScreen