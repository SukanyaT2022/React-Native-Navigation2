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
import Products from './src/screenFolder/ProductScreen';
import ProductScreen from './src/screenFolder/ProductScreen';
import InsuranceProtectionScreen from './src/screenFolder/InsuranceProtectionScreen';
import ExtraServiceOneMainBoxComp from './src/componentFolder/ExtraServiceOneMainBoxComp';
import ExtraServiceScreen from './src/screenFolder/ExtraServiceScreen';

const Stack = createStackNavigator();
export const screen = {
home:'Home',
details:'Details',
register:'Register',
login:'Login',
confirm:'Confirm',
productscreen: 'ProductScreen',
insuranceScreen: 'InsuranceProtectionScreen',
extraServiceScreen: 'ExtraServiceScreen',
}
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={screen.insuranceScreen}>
      {/* //options={{headerShown:false}} if donot want header on the screen*/}
        <Stack.Screen name={screen.home} component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name={screen.details} component={DetailsScreen} />
        <Stack.Screen name={screen.register} component={RegisterScreen} />
        <Stack.Screen name={screen.login} component={LoginScreen} />
        <Stack.Screen name={screen.confirm} component={ConfirmScreen} />
        <Stack.Screen name={screen.productscreen} component={ProductScreen} />
        <Stack.Screen name={screen.insuranceScreen} component={InsuranceProtectionScreen} />
        <Stack.Screen name={screen.extraServiceScreen} component={ExtraServiceScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;