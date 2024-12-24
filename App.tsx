import 'react-native-gesture-handler'; // Make sure to import this at the top
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Button } from 'react-native';
import HomeScreen from './src/screenFolder/HomeScreen';
import DetailsScreen from './src/screenFolder/DetailScreen';
import RegisterScreen from './src/screenFolder/RegisterScreen';
import LoginScreen from './src/screenFolder/LoginScreen';
import ConfirmScreen from './src/screenFolder/ConfirmScreen';

const Stack = createStackNavigator();
export const screen = {
home:'Home',
details:'Details',
register:'Register',
login:'Login',
confirm:'Confirm'
}
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={screen.register}>
        <Stack.Screen name={screen.home} component={HomeScreen} />
        <Stack.Screen name={screen.details} component={DetailsScreen} />
        <Stack.Screen name={screen.register} component={RegisterScreen} />
        <Stack.Screen name={screen.login} component={LoginScreen} />
        <Stack.Screen name={screen.confirm} component={ConfirmScreen} />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;