import { Button, Text, View } from "react-native";

const HomeScreen = ({ navigation }:any) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Home Screen</Text>
    <Button
      title="Go to Details"
      onPress={() => navigation.navigate('Details')}
    />
  </View>
);
export default HomeScreen